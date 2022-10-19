require("dotenv").config()
const { Sequelize } = require("sequelize")

exports.sequelize = new Sequelize(proccess.env.MYSQL_URI); //export conecction 


