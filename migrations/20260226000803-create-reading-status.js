'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reading_statuses', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      book_id: {
        references: {
          model: 'Books', 
          key: 'id'
        },
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      status: {
        type: Sequelize.STRING
      },

      date_started: {
        type: Sequelize.DATE
      },

      date_finished: {
        type: Sequelize.DATE
      },

      rating: {
        type: Sequelize.INTEGER
      },

      notes: {
        type: Sequelize.TEXT
      },
      
        bookId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Books', key: 'id' },
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reading_statuses');
  }
};