import {gql} from 'apollo-server-express'
//En este archivo definimos los modelos de datos y de consultas para mongo y graphql
const TYPEDEFS = gql
`   
    type Car {
        brand : String
        model : String
        plate : String
    }

    tupe User {
        name : String
        lastName: String
        cars : []
    }
`
export default TYPEDEFS