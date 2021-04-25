
'use strict';
const faker = require("faker")
faker.locale = "id_ID"

const number = (max)=> {
  return Math.floor(Math.random() * 10) + 1; 
 } 

const todos = (()=>{
  const data = []
  for (let i= 0; i < 10; i++) {
    data.push({
      title: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
      userId: number(10),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    })
  }
  return data
 })()

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Todos', todos);
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
