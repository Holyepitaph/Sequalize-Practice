const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class MMThird extends Model {}

MMThird.init({
  MMFirstId: {
    type: DataTypes.INTEGER
  },
  MMSecondId: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  underscored: true,
  timestamps: true,
  modelName: 'MMThird'
})

module.exports = MMThird