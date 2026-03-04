'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reading_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reading_status.init({
  status: DataTypes.STRING,
  date_started: DataTypes.DATE,
  date_finished: DataTypes.STRING,
  rating: DataTypes.INTEGER,
  notes: DataTypes.STRING,
  createAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,

  }, {
    sequelize,
    modelName: 'Reading_status',
  });
  return Reading_status;
};