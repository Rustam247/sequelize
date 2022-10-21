const { sequelize } = require("../db/connection");

exports.searchMovies = async (queryObj) => {
    const [result] = await sequelize.query(
        `SELECT Movies.title, Movies.actor FROM Movies WHERE ${queryObj.key} = "${queryObj.value}"`
    )
    console.log(result)
}

exports.searchUsers = async (queryObj) => {
    const [result] = await sequelize.query(
        `SELECT Users.name, Users.role FROM Users WHERE ${queryObj.key} = "${queryObj.value}"`
    )
    console.log(result)
}

exports.favMovie = async (queryObj) => {
    const [result] = await sequelize.query(
        `SELECT Users.id, Users.name, Movie.title, Movie.actor FROM Movies JOIN Users On Movies.user = Users.id WHERE Movies.user = ${queryObj.value}`
    )
    console.log(result)
}