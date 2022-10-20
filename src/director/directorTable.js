const {DataTypes} = require("sequelize")
const {sequelize} =require("../db/connection")

const Director = sequelize.define("Director", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})
module.exports = Director;