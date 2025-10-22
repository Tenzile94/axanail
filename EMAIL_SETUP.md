# Email Configuration Guide

## 📧 Setting Up Email for Contact Form

Your contact form is ready! Now you need to configure email settings to receive messages.

## Quick Setup (Gmail)

### Step 1: Create App Password (Gmail)

1. Go to your Google Account: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Enable "2-Step Verification" if not already enabled
4. Under "2-Step Verification", scroll down to "App passwords"
5. Click "App passwords"
6. Select "Mail" and "Other (Custom name)"
7. Enter "Gellish Website" as the name
8. Click "Generate"
9. **Copy the 16-character password** (you'll need this)

### Step 2: Create .env.local File

Create a file named `.env.local` in the root directory with:

```env
# Gmail Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=your-email@gmail.com
```

**Replace:**
- `your-email@gmail.com` with your Gmail address
- `your-16-character-app-password` with the app password from Step 1

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Test

```bash
npm run dev
```

Visit: http://localhost:3000/contact

---

## Alternative Email Services

### SendGrid (Recommended for Production)

1. Sign up at https://sendgrid.com/ (Free tier: 100 emails/day)
2. Create an API Key
3. Configure `.env.local`:

```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASSWORD=your-sendgrid-api-key
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=your-receiving-email@example.com
```

### Mailgun

```env
EMAIL_HOST=smtp.mailgun.org
EMAIL_PORT=587
EMAIL_USER=your-mailgun-smtp-username
EMAIL_PASSWORD=your-mailgun-smtp-password
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=your-receiving-email@example.com
```

### Outlook/Office 365

```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
EMAIL_FROM=your-email@outlook.com
EMAIL_TO=your-receiving-email@example.com
```

---

## Environment Variables Explained

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_HOST` | SMTP server hostname | `smtp.gmail.com` |
| `EMAIL_PORT` | SMTP port (587 for TLS, 465 for SSL) | `587` |
| `EMAIL_USER` | SMTP username (usually your email) | `you@gmail.com` |
| `EMAIL_PASSWORD` | SMTP password or app password | `abcd efgh ijkl mnop` |
| `EMAIL_FROM` | Sender email address | `noreply@gellish.com` |
| `EMAIL_TO` | Where to receive form submissions | `contact@gellish.com` |

---

## Troubleshooting

### "Failed to send email"

1. **Check .env.local exists** in project root
2. **Verify credentials** are correct
3. **Restart dev server** after changing .env.local
4. **Check spam folder** for test emails
5. **Enable "Less secure app access"** (Gmail legacy accounts)

### Gmail "Authentication failed"

- Make sure you're using an **App Password**, not your regular Gmail password
- 2-Step Verification must be enabled
- Check that email address matches

### Port issues

- Try port `465` with SSL if `587` doesn't work
- Some networks block port 587

### Testing

1. Open browser console (F12)
2. Fill out contact form
3. Check Network tab for API response
4. Check terminal for error messages

---

## Production Deployment

### Vercel

1. Go to your project settings on Vercel
2. Add environment variables:
   - `EMAIL_HOST`
   - `EMAIL_PORT`
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `EMAIL_FROM`
   - `EMAIL_TO`

### Netlify

Same as Vercel - add environment variables in Site settings > Build & deploy > Environment

---

## Security Notes

⚠️ **Important:**
- Never commit `.env.local` to git (already in .gitignore)
- Use app passwords, not regular passwords
- For production, use a dedicated email service (SendGrid, Mailgun)
- Consider rate limiting for the contact form endpoint

---

## Contact Form Features

✅ **Included:**
- Beautiful responsive design
- Form validation
- Loading states
- Success/error messages
- HTML email template with branding
- FAQ section
- Contact information display
- Mobile-friendly

📧 **Email includes:**
- Sender's name
- Email address
- Phone (optional)
- Subject (optional)
- Message
- Timestamp
- Beautiful HTML formatting

---

## Need Help?

Check the API route: `/src/app/api/contact/route.ts`

The form validation happens in: `/src/app/contact/page.tsx`

**Test the API directly:**
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

---

## Example .env.local (Complete)

```env
# Email Configuration (CHOOSE ONE SERVICE)

# Gmail
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=yourname@gmail.com
EMAIL_PASSWORD=your-app-password-here
EMAIL_FROM=yourname@gmail.com
EMAIL_TO=yourname@gmail.com

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Save this file as `.env.local` in your project root, replace the values, and restart your dev server!

