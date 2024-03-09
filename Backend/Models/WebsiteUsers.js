const mongoose = require('mongoose');

const WebsiteUsersSchema = new mongoose.Schema({
    Name:{
        type:String,
    },
    Email:{
        type:String,
        unique:true
    },
    Role:{
        type:String
    }
});

module.exports = mongoose.model("WebsiteUsers", WebsiteUsersSchema);