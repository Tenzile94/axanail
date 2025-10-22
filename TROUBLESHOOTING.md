# 🔧 Email Troubleshooting Guide

## For GoDaddy Email (contact@axanail.com) on Vercel

---

## 🚨 Common Error Messages & Solutions

### Error: "Email service is not configured"

**Cause:** Missing environment variables

**Solution:**
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Verify all 6 variables exist:
   - EMAIL_HOST
   - EMAIL_PORT
   - EMAIL_USER
   - EMAIL_PASSWORD
   - EMAIL_FROM
   - EMAIL_TO
3. After adding/fixing, **MUST REDEPLOY**

---

### Error: "Email service connection failed"

**Cause:** Cannot connect to GoDaddy SMTP server

**Solutions to try:**

#### Option 1: Change Port
Try port 587 instead of 465:
```
EMAIL_PORT = 587
```

#### Option 2: Verify GoDaddy Settings
Correct settings for GoDaddy:
```
EMAIL_HOST = smtpout.secureserver.net
EMAIL_PORT = 465 (or 587)
```

#### Option 3: Check Email Password
- Login to: https://email.secureserver.net
- Use email: contact@axanail.com
- Verify password works in webmail
- Use SAME password in EMAIL_PASSWORD

---

### Error: "Authentication failed" or "Invalid login"

**Cause:** Wrong credentials

**Solutions:**

1. **Verify Email Address**
   - Must be FULL email: `contact@axanail.com`
   - Not just: `contact`

2. **Verify Password**
   - Get from: https://account.godaddy.com/ → Email & Office
   - Use EMAIL password, NOT hosting password
   - Copy-paste to avoid typos

3. **Reset Password**
   - GoDaddy Email & Office Dashboard
   - Click on contact@axanail.com
   - Manage → Settings → Change Password
   - Use new password in Vercel

---

### Error: "Connection timeout" or "ETIMEDOUT"

**Cause:** Port is blocked or wrong server

**Solutions:**

1. **Try Alternative Port**
   Change from 465 to 587:
   ```
   EMAIL_PORT = 587
   ```

2. **Try Alternative Server**
   Change host:
   ```
   EMAIL_HOST = smtp.secureserver.net
   ```

3. **Check Vercel Region**
   Some regions may block SMTP. Try redeploying to different region.

---

## 🔍 How to Check Logs in Vercel

### Method 1: Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Click your project
3. Click **"Deployments"** tab
4. Click on latest deployment
5. Click **"Functions"** tab
6. Look for `/api/contact`
7. You'll see detailed error messages

### Method 2: Vercel CLI

```bash
vercel logs --follow
```

---

## ✅ Environment Variables Checklist

In Vercel Dashboard, verify:

```
EMAIL_HOST = smtpout.secureserver.net
EMAIL_PORT = 465
EMAIL_USER = contact@axanail.com
EMAIL_PASSWORD = [your actual password]
EMAIL_FROM = contact@axanail.com
EMAIL_TO = contact@axanail.com
```

**Important:**
- [ ] No spaces before/after values
- [ ] No quotes around values
- [ ] All variables selected for Production, Preview, Development
- [ ] Project redeployed after adding variables

---

## 🧪 Testing Steps

### Step 1: Test Environment Variables

Create a test endpoint to check if variables are loaded:

Create: `/src/app/api/test-email-config/route.ts`

```typescript
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    host: process.env.EMAIL_HOST ? '✓ Set' : '✗ Missing',
    port: process.env.EMAIL_PORT ? '✓ Set' : '✗ Missing',
    user: process.env.EMAIL_USER ? '✓ Set' : '✗ Missing',
    password: process.env.EMAIL_PASSWORD ? '✓ Set' : '✗ Missing',
    from: process.env.EMAIL_FROM ? '✓ Set' : '✗ Missing',
    to: process.env.EMAIL_TO ? '✓ Set' : '✗ Missing',
  })
}
```

Visit: `https://your-site.vercel.app/api/test-email-config`

Should show all ✓ Set

### Step 2: Test SMTP Connection Locally

Create `.env.local` in your project:

```env
EMAIL_HOST=smtpout.secureserver.net
EMAIL_PORT=465
EMAIL_USER=contact@axanail.com
EMAIL_PASSWORD=your-password
EMAIL_FROM=contact@axanail.com
EMAIL_TO=contact@axanail.com
```

Run:
```bash
npm run dev
```

Test at: http://localhost:3000/contact

Check terminal for detailed error messages.

### Step 3: Test with Port 587

If 465 fails, try 587:

Change in Vercel:
```
EMAIL_PORT = 587
```

Redeploy and test again.

---

## 📧 GoDaddy Email Verification

### Verify Email Account Works

1. Go to: https://email.secureserver.net
2. Login with:
   - Email: contact@axanail.com
   - Password: your password
3. If login fails → Reset password in GoDaddy dashboard
4. If login works → Use SAME password in EMAIL_PASSWORD

