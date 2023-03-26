'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  /**
   * @description Todo model
   * @class todo
   * @extends {Model}
   */
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * @param {object} models
     */
    static associate(models) {
      // define association here
    }
  }
  todo.init({
    content: DataTypes.TEXT,
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'todo',
  });
  return todo;
};
