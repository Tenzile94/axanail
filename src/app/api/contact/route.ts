import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // --- Validation ---
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      )
    }

    // --- Environment Check ---
    const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD, EMAIL_FROM, EMAIL_TO } = process.env
    if (!EMAIL_HOST || !EMAIL_USER || !EMAIL_PASSWORD) {
      console.error('Missing email configuration.')
      return NextResponse.json(
        { error: 'Email service not configured properly.' },
        { status: 500 }
      )
    }

    const port = parseInt(EMAIL_PORT || '587')

    // --- Create Transporter ---
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port,
      secure: port === 465 ? true : false, // true if SSL (465), false if TLS (587)
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
      tls: process.env.NODE_ENV === 'development'
        ? { rejectUnauthorized: false }
        : undefined,
    })

    // --- Verify Connection ---
    try {
      await transporter.verify()
      console.log('✅ SMTP connection verified successfully.')
    } catch (verifyError) {
      console.error('❌ SMTP verification failed:', verifyError)
      return NextResponse.json(
        { error: 'Email connection failed. Check configuration.' },
        { status: 500 }
      )
    }

    // --- Email Content ---
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px; }
            .container { background: white; border-radius: 10px; padding: 25px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            h1 { color: #eb1868; text-align: center; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #7c3aed; }
            .value { background: #f5f5f5; padding: 10px; border-radius: 6px; }
            .message { white-space: pre-wrap; }
            .footer { font-size: 12px; text-align: center; color: #888; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>💅 New Message from GELLISH</h1>
            <div class="field"><div class="label">👤 Name:</div><div class="value">${name}</div></div>
            <div class="field"><div class="label">📧 Email:</div><div class="value">${email}</div></div>
            ${phone ? `<div class="field"><div class="label">📱 Phone:</div><div class="value">${phone}</div></div>` : ''}
            ${subject ? `<div class="field"><div class="label">📋 Subject:</div><div class="value">${subject}</div></div>` : ''}
            <div class="field"><div class="label">💬 Message:</div><div class="value message">${message}</div></div>
            <div class="footer">Sent on ${new Date().toLocaleString()}</div>
          </div>
        </body>
      </html>
    `

    const mailOptions = {
      from: EMAIL_FROM || EMAIL_USER,
      to: EMAIL_TO || EMAIL_USER,
      subject: `Contact Form: ${subject || 'New Message from Gellish Website'}`,
      html,
      text: `Name: ${name}\nEmail: ${email}\n${phone ? `Phone: ${phone}\n` : ''}${subject ? `Subject: ${subject}\n` : ''}\nMessage:\n${message}`,
    }

    // --- Send Email ---
    const info = await transporter.sendMail(mailOptions)
    console.log('📨 Email sent successfully:', info.messageId)

    return NextResponse.json(
      { message: 'Email sent successfully', messageId: info.messageId },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('❌ Email send error:', error)
    return NextResponse.json(
      {
        error: 'Failed to send email. Please try again later.',
        details: error.message,
      },
      { status: 500 }
    )
  }
}
