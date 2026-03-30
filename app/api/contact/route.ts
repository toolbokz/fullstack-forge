import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
    userConfirmationEmail,
    ownerNotificationEmail,
    ownerAuditEmail,
    userAuditEmail,
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
