# 🔧 SMTP Authentication Error - Fix Guide

## ❌ Your Error:
```
SMTP verification failed: Authentication unsuccessful, 
the user credentials were incorrect.
Code: EAUTH
Server: OUTLOOK.COM
```

This means your email password is wrong or SMTP is blocked.

---

## ✅ SOLUTION 1: Fix Microsoft 365/Outlook Settings

### **A. Update SMTP Host**

Change from `smtp.office365.com` to:
```
EMAIL_HOST=smtp-mail.outlook.com
```

### **B. Enable SMTP AUTH**

1. Go to: https://admin.microsoft.com
2. **Users** → **Active users** → Select your account
3. **Mail** tab → **Manage email apps**
4. Make sure **"Authenticated SMTP"** is checked ✅
5. Click **Save**

### **C. Generate App Password (If 2FA is enabled)**

1. Go to: https://account.microsoft.com/security
2. Click **Advanced security options**
3. Under **App passwords**, click **Create a new app password**
4. Copy the password (e.g., `abcd efgh ijkl mnop`)
5. Use THIS in `EMAIL_PASSWORD`, NOT your regular password

### **D. Check Account Permissions**

Make sure the account has permission to send email:
- Not blocked/restricted
- Has valid license
- SMTP not disabled by admin

---

## ✅ SOLUTION 2: Switch to Gmail (Easier!)

Gmail is much easier to set up and more reliable:

### **Step 1: Enable 2FA**
1. Go to: https://myaccount.google.com/security
2. Click **2-Step Verification**
3. Follow setup steps

### **Step 2: Generate App Password**
1. Go to: https://myaccount.google.com/apppasswords
2. Select **Mail** and **Other (Custom name)**
3. Name it: "AXA Website"
4. Click **Generate**
5. Copy the 16-character password

### **Step 3: Update Environment Variables**
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=generated-app-password-here
EMAIL_FROM=your-gmail@gmail.com
EMAIL_TO=contact@axanail.com
```

---

## ✅ SOLUTION 3: Use SendGrid (Professional)

**Best for production sites!**

### **Why SendGrid?**
- ✅ Free tier: 100 emails/day
- ✅ No password issues
- ✅ Better deliverability
- ✅ Email tracking & analytics

### **Setup:**

1. Sign up: https://sendgrid.com/free
2. Verify your email
3. Get API key: **Settings** → **API Keys** → **Create API Key**
4. Copy the API key

### **Update Your Code:**

Install SendGrid:
```bash
npm install @sendgrid/mail
```

Update `/src/app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, address, product, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // SendGrid Setup
    const apiKey = process.env.SENDGRID_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'SendGrid not configured' },
        { status: 500 }
      )
    }

    sgMail.setApiKey(apiKey)

    const msg = {
      to: 'contact@axanail.com',
      from: 'your-verified-sender@yourdomain.com', // Must be verified in SendGrid
      replyTo: email, // Customer's email
      subject: `New Contact: ${product || 'Inquiry'} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<strong>Name:</strong> ${name}<br>
             <strong>Email:</strong> ${email}<br>
             ${phone ? `<strong>Phone:</strong> ${phone}<br>` : ''}
             ${address ? `<strong>Address:</strong> ${address}<br>` : ''}
             ${product ? `<strong>Product:</strong> ${product}<br>` : ''}
             <br><strong>Message:</strong><br>${message}`,
    }

    await sgMail.send(msg)

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('SendGrid error:', error)
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    )
  }
}
```

Add to environment variables:
```
SENDGRID_API_KEY=your-api-key-here
```

---

## 🧪 TEST YOUR CONFIGURATION

### **Step 1: Run Test Script**

I've created `test-email-connection.js` for you:

```bash
node test-email-connection.js
```

Edit the file first with your credentials!

### **Step 2: Test Locally**

```bash
npm run dev
```

Go to: http://localhost:3000/contact
Fill out and submit the form

### **Step 3: Check Terminal**

Look for:
```
✅ SMTP connection verified successfully.
📤 Sending email to: contact@axanail.com
✅ Email sent successfully
```

---

## 📋 Quick Fix Checklist

- [ ] Verify email and password are correct
- [ ] Check if 2FA is enabled (need app password if yes)
- [ ] Try `smtp-mail.outlook.com` instead of `smtp.office365.com`
- [ ] Enable SMTP AUTH in Microsoft 365 admin
- [ ] Test with Gmail instead (easier)
- [ ] Consider switching to SendGrid (professional)
- [ ] Run test-email-connection.js script
- [ ] Check Vercel environment variables match local
- [ ] Redeploy after changing env variables

---

## 🆘 Still Not Working?

### **Get More Details:**

Check the full error in terminal. Common codes:

- **EAUTH (535)**: Wrong username/password
- **ECONNECTION**: Wrong host or port
- **ETIMEDOUT**: Firewall blocking
- **530**: SMTP AUTH not enabled

### **Contact Your Email Provider:**

Ask them:
1. "What SMTP server should I use for contact@axanail.com?"
2. "What port should I use? (587 or 465?)"
3. "Is SMTP AUTH enabled for my account?"
4. "Do I need an app-specific password?"

### **Quick Alternative:**

Just use Gmail temporarily:
1. Create a Gmail account
2. Enable 2FA
3. Generate app password
4. Use Gmail to forward to contact@axanail.com

---

## 💡 Recommended Solution

**For production sites, use SendGrid:**
- More reliable than SMTP
- No authentication issues
- Better email deliverability
- Professional email tracking
- Free for 100 emails/day

**For quick testing, use Gmail:**
- Easy to set up
- Works reliably
- Good for development

**Avoid using:**
- Microsoft 365 SMTP (too many restrictions)
- GoDaddy email (often blocks SMTP)
- Shared hosting email (unreliable)

---

*Need more help? Check the terminal output for specific error messages.*

