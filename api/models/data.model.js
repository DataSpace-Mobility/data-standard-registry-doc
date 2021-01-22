const mongoose = require('mongoose');
const Schema = new mongoose.Schema();

const data_schema = Schema({
    header:{
        type:String,
        default:null
    },
    sub_connected:{
        type:String,
        default:null
    },
    description:{
        type:String,
        default:nll
    }
})