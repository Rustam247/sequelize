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

exports.updateMovie = async (filter, updated) => {
    try {
      await Movie.update(updated, { where: filter });
    } catch (error) {
      console.log(error);
    }
  };


exports.deleteMovie = async(deleteObject) => {
    try {
        await Movie.destroy({where: deleteObject});
    } catch (error) {
        console.log(error)
    }
}