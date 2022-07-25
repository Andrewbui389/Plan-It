const User = require('../models/user')

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
    
    res.render('./Admin/index' , {employees})
}

function newEmployee(req , res) {
    res.render('./Admin/new')
}

function createEmployee(req , res) {
    let employee = new User(req.body)
    employee.save()
    res.redirect('/admin')
}