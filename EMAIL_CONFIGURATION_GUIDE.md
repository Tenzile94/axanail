# 📧 Email Configuration Guide for AXA Contact Form

## 🚨 Issue: Contact Form Not Sending Emails

Your contact form is failing because the email server isn't configured. Here's how to fix it:

---

## ✅ Step 1: Get Your Email Server Details

You need SMTP credentials for **contact@axanail.com**. Contact your email provider (domain registrar or email hosting) to get:

### **Required Information:**
- SMTP Host (e.g., `smtp.gmail.com`, `smtp.office365.com`, or your host's SMTP server)
- SMTP Port (usually `587` for TLS or `465` for SSL)
- SMTP Username (usually your email: `contact@axanail.com`)
- SMTP Password (your email password or app-specific password)

---

## 📋 Common Email Providers

### **Option 1: Google Workspace / Gmail**
If contact@axanail.com uses Google:

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=contact@axanail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=contact@axanail.com
EMAIL_TO=contact@axanail.com
```

**⚠️ Important for Gmail:** You need an **App Password**:
1. Go to Google Account Settings
2. Security → 2-Step Verification
3. App passwords → Generate new password
4. Use that password (not your regular password)

### **Option 2: Microsoft 365 / Outlook**
```
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
EMAIL_USER=contact@axanail.com
EMAIL_PASSWORD=your-password
EMAIL_FROM=contact@axanail.com
EMAIL_TO=contact@axanail.com
```

### **Option 3: GoDaddy Email**
```
EMAIL_HOST=smtpout.secureserver.net
EMAIL_PORT=465
EMAIL_USER=contact@axanail.com
EMAIL_PASSWORD=your-password
EMAIL_FROM=contact@axanail.com
EMAIL_TO=contact@axanail.com
```

### **Option 4: Hostinger**
```
EMAIL_HOST=smtp.hostinger.com
EMAIL_PORT=587
EMAIL_USER=contact@axanail.com
EMAIL_PASSWORD=your-password
EMAIL_FROM=contact@axanail.com
EMAIL_TO=contact@axanail.com
```

### **Option 5: cPanel / Generic Hosting**
```
EMAIL_HOST=mail.axanail.com (or smtp.axanail.com)
EMAIL_PORT=587
EMAIL_USER=contact@axanail.com
EMAIL_PASSWORD=your-password
EMAIL_FROM=contact@axanail.com
EMAIL_TO=contact@axanail.com
```

---

## 🔧 Step 2: Configure Environment Variables

### **For Local Development (Testing)**

Create a `.env.local` file in your project root:

```bash
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=contact@axanail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=contact@axanail.com
EMAIL_TO=contact@axanail.com
```

### **For Production (Vercel)**

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add each variable:

| Variable Name | Value | Environment |
|--------------|--------|-------------|
| `EMAIL_HOST` | `smtp.gmail.com` | Production, Preview, Development |
| `EMAIL_PORT` | `587` | Production, Preview, Development |
| `EMAIL_USER` | `contact@axanail.com` | Production, Preview, Development |
| `EMAIL_PASSWORD` | `your-password` | Production, Preview, Development |
| `EMAIL_FROM` | `contact@axanail.com` | Production, Preview, Development |
| `EMAIL_TO` | `contact@axanail.com` | Production, Preview, Development |

5. **Redeploy** your site after adding variables

---

## 🧪 Step 3: Test Email Locally

1. Install nodemailer if not already:
```bash
npm install nodemailer
```

2. Start your development server:
```bash
npm run dev
```

3. Go to: `http://localhost:3000/contact`

4. Fill out and submit the form

5. Check terminal for:
```
✅ SMTP connection verified successfully.
📤 Sending email to: contact@axanail.com
✅ Email sent successfully: {messageId: ...}
```

---

## 🚀 Step 4: Deploy to Vercel

```bash
git add .
git commit -m "Fix email configuration"
git push
```

Vercel will automatically redeploy with the new environment variables.

---

## 🐛 Troubleshooting

### **Error: "SMTP verification failed"**

**Possible causes:**
1. Wrong SMTP host or port
2. Incorrect username/password
3. Email provider blocking access
4. Need to enable "Less secure apps" or use app password

**Solutions:**
- Double-check all credentials
- For Gmail: Use App Password, not regular password
- For Microsoft 365: Enable SMTP AUTH
- Check if your email provider requires SSL (port 465) instead of TLS (587)

### **Error: "Authentication failed"**

**Possible causes:**
1. Wrong password
2. 2FA enabled without app password
3. Email provider requires specific authentication

**Solutions:**
- Reset email password and try again
- Generate app-specific password
- Check email provider documentation

### **Error: "Connection timeout"**

**Possible causes:**
1. Firewall blocking SMTP
2. Wrong port
3. DNS issues

**Solutions:**
- Try port 465 instead of 587
- Check if your hosting allows outbound SMTP
- Try different SMTP host (e.g., smtp.gmail.com vs smtp.googlemail.com)

### **Email sends but not received**

**Possible causes:**
1. Email in spam folder
2. Wrong EMAIL_TO address
3. Email provider blocking outgoing mail

**Solutions:**
- Check spam/junk folder
- Verify EMAIL_TO is correct
- Add sending address to safe senders list
- Check email provider's outgoing mail logs

---

## 📞 Alternative Solution: Use a Email Service

If your email provider doesn't support SMTP or keeps failing, use a dedicated email service:

### **Resend (Recommended - Free tier)**

1. Sign up at: https://resend.com
2. Verify your domain (axanail.com)
3. Get API key
4. Update code to use Resend instead of nodemailer

```bash
npm install resend
```

### **SendGrid (Free tier: 100 emails/day)**

1. Sign up at: https://sendgrid.com
2. Get API key
3. Update environment variables:
```
SENDGRID_API_KEY=your-api-key
```

### **Mailgun (Free tier: 5000 emails/month)**

1. Sign up at: https://mailgun.com
2. Verify domain
3. Get SMTP credentials or API key

---

## ✅ Verification Checklist

- [ ] Got SMTP credentials from email provider
- [ ] Added environment variables to Vercel
- [ ] Tested locally (npm run dev)
- [ ] Email received successfully
- [ ] Committed and pushed changes
- [ ] Redeployed on Vercel
- [ ] Tested on production site
- [ ] Email appears correctly formatted
- [ ] Can reply directly to customer email

---

## 📧 Current Configuration

Your contact form will send emails to: **contact@axanail.com**

**Email Template Features:**
- ✅ Professional AXA branding
- ✅ Dark luxury theme (black & gold)
- ✅ Customer info (name, email, phone, company)
- ✅ Product interest selection
- ✅ Reply-to customer email (one-click reply)
- ✅ Timestamp
- ✅ Responsive design

---

## 🆘 Still Having Issues?

### **Quick Test:**

Create a file `test-email.js` in your project root:

```javascript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransporter({
  host: 'smtp.gmail.com', // YOUR SMTP HOST
  port: 587,
  secure: false,
  auth: {
    user: 'contact@axanail.com', // YOUR EMAIL
    pass: 'your-password', // YOUR PASSWORD
  },
});

transporter.sendMail({
  from: 'contact@axanail.com',
  to: 'contact@axanail.com',
  subject: 'Test Email',
  text: 'This is a test email from AXA website',
}, (err, info) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Success:', info);
  }
});
```

Run it:
```bash
node test-email.js
```

If this works, your SMTP credentials are correct. If not, the issue is with your email configuration.

---

## 📞 Need Help?

If you're still stuck:
1. Check your email provider's SMTP documentation
2. Contact your email hosting support
3. Consider using a dedicated email service (Resend/SendGrid)
4. Ensure 2FA/app passwords are set up correctly

---

*Last Updated: October 23, 2025*

