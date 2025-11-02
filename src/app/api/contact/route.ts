import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  return NextResponse.json({ success: true, message: "API is working!" });
}

export async function POST(req: Request) {
  try {
    console.log("📨 API route reached, processing request...");

    const body = await req.json().catch(() => null);
    if (!body) {
      console.error("❌ Invalid JSON input received.");
      return NextResponse.json(
        { success: false, message: "Invalid JSON input" },
        { status: 400 }
      );
    }

    console.log("✅ Received form data:", body);

    const { name, email, phone, address, product, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate Resend API key
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("❌ RESEND_API_KEY is not set in environment variables");
      return NextResponse.json(
        { success: false, message: "Email service not configured" },
        { status: 500 }
      );
    }

    console.log("📨 Preparing to send email via Resend...");

    // Initialize Resend
    const resend = new Resend(resendApiKey);

    console.log("✅ Resend client initialized, sending email...");

    // Create HTML email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background: #000; color: #fff; padding: 20px; }
            .container { background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%); border: 2px solid #d4af37; border-radius: 20px; padding: 40px; max-width: 600px; margin: 0 auto; }
            .header { text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #d4af37; }
            h1 { background: linear-gradient(135deg, #d4af37 0%, #f0d060 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 32px; margin: 0; }
            .field { margin-bottom: 20px; background: #0a0a0a; border: 1px solid #333; border-radius: 10px; padding: 15px; }
            .label { font-weight: bold; color: #d4af37; font-size: 12px; text-transform: uppercase; margin-bottom: 8px; }
            .value { color: #ffffff; padding: 10px; border-radius: 6px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>💎 AXA PROFESSIONAL</h1>
              <div style="color: #888; font-size: 14px; margin-top: 10px; text-transform: uppercase;">New Contact Form Submission</div>
            </div>
            
            <div class="field">
              <div class="label">👤 Full Name</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 Email Address</div>
              <div class="value"><a href="mailto:${email}" style="color: #d4af37;">${email}</a></div>
            </div>
            
            ${phone ? `<div class="field"><div class="label">📱 Phone Number</div><div class="value">${phone}</div></div>` : ''}
            
            ${address ? `<div class="field"><div class="label">📍 Address</div><div class="value">${address}</div></div>` : ''}
            
            ${product ? `<div class="field"><div class="label">💅 Product Interest</div><div class="value" style="background: linear-gradient(135deg, #d4af37 0%, #f0d060 100%); color: #000; padding: 3px 8px; border-radius: 4px; font-weight: bold;">${product}</div></div>` : ''}
            
            <div class="field">
              <div class="label">💬 Message</div>
              <div class="value" style="white-space: pre-wrap; line-height: 1.8;">${message}</div>
            </div>
            
            <div style="font-size: 11px; text-align: center; color: #666; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
              📅 Received on ${new Date().toLocaleString()}<br><br>
              <strong style="color: #d4af37;">AXA Professional Gel Systems</strong><br>
              <a href="mailto:contact@axanail.com" style="color: #666;">contact@axanail.com</a>
            </div>
          </div>
        </body>
      </html>
    `;

    // Plain text version
    const textContent = `
═══════════════════════════════════════
💎 AXA PROFESSIONAL - New Contact Form
═══════════════════════════════════════

👤 NAME: ${name}
📧 EMAIL: ${email}
${phone ? `📱 PHONE: ${phone}` : ''}
${address ? `📍 ADDRESS: ${address}` : ''}
${product ? `💅 PRODUCT INTEREST: ${product}` : ''}

💬 MESSAGE:
${message}

═══════════════════════════════════════
📅 Received: ${new Date().toLocaleString()}
═══════════════════════════════════════
    `;

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to: process.env.EMAIL_TO || "contact@axanail.com",
      replyTo: email,
      subject: `🔔 New Contact: ${product || 'Inquiry'} - ${name}`,
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error("❌ Resend error:", error);
      return NextResponse.json(
        {
          success: false,
          message: `Failed to send email: ${error.message || "Unknown error"}`,
        },
        { status: 500 }
      );
    }

    console.log("📤 Email sent successfully via Resend! ID:", data?.id);

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("❌ Resend error:", error);
    return NextResponse.json(
      {
        success: false,
        message: `Failed to send email: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      },
      { status: 500 }
    );
  }
}