const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class OTOTMFirst extends Model {}

OTOTMFirst.init({
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
  modelName: 'OTOTMFirst'
})

module.exports = OTOTMFirst