'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert("Books", [

      {
        id: 3,
        title: "Cien años de soledad",
        authorId: 3,
        genre: "Novela",
        publication_year: 1967,
        isbn: "9780307474728",
        page_count: 417,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 2,
        title: "Don Quijote de la Mancha",
        authorId: 2,
        genre: "Clásico",
        publication_year: 1605,
        isbn: "9788491050297",
        page_count: 863,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Books', null, {});
    
  }
};


//TRAER EL POST CREADO DE UN AUTOR 