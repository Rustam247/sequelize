const Movie = require("./movieTable")

exports.createMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject)
    } catch (error){
        console.log(error)
    }
}

exports.readMovie = async (filterObject) =>{
    try{
        if (filterObject) {
            return await Movie.findOne({where: filterObject})
        }
        else {
            return await Movie.findAll()
        }
    } catch(error){
        console.log(error)
    }
}