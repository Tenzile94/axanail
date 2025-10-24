// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Ensure Node runtime (Nodemailer won't work on Edge)
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, address, product, message } = body ?? {}

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 })
    }

    // Read and trim envs to avoid trailing spaces/newlines causing 535
    const EMAIL_HOST = process.env.EMAIL_HOST?.trim()
    const EMAIL_PORT = Number(process.env.EMAIL_PORT || 587)
    const EMAIL_USER = process.env.EMAIL_USER?.trim()        // full mailbox address
    const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD ?? ''  // raw password, no quotes
    const EMAIL_FROM = (process.env.EMAIL_FROM || EMAIL_USER)?.trim()
    const EMAIL_TO = (process.env.EMAIL_TO || 'contact@axanail.com')?.trim()

    if (!EMAIL_HOST || !EMAIL_USER || !EMAIL_PASSWORD) {
      console.error('Missing SMTP config', { hasHost: !!EMAIL_HOST, hasUser: !!EMAIL_USER, hasPass: !!EMAIL_PASSWORD })
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,                 // For M365: 'smtp.office365.com'
      port: EMAIL_PORT,                 // For M365: 587
      secure: EMAIL_PORT === 465,       // 587 -> STARTTLS (secure: false)
      requireTLS: EMAIL_PORT === 587,   // force STARTTLS upgrade on 587
      auth: {
        user: EMAIL_USER,               // must be full mailbox (you@domain.com)
        pass: EMAIL_PASSWORD,
      },
      tls: {
        minVersion: 'TLSv1.2',
        // keep this true in prod; if testing self-signed, you can set false temporarily
        rejectUnauthorized: process.env.NODE_ENV === 'production',
      },
    })

    // --- Verify Connection ---
    try {
      await transporter.verify()
      console.log('✅ SMTP connection verified successfully.')
    } catch (verifyError: any) {
      console.error('❌ SMTP verification failed:', {
        message: verifyError.message,
        code: verifyError.code,
        command: verifyError.command,
      })
      return NextResponse.json(
        { 
          error: 'Email server connection failed. Please try again later or contact us directly.',
          details: `SMTP Error: ${verifyError.message}`
        },
        { status: 500 }
      )
    }

    // --- Email Content ---
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { 
              font-family: 'Montserrat', Arial, sans-serif; 
              background: #000000; 
              padding: 20px; 
              margin: 0;
            }
            .container { 
              background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
              border: 2px solid #d4af37;
              border-radius: 20px; 
              padding: 40px; 
              max-width: 600px;
              margin: 0 auto;
              box-shadow: 0 10px 40px rgba(212, 175, 55, 0.2);
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
              padding-bottom: 20px;
              border-bottom: 2px solid #d4af37;
            }
            h1 { 
              background: linear-gradient(135deg, #d4af37 0%, #f0d060 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              font-size: 32px;
              margin: 0;
              font-weight: bold;
              letter-spacing: 2px;
            }
            .subtitle {
              color: #888;
              font-size: 14px;
              margin-top: 10px;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            .field { 
              margin-bottom: 20px;
              background: #0a0a0a;
              border: 1px solid #333;
              border-radius: 10px;
              padding: 15px;
            }
            .label { 
              font-weight: bold; 
              color: #d4af37;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 8px;
              display: block;
            }
            .value { 
              color: #ffffff;
              padding: 10px;
              border-radius: 6px;
              line-height: 1.6;
            }
            .message { 
              white-space: pre-wrap;
              line-height: 1.8;
            }
            .footer { 
              font-size: 11px; 
              text-align: center; 
              color: #666; 
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #333;
            }
            .highlight {
              background: linear-gradient(135deg, #d4af37 0%, #f0d060 100%);
              color: #000;
              padding: 3px 8px;
              border-radius: 4px;
              font-weight: bold;
              font-size: 11px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>💎 AXA PROFESSIONAL</h1>
              <div class="subtitle">New Contact Form Submission</div>
            </div>
            
            <div class="field">
              <div class="label">👤 Full Name</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 Email Address</div>
              <div class="value"><a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a></div>
            </div>
            
            ${phone ? `
            <div class="field">
              <div class="label">📱 Phone Number</div>
              <div class="value">${phone}</div>
            </div>
            ` : ''}
            
            ${address ? `
            <div class="field">
              <div class="label">📍 Address</div>
              <div class="value">${address}</div>
            </div>
            ` : ''}
            
            ${product ? `
            <div class="field">
              <div class="label">💅 Product Interest</div>
              <div class="value"><span class="highlight">${product}</span></div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">💬 Message</div>
              <div class="value message">${message}</div>
            </div>
            
            <div class="footer">
              📅 Received on ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
              <br />
              <br />
              <strong style="color: #d4af37;">AXA Professional Gel Systems</strong>
              <br />
              <a href="mailto:contact@axanail.com" style="color: #666;">contact@axanail.com</a>
            </div>
          </div>
        </body>
      </html>
    `

    // Plain text version for email clients that don't support HTML
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
    `

    const mailOptions = {
      from: EMAIL_FROM || EMAIL_USER,
      to: EMAIL_TO || 'contact@axanail.com',
      replyTo: email, // Allow direct reply to customer
      subject: `🔔 New Contact: ${product || 'Inquiry'} - ${name}`,
      html,
      text: textContent,
    }

    console.log('📤 Sending email to:', mailOptions.to)

    // --- Send Email ---
    const info = await transporter.sendMail(mailOptions)
    console.log('✅ Email sent successfully:', {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
    })

    return NextResponse.json(
      { 
        message: 'Email sent successfully!', 
        messageId: info.messageId,
        success: true
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('❌ Email send error:', {
      message: error.message,
      code: error.code,
      stack: error.stack,
    })
    
    return NextResponse.json(
      {
        error: 'Failed to send email. Please try again or contact us directly at contact@axanail.com',
        details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      },
      { status: 500 }
    )
  }
}
