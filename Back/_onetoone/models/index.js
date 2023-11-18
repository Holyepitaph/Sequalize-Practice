const OOFirst = require('./first')
const OOSecond = require('./second')

const { sequelize } = require('../util/db')


OOFirst.hasOne(OOSecond)
OOSecond.belongsTo(OOFirst)

sequelize.sync()
//Probably need to figure out to many or whatever
module.exports = {
    OOFirst,
    OOSecond
}