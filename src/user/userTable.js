const {DataTypes} = require("sequelize")
const { sequelize } = require("../db/connection");

const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "Not specified"
    }
})

module.exports = User;