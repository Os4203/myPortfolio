# Quick EmailJS Setup - Find Your Credentials

## Step 1: Create Account
1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** (top right)
3. Create account with your email

## Step 2: Find Your PUBLIC KEY
1. After login, click **"Account"** in the left sidebar
2. Click **"General"** tab
3. Look for **"Public Key"** section
4. Copy the key (looks like: `abcd1234efgh5678`)

## Step 3: Create Email Service
1. Click **"Email Services"** in left sidebar
2. Click **"Add New Service"**
3. Choose **"Gmail"** (or your email provider)
4. Follow setup wizard to connect your Gmail
5. After setup, you'll see your **Service ID** (looks like: `service_abc123`)

## Step 4: Create Email Template
1. Click **"Email Templates"** in left sidebar
2. Click **"Create New Template"**
3. Set **Template Name**: "Portfolio Contact"
4. Set **Subject**: `New Contact: {{from_name}}`
5. Set **Content**:
```
Hello Osama,

You have a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio
```
6. Click **"Save"**
7. Copy your **Template ID** (looks like: `template_xyz789`)

## Step 5: Update Your Code
Replace these lines in `src/components/Contact.jsx`:

```javascript
const serviceID = 'service_abc123';     // Your Service ID from step 3
const templateID = 'template_xyz789';   // Your Template ID from step 4  
const publicKey = 'abcd1234efgh5678';   // Your Public Key from step 2
```

## Important Notes:
- **Free account**: 200 emails/month (perfect for portfolio)
- **All IDs are unique** to your account
- **Test it**: Send yourself a test email first
- **Keep credentials safe**: Don't share them publicly

## Current Status:
Right now your form uses **mailto fallback** (opens email client). Once you add real credentials, it will send emails directly!

## Need Help?
- EmailJS Dashboard: https://dashboard.emailjs.com/
- Their docs: https://www.emailjs.com/docs/
- Your form already works with mailto - EmailJS just makes it better! 