'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("ReadingStatuses", [
    {
    id: 1,
    status: "63",
    lastname: "Berry",
    dateStarted: new Date(),
    dateFinished: new Date(),
    rating: 4,
    notes: "Best seller",
    createAt: new Date(),
    updatedAt: new Date(),
    },
    {
    id: 2,
    status: "63",
    lastname: "Jerry",
    dateStarted: new Date(),
    dateFinished: new Date(),
    rating: 4,
    notes: "Worst seller",
    createAt: new Date(),
    updatedAt: new Date(),
    }
  ])
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
