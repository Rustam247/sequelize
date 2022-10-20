const Director = require("./directorTable")

exports.createDirector = async(directorObject) => {
    try {
        await Director.create(directorObject)
    } catch(error){
        console.log(error)
    }
}

exports.readDirector = async (filterObj) => {
    try {
        if (filterObj) {
            return await Director.findOne({where: filterObj})
        }
        else {
            return await Director.findAll()
        }
    } catch (error){
        console.log(error)
    }
}

exports.updateDirector = async (filter, update) => {
    try {
        await Director.update(update, {where:filter});
    } catch (error) {
        console.log(error)
    }
}

exports.deleteDirector = async (deleteObject) =>{
    try {   
        await Director.destroy({where: deleteObject})
    } catch (error){
        console.log(error)
    }
}