"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  // Honeypot — must be empty
  _trap?: string;
}

export interface FormResult {
  success: boolean;
  error?: string;
  id?: string;
}

export async function sendContactEmail(
  data: ContactFormData
): Promise<FormResult> {
  // Honeypot check — bots fill this
  if (data._trap) {
    return { success: true }; // silently succeed
  }

  // Basic validation
  if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    const { data: sent, error } = await resend.emails.send({
      from: "Phone Mast Advice Website <noreply@phonemastadvice.co.uk>",
      to: "info@phonemastadvice.co.uk",
      replyTo: data.email,
      subject: `New enquiry from ${data.name} — phonemastadvice.co.uk`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1B4F72; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px;">New Website Enquiry</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">phonemastadvice.co.uk contact form</p>
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
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <h3 style="color: #1a1a2e; margin: 0 0 8px; font-size: 16px;">Message</h3>
            <p style="color: #374151; white-space: pre-wrap; margin: 0; font-size: 15px; line-height: 1.6;">${escapeHtml(data.message)}</p>
          </div>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 16px; text-align: center;">
            The Phone Mast Advice Company Ltd — Reg. 13115582
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error (sendContactEmail):", JSON.stringify(error));
      return {
        success: false,
        error: "Failed to send your message. Please call us on 01691 791543.",
      };
    }

    console.log("Email sent (sendContactEmail), Resend ID:", sent?.id);
    return { success: true, id: sent?.id };
  } catch (error) {
    console.error("Exception in sendContactEmail:", error);
    return {
      success: false,
      error: "Failed to send your message. Please call us on 01691 791543.",
    };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
