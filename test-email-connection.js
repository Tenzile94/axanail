// Test Email Connection Script
// Run this to verify your SMTP credentials work
// Usage: node test-email-connection.js

const nodemailer = require('nodemailer');

// 📧 ENTER YOUR CREDENTIALS HERE:
const config = {
  host: 'smtp-mail.outlook.com', // or smtp.gmail.com
  port: 587,
  secure: false, // true for 465, false for 587
  auth: {
    user: 'contact@axanail.com',    // ⬅️ YOUR EMAIL
    pass: 'your-password-here',      // ⬅️ YOUR PASSWORD
  },
};

console.log('🧪 Testing SMTP Connection...');
console.log('📧 Configuration:', {
  host: config.host,
  port: config.port,
  user: config.auth.user,
  pass: config.auth.pass ? '***' + config.auth.pass.slice(-4) : 'NOT SET',
});
console.log('');

const transporter = nodemailer.createTransport(config);

// Test connection
transporter.verify(function (error, success) {
  if (error) {
    console.log('❌ CONNECTION FAILED!');
    console.log('');
    console.log('Error Details:');
    console.log('  Code:', error.code);
    console.log('  Message:', error.message);
    console.log('  Command:', error.command);
    console.log('');
    console.log('💡 Common Fixes:');
    console.log('  1. Check your username is correct');
    console.log('  2. Check your password is correct');
    console.log('  3. For 2FA accounts, use App Password');
    console.log('  4. For Outlook, try: smtp-mail.outlook.com');
    console.log('  5. For Gmail, enable "Less secure app access" or use App Password');
    console.log('');
  } else {
    console.log('✅ CONNECTION SUCCESSFUL!');
    console.log('');
    console.log('Your SMTP settings are correct!');
    console.log('You can now use these credentials in your .env.local file');
    console.log('');
    console.log('Next steps:');
    console.log('1. Copy these settings to .env.local');
    console.log('2. Add them to Vercel Environment Variables');
    console.log('3. Restart your dev server: npm run dev');
    console.log('4. Test the contact form');
  }
});

