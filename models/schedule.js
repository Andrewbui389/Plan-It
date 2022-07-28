const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema ({
    user: {type:Schema.Types.ObjectId, ref:'User'},
    day: Date,
    start: String,
    end: String
})

module.exports = mongoose.model('Schedule' , scheduleSchema)