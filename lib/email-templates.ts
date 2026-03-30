function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const BRAND = {
  dark: "#0b1220",
  accent: "#0b5fff",
  accentDark: "#0948cc",
  white: "#ffffff",
  gray: "#94a3b8",
  lightBg: "#f1f5f9",
  url: "https://fullstack-forge.netlify.app",
};

function wrapper(content: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Fullstack Forge</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.lightBg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.lightBg};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:${BRAND.white};border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,${BRAND.dark},#0d1f3c,${BRAND.accent});padding:40px 32px;text-align:center;">
              <h1 style="margin:0;font-size:28px;font-weight:700;color:${BRAND.white};letter-spacing:0.5px;">Fullstack Forge</h1>
              <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.7);letter-spacing:1px;text-transform:uppercase;">Web Design &amp; Development — NZ</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px 32px;">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:${BRAND.dark};padding:32px;text-align:center;">
              <p style="margin:0 0 8px;font-size:14px;color:${BRAND.gray};">
                <a href="${BRAND.url}" style="color:${BRAND.accent};text-decoration:none;font-weight:600;">fullstack-forge.netlify.app</a>
              </p>
              <p style="margin:0;font-size:12px;color:rgba(148,163,184,0.6);">
                Fullstack Forge &bull; Auckland, New Zealand
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function userConfirmationEmail(name: string) {
  const firstName = escapeHtml((name || "").split(" ")[0] || "there");

  return wrapper(`
    <h2 style="margin:0 0 16px;font-size:22px;color:${BRAND.dark};">Thanks for reaching out, ${firstName}!</h2>
    <p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#475569;">
      We&rsquo;ve received your enquiry and a member of the Fullstack Forge team will be in touch within <strong>24 hours</strong>.
    </p>
    <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#475569;">
      In the meantime, here are a few things you can explore:
    </p>

    <!-- Quick Links -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
      <tr>
        <td style="padding:16px 20px;background-color:${BRAND.lightBg};border-radius:8px;border-left:4px solid ${BRAND.accent};">
          <p style="margin:0 0 6px;font-weight:600;font-size:14px;color:${BRAND.dark};">&#128218; Read our latest insights</p>
          <a href="${BRAND.url}/blog" style="font-size:14px;color:${BRAND.accent};text-decoration:none;">Visit the Blog &rarr;</a>
        </td>
      </tr>
      <tr><td style="height:12px;"></td></tr>
      <tr>
        <td style="padding:16px 20px;background-color:${BRAND.lightBg};border-radius:8px;border-left:4px solid ${BRAND.accent};">
          <p style="margin:0 0 6px;font-weight:600;font-size:14px;color:${BRAND.dark};">&#128270; Free Website Audit</p>
          <a href="${BRAND.url}/#audit" style="font-size:14px;color:${BRAND.accent};text-decoration:none;">Check your website score &rarr;</a>
        </td>
      </tr>
      <tr><td style="height:12px;"></td></tr>
      <tr>
        <td style="padding:16px 20px;background-color:${BRAND.lightBg};border-radius:8px;border-left:4px solid ${BRAND.accent};">
          <p style="margin:0 0 6px;font-weight:600;font-size:14px;color:${BRAND.dark};">&#128640; See our work</p>
          <a href="${BRAND.url}/#portfolio" style="font-size:14px;color:${BRAND.accent};text-decoration:none;">View Portfolio &rarr;</a>
        </td>
      </tr>
    </table>

    <p style="margin:0;font-size:16px;line-height:1.6;color:#475569;">
      Cheers,<br/>
      <strong style="color:${BRAND.dark};">The Fullstack Forge Team</strong>
    </p>
  `);
}

