const mongoose = require('mongoose');

const NewTutorSchema = new mongoose.Schema({
    Name:{
        type:String,
    },
    Email:{
        type:String,
        unique:true
    },
    Image : {
        type:String,
    },
    Language:{
        type:String,
    },
    Experience:{
        type:Number,
    },
    Pricing:{
        type:Number,
    }
});

module.exports = mongoose.model("NewTutor", NewTutorSchema);