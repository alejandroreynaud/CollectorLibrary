'use strict';

const autores = require('../models/autores');

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('Books', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
        
      },

      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      genre: {
        type: Sequelize.STRING
      },

      isbn: {
        type: Sequelize.STRING,
      },

      page_count: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      publication_year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      AuthorID:{
        references: {
          model: 'Autores', 
          key: 'id'
        },
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('Books');
  }

};