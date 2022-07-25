const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dateSchema = new Schema ({
    year: {
        type: String,
        default: new Date().getFullYear
    },
    month: {
        type: String,
        default: new Date().getMonth
    },
    day: {
        type: String,
        default: new Date().getDay
    }
})

module.exports = mongoose.model('Date' , dateSchema)