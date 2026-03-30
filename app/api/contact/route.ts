import { NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "../../../lib/prisma";
import {
    userConfirmationEmail,
    ownerNotificationEmail,
    ownerAuditEmail,
    userAuditEmail,
    toolFollowUpEmail,
} from "../../../lib/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "zac.pini.777@gmail.com";
const FROM_EMAIL = "Fullstack Forge <onboarding@resend.dev>";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { formName, name, email, businessType, website, url, score, message } = body;

        if (!email || typeof email !== "string") {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        // Save lead to database
        try {
            await prisma.lead.create({
                data: {
                    email,
                    name: name || null,
                    businessType: businessType || null,
                    website: website || url || null,
                    message: message || null,
                    source: formName || "contact",
                    toolUsed: formName?.startsWith("tool-") ? formName.replace("tool-", "").replace("-lead", "") : null,
                },
            });
        } catch (dbErr) {
            console.error("Failed to save lead:", dbErr);
            // Don't block the email flow if DB write fails
        }

        if (formName === "website-audit") {
            // Owner notification
            await resend.emails.send({
                from: FROM_EMAIL,
                to: TO_EMAIL,
                subject: `🔍 Website Audit Submission — ${url || "No URL"}`,
                html: ownerAuditEmail({ email, url, score }),
            });

            // User confirmation with their score
            await resend.emails.send({
                from: FROM_EMAIL,
                to: email,
                subject: "Your Website Audit Results — Fullstack Forge",
                html: userAuditEmail(score ?? 0),
            });
        } else if (formName?.startsWith("tool-")) {
            // Tool-specific flow: owner notification + tool follow-up email
            const toolSlug = formName.replace("tool-", "").replace("-lead", "");
            const toolDisplayName = toolSlug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

            await resend.emails.send({
                from: FROM_EMAIL,
                to: TO_EMAIL,
                subject: `🔧 Tool Lead — ${name || "Unknown"} (${toolDisplayName})`,
                html: ownerNotificationEmail({ formName, name, email, businessType, website, message }),
            });

            await resend.emails.send({
                from: FROM_EMAIL,
                to: email,
                subject: `Your ${toolDisplayName} Results — Fullstack Forge`,
                html: toolFollowUpEmail(name || "", toolDisplayName),
            });
        } else {
            // Owner notification
            await resend.emails.send({
                from: FROM_EMAIL,
                to: TO_EMAIL,
                subject: `📩 New Lead — ${name || "Unknown"} (${formName || "contact"})`,
                html: ownerNotificationEmail({ formName, name, email, businessType, website, message }),
            });

            // User confirmation
            await resend.emails.send({
                from: FROM_EMAIL,
                to: email,
                subject: "Thanks for contacting Fullstack Forge!",
                html: userConfirmationEmail(name || ""),
            });
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Contact API error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
