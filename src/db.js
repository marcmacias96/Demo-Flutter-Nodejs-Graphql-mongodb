import mongoose from 'mongoose'
module.exports = () => {
    //Aqui realizo la coneccion a la base de datos Mongodb usando mis variales de entorno
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@nodejs-mongodb-ezqoh.azure.mongodb.net/AdmCars?retryWrites=true`,{
    useNewUrlParser: true
    })
    .then(() => console.log('mongodb Conectado'))
}