export function ownerNotificationEmail(data: {
  formName: string;
  name?: string;
  email: string;
  businessType?: string;
  website?: string;
  message?: string;
}) {
  const rows = [
    ["Form", data.formName || "contact"],
    ["Name", data.name || "N/A"],
    ["Email", data.email],
    ["Business Type", data.businessType || "N/A"],
    ["Website", data.website || "N/A"],
  ];

  const messageBlock = data.message
    ? `<div style="margin-top:20px;padding:16px 20px;background-color:${BRAND.lightBg};border-radius:8px;border-left:4px solid ${BRAND.accent};">
        <p style="margin:0 0 6px;font-size:13px;font-weight:600;color:${BRAND.dark};text-transform:uppercase;letter-spacing:0.5px;">Project Details</p>
        <p style="margin:0;font-size:14px;line-height:1.6;color:#475569;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
      </div>`
    : "";

  const tableRows = rows
    .map(
      ([label, value], i) => `
      <tr style="background-color:${i % 2 === 0 ? BRAND.lightBg : BRAND.white};">
        <td style="padding:12px 16px;font-weight:600;font-size:14px;color:${BRAND.dark};border-bottom:1px solid #e2e8f0;width:140px;">${label}</td>
        <td style="padding:12px 16px;font-size:14px;color:#475569;border-bottom:1px solid #e2e8f0;">${escapeHtml(value)}</td>
      </tr>`
    )
    .join("");

  return wrapper(`
    <h2 style="margin:0 0 8px;font-size:22px;color:${BRAND.dark};">New Lead Received</h2>
    <p style="margin:0 0 24px;font-size:14px;color:${BRAND.gray};">
      Someone just submitted the <strong>${escapeHtml(data.formName || "contact")}</strong> form.
    </p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:8px;overflow:hidden;border:1px solid #e2e8f0;margin-bottom:28px;">
      ${tableRows}
    </table>

    ${messageBlock}

    <table role="presentation" cellpadding="0" cellspacing="0">
      <tr>
        <td style="background-color:${BRAND.accent};border-radius:8px;padding:14px 28px;text-align:center;">
          <a href="mailto:${escapeHtml(data.email)}" style="font-size:15px;font-weight:600;color:${BRAND.white};text-decoration:none;">Reply to ${escapeHtml(data.name || "Lead")}</a>
        </td>
      </tr>
    </table>
  `);
}

export function ownerAuditEmail(data: {
  email: string;
  url?: string;
  score?: number;
}) {
  const rows = [
    ["Email", data.email],
    ["Website URL", data.url || "N/A"],
    ["Audit Score", String(data.score ?? "N/A")],
  ];

  const tableRows = rows
    .map(
      ([label, value], i) => `
      <tr style="background-color:${i % 2 === 0 ? BRAND.lightBg : BRAND.white};">
        <td style="padding:12px 16px;font-weight:600;font-size:14px;color:${BRAND.dark};border-bottom:1px solid #e2e8f0;width:140px;">${label}</td>
        <td style="padding:12px 16px;font-size:14px;color:#475569;border-bottom:1px solid #e2e8f0;">${escapeHtml(value)}</td>
      </tr>`
    )
    .join("");

  return wrapper(`
    <h2 style="margin:0 0 8px;font-size:22px;color:${BRAND.dark};">Website Audit Submission</h2>
    <p style="margin:0 0 24px;font-size:14px;color:${BRAND.gray};">
      Someone just ran a website audit.
    </p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:8px;overflow:hidden;border:1px solid #e2e8f0;margin-bottom:28px;">
      ${tableRows}
    </table>

    <table role="presentation" cellpadding="0" cellspacing="0">
      <tr>
        <td style="background-color:${BRAND.accent};border-radius:8px;padding:14px 28px;text-align:center;">
          <a href="mailto:${escapeHtml(data.email)}" style="font-size:15px;font-weight:600;color:${BRAND.white};text-decoration:none;">Reply to Lead</a>
        </td>
      </tr>
    </table>
  `);
}

