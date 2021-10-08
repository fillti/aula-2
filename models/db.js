const Sequelize = require("sequelize")

const sequelize = new Sequelize('aula2', 'root', '123',{
    host: '192.168.1.122',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}