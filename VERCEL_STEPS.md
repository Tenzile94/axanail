# 🚀 Vercel Environment Variables - Step by Step

## For contact@axanail.com with GoDaddy

---

## 📋 Your 6 Environment Variables

Copy these exactly:

```
EMAIL_HOST = smtpout.secureserver.net
EMAIL_PORT = 465
EMAIL_USER = contact@axanail.com
EMAIL_PASSWORD = [YOUR_EMAIL_PASSWORD]
EMAIL_FROM = contact@axanail.com
EMAIL_TO = contact@axanail.com
```

---

## 🎯 Step-by-Step Instructions

### Step 1: Go to Vercel Dashboard

1. Open browser and go to: **https://vercel.com/**
2. Login to your account
3. Find your deployed project (Gellish/Axanail)

### Step 2: Access Environment Variables

1. Click on your project name
2. Click **"Settings"** tab at the top
3. Click **"Environment Variables"** in the left sidebar

### Step 3: Add First Variable (EMAIL_HOST)

1. In the "Key" field, type: `EMAIL_HOST`
2. In the "Value" field, type: `smtpout.secureserver.net`
3. Check ✓ **Production**
4. Check ✓ **Preview**  
5. Check ✓ **Development**
6. Click **"Save"**

### Step 4: Add Second Variable (EMAIL_PORT)

1. Click **"Add Another"** or scroll down
2. In the "Key" field, type: `EMAIL_PORT`
3. In the "Value" field, type: `465`
4. Check all three environments ✓
5. Click **"Save"**

### Step 5: Add Third Variable (EMAIL_USER)

1. Click **"Add Another"**
2. Key: `EMAIL_USER`
3. Value: `contact@axanail.com`
4. Check all three ✓
5. **"Save"**

### Step 6: Add Fourth Variable (EMAIL_PASSWORD)

1. Click **"Add Another"**
2. Key: `EMAIL_PASSWORD`
3. Value: `your-actual-godaddy-email-password`
   - ⚠️ This is your **EMAIL password**, not website hosting password
   - Get it from: https://account.godaddy.com/ → Email & Office
4. Check all three ✓
5. **"Save"**

### Step 7: Add Fifth Variable (EMAIL_FROM)

1. Click **"Add Another"**
2. Key: `EMAIL_FROM`
3. Value: `contact@axanail.com`
4. Check all three ✓
5. **"Save"**

### Step 8: Add Sixth Variable (EMAIL_TO)

1. Click **"Add Another"**
2. Key: `EMAIL_TO`
3. Value: `contact@axanail.com`
4. Check all three ✓
5. **"Save"**

### Step 9: Redeploy Your Project

**Option A - Automatic (Recommended):**
Just push any change to your Git repository:
```bash
git commit --allow-empty -m "Trigger redeploy"
git push
```

**Option B - Manual:**
1. Go to **"Deployments"** tab
2. Find the latest deployment
3. Click the **"..."** (three dots) menu
4. Click **"Redeploy"**
5. Confirm

### Step 10: Test Your Contact Form

1. Wait for deployment to complete (1-2 minutes)
2. Visit your website: `https://your-domain.vercel.app/contact`
3. Fill out the contact form:
   - Name: Test User
   - Email: test@example.com
   - Message: Testing email integration
4. Click **"Send Message"**
5. You should see a success message
6. Check your email at **contact@axanail.com**

---

## ✅ Verification Checklist

After setup, verify:

- [ ] All 6 variables are added to Vercel
- [ ] Each variable has Production, Preview, and Development checked
- [ ] PROJECT IS REDEPLOYED (very important!)
- [ ] Contact page loads: `/contact`
- [ ] Form can be filled out
- [ ] Form submits successfully
- [ ] Success message appears
- [ ] Email arrives at contact@axanail.com

---

## 🔍 How to Check Your Variables

In Vercel Dashboard:
1. Go to your project
2. Settings → Environment Variables
3. You should see all 6 variables listed
4. Click the eye icon 👁 to reveal values (verify they're correct)

---

## 🚨 Troubleshooting

### "Failed to send email"

**Check in Vercel:**
1. Go to **Deployments** tab
2. Click on the latest deployment
3. Click **"Functions"** tab
4. Look for `/api/contact` errors

**Common fixes:**
- Make sure all 6 variables are added
- Verify EMAIL_PASSWORD is your **email password**
- Try port 587 instead of 465
- Redeploy after any changes

### "No email received"

1. Check spam/junk folder
2. Verify contact@axanail.com is active
3. Login to webmail: https://email.secureserver.net
4. Check deployment logs in Vercel

### "Authentication failed"

- Verify EMAIL_USER is: `contact@axanail.com` (full address)
- Verify EMAIL_PASSWORD is your email account password
- NOT your GoDaddy hosting/domain password
- Get correct password from: Email & Office Dashboard

---

## 📧 Get Your GoDaddy Email Password

If you don't know your email password:

1. Go to: **https://account.godaddy.com/**
2. Sign in
3. Click **"Email & Office Dashboard"**
4. Find **contact@axanail.com**
5. Click **"Manage"**
6. Click **"Settings"**
7. Click **"Change Password"** (if needed)
8. Set a new password or retrieve existing

---

## 🔄 If Port 465 Doesn't Work

Some networks block port 465. Try port 587:

1. Go to Vercel → Settings → Environment Variables
2. Find **EMAIL_PORT**
3. Click edit (pencil icon)
4. Change value from `465` to `587`
5. Save
6. Redeploy project

---

## 💡 Pro Tips

1. **Test Locally First**
   Create `.env.local` file in your project with same variables
   ```bash
   npm run dev
   ```
   Test at http://localhost:3000/contact

2. **Keep Password Secure**
   - Never commit `.env.local` to git (already in .gitignore)
   - Don't share your EMAIL_PASSWORD

3. **Monitor Logs**
   Check Vercel logs regularly to catch any issues early

4. **Email Limits**
   GoDaddy has daily sending limits (check your plan)

---

## 📱 Alternative Configuration

Want to receive at a different email? Change only EMAIL_TO:

```
EMAIL_USER = contact@axanail.com     (stays same)
EMAIL_FROM = contact@axanail.com     (stays same)
EMAIL_TO = your-personal@gmail.com   (changed)
```

This sends FROM your business email TO your personal email.

---

## ✨ Expected Result

When someone fills out your contact form:

1. They see: ✅ "Message sent successfully!"
2. You receive: 📧 Beautiful HTML email at contact@axanail.com
3. Email contains:
   - Their name
   - Their email (clickable to reply)
   - Their phone (if provided)
   - Their message
   - Timestamp
   - Professional Gellish branding

---

## 🎉 Success!

Once all variables are set and redeployed, your contact form will work automatically!

Every form submission → Instant email to contact@axanail.com

---

## 📞 Need More Help?

- **Full Guide:** See `VERCEL_GODADDY_SETUP.md`
- **Quick Reference:** See `QUICK_VERCEL_SETUP.txt`
- **Email Details:** See `EMAIL_SETUP.md`

---

**Last Updated:** For deployment with contact@axanail.com on Vercel

