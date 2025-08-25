// Contact configuration
export const contactConfig = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+37256018191",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sales@saltgis.eu",
  phone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+37256018191"
};

// Helper functions for contact actions
export const openWhatsApp = (message?: string) => {
  const defaultMessage = "Hello! I'm interested in SaltGIS services.";
  const text = encodeURIComponent(message || defaultMessage);
  const url = `https://wa.me/${contactConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`;
  window.open(url, '_blank');
};

export const openEmail = (subject?: string, body?: string) => {
  const defaultSubject = "SaltGIS Services Inquiry";
  const defaultBody = "Hello,\n\nI'm interested in learning more about SaltGIS services.\n\nBest regards,";
  
  const mailtoUrl = `mailto:${contactConfig.email}?subject=${encodeURIComponent(subject || defaultSubject)}&body=${encodeURIComponent(body || defaultBody)}`;
  window.open(mailtoUrl, '_blank');
}; 