const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class MMFirst extends Model {}

MMFirst.init({
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
  modelName: 'MMFirst'
})

module.exports = MMFirst