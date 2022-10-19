const yargs = require('yargs')
const { sequelize } = require('./db/connection');

const {
    createMovie,
    readMovie,
    updateMovie,
    deleteMovie
} = require ("./movie/movieFunctions")

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
            );
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