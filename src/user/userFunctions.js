const User = require("./userTable")

exports.createUser = async (userObject) => {
    try {
        await User.create(userObject)
    } catch (error){
        console.log(error)
    }
}

exports.readUser = async (filterObj) => {
    try {
        if (filterObj) {
            return await User.findOne({where: filterObj})
        }
        else {
            return await User.findAll()
        }
    }
    catch (error) {
        console.log(error)
    }
}

exports.updateUser = async (filter, update) => {
    try {
        await User.update(update, {where:filter});
    } catch (error){
        console.log(error)
    }
};

exports.deleteUser = async (deleteObject) => {
    try {
        await User.destroy({where: deleteObject});
    } catch (error){
        console.log(error)
    }
}