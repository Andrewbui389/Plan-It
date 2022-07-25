const User = require('../models/user')

module.exports = {
    index,
    new: newEmployee,
    create: createEmployee
}

function index(req , res) {
    if(!req.user){
        console.log('breach')
        return res.redirect('/')
    }
    let data = req.user
    if(req.user.Admin !== true)return res.redirect('/staff')
    res.render('./Admin/index' , {data})
}

function newEmployee(req , res) {
    res.render('./Admin/new')
}

function createEmployee(req , res) {
    let employee = new User(req.body)
    employee.save()
    res.redirect('/admin')
}