### Check Email Account Status

1. Go to: https://account.godaddy.com/
2. Email & Office Dashboard
3. Verify contact@axanail.com shows "Active"
4. Check no warnings or issues

---

## 🔄 Alternative Configuration

If standard config doesn't work, try these alternatives:

### Configuration A: Port 587 + TLS
```env
EMAIL_HOST=smtpout.secureserver.net
EMAIL_PORT=587
EMAIL_USER=contact@axanail.com
EMAIL_PASSWORD=your-password
EMAIL_FROM=contact@axanail.com
EMAIL_TO=contact@axanail.com
```

### Configuration B: Alternative Host
```env
EMAIL_HOST=smtp.secureserver.net
EMAIL_PORT=465
EMAIL_USER=contact@axanail.com
EMAIL_PASSWORD=your-password
EMAIL_FROM=contact@axanail.com
EMAIL_TO=contact@axanail.com
```

### Configuration C: Port 587 + Alternative Host
```env
EMAIL_HOST=smtp.secureserver.net
EMAIL_PORT=587
EMAIL_USER=contact@axanail.com
EMAIL_PASSWORD=your-password
EMAIL_FROM=contact@axanail.com
EMAIL_TO=contact@axanail.com
```

---

## 🐛 Debug Checklist

Go through this step by step:

1. **Environment Variables**
   - [ ] All 6 variables added to Vercel
   - [ ] No typos in variable names
   - [ ] Values are correct
   - [ ] Selected all environments (Prod/Preview/Dev)

2. **GoDaddy Email**
   - [ ] Account is active
   - [ ] Can login to webmail
   - [ ] Password is correct
   - [ ] No spending/billing issues

3. **Deployment**
   - [ ] Redeployed after adding variables
   - [ ] Build completed successfully
   - [ ] No build errors

4. **Testing**
   - [ ] Form loads at /contact
   - [ ] Can fill out form
   - [ ] Submit button works
   - [ ] Check Vercel logs for errors

---

## 💡 Quick Fixes to Try

### Quick Fix 1: Redeploy
Sometimes environment variables don't load. Just redeploy:
```bash
git commit --allow-empty -m "Redeploy"
git push
```

### Quick Fix 2: Clear Vercel Cache
In Vercel Dashboard:
- Settings → Advanced → Clear Cache
- Then redeploy

### Quick Fix 3: Change Port
Most reliable: Use port 587
```
EMAIL_PORT = 587
```

### Quick Fix 4: Simplify Password
If password has special characters like @#$%, try:
- Reset to simpler password
- Use only letters and numbers
- Update in Vercel
- Redeploy

---

## 📊 Error Code Reference

| Error Code | Meaning | Solution |
|------------|---------|----------|
| ECONNREFUSED | Can't connect to server | Check host and port |
| ETIMEDOUT | Connection timeout | Try port 587 |
| EAUTH | Authentication failed | Check email/password |
| EENVELOPE | Invalid sender/recipient | Check FROM and TO |
| ESOCKET | SSL/TLS issue | Try port 587 (non-SSL) |

---

## 🆘 Still Not Working?

### Get Detailed Logs

1. Check browser console (F12) → Network tab
2. Check Vercel logs: Dashboard → Functions
3. Check local terminal when running `npm run dev`

### What to Look For

In the logs, look for:
```
Error message: [actual error]
Error code: [error code]
Error command: [SMTP command that failed]
```

### Common Log Messages

**"SMTP connection verified successfully"** = Good! ✅

**"SMTP verification failed"** = Bad credentials or wrong server ❌

**"getaddrinfo ENOTFOUND"** = Wrong EMAIL_HOST ❌

**"Authentication failed"** = Wrong password ❌

---

## 📞 Alternative Solutions

### Option 1: Use SendGrid Instead

SendGrid is more reliable for production:

1. Sign up: https://sendgrid.com/ (Free: 100 emails/day)
2. Create API Key
3. Update Vercel variables:
   ```
   EMAIL_HOST=smtp.sendgrid.net
   EMAIL_PORT=587
   EMAIL_USER=apikey
   EMAIL_PASSWORD=your-sendgrid-api-key
   EMAIL_FROM=contact@axanail.com
   EMAIL_TO=contact@axanail.com
   ```

### Option 2: Use Resend

Modern email API, very reliable:

1. Sign up: https://resend.com/
2. Get API key
3. Different implementation (simpler)

---

## ✅ When It's Working

You'll see in logs:
```
SMTP connection verified successfully
Attempting to send email to: contact@axanail.com
Email sent successfully: <message-id>
```

And you'll receive email at contact@axanail.com!

---

## 📝 Next Steps

1. Check Vercel logs for specific error
2. Try the suggested solutions based on error
3. Test with port 587 if 465 fails
4. Verify GoDaddy email account is active
5. Consider SendGrid for production

Need more help? Share the exact error message from Vercel logs!

