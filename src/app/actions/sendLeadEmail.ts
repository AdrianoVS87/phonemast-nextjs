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
    await resend.emails.send({
      from: "Phone Mast Advice Website <noreply@phonemastadvice.co.uk>",
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

    return { success: true };
  } catch (error) {
    console.error("Failed to send lead email:", error);
    return {
      success: false,
      error: "Failed to send your request. Please call us on 01691 791543.",
    };
  }
}

export async function sendHandbookEmail(data: HandbookFormData): Promise<FormResult> {
  if (data._trap) return { success: true };

  if (!data.name?.trim() || !data.email?.trim()) {
    return { success: false, error: "Please fill in your name and email address." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    await resend.emails.send({
      from: "Phone Mast Advice Website <noreply@phonemastadvice.co.uk>",
      to: "info@phonemastadvice.co.uk",
      replyTo: data.email,
      subject: `Handbook Download Request from ${data.name} — phonemastadvice.co.uk`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1B4F72; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Phone Mast Handbook Download Request</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">phonemastadvice.co.uk/handbook</p>
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
              Please send this person a copy of the Phone Mast Handbook PDF.
            </p>
          </div>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 16px; text-align: center;">
            The Phone Mast Advice Company Ltd — Reg. 13115582
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send handbook email:", error);
    return {
      success: false,
      error: "Failed to send your request. Please call us on 01691 791543.",
    };
  }
}