export function userAuditEmail(score: number) {
  const label =
    score >= 70 ? "Good" : score >= 40 ? "Needs Improvement" : "Critical";
  const color =
    score >= 70 ? "#22c55e" : score >= 40 ? "#eab308" : "#ef4444";

  return wrapper(`
    <h2 style="margin:0 0 16px;font-size:22px;color:${BRAND.dark};">Your Website Audit Results</h2>
    <p style="margin:0 0 28px;font-size:16px;line-height:1.6;color:#475569;">
      Thanks for using the Fullstack Forge website audit tool. Here&rsquo;s a quick summary of your results:
    </p>

    <!-- Score Badge -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0">
            <tr>
              <td style="width:100px;height:100px;border-radius:50%;background-color:${color}20;text-align:center;vertical-align:middle;">
                <span style="font-size:36px;font-weight:800;color:${color};">${score}</span>
              </td>
            </tr>
            <tr>
              <td style="text-align:center;padding-top:8px;">
                <span style="font-size:14px;font-weight:600;color:${color};">${label}</span>
                <span style="font-size:14px;color:${BRAND.gray};"> / 100</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#475569;">
      Want to know exactly what&rsquo;s holding your site back and how to fix it? Our team can provide a <strong>detailed analysis</strong> and a clear plan to improve your online presence.
    </p>

    <!-- CTA Button -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0">
            <tr>
              <td style="background-color:${BRAND.accent};border-radius:8px;padding:16px 36px;text-align:center;">
                <a href="${BRAND.url}/#contact" style="font-size:16px;font-weight:700;color:${BRAND.white};text-decoration:none;">Get a Free Consultation</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <p style="margin:0;font-size:16px;line-height:1.6;color:#475569;">
      Cheers,<br/>
      <strong style="color:${BRAND.dark};">The Fullstack Forge Team</strong>
    </p>
  `);
}

export function toolFollowUpEmail(name: string, toolName: string) {
  const firstName = escapeHtml((name || "").split(" ")[0] || "there");

  return wrapper(`
    <h2 style="margin:0 0 16px;font-size:22px;color:${BRAND.dark};">Thanks for using our ${escapeHtml(toolName)}, ${firstName}!</h2>
    <p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#475569;">
      You&rsquo;ve taken the first step toward understanding your website&rsquo;s performance. Most business owners stop here &mdash; but the ones who grow are the ones who <strong>take action</strong>.
    </p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
      <tr>
        <td style="padding:20px;background-color:${BRAND.lightBg};border-radius:8px;border-left:4px solid ${BRAND.accent};">
          <p style="margin:0 0 6px;font-weight:700;font-size:15px;color:${BRAND.dark};">Want us to fix what we found?</p>
          <p style="margin:0;font-size:14px;line-height:1.6;color:#475569;">
            Our team can review your results and build a clear, actionable plan &mdash; no jargon, no pressure.
          </p>
        </td>
      </tr>
    </table>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0">
            <tr>
              <td style="background-color:${BRAND.accent};border-radius:8px;padding:16px 36px;text-align:center;">
                <a href="${BRAND.url}/contact" style="font-size:16px;font-weight:700;color:${BRAND.white};text-decoration:none;">Book a Free Consultation</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
      <tr>
        <td style="padding:16px 20px;background-color:${BRAND.lightBg};border-radius:8px;border-left:4px solid ${BRAND.accent};">
          <p style="margin:0 0 6px;font-weight:600;font-size:14px;color:${BRAND.dark};">&#128218; More free tools</p>
          <a href="${BRAND.url}/tools" style="font-size:14px;color:${BRAND.accent};text-decoration:none;">Try our other free tools &rarr;</a>
        </td>
      </tr>
      <tr><td style="height:12px;"></td></tr>
      <tr>
        <td style="padding:16px 20px;background-color:${BRAND.lightBg};border-radius:8px;border-left:4px solid ${BRAND.accent};">
          <p style="margin:0 0 6px;font-weight:600;font-size:14px;color:${BRAND.dark};">&#128640; Read our blog</p>
          <a href="${BRAND.url}/blog" style="font-size:14px;color:${BRAND.accent};text-decoration:none;">Tips to grow your business online &rarr;</a>
        </td>
      </tr>
    </table>

    <p style="margin:0;font-size:16px;line-height:1.6;color:#475569;">
      Cheers,<br/>
      <strong style="color:${BRAND.dark};">The Fullstack Forge Team</strong>
    </p>
  `);
}
