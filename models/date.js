const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const hoursSchema = new Schema ({
    user: {type:Schema.Types.ObjectId, ref:'User'},
    name: String,
    clockedIn: {
     type: Date, 
    },
    clockedOut: {
     type: Date, 
     default: null
    },
    totalHours: {
        type:Number,
        default:null
    },
    date: {
        type: Date,
        default: new Date().toLocaleDateString()
    }},
    {
    timestamps:true 
    }  
 )

module.exports = mongoose.model('WorkDay' , hoursSchema)