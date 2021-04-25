'use strict';

const faker = require("faker")
faker.locale = "id_ID"

const users = [...Array(10)].map((user)=>{
  return {
    username: faker.name.findName(),
    email: faker.internet.email(),
    password: null,
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent()
  }
 })
 

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', users);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
