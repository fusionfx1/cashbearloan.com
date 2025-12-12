# Random Test Data Generator

This utility generates valid random US addresses and phone numbers for testing purposes.

## Features

- Generate random valid US phone numbers
- Generate random valid US addresses (street, city, state, ZIP)
- Generate complete contact information (name, phone, email, address)
- Generate multiple contacts at once

## Usage

### Access the Demo Page

You can access the interactive demo page by opening the browser console and running:

```javascript
window.navigateToTestData()
```

Or by directly navigating to the test data page in your application.

### Import the Functions

```javascript
import {
  generateRandomContactInfo,
  generateRandomPhone,
  generateRandomAddress,
  generateMultipleContacts
} from './utils/testDataGenerator';
```

### Generate a Single Contact

```javascript
const contact = generateRandomContactInfo();

console.log(contact);
// Output:
// {
//   firstName: "James",
//   lastName: "Smith",
//   phone: "(212) 555-1234",
//   email: "james.smith@gmail.com",
//   address: {
//     street: "1234 Main St",
//     city: "New York",
//     state: "NY",
//     zipCode: "10001",
//     fullAddress: "1234 Main St, New York, NY 10001"
//   }
// }
```

### Generate Just a Phone Number

```javascript
const phone = generateRandomPhone();
console.log(phone); // "(555) 123-4567"
```

### Generate Just an Address

```javascript
const address = generateRandomAddress();
console.log(address);
// Output:
// {
//   street: "5678 Oak Ave",
//   city: "Los Angeles",
//   state: "CA",
//   zipCode: "90001",
//   fullAddress: "5678 Oak Ave, Los Angeles, CA 90001"
// }
```

### Generate Multiple Contacts

```javascript
const contacts = generateMultipleContacts(10);
console.log(contacts.length); // 10

contacts.forEach(contact => {
  console.log(`${contact.firstName} ${contact.lastName}`);
  console.log(contact.phone);
  console.log(contact.address.fullAddress);
});
```

## Data Format

### Phone Numbers
- Format: `(XXX) XXX-XXXX`
- Uses valid US area codes
- All digits are randomized within valid ranges

### Addresses
- Street numbers: 100-9999
- Real US city names with correct state codes
- Valid ZIP codes for each city
- Various street names and types (St, Ave, Rd, Blvd, etc.)

### Email Addresses
- Generated based on first and last name
- Uses common email providers (Gmail, Yahoo, Hotmail, Outlook, iCloud)
- Multiple format variations

### Names
- Common US first names
- Common US last names
- Randomly combined to create realistic full names

## API Reference

### `generateRandomContactInfo()`
Returns a complete contact object with all information.

**Returns:** `RandomContactInfo`

### `generateRandomPhone()`
Returns a random valid US phone number.

**Returns:** `string` - Format: `(XXX) XXX-XXXX`

### `generateRandomAddress()`
Returns a random valid US address object.

**Returns:** `RandomAddress`

### `generateMultipleContacts(count: number)`
Generates multiple random contacts.

**Parameters:**
- `count` - Number of contacts to generate

**Returns:** `RandomContactInfo[]`

## Types

```typescript
interface RandomAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  fullAddress: string;
}

interface RandomContactInfo {
  phone: string;
  address: RandomAddress;
  email: string;
  firstName: string;
  lastName: string;
}
```

## Notes

- All generated data is for **testing purposes only**
- Phone numbers use area codes that exist but may not be in active use
- Addresses are realistic but fictional
- Email addresses are generated and not real accounts
