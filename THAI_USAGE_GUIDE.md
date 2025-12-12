# คู่มือการใช้งาน Test Data Generator (ภาษาไทย)

## สร้างข้อมูลทดสอบแบบ Random ที่ถูกต้อง

เครื่องมือนี้จะช่วยสร้างข้อมูลที่อยู่และเบอร์โทรศัพท์แบบ Valid สำหรับการทดสอบ

## วิธีเข้าใช้งาน

### 1. เข้าหน้าแสดงตัวอย่าง (Demo Page)

เปิด Browser Console (F12) แล้วพิมพ์:

```javascript
window.navigateToTestData()
```

### 2. ใช้งานผ่าน Console

คุณสามารถใช้ฟังก์ชันต่างๆ ได้โดยตรงใน Browser Console:

#### สร้างข้อมูล 1 คน

```javascript
const contact = window.generateRandomContactInfo();
console.log(contact);
```

ผลลัพธ์:
```
{
  firstName: "James",
  lastName: "Smith",
  phone: "(212) 555-1234",
  email: "james.smith@gmail.com",
  address: {
    street: "1234 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    fullAddress: "1234 Main St, New York, NY 10001"
  }
}
```

#### สร้างแค่เบอร์โทร

```javascript
const phone = window.generateRandomPhone();
console.log(phone); // "(555) 123-4567"
```

#### สร้างแค่ที่อยู่

```javascript
const address = window.generateRandomAddress();
console.log(address);
```

#### สร้างหลายคน

```javascript
const contacts = window.generateMultipleContacts(10);
console.log(contacts); // สร้าง 10 คน
```

### 3. กรอกฟอร์มอัตโนมัติ

#### กรอกฟอร์มทั้งหมดในหน้า

```javascript
window.autoFillAnyForm();
```

ฟังก์ชันนี้จะค้นหาฟอร์มทั้งหมดในหน้าและกรอกข้อมูลทดสอบให้อัตโนมัติ

#### กรอกฟอร์มเฉพาะ (ถ้ารู้ Form ID)

```javascript
window.fillFormWithTestData('myFormId');
```

### 4. ดูตัวอย่างการใช้งาน

```javascript
window.testDataExamples();
```

คำสั่งนี้จะแสดงตัวอย่างการใช้งานทั้งหมดใน Console

## รูปแบบข้อมูล

### เบอร์โทรศัพท์
- รูปแบบ: `(XXX) XXX-XXXX`
- ใช้รหัสพื้นที่ (Area Code) ที่มีจริงในสหรัฐอเมริกา
- ตัวเลขทั้งหมด Random แต่อยู่ในช่วงที่ถูกต้อง

### ที่อยู่
- เลขที่: 100-9999
- ใช้ชื่อเมืองและรัฐที่มีจริง
- รหัสไปรษณีย์ (ZIP Code) ที่ถูกต้องตามเมือง
- ชื่อถนนและประเภทต่างๆ (St, Ave, Rd, Blvd, ฯลฯ)

### อีเมล
- สร้างจากชื่อและนามสกุล
- ใช้ผู้ให้บริการอีเมลชื่อดัง (Gmail, Yahoo, Hotmail, Outlook, iCloud)
- มีรูปแบบหลากหลาย

### ชื่อ-นามสกุล
- ใช้ชื่อและนามสกุลที่พบบ่อยในสหรัฐอเมริกา
- Random ผสมกันเพื่อให้ดูเหมือนจริง

## ตัวอย่างการใช้งานจริง

### ทดสอบฟอร์มสมัครสินเชื่อ

```javascript
// สร้างข้อมูลลูกค้า
const customer = window.generateRandomContactInfo();

// ใช้ข้อมูลเหล่านี้กรอกในฟอร์ม
document.getElementById('firstName').value = customer.firstName;
document.getElementById('lastName').value = customer.lastName;
document.getElementById('phone').value = customer.phone;
document.getElementById('email').value = customer.email;
document.getElementById('street').value = customer.address.street;
document.getElementById('city').value = customer.address.city;
document.getElementById('state').value = customer.address.state;
document.getElementById('zip').value = customer.address.zipCode;
```

### สร้างข้อมูลทดสอบหลายๆ ชุด

```javascript
// สร้างข้อมูล 100 คนเพื่อทดสอบระบบ
const testUsers = window.generateMultipleContacts(100);

// Export เป็น JSON
console.log(JSON.stringify(testUsers, null, 2));

// หรือ Copy ไปใช้
testUsers.forEach(user => {
  console.log(`${user.firstName} ${user.lastName} - ${user.phone}`);
});
```

## ข้อควรระวัง

- ข้อมูลทั้งหมดเป็นข้อมูลสำหรับ**การทดสอบเท่านั้น**
- เบอร์โทรศัพท์ใช้รหัสพื้นที่ที่มีอยู่จริง แต่อาจไม่ได้ใช้งานจริง
- ที่อยู่เป็นที่อยู่สมมุติที่ดูเหมือนจริง
- อีเมลเป็นที่อยู่ที่สร้างขึ้นมา ไม่ใช่บัญชีจริง

## ทดสอบทันที

เปิด Console (F12) แล้วลองคำสั่งนี้:

```javascript
// สร้างและแสดงข้อมูล 1 คน
const person = window.generateRandomContactInfo();
console.log('ชื่อ:', person.firstName, person.lastName);
console.log('โทร:', person.phone);
console.log('อีเมล:', person.email);
console.log('ที่อยู่:', person.address.fullAddress);
```

## การใช้งานใน Code

หากต้องการใช้ในโค้ด TypeScript/JavaScript:

```typescript
import {
  generateRandomContactInfo,
  generateRandomPhone,
  generateRandomAddress,
  generateMultipleContacts
} from './utils/testDataGenerator';

// ใช้งานตามปกติ
const contact = generateRandomContactInfo();
```

## หน้าตัวอย่าง (Demo Page)

คุณสามารถเข้าหน้าตัวอย่างที่มี UI สวยงามได้โดยพิมพ์ใน Console:

```javascript
window.navigateToTestData()
```

หน้านี้จะมี:
- การแสดงข้อมูลแบบเต็มรูปแบบ
- ปุ่ม Copy ข้อมูลแต่ละฟิลด์
- ปุ่ม Generate ใหม่
- การแสดงหลายคนพร้อมกัน
- ตัวอย่าง Code การใช้งาน
