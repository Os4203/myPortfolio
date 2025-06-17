# EmailJS Setup Guide

To make your contact form send emails directly to your inbox, you need to set up EmailJS. Follow these steps:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Note down the **Service ID** (it will look like `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

**Subject:** New Contact Form Submission - Portfolio

**Content:**
```
Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Save the template and note down the **Template ID** (it will look like `template_xxxxxxx`)

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (it will look like a random string)

## Step 5: Update Your Code
Replace the placeholders in `src/components/Contact.jsx`:

```javascript
const serviceID = 'your_service_id_here';     // Replace with your Service ID
const templateID = 'your_template_id_here';   // Replace with your Template ID  
const publicKey = 'your_public_key_here';     // Replace with your Public Key
```

## Step 6: Test Your Form
1. Save your changes
2. Run your development server: `npm run dev`
3. Fill out the contact form and submit
4. Check your email inbox for the message

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Perfect for portfolio websites

## Need Help?
If you encounter any issues:
1. Check the browser console for error messages
2. Verify all IDs and keys are correct
3. Make sure your email service is properly connected
4. Check EmailJS dashboard for failed sends

Your contact form will now send emails directly to your inbox without requiring users to open their email client! 