# Contact Page Documentation

## 🎉 Contact Form Complete!

Your contact page is fully functional with email integration. Messages sent through the form will be delivered directly to your email address.

---

## 📁 What Was Created

### 1. Contact Page
**Location:** `/src/app/contact/page.tsx`

**Features:**
- ✅ Beautiful, responsive design
- ✅ Form validation (required fields)
- ✅ Real-time loading states
- ✅ Success/error messages
- ✅ Contact information cards
- ✅ FAQ section
- ✅ Social media links
- ✅ Mobile-friendly layout

### 2. API Route
**Location:** `/src/app/api/contact/route.ts`

**Features:**
- ✅ Handles form submissions
- ✅ Email validation
- ✅ Sends HTML formatted emails
- ✅ Error handling
- ✅ Beautiful email template with branding
- ✅ Nodemailer integration

### 3. Navigation
**Updated:** `/src/components/Header.tsx`
- ✅ Added "Contact" link to main navigation
- ✅ Works on mobile and desktop

---

## 🚀 Setup Instructions (3 Steps)

### Step 1: Install Dependencies

```bash
npm install
```

This installs `nodemailer` and type definitions.

### Step 2: Configure Email

Create a file named `.env.local` in the project root:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=your-email@gmail.com
```

**For Gmail:**
1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification
3. Create an App Password (under 2-Step Verification)
4. Use that 16-character password in `.env.local`

**See `EMAIL_SETUP.md` for detailed instructions!**

### Step 3: Start Development Server

```bash
npm run dev
```

Visit: **http://localhost:3000/contact**

---

## 📧 Form Fields

| Field | Required | Description |
|-------|----------|-------------|
| **Name** | Yes | Full name of sender |
| **Email** | Yes | Valid email address |
| **Phone** | No | Phone number (optional) |
| **Subject** | No | Message subject (optional) |
| **Message** | Yes | Main message content |

---

## 🎨 Design Features

### Contact Information Cards
- **Email**: support@gellish.com, sales@gellish.com
- **Phone**: +1 (555) 123-4567
- **Office**: 123 Beauty Street, Nail City, NC 12345

### Form Features
- Gradient header banner
- Card-based layout
- Hover effects on cards
- Loading spinner during submission
- Success message with checkmark
- Error messages with details
- Disabled state during loading

### FAQ Section
- Collapsible questions
- Smooth animations
- Common questions pre-answered:
  - Shipping times
  - International shipping
  - Return policy
  - Cruelty-free certification

---

## 📨 Email Template

When a user submits the form, you receive a beautifully formatted email:

**Subject:** `Contact Form: [Subject]` or `Contact Form: New Message from Gellish Website`

**Content:**
- Gellish branding header
- Sender's name, email, phone
- Subject (if provided)
- Full message
- Timestamp
- Professional formatting with gradients

---

## 🔧 Customization

### Update Contact Information

Edit `/src/app/contact/page.tsx`:

```tsx
// Around line 90-95
<div className="space-y-4">
  {/* Email Card */}
  <p className="text-gray-600 text-sm">your-email@example.com</p>
  
  {/* Phone Card */}
  <p className="text-gray-600 text-sm">+1 (555) YOUR-NUMBER</p>
  
  {/* Address Card */}
  <p className="text-gray-600 text-sm">Your Address Here</p>
</div>
```

### Change Email Template

Edit `/src/app/api/contact/route.ts`:

The HTML email template starts around line 40. Customize colors, text, and layout.

### Add More Form Fields

In `/src/app/contact/page.tsx`:

1. Add field to `formData` state
2. Add input field in the form JSX
3. Update API to accept new field

---

## 🧪 Testing

### Test the Form

1. Run `npm run dev`
2. Go to http://localhost:3000/contact
3. Fill out the form
4. Click "Send Message"
5. Check your email (configured in `EMAIL_TO`)

### Test API Directly

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

Expected response:
```json
{"message": "Email sent successfully"}
```

---

## ⚡ API Endpoint

**URL:** `/api/contact`  
**Method:** `POST`  
**Content-Type:** `application/json`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",    // optional
  "subject": "Inquiry",      // optional
  "message": "Your message here"
}
```

**Success Response (200):**
```json
{
  "message": "Email sent successfully"
}
```

**Error Response (400):**
```json
{
  "error": "Name, email, and message are required"
}
```

**Error Response (500):**
```json
{
  "error": "Failed to send email. Please try again later."
}
```

---

## 🔒 Security

✅ **Included:**
- Email validation (regex check)
- Required field validation
- Environment variables for credentials
- HTTPS recommended for production
- .env.local excluded from git

⚠️ **Recommendations:**
- Add rate limiting for production
- Use CAPTCHA to prevent spam
- Consider using a dedicated email service (SendGrid, Mailgun)

---

## 🌐 Navigation Access

The contact page is accessible from:
- Main navigation: "Contact" link
- Footer: "Contact Us" link (if added)
- Direct URL: `/contact`

---

## 📱 Responsive Design

**Mobile (< 768px):**
- Single column layout
- Stacked contact cards
- Full-width form
- Mobile-friendly navigation

**Tablet (768px - 1024px):**
- 2-column grid
- Side-by-side cards
- Optimized spacing

**Desktop (> 1024px):**
- 3-column layout
- Contact info sidebar
- Large form area
- Full navigation menu

---

## 🚀 Deployment

### Environment Variables

Add to your hosting platform (Vercel, Netlify, etc.):

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=your-email@gmail.com
```

### Vercel Deployment

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables in Settings
4. Deploy!

---

## 📊 Form States

1. **Idle**: Initial state, form ready
2. **Loading**: Sending email, button disabled
3. **Success**: Email sent, green message shown
4. **Error**: Failed to send, red message shown

Auto-reset to idle after 5 seconds on success.

---

## 🎯 Features Checklist

✅ Contact form with validation  
✅ Email sending via API  
✅ Beautiful HTML email template  
✅ Loading states and animations  
✅ Success/error messages  
✅ Contact information display  
✅ FAQ section  
✅ Responsive design  
✅ Navigation integration  
✅ TypeScript typed  
✅ Environment variable configuration  

---

## 💡 Tips

1. **Gmail Users**: Use App Passwords, not regular passwords
2. **Production**: Consider SendGrid or Mailgun for reliability
3. **Testing**: Check spam folder if emails don't arrive
4. **Customization**: All text is easily editable in the component files

---

## 📚 Related Files

- Contact Page: `/src/app/contact/page.tsx`
- API Route: `/src/app/api/contact/route.ts`
- Navigation: `/src/components/Header.tsx`
- Email Setup Guide: `/EMAIL_SETUP.md`

---

## 🆘 Troubleshooting

**"Failed to send email"**
- Check `.env.local` exists and has correct values
- Restart dev server after changing .env.local
- Verify SMTP credentials

**"Invalid email format"**
- Ensure email address contains @ and domain

**Console errors**
- Open browser console (F12) for detailed errors
- Check terminal for server-side errors

**No email received**
- Check spam/junk folder
- Verify `EMAIL_TO` is correct
- Test SMTP credentials with email client

---

## 🎉 You're All Set!

Your contact page is ready to receive messages. Just configure your email settings in `.env.local` and you're good to go!

**Need help?** Check `EMAIL_SETUP.md` for detailed email configuration instructions.

