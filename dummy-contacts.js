const fs = require(`fs`);
const path = require(`path`);
const faker = require(`faker`);
// const base64Img = require(`base64-img`);

const { formattedPhone } = require("./au-phones");

const numOfContactsToGenerate = 2;

const contactsFile = path.resolve(`./contacts.vcf`);

fs.writeFileSync(contactsFile, ``);

for (let i = 1; i <= formattedPhone.length; i++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  // const address1 = {
  //   street: faker.address.streetAddress(),
  //   city: faker.address.city(),
  //   stateAbbr: faker.address.stateAbbr(),
  //   zipCode: faker.address.zipCode(),
  //   country: faker.address.country(),
  // };

  // const address2 = {
  //   street: faker.address.streetAddress(),
  //   city: faker.address.city(),
  //   stateAbbr: faker.address.stateAbbr(),
  //   zipCode: faker.address.zipCode(),
  //   country: faker.address.country(),
  // };

  // const formattedDate =
  //   faker.date
  //     .past()
  //     .toISOString()
  //     .replace(/-/g, ``)
  //     .replace(/:/g, ``)
  //     .replace(/\..*$/, ``) + `Z`;

  /* eslint-disable */
  if (i % 2 === 0) {
    fs.appendFileSync(
      contactsFile,
      `
BEGIN:VCARD
VERSION:2.1
N:${lastName};${firstName};;${faker.name.prefix()};
FN:${firstName} ${lastName}
TEL;MOBILE:${formattedPhone[i]}
EMAIL;HOME:${faker.internet.exampleEmail().toLowerCase()}

END:VCARD
      `
    );
  } else {
    fs.appendFileSync(
      contactsFile,
      `
BEGIN:VCARD
VERSION:2.1
N:${lastName};${firstName};;;
FN:${firstName} ${lastName}
TEL;WORK:${formattedPhone[i]}
EMAIL;WORK:${faker.internet.exampleEmail().toLowerCase()}

END:VCARD
      `
    );
  }
}
