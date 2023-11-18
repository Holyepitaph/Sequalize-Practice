const OTOTMFirst = require('./first')
const OTOTMSecond = require('./second')
const OTOTMThird = require('./third')
const OTOTMFourth = require('./fourth')

const { sequelize } = require('../util/db')

OTOTMFirst.hasMany(OTOTMFourth)
OTOTMFourth.belongsTo(OTOTMFirst)

OTOTMSecond.belongsToMany(OTOTMFourth, {through: OTOTMThird})
OTOTMFourth.belongsToMany(OTOTMSecond, {through: OTOTMThird})

sequelize.sync()
//Probably need to figure out to many or whatever
module.exports = {
    OTOTMFirst,
    OTOTMSecond,
    OTOTMThird,
    OTOTMFourth
}