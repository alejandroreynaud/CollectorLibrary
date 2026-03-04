'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Autores", [
    {
    id: 1,
    firstName: "Steve",
    lastname: "Berry",
    createdAt: new Date(),
    updatedAt: new Date(),
    },
    {
    id: 2,
    firstName: "Francisco",
    lastname: "Morazan",
    createdAt: new Date(),
    updatedAt: new Date(),
    }
  ])
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

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
