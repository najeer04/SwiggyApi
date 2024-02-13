const mongoose = require('mongoose')
const resSchema = new mongoose.Schema({
    areaName : {
        type : String
    },
    avgRating : {
        type :Number
    },
    costForTwo : {
        type :String
    },
    cuisines : {
        type : Array
    },
    name : {
        type : String
    }
})

const Restaurant = mongoose.model('restaurantlist',resSchema)

const userSchema = new mongoose.Schema({
    contact : {
        type : String
    },
    userName : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type :String
    }
})

const Users = mongoose.model('userDetail',userSchema)
module.exports = {Restaurant,Users}