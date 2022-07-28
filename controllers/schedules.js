const User = require('../models/user');
const DayOf = require('../models/date');
const Schedule = require('../models/schedule')

module.exports = {
    show,
    create,
    index
};

async function show(req , res) {
    let employees =  await User.find({Admin : false})
    res.render('./Admin/addschedule' , {employees})
};

async function create(req , res) {
    let user = await User.findById(req.body.user)
    let schedule = new Schedule()

    try {
        schedule.user = user._id
        schedule.name = user.name
        schedule.day = new Date(req.body.date)
        schedule.start = new Date(`${req.body.date} ${req.body.start}`)
        schedule.end = new Date(`${req.body.date} ${req.body.end}`)
        schedule.save()
        return res.redirect('/admin')
    } catch (error) {
        return res.redirect('/')
    }
};

async function index(req , res){
    let schedules = await Schedule.find()
    res.render('./schedules' , {schedules})
}

