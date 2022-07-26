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
    try {
        return res.render('./Admin/index' , {employees , hours} )
    } catch (error) {
        return res.redirect('/')
    }
    
}

function newEmployee(req , res) {
    res.render('./Admin/new')
}

function createEmployee(req , res) {
    req.body.email = trim(req.body.email)
    let employee = new User(req.body)
    employee.save()
    res.redirect('/admin')
}