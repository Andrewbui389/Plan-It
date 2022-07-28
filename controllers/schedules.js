const User = require('../models/user');
const DayOf = require('../models/date');
const Schedule = require('../models/schedule')

module.exports = {
    show,
    create
};

async function show(req , res) {
    let employees =  await User.find({Admin : false})
    res.render('./Admin/addschedule' , {employees})
};

async function create(req , res) {
    console.log(req.body)
    
};

