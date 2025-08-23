# Contact Configuration Setup

## Environment Variables

Create a `.env` file in your project root with the following variables:

```bash
# Contact Information
NEXT_PUBLIC_WHATSAPP_NUMBER=+37256018191
NEXT_PUBLIC_CONTACT_EMAIL=kumail@saltgis.eu
```

## Current Contact Behavior

- **Services Component**: All contact buttons use email (kumail@saltgis.eu) - **DIRECT EMAIL**
- **Contact Page**: Fully functional contact form that sends emails to kumail@saltgis.eu
- **Other Components**: Contact buttons redirect to `/contact` page
- **WhatsApp**: Available through contact configuration and contact page

## How to Update Contact Information

1. Update the values in `.env` file
2. Restart your development server after making changes
3. The contact information will automatically update throughout the site

## Contact Page Features

- **Contact Form**: Name, email, and message fields that send emails directly
- **Contact Information Display**: Shows email, phone, and location from environment variables
- **Direct Action Buttons**: WhatsApp and Email buttons for immediate contact
- **Form Validation**: Required fields with proper error handling

## Security Note

The `NEXT_PUBLIC_` prefix makes these variables available in the browser. Only use this for non-sensitive information that's safe to expose publicly.

## Troubleshooting

If contact information doesn't update:
1. Make sure `.env` file is in the project root
2. Restart your development server
3. Check that environment variables are properly named with `NEXT_PUBLIC_` prefix 