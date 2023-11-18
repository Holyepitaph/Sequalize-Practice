const OMFirst = require('./first')
const OMSecond = require('./second')

const { sequelize } = require('../util/db')

OMFirst.hasMany(OMSecond)
OMSecond.belongsTo(OMFirst)

sequelize.sync()
//Probably need to figure out to many or whatever
module.exports = {
    OMFirst,
    OMSecond
}