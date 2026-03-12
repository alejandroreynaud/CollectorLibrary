'use strict';
const {
  Model,
  ForeignKeyConstraintError
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    Autores.hasMany(models.Books, { foreignKey: 'autorId', as: 'Books'});    
  }
  }
  Autores.init({
    firstName: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthyear: DataTypes.INTEGER,
    nationality: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Autores',
  });
  return Autores;
};