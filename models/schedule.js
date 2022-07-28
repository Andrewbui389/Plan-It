const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema ({
    user: {type:Schema.Types.ObjectId, ref:'User'},
    day: Date,
    start: Date,
    end: Date
})

module.exports = mongoose.model('Schedule' , scheduleSchema)