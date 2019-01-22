import mongoose from 'mongoose'
//Este archivo es un modelo de datos para la coleccion
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name : String,
    lastName : String
})

const User = mongoose.model('users',UserSchema)

export default User