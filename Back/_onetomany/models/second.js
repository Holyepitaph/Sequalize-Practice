const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class OMSecond extends Model {}

OMSecond.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue:1
  }
}, {
  sequelize,
  underscored: true,
  timestamps: true,
  modelName: 'OMSecond'
})

module.exports = OMSecond