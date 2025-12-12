# Google Ads Sitelinks URL Guide

This document lists all available URL hash fragments for Google Ads Sitelinks. Each URL will automatically scroll to the corresponding section when clicked.

## Available Sitelink URLs

### Main Sections

| Sitelink Text | URL | Description |
|--------------|-----|-------------|
| Apply Now | `https://cashbearloan.com/#apply` | Opens the Quick Start application modal |
| Loan Calculator | `https://cashbearloan.com/#calculator` | Scrolls to the loan calculator section |
| Benefits | `https://cashbearloan.com/#benefits` | Scrolls to the benefits section |
| FAQ | `https://cashbearloan.com/#faq` | Scrolls to frequently asked questions |
| Eligibility | `https://cashbearloan.com/#eligibility` | Scrolls to eligibility requirements |
| Payment Plans | `https://cashbearloan.com/#plans` | Scrolls to payment plan options |
| How It Works | `https://cashbearloan.com/#process` | Scrolls to application process |
| Customer Reviews | `https://cashbearloan.com/#testimonials` | Scrolls to customer testimonials |
| Trust & Security | `https://cashbearloan.com/#trust` | Scrolls to trust and security section |
| State Availability | `https://cashbearloan.com/#states` | Scrolls to state availability information |

## Recommended Sitelinks for Google Ads

Based on conversion optimization, we recommend using these sitelinks:

### Primary Sitelinks (Required - 2 minimum)
1. **Apply Now** - `/#apply`
2. **Loan Calculator** - `/#calculator`

### Additional Sitelinks (Optional - up to 4 more)
3. **FAQ** - `/#faq`
4. **Eligibility** - `/#eligibility`
5. **Payment Plans** - `/#plans`
6. **How It Works** - `/#process`

## Google Ads Setup Instructions

1. Go to your Google Ads campaign
2. Navigate to "Ads & extensions" > "Extensions"
3. Click the "+" button and select "Sitelink extension"
4. For each sitelink:
   - **Sitelink text**: Use the text from the table above (e.g., "Apply Now")
   - **Final URL**: Use the full URL with hash (e.g., `https://cashbearloan.com/#apply`)
   - **Description line 1**: Add relevant description (optional)
   - **Description line 2**: Add relevant description (optional)

## Technical Implementation

- All hash URLs are automatically detected on page load
- Smooth scrolling with header offset compensation (80px)
- Support for lazy-loaded sections with 1-second delay
- Works with both direct navigation and in-page hash changes
- Special handling for `#apply` to open application modal

## Testing

Test each URL by:
1. Opening the URL directly in browser
2. Verifying smooth scroll to correct section
3. Checking that content is not hidden behind the fixed header
4. Testing on mobile and desktop devices

## Notes

- URLs are case-sensitive
- Hash fragments work without JavaScript fallback by using native anchor behavior
- All sections maintain proper scroll position across different screen sizes
- Performance optimized with lazy loading for below-fold content
