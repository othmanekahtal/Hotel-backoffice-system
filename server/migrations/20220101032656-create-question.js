'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      text: {
        type: Sequelize.TEXT
      },
      point: {
        type: Sequelize.INTEGER
      },
      subjectId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Subjects',
          key: 'id'
        },
        allowNull: false
      },
      levelId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Subjects',
          key: 'id'
        },
        allowNull: true
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
    await queryInterface.dropTable('Questions');
  }
};