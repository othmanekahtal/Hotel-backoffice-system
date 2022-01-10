'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuizSubmission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  QuizSubmission.init({
    slug: DataTypes.UUID,
    result: DataTypes.DOUBLE,
    startDate: DataTypes.DATE,
    finDate: DataTypes.DATE,
    passed: DataTypes.BOOLEAN,
    studentId: DataTypes.INTEGER,
    quizId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'QuizSubmission',
  });
  return QuizSubmission;
};