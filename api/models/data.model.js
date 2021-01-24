const mongoose = require('mongoose');

const data_schema = mongoose.Schema({
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
        default:null
    }
})

module.exports = mongoose.model('data_schema',data_schema)