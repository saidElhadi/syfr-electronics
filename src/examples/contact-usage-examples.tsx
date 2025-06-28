// Example usage of the contact information in components

import { contactInfo, getContactEmail, getContactPhone, getFormattedAddress } from '@/data/contact';

// Example 1: Using the full contactInfo object
const ContactCard = () => {
  return (
    <div className="contact-card">
      <h3>{contactInfo.company}</h3>
      <p>{contactInfo.description}</p>
      <div>
        <p>Phone: {contactInfo.phoneFormatted}</p>
        <p>Email: {contactInfo.email}</p>
        <p>Address: {getFormattedAddress()}</p>
      </div>
    </div>
  );
};

// Example 2: Using helper functions
const QuickContact = () => {
  return (
    <div className="quick-contact">
      <a href={`tel:${getContactPhone()}`}>
        Call {getContactPhone(true)}
      </a>
      <a href={`mailto:${getContactEmail()}`}>
        Email Us
      </a>
    </div>
  );
};

// Example 3: Using specific contact info pieces
const BusinessHours = () => {
  return (
    <div className="business-hours">
      <h4>Business Hours</h4>
      <p>{contactInfo.businessHours.weekdays}</p>
      <p>{contactInfo.businessHours.saturday}</p>
      <p>{contactInfo.businessHours.sunday}</p>
    </div>
  );
};

// Example 4: Social media links
const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
      <a href={contactInfo.social.twitter} target="_blank" rel="noopener noreferrer">
        Twitter
      </a>
      <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </div>
  );
};

export { ContactCard, QuickContact, BusinessHours, SocialLinks };
