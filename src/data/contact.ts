// Centralized contact information for SyFr Electronics
export interface ContactInfo {
  company: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    full: string;
  };
  website: string;
  social: {
    linkedin: string;
    twitter: string;
    facebook: string;
  };
  businessHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    full: string;
  };
  foundingYear: string;
  employees: string;
  description: string;
}

export const contactInfo: ContactInfo = {
  company: "SYFR Electronics",
  phone: "+86-177-2464-9726",
  phoneFormatted: "+86 177 2464 9726",
  email: "info@syfrelectronics.com",
  address: {
    street: "345 Huaqiang North Road, Futian District",
    city: "Shenzhen",
    state: "Guangdong",
    postalCode: "518000",
    country: "CN",
    full: "345 Huaqiang North Road, Futian District, Shenzhen, Guangdong 518000"
  },
  website: "https://syfrelectronics.com",
  social: {
    linkedin: "https://www.linkedin.com/company/syfrelectronics",
    twitter: "https://twitter.com/syfrelectronics",
    facebook: "https://www.facebook.com/syfrelectronics"
  },
  businessHours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
    saturday: "Saturday: 10:00 AM - 4:00 PM",
    sunday: "Sunday: Closed",
    full: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed"
  },
  foundingYear: "2008",
  employees: "50-100",
  description: "Professional LED display solutions provider specializing in outdoor, indoor, and curved LED displays with complete parts and installation services."
};

// Helper functions for common contact info formats
export const getFormattedAddress = (multiline: boolean = false): string => {
  if (multiline) {
    return `${contactInfo.address.street}\n${contactInfo.address.city}, ${contactInfo.address.state} ${contactInfo.address.postalCode}`;
  }
  return contactInfo.address.full;
};

export const getContactEmail = (): string => {
  return contactInfo.email;
};

export const getContactPhone = (formatted: boolean = false): string => {
  return formatted ? contactInfo.phoneFormatted : contactInfo.phone;
};

export const getCompanyName = (): string => {
  return contactInfo.company;
};

export const getSocialLinks = () => {
  return contactInfo.social;
};

export const getBusinessHours = (formatted: boolean = false): string => {
  return formatted ? contactInfo.businessHours.full : contactInfo.businessHours.full;
};
