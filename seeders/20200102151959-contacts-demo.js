const faker = require('faker/locale/id_ID');

const demo = [];

for (let i = 0; i < 20; i += 1) {
  demo.push({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    createdAt: new Date(),
    updatedAt: new Date()
  });
}

console.log(demo);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', demo);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
