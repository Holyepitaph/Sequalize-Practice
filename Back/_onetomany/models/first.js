const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class OMFirst extends Model {}

OMFirst.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue:"Hello"
  }
}, {
  sequelize,
  underscored: true,
  timestamps: true,
  modelName: 'OMFirst'
})

module.exports = OMFirst