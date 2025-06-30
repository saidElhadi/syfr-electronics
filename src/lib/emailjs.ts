import emailjs from '@emailjs/browser';

export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
};

export const sendEmail = async (templateParams: Record<string, unknown>) => {
  try {
    const result = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams,
      emailjsConfig.publicKey
    );
    return { success: true, result };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};

// Common country codes for phone numbers
export const countryCodes = [
  { code: '+1', country: 'US/CA', flag: '🇺🇸' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+33', country: 'FR', flag: '🇫🇷' },
  { code: '+49', country: 'DE', flag: '🇩🇪' },
  { code: '+39', country: 'IT', flag: '🇮🇹' },
  { code: '+34', country: 'ES', flag: '🇪🇸' },
  { code: '+31', country: 'NL', flag: '🇳🇱' },
  { code: '+32', country: 'BE', flag: '🇧🇪' },
  { code: '+41', country: 'CH', flag: '🇨🇭' },
  { code: '+43', country: 'AT', flag: '🇦🇹' },
  { code: '+45', country: 'DK', flag: '🇩🇰' },
  { code: '+46', country: 'SE', flag: '🇸🇪' },
  { code: '+47', country: 'NO', flag: '🇳🇴' },
  { code: '+358', country: 'FI', flag: '🇫🇮' },
  { code: '+351', country: 'PT', flag: '🇵🇹' },
  { code: '+353', country: 'IE', flag: '🇮🇪' },
  { code: '+30', country: 'GR', flag: '🇬🇷' },
  { code: '+48', country: 'PL', flag: '🇵🇱' },
  { code: '+420', country: 'CZ', flag: '🇨🇿' },
  { code: '+421', country: 'SK', flag: '🇸🇰' },
  { code: '+36', country: 'HU', flag: '🇭🇺' },
  { code: '+40', country: 'RO', flag: '🇷🇴' },
  { code: '+359', country: 'BG', flag: '🇧🇬' },
  { code: '+385', country: 'HR', flag: '🇭🇷' },
  { code: '+386', country: 'SI', flag: '🇸🇮' },
  { code: '+371', country: 'LV', flag: '🇱🇻' },
  { code: '+372', country: 'EE', flag: '🇪🇪' },
  { code: '+370', country: 'LT', flag: '🇱🇹' },
  { code: '+81', country: 'JP', flag: '🇯🇵' },
  { code: '+82', country: 'KR', flag: '🇰🇷' },
  { code: '+86', country: 'CN', flag: '🇨🇳' },
  { code: '+91', country: 'IN', flag: '🇮🇳' },
  { code: '+852', country: 'HK', flag: '🇭🇰' },
  { code: '+65', country: 'SG', flag: '🇸🇬' },
  { code: '+60', country: 'MY', flag: '🇲🇾' },
  { code: '+66', country: 'TH', flag: '🇹🇭' },
  { code: '+84', country: 'VN', flag: '🇻🇳' },
  { code: '+63', country: 'PH', flag: '🇵🇭' },
  { code: '+62', country: 'ID', flag: '🇮🇩' },
  { code: '+61', country: 'AU', flag: '🇦🇺' },
  { code: '+64', country: 'NZ', flag: '🇳🇿' },
  { code: '+55', country: 'BR', flag: '🇧🇷' },
  { code: '+52', country: 'MX', flag: '🇲🇽' },
  { code: '+54', country: 'AR', flag: '🇦🇷' },
  { code: '+56', country: 'CL', flag: '🇨🇱' },
  { code: '+57', country: 'CO', flag: '🇨🇴' },
  { code: '+51', country: 'PE', flag: '🇵🇪' },
  { code: '+58', country: 'VE', flag: '🇻🇪' },
  { code: '+27', country: 'ZA', flag: '🇿🇦' },
  { code: '+20', country: 'EG', flag: '🇪🇬' },
  { code: '+212', country: 'MA', flag: '🇲🇦' },
  { code: '+213', country: 'DZ', flag: '🇩🇿' },
  { code: '+216', country: 'TN', flag: '🇹🇳' },
  { code: '+218', country: 'LY', flag: '🇱🇾' },
  { code: '+971', country: 'AE', flag: '🇦🇪' },
  { code: '+966', country: 'SA', flag: '🇸🇦' },
  { code: '+965', country: 'KW', flag: '🇰🇼' },
  { code: '+974', country: 'QA', flag: '🇶🇦' },
  { code: '+973', country: 'BH', flag: '🇧🇭' },
  { code: '+968', country: 'OM', flag: '🇴🇲' },
  { code: '+962', country: 'JO', flag: '🇯🇴' },
  { code: '+961', country: 'LB', flag: '🇱🇧' },
  { code: '+963', country: 'SY', flag: '🇸🇾' },
  { code: '+964', country: 'IQ', flag: '🇮🇶' },
  { code: '+98', country: 'IR', flag: '🇮🇷' },
  { code: '+90', country: 'TR', flag: '🇹🇷' },
  { code: '+7', country: 'RU/KZ', flag: '🇷🇺' },
  { code: '+380', country: 'UA', flag: '🇺🇦' },
  { code: '+375', country: 'BY', flag: '🇧🇾' },
];
