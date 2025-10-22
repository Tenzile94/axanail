# 🚀 Vercel + GoDaddy Email Setup Guide

## Your Configuration

**Email:** contact@axanail.com  
**Provider:** GoDaddy  
**Hosting:** Vercel

---

## 📧 GoDaddy SMTP Settings

Use these settings for your GoDaddy email:

```
EMAIL_HOST=smtpout.secureserver.net
EMAIL_PORT=465
EMAIL_USER=contact@axanail.com
EMAIL_PASSWORD=your-godaddy-email-password
EMAIL_FROM=contact@axanail.com
EMAIL_TO=contact@axanail.com
```

### Important GoDaddy Notes:
- **Port 465** (SSL) is recommended
- **Port 587** (TLS) also works
- Use your **full email address** as username
- Use your **email account password** (not hosting password)

---

## 🔧 Step-by-Step Setup

### Step 1: Get Your GoDaddy Email Password

If you don't know your email password:

1. Go to https://account.godaddy.com/
2. Navigate to **Email & Office Dashboard**
3. Find your email account (contact@axanail.com)
4. Click **Manage** → **Settings** → **Change Password** (if needed)

### Step 2: Test Locally First

Create `.env.local` in your project root:

```env
# GoDaddy SMTP Configuration
EMAIL_HOST=smtpout.secureserver.net
EMAIL_PORT=465
EMAIL_USER=contact@axanail.com
EMAIL_PASSWORD=your-actual-password-here
EMAIL_FROM=contact@axanail.com
EMAIL_TO=contact@axanail.com
```

Test it locally:
```bash
npm run dev
```

Visit: http://localhost:3000/contact and send a test message.

### Step 3: Add Environment Variables to Vercel

#### Option A: Vercel Dashboard (Recommended)

1. Go to https://vercel.com/
2. Select your project (axanail or gellish)
3. Click **Settings** tab
4. Click **Environment Variables** in left sidebar
5. Add each variable:

| Name | Value |
|------|-------|
| `EMAIL_HOST` | `smtpout.secureserver.net` |
| `EMAIL_PORT` | `465` |
| `EMAIL_USER` | `contact@axanail.com` |
| `EMAIL_PASSWORD` | `your-email-password` |
| `EMAIL_FROM` | `contact@axanail.com` |
| `EMAIL_TO` | `contact@axanail.com` |

6. Select **Production**, **Preview**, and **Development** for each
7. Click **Save**

#### Option B: Vercel CLI

```bash
vercel env add EMAIL_HOST
# Enter: smtpout.secureserver.net

vercel env add EMAIL_PORT
# Enter: 465

vercel env add EMAIL_USER
# Enter: contact@axanail.com

vercel env add EMAIL_PASSWORD
# Enter: your-password

vercel env add EMAIL_FROM
# Enter: contact@axanail.com

vercel env add EMAIL_TO
# Enter: contact@axanail.com
```

### Step 4: Redeploy

After adding environment variables:

**Option A: Automatic (Push to Git)**
```bash
git add .
git commit -m "Update configuration"
git push
```
Vercel will auto-deploy.

**Option B: Manual Redeploy**
1. Go to Vercel Dashboard
2. Go to **Deployments** tab
3. Click **···** on latest deployment
4. Click **Redeploy**

---

## 🧪 Testing Your Setup

### 1. Test on Production

Visit your deployed site:
```
https://axanail.com/contact
or
https://your-vercel-url.vercel.app/contact
```

### 2. Fill Out Contact Form

- Name: Test User
- Email: your-test-email@example.com
- Message: Testing GoDaddy email integration

### 3. Check Your Inbox

Check **contact@axanail.com** for the email.

**If no email:**
- Check spam/junk folder
- Verify password is correct
- Check Vercel deployment logs

---

## 🔍 Troubleshooting

### Issue: "Failed to send email"

**Check Vercel Logs:**
1. Go to Vercel Dashboard
2. Click **Deployments** tab
3. Click on latest deployment
4. Click **Functions** tab
5. Look for errors in `/api/contact`

**Common Fixes:**
- Verify email password is correct
- Try port 587 instead of 465
- Check GoDaddy email account is active
- Verify no typos in environment variables

### Issue: "Authentication failed"

**Solution:**
- Use **full email address** (contact@axanail.com) as EMAIL_USER
- Use **email password**, not hosting password
- Check password has no special characters causing issues

### Issue: "Connection timeout"

**Solution:**
- Try changing port from 465 to 587
- Update EMAIL_PORT in Vercel settings
- Redeploy after changing

### Issue: "Invalid sender"

**Solution:**
- Ensure EMAIL_FROM matches EMAIL_USER
- Both should be: contact@axanail.com

---

