const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class OTOTMSecond extends Model {}

OTOTMSecond.init({
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
  modelName: 'OTOTMSecond'
})

module.exports = OTOTMSecond