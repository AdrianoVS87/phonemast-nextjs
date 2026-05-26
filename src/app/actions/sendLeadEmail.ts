"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  operator: string;
  currentRent: string;
  enquiryType?: string;
  message: string;
  formType: "lease-check" | "rent-estimate";
  _trap?: string;
}

export interface HandbookFormData {
  name: string;
  email: string;
  phone: string;
  _trap?: string;
}

export interface FormResult {
  success: boolean;
  error?: string;
  id?: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendLeadEmail(data: LeadFormData): Promise<FormResult> {
  if (data._trap) return { success: true };

  if (!data.name?.trim() || !data.email?.trim()) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const formTitle =
    data.formType === "lease-check" ? "Free Lease Check Request" : "Free Rent Estimate Request";

  const enquiryTypeRow =
    data.formType === "lease-check" && data.enquiryType
      ? `<tr>
          <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #6b7280; font-size: 14px;">Enquiry Type</td>
          <td style="padding: 8px 0; color: #1a1a2e;">${escapeHtml(data.enquiryType)}</td>
        </tr>`
      : "";

  try {
    const { data: sent, error } = await resend.emails.send({
      from: "The Phone Mast Advice Company <enquiries@send.phonemastadvice.co.uk>",
      to: "info@phonemastadvice.co.uk",
      replyTo: data.email,
      subject: `${formTitle} from ${data.name} — phonemastadvice.co.uk`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1B4F72; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px;">${formTitle}</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">phonemastadvice.co.uk</p>
          </div>
          <div style="background: #f9f8f5; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #6b7280; font-size: 14px;">Name</td>
                <td style="padding: 8px 0; color: #1a1a2e;">${escapeHtml(data.name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280; font-size: 14px;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color: #1B4F72;">${escapeHtml(data.email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280; font-size: 14px;">Phone</td>
                <td style="padding: 8px 0; color: #1a1a2e;">${escapeHtml(data.phone || "Not provided")}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280; font-size: 14px;">Property Address</td>
                <td style="padding: 8px 0; color: #1a1a2e;">${escapeHtml(data.address || "Not provided")}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280; font-size: 14px;">Operator</td>
                <td style="padding: 8px 0; color: #1a1a2e;">${escapeHtml(data.operator || "Not specified")}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280; font-size: 14px;">Current Rent</td>
                <td style="padding: 8px 0; color: #1a1a2e;">${escapeHtml(data.currentRent || "Not provided")}</td>
              </tr>
              ${enquiryTypeRow}
            </table>
            ${
              data.message
                ? `<hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
                   <h3 style="color: #1a1a2e; margin: 0 0 8px; font-size: 16px;">Message</h3>
                   <p style="color: #374151; white-space: pre-wrap; margin: 0; font-size: 15px; line-height: 1.6;">${escapeHtml(data.message)}</p>`
                : ""
            }
          </div>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 16px; text-align: center;">
            The Phone Mast Advice Company Ltd — Reg. 13115582
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error (sendLeadEmail):", JSON.stringify(error));
      return {
        success: false,
        error: "Failed to send your request. Please call us on 01691 791543.",
      };
    }

    console.log("Email sent (sendLeadEmail), Resend ID:", sent?.id);
    return { success: true, id: sent?.id };
  } catch (error) {
    console.error("Exception in sendLeadEmail:", error);
    return {
      success: false,
      error: "Failed to send your request. Please call us on 01691 791543.",
    };
  }
}

const HANDBOOK_DOWNLOAD_URL =
  "https://www.phonemastadvice.co.uk/handbook/phone-mast-handbook-v2-may-2026.pdf";
const HANDBOOK_VERSION = "Version 2 — May 2026";

function handbookNotificationHtml(data: HandbookFormData, source: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1B4F72; padding: 24px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Phone Mast Handbook Download — New Lead</h1>
        <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">${escapeHtml(source)}</p>
      </div>
      <div style="background: #f9f8f5; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 100px; color: #6b7280; font-size: 14px;">Name</td>
            <td style="padding: 8px 0; color: #1a1a2e;">${escapeHtml(data.name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #6b7280; font-size: 14px;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color: #1B4F72;">${escapeHtml(data.email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #6b7280; font-size: 14px;">Phone</td>
            <td style="padding: 8px 0; color: #1a1a2e;">${escapeHtml(data.phone || "Not provided")}</td>
          </tr>
        </table>
        <p style="color: #374151; margin-top: 16px; font-size: 14px; line-height: 1.6;">
          The handbook download link has already been sent to this person automatically. Use this notification to follow up by phone if appropriate.
        </p>
      </div>
      <p style="color: #9ca3af; font-size: 12px; margin-top: 16px; text-align: center;">
        The Phone Mast Advice Company Ltd — Reg. 13115582
      </p>
    </div>
  `;
}

function handbookDeliveryHtml(name: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a2e;">
      <div style="background: #1B4F72; padding: 32px 24px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="color: #ffffff; margin: 0 0 6px; font-size: 22px;">Your Phone Mast Handbook is Ready</h1>
        <p style="color: rgba(255,255,255,0.85); margin: 0; font-size: 14px;">${escapeHtml(HANDBOOK_VERSION)}</p>
      </div>
      <div style="background: #ffffff; padding: 32px 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <p style="font-size: 16px; line-height: 1.65; margin: 0 0 16px;">Hi ${escapeHtml(name)},</p>
        <p style="font-size: 16px; line-height: 1.65; margin: 0 0 16px;">
          Thank you for requesting <strong>The Ultimate Phone Mast Landlord's Handbook</strong>. As promised, here is your free copy — a comprehensive guide for UK landlords, fully updated in May 2026 to reflect the latest legislation and case law.
        </p>
        <p style="text-align: center; margin: 28px 0;">
          <a href="${HANDBOOK_DOWNLOAD_URL}"
             style="display: inline-block; background: #a4ca62; color: #1a1a2e; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 16px;">
            Download Your Handbook (PDF)
          </a>
        </p>
        <p style="font-size: 14px; line-height: 1.6; color: #4b5563; margin: 0 0 16px;">
          If the button doesn't work, copy and paste this link into your browser:<br/>
          <a href="${HANDBOOK_DOWNLOAD_URL}" style="color: #1B4F72; word-break: break-all;">${HANDBOOK_DOWNLOAD_URL}</a>
        </p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        <p style="font-size: 15px; line-height: 1.65; margin: 0 0 12px;">
          <strong>What's inside this edition:</strong>
        </p>
        <ul style="font-size: 14px; line-height: 1.65; color: #374151; padding-left: 20px; margin: 0 0 16px;">
          <li>The Electronic Communications Code and the PSTI Act 2022</li>
          <li>The landmark <em>Vache Farm</em> Upper Tribunal decision (July 2024) and what it means for rural rents</li>
          <li>The 7 April 2026 changes to LTA 1954 renewals</li>
          <li>Recent case law from the Upper Tribunal and Court of Appeal</li>
          <li>Best practice for lease drafting, dispute resolution, and renewal</li>
        </ul>
        <p style="font-size: 15px; line-height: 1.65; margin: 16px 0 0;">
          If you have any questions about your phone mast lease, rent, or renewal, our specialist surveying team would be glad to help. Just reply to this email or call us on
          <a href="tel:01691791543" style="color: #1B4F72; font-weight: 600;">01691 791543</a>.
        </p>
        <p style="font-size: 15px; line-height: 1.65; margin: 12px 0 0;">
          Kind regards,<br/>
          <strong>The Phone Mast Advice Company</strong>
        </p>
      </div>
      <p style="color: #9ca3af; font-size: 12px; margin-top: 16px; text-align: center;">
        The Phone Mast Advice Company Ltd — Company No. 13115582 — phonemastadvice.co.uk<br/>
        You received this email because you requested the handbook at phonemastadvice.co.uk.
      </p>
    </div>
  `;
}

function handbookDeliveryText(name: string): string {
  return `Hi ${name},

Thank you for requesting The Ultimate Phone Mast Landlord's Handbook (${HANDBOOK_VERSION}).

Download your free copy here:
${HANDBOOK_DOWNLOAD_URL}

This second edition is fully updated for the PSTI Act 2022, the July 2024 Vache Farm Upper Tribunal decision, and the 7 April 2026 changes to LTA 1954 renewals.

If you have any questions about your phone mast lease, rent, or renewal, reply to this email or call us on 01691 791543.

Kind regards,
The Phone Mast Advice Company
phonemastadvice.co.uk`;
}

export async function sendHandbookEmail(
  data: HandbookFormData,
  source: string = "/handbook",
): Promise<FormResult> {
  if (data._trap) return { success: true };

  if (!data.name?.trim() || !data.email?.trim()) {
    return { success: false, error: "Please fill in your name and email address." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const FROM = "The Phone Mast Advice Company <enquiries@send.phonemastadvice.co.uk>";

  // 1) Auto-deliver the PDF download link to the user. Failure here is the one
  //    that actually matters for them — surface it so the form shows an error.
  let userMailId: string | undefined;
  try {
    const { data: sent, error } = await resend.emails.send({
      from: FROM,
      to: data.email,
      replyTo: "info@phonemastadvice.co.uk",
      subject: `Your Phone Mast Handbook — ${HANDBOOK_VERSION}`,
      html: handbookDeliveryHtml(data.name),
      text: handbookDeliveryText(data.name),
    });
    if (error) {
      console.error("Resend API error (handbook delivery to user):", JSON.stringify(error));
      return {
        success: false,
        error: "We couldn't send the handbook to your email. Please check the address or call us on 01691 791543.",
      };
    }
    userMailId = sent?.id;
    console.log("Handbook delivered to user, Resend ID:", sent?.id);
  } catch (error) {
    console.error("Exception delivering handbook to user:", error);
    return {
      success: false,
      error: "Failed to send the handbook. Please call us on 01691 791543.",
    };
  }

  // 2) Notify Matt's inbox. If this fails the user already has the PDF, so we
  //    log but don't fail the form — Matt can still see the lead in Resend logs.
  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: "info@phonemastadvice.co.uk",
      replyTo: data.email,
      subject: `Handbook download — new lead: ${data.name}`,
      html: handbookNotificationHtml(data, source),
    });
    if (error) {
      console.error("Resend API error (handbook notification to Matt):", JSON.stringify(error));
    }
  } catch (error) {
    console.error("Exception notifying Matt of handbook lead:", error);
  }

  return { success: true, id: userMailId };
}
