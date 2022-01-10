'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Subject.init({
    intitule: DataTypes.STRING,
    description: DataTypes.STRING,
    subjectId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Subject',
  });
  return Subject;
};