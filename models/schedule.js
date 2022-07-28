const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema ({
    user: {type:Schema.Types.ObjectId, ref:'User'},
    name: String,
    day: Date,
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Schedule' , scheduleSchema)