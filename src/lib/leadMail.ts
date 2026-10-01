import { Resend } from "resend";

// Created on first use: route handlers are evaluated at build time, when the key may be absent.
let client: Resend | undefined;
export function getResend(): Resend {
  client ??= new Resend(process.env.RESEND_API_KEY);
  return client;
}

export const LEAD_FROM = "The Phone Mast Advice Company <enquiries@send.phonemastadvice.co.uk>";
export const LEAD_INBOX = "info@phonemastadvice.co.uk";

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Confirms to the person who enquired that their message arrived, with the phone
 * number in case it is urgent. Best effort: a failure here must never fail the form.
 */
export async function sendAcknowledgement(name: string, email: string): Promise<void> {
  const first = name.trim().split(/\s+/)[0] || "there";
  const text = `Hi ${first},

Thank you for contacting The Phone Mast Advice Company. This is a short note to confirm that your enquiry has reached us.

One of our team will come back to you within one working day. If your matter is urgent, for example you have received a notice with a deadline, please call us on 01691 791543.

In the meantime, please do not sign or agree anything with the operator before taking specialist advice.

Kind regards,
The Phone Mast Advice Company
01691 791543
phonemastadvice.co.uk`;

  try {
    const { error } = await getResend().emails.send({
      from: LEAD_FROM,
      to: email,
      replyTo: LEAD_INBOX,
      subject: "We have received your enquiry | The Phone Mast Advice Company",
      text,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a2e;">
          <div style="background: #1B4F72; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px;">We have received your enquiry</h1>
          </div>
          <div style="background: #ffffff; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="font-size: 16px; line-height: 1.65; margin: 0 0 16px;">Hi ${escapeHtml(first)},</p>
            <p style="font-size: 16px; line-height: 1.65; margin: 0 0 16px;">
              Thank you for contacting The Phone Mast Advice Company. This is a short note to confirm that your enquiry has reached us.
            </p>
            <p style="font-size: 16px; line-height: 1.65; margin: 0 0 16px;">
              One of our team will come back to you within one working day. If your matter is urgent, for example you have received a notice with a deadline, please call us on
              <a href="tel:01691791543" style="color: #1B4F72; font-weight: 600;">01691 791543</a>.
            </p>
            <p style="font-size: 16px; line-height: 1.65; margin: 0 0 16px;">
              In the meantime, please do not sign or agree anything with the operator before taking specialist advice.
            </p>
            <p style="font-size: 16px; line-height: 1.65; margin: 0;">
              Kind regards,<br/>
              <strong>The Phone Mast Advice Company</strong>
            </p>
          </div>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 16px; text-align: center;">
            The Phone Mast Advice Company Ltd, Company No. 13115582. You received this email because you sent us an enquiry.
          </p>
        </div>
      `,
    });
    if (error) console.error("Resend API error (acknowledgement):", JSON.stringify(error));
  } catch (error) {
    console.error("Exception sending acknowledgement:", error);
  }
}

/**
 * Delivery heartbeat carrying no personal data. It lets enquiry volume be counted
 * independently of the main inbox, so a silent delivery failure shows up as a gap.
 * Disabled unless LEAD_MONITOR_EMAIL is set.
 */
export async function sendMonitorPing(kind: string, delivered: boolean, resendId?: string): Promise<void> {
  const to = process.env.LEAD_MONITOR_EMAIL;
  if (!to) return;
  const when = new Date().toISOString();
  try {
    const { error } = await getResend().emails.send({
      from: LEAD_FROM,
      to,
      subject: delivered
        ? `[PMA lead monitor] ${kind} received`
        : `[PMA lead monitor] FAILED to deliver: ${kind}`,
      text: `${kind}\nTime (UTC): ${when}\nNotification to ${LEAD_INBOX}: ${delivered ? "accepted by Resend" : "FAILED"}\nResend ID: ${resendId ?? "none"}\n\nNo personal data is included in this message.`,
    });
    if (error) console.error("Resend API error (monitor ping):", JSON.stringify(error));
  } catch (error) {
    console.error("Exception sending monitor ping:", error);
  }
}
