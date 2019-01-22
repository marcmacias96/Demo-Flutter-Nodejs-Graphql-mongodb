import mongoose from 'mongoose'
//Este archivo es un modelo de datos para la coleccion
const Schema = mongoose.Schema

const CarSchema = new Schema({
    brand : String,
    model : String,
    plate : String,
    owner : ObjectId
})

const Car = mongoose.model('cars',CarSchema)

export default Car 