'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('QuizSubmissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      slug: {
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4
      },
      result: {
        type: Sequelize.DOUBLE
      },
      startDate: {
        type: Sequelize.DATE
      },
      finDate: {
        type: Sequelize.DATE
      },
      passed: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      studentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Students',
          key: 'id'
        },
        allowNull: false
      },
      quizId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Quizzes',
          key: 'id'
        },
        allowNull: false
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('QuizSubmissions');
  }
};