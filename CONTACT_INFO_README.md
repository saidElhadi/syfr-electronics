# Contact Information Management

This project now uses centralized contact information stored in `/src/data/contact.ts`. This approach provides consistency across the application and makes it easy to update contact details from a single location.

## File Location
```
/src/data/contact.ts
```

## What's Included

The contact information includes:
- Company name
- Phone numbers (formatted and unformatted)
- Email address
- Physical address (with individual components and full address)
- Website URL
- Social media links (LinkedIn, Twitter, Facebook)
- Business hours
- Company founding year
- Employee count
- Company description

## How to Use

### Import the contact information:
```typescript
import { contactInfo, getContactEmail, getContactPhone, getFormattedAddress } from '@/data/contact';
```

### Using the full contactInfo object:
```typescript
const CompanyCard = () => {
  return (
    <div>
      <h3>{contactInfo.company}</h3>
      <p>Phone: {contactInfo.phoneFormatted}</p>
      <p>Email: {contactInfo.email}</p>
      <p>Address: {contactInfo.address.full}</p>
    </div>
  );
};
```

### Using helper functions:
```typescript
const ContactSection = () => {
  return (
    <div>
      <a href={`tel:${getContactPhone()}`}>Call Us</a>
      <a href={`mailto:${getContactEmail()}`}>Email Us</a>
      <p>{getFormattedAddress(true)}</p> {/* multiline = true */}
    </div>
  );
};
```

## Available Helper Functions

- `getFormattedAddress(multiline?: boolean)` - Returns formatted address
- `getContactEmail()` - Returns email address
- `getContactPhone(formatted?: boolean)` - Returns phone number
- `getCompanyName()` - Returns company name
- `getSocialLinks()` - Returns social media links object
- `getBusinessHours(formatted?: boolean)` - Returns business hours

## Files Updated

The following files have been updated to use the centralized contact information:

1. **Footer Component** (`/src/components/Footer.tsx`)
   - Company contact details in footer

2. **Navigation Component** (`/src/components/Navigation.tsx`)
   - Company name in header

3. **Contact Page** (`/src/app/[locale]/contact/page.tsx`)
   - Contact information display

4. **Structured Data** (`/src/components/StructuredData.tsx`)
   - SEO schema markup for organization, website, and services

## Benefits

1. **Consistency**: All contact information is consistent across the application
2. **Maintainability**: Update contact details in one place
3. **Type Safety**: TypeScript interface ensures correct data structure
4. **Helper Functions**: Convenient functions for common formatting needs
5. **SEO**: Consistent structured data for search engines

## Making Changes

To update contact information:

1. Edit `/src/data/contact.ts`
2. Update the `contactInfo` object with new details
3. All components using this data will automatically reflect the changes

## Examples

See `/src/examples/contact-usage-examples.tsx` for more examples of how to use the contact information in different components.
