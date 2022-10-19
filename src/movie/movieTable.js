const {DataTypes} = require('sequelize')
const { sequelize } = require('../db/connection');

// define structure 
const Movie = sequelize.define("Movie", {
    title: {
        type: DataTypes.STRING, // all capitals
        allowNull: false, // Not allow our title to be 
        unique: true // title must be unique
    },
    actor: {
        type: DataTypes.STRING,
        defaultValue: "Not specified" // its can be empty
    }
})

module.exports = Movie;