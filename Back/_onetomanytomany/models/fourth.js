const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class OTOTMFourth extends Model {}

OTOTMFourth.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue:"Hello"
  },
  OTOTMFirstId:{
    type:DataTypes.INTEGER
  }
}, {
  sequelize,
  underscored: true,
  timestamps: true,
  modelName: 'OTOTMFourth'
})

module.exports = OTOTMFourth