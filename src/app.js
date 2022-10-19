const yargs = require('yargs')
const { sequelize } = require('./db/connection');

const app = async (yargsObject) => {
    try{
        await sequelize.sync();

        if (yargsObject.create){
            //
        }
        else if (yargsObject.read){
            //
        }
        else if (yargsObject.update){
            //
        }
        else if (yargsObject.delete){
            //
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