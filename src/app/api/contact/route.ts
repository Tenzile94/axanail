import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check environment variables
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Missing email configuration')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact administrator.' },
        { status: 500 }
      )
    }

    const port = parseInt(process.env.EMAIL_PORT || '465')
    
    // Create transporter with improved settings for GoDaddy
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      // Additional settings for better compatibility
      tls: {
        rejectUnauthorized: false, // For development/testing
        ciphers: 'SSLv3'
      },
      debug: true, // Enable debug output
      logger: true // Log to console
    })

    // Verify connection configuration
    try {
      await transporter.verify()
      console.log('SMTP connection verified successfully')
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      return NextResponse.json(
        { error: 'Email service connection failed. Please check configuration.' },
        { status: 500 }
      )
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Contact Form: ${subject || 'New Message from Gellish Website'}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
              }
              .header {
                background: linear-gradient(135deg, #eb1868 0%, #7c3aed 100%);
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .content {
                background: white;
                padding: 30px;
                border-radius: 0 0 10px 10px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #eb1868;
                margin-bottom: 5px;
              }
              .value {
                padding: 10px;
                background-color: #f5f5f5;
                border-left: 4px solid #eb1868;
                border-radius: 4px;
              }
              .message-box {
                background-color: #f5f5f5;
                padding: 15px;
                border-radius: 8px;
                border-left: 4px solid #7c3aed;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>💅 GELLISH</h1>
                <p>New Contact Form Submission</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Name:</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                
                ${phone ? `
                <div class="field">
                  <div class="label">📱 Phone:</div>
                  <div class="value">${phone}</div>
                </div>
                ` : ''}
                
                ${subject ? `
                <div class="field">
                  <div class="label">📋 Subject:</div>
                  <div class="value">${subject}</div>
                </div>
                ` : ''}
                
                <div class="field">
                  <div class="label">💬 Message:</div>
                  <div class="message-box">${message}</div>
                </div>
                
                <div class="footer">
                  <p>This email was sent from the Gellish contact form</p>
                  <p>Sent on ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission from Gellish Website

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${subject ? `Subject: ${subject}` : ''}

Message:
${message}

---
Sent on ${new Date().toLocaleString()}
      `,
    }

    // Send email
    console.log('Attempting to send email to:', process.env.EMAIL_TO)
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)

    return NextResponse.json(
      { message: 'Email sent successfully', messageId: info.messageId },
      { status: 200 }
    )
  } catch (error: any) {
    // Detailed error logging
    console.error('=== Email Error Details ===')
    console.error('Error message:', error.message)
    console.error('Error code:', error.code)
    console.error('Error command:', error.command)
    console.error('Full error:', error)
    
    // Return user-friendly error message with some details
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again later.',
        details: error.message || 'Unknown error',
        code: error.code || 'UNKNOWN'
      },
      { status: 500 }
    )
  }
}

