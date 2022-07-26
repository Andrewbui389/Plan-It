const User = require('../models/user')
const DayOf = require('../models/date');

module.exports = {
    index,
    new: newEmployee,
    create: createEmployee
}

async function index(req , res) {
    if(!req.user){
        console.log('breach')
        return res.redirect('/')
    }
    if(req.user.Admin !== true)return res.redirect('/staff')
    let employees = await User.find({Admin : false})
    let hours = await DayOf.find({createdAt : {$gte : new Date().toLocaleDateString()}})
    res.render('./Admin/index' , {employees , hours} )
}

function newEmployee(req , res) {
    res.render('./Admin/new')
}

function createEmployee(req , res) {
    let employee = new User(req.body)
    employee.save()
    res.redirect('/admin')
}