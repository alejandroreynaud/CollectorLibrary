'use strict';

module.exports = (sequelize, DataTypes) => {
  const Autor = sequelize.define('Autor', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  
  return Autor;
};