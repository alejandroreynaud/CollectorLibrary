'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert("Reading_statuses", [

      {
        id: 1,
        bookId: 1,
        status: "Reading",
        date_started: new Date(),
        date_finished: new Date(),
        rating: 4,
        notes: "Best seller",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 2,
        bookId: 2,
        status: "Finished",
        date_started: new Date(),
        date_finished: new Date(),
        rating: 2,
        notes: "Worst seller",
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Reading_statuses', null, {});
  }
};