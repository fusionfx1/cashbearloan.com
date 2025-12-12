import {
  generateRandomContactInfo,
  generateRandomPhone,
  generateRandomAddress,
  generateMultipleContacts
} from '../utils/testDataGenerator';

export const testDataExamples = () => {
  console.log('=== Test Data Generator Examples ===\n');

  console.log('1. Generate a single contact:');
  const contact = generateRandomContactInfo();
  console.log('Full Name:', `${contact.firstName} ${contact.lastName}`);
  console.log('Phone:', contact.phone);
  console.log('Email:', contact.email);
  console.log('Address:', contact.address.fullAddress);
  console.log('');

  console.log('2. Generate just a phone number:');
  const phone = generateRandomPhone();
  console.log('Phone:', phone);
  console.log('');

  console.log('3. Generate just an address:');
  const address = generateRandomAddress();
  console.log('Street:', address.street);
  console.log('City:', address.city);
  console.log('State:', address.state);
  console.log('ZIP:', address.zipCode);
  console.log('Full Address:', address.fullAddress);
  console.log('');

  console.log('4. Generate 5 contacts:');
  const contacts = generateMultipleContacts(5);
  contacts.forEach((c, index) => {
    console.log(`Contact ${index + 1}:`);
    console.log(`  Name: ${c.firstName} ${c.lastName}`);
    console.log(`  Phone: ${c.phone}`);
    console.log(`  Email: ${c.email}`);
    console.log(`  Address: ${c.address.fullAddress}`);
    console.log('');
  });

  console.log('5. Fill a form with random data:');
  const formData = generateRandomContactInfo();
  const filledForm = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phone: formData.phone,
    street: formData.address.street,
    city: formData.address.city,
    state: formData.address.state,
    zipCode: formData.address.zipCode
  };
  console.log('Form Data:', filledForm);
  console.log('');

  console.log('=== Examples Complete ===');
};

export const fillFormWithTestData = (formId: string) => {
  const contact = generateRandomContactInfo();
  const form = document.getElementById(formId) as HTMLFormElement;

  if (!form) {
    console.error(`Form with id "${formId}" not found`);
    return null;
  }

  const fields: { [key: string]: string } = {
    firstName: contact.firstName,
    first_name: contact.firstName,
    fname: contact.firstName,
    lastName: contact.lastName,
    last_name: contact.lastName,
    lname: contact.lastName,
    email: contact.email,
    phone: contact.phone,
    telephone: contact.phone,
    street: contact.address.street,
    address: contact.address.street,
    street_address: contact.address.street,
    city: contact.address.city,
    state: contact.address.state,
    zip: contact.address.zipCode,
    zipCode: contact.address.zipCode,
    zip_code: contact.address.zipCode,
    postalCode: contact.address.zipCode
  };

  const inputs = form.querySelectorAll('input, select');
  inputs.forEach((input: any) => {
    const name = input.name || input.id;
    if (name && fields[name]) {
      input.value = fields[name];

      const event = new Event('input', { bubbles: true });
      input.dispatchEvent(event);
    }
  });

  console.log('Form filled with test data:', contact);
  return contact;
};

export const autoFillAnyForm = () => {
  const forms = document.querySelectorAll('form');
  if (forms.length === 0) {
    console.log('No forms found on the page');
    return;
  }

  forms.forEach((form, index) => {
    const formId = form.id || `form-${index}`;
    if (!form.id) {
      form.id = formId;
    }
    console.log(`Filling form: ${formId}`);
    fillFormWithTestData(formId);
  });
};

if (typeof window !== 'undefined') {
  (window as any).testDataExamples = testDataExamples;
  (window as any).fillFormWithTestData = fillFormWithTestData;
  (window as any).autoFillAnyForm = autoFillAnyForm;
  (window as any).generateRandomContactInfo = generateRandomContactInfo;
  (window as any).generateRandomPhone = generateRandomPhone;
  (window as any).generateRandomAddress = generateRandomAddress;
  (window as any).generateMultipleContacts = generateMultipleContacts;
}