## 📝 Vercel Environment Variables Checklist

Make sure all 6 variables are set:

- [ ] `EMAIL_HOST` = `smtpout.secureserver.net`
- [ ] `EMAIL_PORT` = `465`
- [ ] `EMAIL_USER` = `contact@axanail.com`
- [ ] `EMAIL_PASSWORD` = `your-password`
- [ ] `EMAIL_FROM` = `contact@axanail.com`
- [ ] `EMAIL_TO` = `contact@axanail.com`
- [ ] Redeployed after adding variables

---

## 🔐 Security Best Practices

✅ **Good:**
- Environment variables stored in Vercel (encrypted)
- `.env.local` in `.gitignore` (not committed)
- Using secure SMTP connection

⚠️ **Recommendations:**
- Use a strong email password
- Consider creating a separate email for form submissions
- Monitor for spam submissions

---

## 📧 Alternative: Different Receiving Email

If you want to receive emails at a different address:

```env
EMAIL_USER=contact@axanail.com
EMAIL_FROM=contact@axanail.com
EMAIL_TO=your-personal-email@gmail.com
```

This sends FROM contact@axanail.com TO your personal email.

---

## 🎯 Quick Reference

### GoDaddy SMTP Servers

**Primary (Recommended):**
- Host: `smtpout.secureserver.net`
- Port: `465` (SSL) or `587` (TLS)

**Alternative:**
- Host: `smtp.secureserver.net`
- Port: `465` (SSL) or `587` (TLS)

### Port Comparison

| Port | Type | Use Case |
|------|------|----------|
| **465** | SSL | Recommended, more secure |
| **587** | TLS | Alternative if 465 fails |
| ~~25~~ | Plain | Don't use (blocked by most hosts) |

---

## 📊 Testing Checklist

After deployment, test:

1. **Form Submission**
   - [ ] Visit /contact page
   - [ ] Fill out all required fields
   - [ ] Submit form
   - [ ] See success message

2. **Email Delivery**
   - [ ] Check inbox (contact@axanail.com)
   - [ ] Verify all form data appears
   - [ ] Check email formatting looks good
   - [ ] Reply button works

3. **Edge Cases**
   - [ ] Test with special characters in message
   - [ ] Test with very long message
   - [ ] Test with international characters
   - [ ] Test from mobile device

---

## 🚨 Common GoDaddy Issues

### Issue: "Relay access denied"

**Cause:** Incorrect SMTP server
**Fix:** Use `smtpout.secureserver.net` (not smtp.axanail.com)

### Issue: Emails going to spam

**Solutions:**
1. Add SPF record to DNS
2. Add DKIM signature
3. Verify sender domain matches

### Issue: Daily limit reached

**GoDaddy Limits:**
- **Workspace Email:** 250 emails/day per mailbox
- **Business Email:** 500 emails/day per mailbox

**Solution:** Monitor form submissions, add rate limiting

---

## 🔄 If You Need to Change Settings

1. Go to Vercel Dashboard
2. Project → Settings → Environment Variables
3. Click **Edit** on the variable
4. Update value
5. Click **Save**
6. **Important:** Redeploy your project!

---

## 📱 Vercel Deployment Logs

To check if emails are sending:

```bash
# Using Vercel CLI
vercel logs

# Or in Dashboard:
# Deployments → Latest → Functions → /api/contact
```

---

## ✅ Complete Setup Example

**Your `.env.local` (for local testing):**
```env
EMAIL_HOST=smtpout.secureserver.net
EMAIL_PORT=465
EMAIL_USER=contact@axanail.com
EMAIL_PASSWORD=YourActualPasswordHere123
EMAIL_FROM=contact@axanail.com
EMAIL_TO=contact@axanail.com
```

**Your Vercel Environment Variables:**
Same as above, but added in Vercel Dashboard.

---

## 🎉 You're All Set!

Once you've:
1. ✅ Added all 6 environment variables to Vercel
2. ✅ Redeployed your project
3. ✅ Tested the contact form

You should receive emails at **contact@axanail.com** whenever someone submits the contact form!

---

## 📞 Need Help?

**Check Deployment Logs:**
- Vercel Dashboard → Deployments → Functions

**Test Locally First:**
- Create `.env.local` with same settings
- Run `npm run dev`
- Test at http://localhost:3000/contact

**Verify GoDaddy Email:**
- Login to webmail: https://email.secureserver.net
- Send a test email to yourself
- Confirm account is working

---

## 🔗 Useful Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **GoDaddy Email:** https://email.secureserver.net
- **GoDaddy Account:** https://account.godaddy.com/
- **SMTP Settings:** https://www.godaddy.com/help/server-settings-912

---

Good luck! Your contact form should work perfectly with this setup. 🚀📧

