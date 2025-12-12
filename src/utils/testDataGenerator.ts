export interface RandomAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  fullAddress: string;
}

export interface RandomContactInfo {
  phone: string;
  address: RandomAddress;
  email: string;
  firstName: string;
  lastName: string;
}

const firstNames = [
  'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph',
  'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica',
  'Thomas', 'Charles', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Donald',
  'Sarah', 'Karen', 'Nancy', 'Lisa', 'Betty', 'Margaret', 'Sandra', 'Ashley'
];

const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
  'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas',
  'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Thompson', 'White', 'Harris',
  'Clark', 'Lewis', 'Robinson', 'Walker', 'Young', 'Allen', 'King', 'Wright'
];

const streetNames = [
  'Main', 'Oak', 'Maple', 'Cedar', 'Elm', 'Washington', 'Lake', 'Hill',
  'Park', 'Pine', 'River', 'Sunset', 'Lincoln', 'Madison', 'Spring', 'Church',
  'Forest', 'Valley', 'Walnut', 'Cherry', 'Willow', 'Highland', 'Meadow', 'Franklin'
];

const streetTypes = ['St', 'Ave', 'Rd', 'Blvd', 'Dr', 'Ln', 'Way', 'Ct'];

const cities = [
  { name: 'Springfield', state: 'IL', zip: '62701' },
  { name: 'Madison', state: 'WI', zip: '53703' },
  { name: 'Austin', state: 'TX', zip: '78701' },
  { name: 'Portland', state: 'OR', zip: '97201' },
  { name: 'Denver', state: 'CO', zip: '80201' },
  { name: 'Seattle', state: 'WA', zip: '98101' },
  { name: 'Phoenix', state: 'AZ', zip: '85001' },
  { name: 'Atlanta', state: 'GA', zip: '30301' },
  { name: 'Boston', state: 'MA', zip: '02101' },
  { name: 'Charlotte', state: 'NC', zip: '28201' },
  { name: 'Columbus', state: 'OH', zip: '43201' },
  { name: 'Dallas', state: 'TX', zip: '75201' },
  { name: 'Detroit', state: 'MI', zip: '48201' },
  { name: 'Houston', state: 'TX', zip: '77001' },
  { name: 'Indianapolis', state: 'IN', zip: '46201' },
  { name: 'Jacksonville', state: 'FL', zip: '32099' },
  { name: 'Kansas City', state: 'MO', zip: '64101' },
  { name: 'Las Vegas', state: 'NV', zip: '89101' },
  { name: 'Memphis', state: 'TN', zip: '37501' },
  { name: 'Milwaukee', state: 'WI', zip: '53201' },
  { name: 'Minneapolis', state: 'MN', zip: '55401' },
  { name: 'Nashville', state: 'TN', zip: '37201' },
  { name: 'Oklahoma City', state: 'OK', zip: '73101' },
  { name: 'Omaha', state: 'NE', zip: '68101' },
  { name: 'Philadelphia', state: 'PA', zip: '19101' },
  { name: 'Raleigh', state: 'NC', zip: '27601' },
  { name: 'Sacramento', state: 'CA', zip: '94203' },
  { name: 'Salt Lake City', state: 'UT', zip: '84101' },
  { name: 'San Antonio', state: 'TX', zip: '78201' },
  { name: 'San Diego', state: 'CA', zip: '92101' },
  { name: 'San Francisco', state: 'CA', zip: '94101' },
  { name: 'Tampa', state: 'FL', zip: '33601' }
];

const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomItem = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const generateRandomPhone = (): string => {
  const areaCodes = [
    '201', '202', '203', '205', '206', '207', '210', '212', '213', '214',
    '215', '216', '217', '219', '224', '225', '228', '229', '231', '234',
    '239', '240', '248', '251', '252', '253', '254', '256', '260', '262',
    '267', '269', '270', '272', '281', '301', '302', '303', '304', '305',
    '307', '308', '309', '310', '312', '313', '314', '315', '316', '317',
    '318', '319', '320', '321', '323', '325', '330', '331', '334', '336',
    '337', '339', '347', '351', '352', '360', '361', '364', '385', '386',
    '401', '402', '404', '405', '406', '407', '408', '409', '410', '412',
    '413', '414', '415', '417', '419', '423', '424', '425', '430', '432',
    '434', '435', '440', '442', '443', '458', '469', '470', '475', '478'
  ];

  const areaCode = randomItem(areaCodes);
  const exchange = random(200, 999);
  const number = random(1000, 9999);

  return `(${areaCode}) ${exchange}-${number}`;
};

export const generateRandomAddress = (): RandomAddress => {
  const streetNumber = random(100, 9999);
  const streetName = randomItem(streetNames);
  const streetType = randomItem(streetTypes);
  const cityInfo = randomItem(cities);

  const street = `${streetNumber} ${streetName} ${streetType}`;
  const fullAddress = `${street}, ${cityInfo.name}, ${cityInfo.state} ${cityInfo.zip}`;

  return {
    street,
    city: cityInfo.name,
    state: cityInfo.state,
    zipCode: cityInfo.zip,
    fullAddress
  };
};

export const generateRandomEmail = (firstName: string, lastName: string): string => {
  const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com'];
  const domain = randomItem(domains);
  const formats = [
    `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`,
    `${firstName.toLowerCase()}${lastName.toLowerCase()}@${domain}`,
    `${firstName.toLowerCase()}${random(1, 999)}@${domain}`,
    `${firstName.toLowerCase()}.${lastName.toLowerCase()}${random(1, 99)}@${domain}`
  ];

  return randomItem(formats);
};

export const generateRandomContactInfo = (): RandomContactInfo => {
  const firstName = randomItem(firstNames);
  const lastName = randomItem(lastNames);
  const phone = generateRandomPhone();
  const address = generateRandomAddress();
  const email = generateRandomEmail(firstName, lastName);

  return {
    firstName,
    lastName,
    phone,
    address,
    email
  };
};

export const generateMultipleContacts = (count: number): RandomContactInfo[] => {
  return Array.from({ length: count }, () => generateRandomContactInfo());
};
