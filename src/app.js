const yargs = require('yargs')
const { sequelize } = require('./db/connection');

const {
    createMovie,
    readMovie,
    updateMovie,
    deleteMovie,
} = require ("./movie/movieFunctions");
const { 
    createUser,
    readUser,
    updateUser,
    deleteUser
} = require('./user/userFunctions');
const {
    createDirector,
    readDirector,
    updateDirector,
    deleteDirector
} = require('./director/directorFunction')

const app = async (yargsObject) => {
    try{
        await sequelize.sync();

        if (yargsObject.create){
            // CREATE
            await createMovie({ title: yargsObject.title, actor: yargsObject.actor})
            // console.log(await readMovie())
            let output = {}
            let table = await readMovie()
            for (let movie of table){
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                console.log(output)
            }
        }
        else if (yargsObject.read){
            //READ
            //  node src/app.js --read --key title --value "James Bond"
            // console.log(await readMovie({ [yargsObject.key] : yargsObject.value}))
            let output = {}
            let table = await readMovie({ [yargsObject.key] : yargsObject.value})
                output.id = table.id
                output.title = table.title
                output.actor = table.actor
                console.log(output)

        }
        else if (yargsObject.readAll) {
            let output = {}
            let table = await readMovie()
            for (let movie of table) {
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                console.log(output)
            }
        }
        else if (yargsObject.update){
            //UPDATE
            await updateMovie(
              { [yargsObject.key]: yargsObject.value },
              { [yargsObject.updateKey]: yargsObject.updateValue }
            ); // node src/app.js --update --key title --value "test film" --updateKey title --updateValue "cool"
            let output = {}
            let table = await readMovie()
            for (let movie of table){
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                console.log(output)
            }
        }
        else if (yargsObject.delete){
            //DELETE
            await deleteMovie ({title: yargsObject.title, actor: yargsObject.actor})
        }
        ///////////////////////////////////////////////////////
        else if (yargsObject.createU){
            await createUser({name: yargsObject.name, role: yargsObject.role})
            let output = {}
            let table = await readUser()
            for (let user of table){
                output.id = user.id
                output.name = user.name
                output.role = user.role
                console.log(output)
            }
        }
        else if (yargsObject.readU) {
            let output = {}
            let table = await readUser({ [yargsObject.key1] : yargsObject.value1})
            output.id = table.id
            output.name = table.name
            output.role = table.role
            console.log(output)
        }
        else if (yargsObject.readAllUser) {
            let output = {}
            let table = await readUser()
            for (let user of table){
                output.id = user.id
                output.name = user.name
                output.role = user.role
                console.log(output)
            }
        }
        else if (yargsObject.updateU) {
            await updateUser(
                {[yargsObject.key]: yargsObject.value},
                {[yargsObject.updateKey]: yargsObject.updateValue}
                ); // node src/app.js --update --key name --value "test" --updateKey name --updateValue "cool"
        }
        else if (yargsObject.deletU){
            await deleteUser ({name : yargsObject.name, role:yargsObject.role})
        }
        ////////////////////////////////////////////////
        else if (yargsObject.createD) {
            await createDirector({name: yargsObject.name})
            let output = {}
            let table = await readDirector()
            for (let director of table){
                output.id = director.id
                output.title = director.name
                console.log(output)
            }
        }
        else if (yargsObject.readD){
            let output = {}
            let table = await readDirector({ [yargsObject.key] : yargsObject.value})
                output.id = table.id
                output.name = table.name
                console.log(output)
        }
        else if (yargsObject.readAllD){
            let output = {}
            let table = await readDirector()
            for (let director of table) {
                output.id = director.id
                output.title = director.name
                console.log(output)
            }
        }
        else if (yargsObject.updateD) {
            await updateDirector(
                {[yargsObject.key]: yargsObject.value},
                {[yargsObject.updateKey]: yargsObject.updateValue}
            )
            let output = {}
            let table = await readDirector()
            for (let director of table){
                output.id = director.id
                output.title = director.name
                console.log(output)
            }
        }
        else if (yargsObject.deleteD){
            await deleteDirector({name: yargsObject.name})
        }
        
        else {
            console.log("incorrect command")
        }

        await sequelize.close(); // close or break
    } catch (error){
        console.log(error)
        await sequelize.close();
    }
}

app(yargs.argv);