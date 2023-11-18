const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class OTOTMThird extends Model {}

OTOTMThird.init({
  OTOTMFourthId: {
    type: DataTypes.INTEGER
  },
  OTOTMSecondId: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  underscored: true,
  timestamps: true,
  modelName: 'OTOTMThird'
})

module.exports = OTOTMThird