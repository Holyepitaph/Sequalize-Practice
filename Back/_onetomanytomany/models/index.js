const MMFirst = require('./first')
const MMSecond = require('./second')
const MMThird = require('./third')

const { sequelize } = require('../util/db')

MMFirst.belongsToMany(MMSecond, {through: MMThird})
MMSecond.belongsToMany(MMFirst, {through: MMThird})

sequelize.sync()
//Probably need to figure out to many or whatever
module.exports = {
    MMFirst,
    MMSecond,
    MMThird
}