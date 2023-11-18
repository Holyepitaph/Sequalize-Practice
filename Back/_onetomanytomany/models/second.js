const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class MMSecond extends Model {}

MMSecond.init({
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
  modelName: 'MMSecond'
})

module.exports = MMSecond