# Google Form Setup Instructions

## How to Create and Integrate Your Contact Form

Follow these steps to replace the contact form with your own Google Form:

### 1. Create a Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click **"+ Blank"** to create a new form
3. Give it a title: **"Contact Us - Prestige Academy"**

### 2. Add Form Fields

Add the following fields to match the original contact form:

1. **Full Name** (Short answer, Required)
   - Click "+ Add question"
   - Select "Short answer"
   - Label: "Full Name"
   - Toggle "Required" ON

2. **Email Address** (Short answer, Required)
   - Click "+ Add question"
   - Select "Short answer"
   - Label: "Email Address"
   - Toggle "Required" ON
   - Click the three dots (⋮) → Data validation
   - Select "Text" → "Email"

3. **Phone Number** (Short answer, Optional)
   - Click "+ Add question"
   - Select "Short answer"
   - Label: "Phone Number"
   - Leave "Required" OFF

4. **Subject** (Short answer, Required)
   - Click "+ Add question"
   - Select "Short answer"
   - Label: "Subject"
   - Toggle "Required" ON

5. **Message** (Paragraph, Required)
   - Click "+ Add question"
   - Select "Paragraph"
   - Label: "Message"
   - Toggle "Required" ON

### 3. Customize Form Settings

1. Click the **Settings** gear icon (⚙️) at the top
2. Under **General**:
   - ✅ Collect email addresses (optional but recommended)
   - ✅ Limit to 1 response (optional)
   - ✅ Edit after submit (if you want users to edit responses)

3. Under **Presentation**:
   - ✅ Show progress bar
   - Add a confirmation message:
     ```
     Thank you for contacting Prestige Academy!
     We'll get back to you within 24-48 hours.
     ```

4. Click **Save**

### 4. Get Your Form URL

1. Click the **Send** button (top right)
2. Click the **Link** icon (🔗)
3. **IMPORTANT**: Check "Shorten URL" to get a cleaner link
4. Click **Copy**

Your URL will look like:
```
https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform
```

### 5. Update Your Website

Open the file: `src/pages/Contact.tsx`

Find this line (around line 38):
```typescript
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";
```

Replace it with your copied URL:
```typescript
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform";
```

### 6. Choose Your Display Option

The contact page includes TWO options for displaying the form:

#### Option 1: Button (Default - Recommended)
- Opens the Google Form in a new tab
- Cleaner, faster loading
- Better mobile experience
- **Already active** - no changes needed

#### Option 2: Embedded Form
If you prefer to embed the form directly on the page:

1. In `Contact.tsx`, find the commented section (around line 200)
2. **Uncomment** the iframe section:
   ```jsx
   {/* OPTION 2: Embedded Google Form (Uncomment to use instead of button) */}
   ```
3. **Comment out** or delete the OPTION 1 section (lines 149-198)

### 7. Set Up Email Notifications

To receive email notifications when someone submits the form:

1. In your Google Form, click **Responses** tab
2. Click the three dots (⋮) → **Get email notifications for new responses**
3. ✅ Enable email notifications

### 8. View Responses

All form submissions are automatically saved to Google Sheets:

1. In your Google Form, click **Responses** tab
2. Click the **Google Sheets** icon (📊)
3. Click **Create a new spreadsheet**
4. Name it: "Contact Form Responses - Prestige Academy"

Now all submissions will be organized in a spreadsheet!

### 9. Optional: Customize Form Theme

1. Click the **Customize theme** palette icon (🎨)
2. Match your website colors:
   - **Header color**: #1E3A5F (Navy - matches your site)
   - **Background color**: #FFFFFF (White)
   - **Question text color**: #1E3A5F (Navy)

---

## Troubleshooting

### Form opens but looks plain
- Make sure you customized the theme in step 9

### Button says "YOUR_FORM_ID"
- You forgot to replace the URL in `Contact.tsx` (step 5)

### Form not showing up
- Clear your browser cache
- Restart the development server: `npm run dev`

### Want to switch between button/embedded?
- See step 6 above for instructions

---

## Need Help?

If you need assistance:
1. Check that your Google Form is set to "Anyone with the link can respond"
2. Verify the URL is correct in `Contact.tsx`
3. Make sure you saved the file after making changes

---

**That's it!** Your contact form is now powered by Google Forms with automatic email notifications and response tracking. 🎉
