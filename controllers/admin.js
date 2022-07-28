const User = require('../models/user')
const DayOf = require('../models/date');

module.exports = {
    index,
    new: newEmployee,
    create: createEmployee,
    show,
    delete: deleteUser,
    editHours
}

async function index(req , res) {
    if(req.user.Admin !== true)return res.redirect('/staff')
    let employees = await User.find({Admin : false})
    let hours = await DayOf.find({createdAt : {$gte : new Date().toLocaleDateString()}})
    try {
        return res.render('./Admin/index' , {employees , hours} )
    } catch (error) {
        return res.redirect('/')
    }
}

async function show(req , res) {
    const specficUser = await User.findById(req.params.id)
    const date = new Date()
    const templateCurrMonth = `${date.getMonth() + 1}/1/${date.getFullYear()}`
    const employeeData = await DayOf.find({createdAt : {$gte : templateCurrMonth} , user : specficUser._id})
    try {
        return res.render('./Admin/show' , {specficUser , employeeData})
    } catch (err) {
        return res.redirect('/admin')
    }
}

async function deleteUser(req , res){
    const user = await User.findById(req.params.id)
    req.body.confirm = req.body.confirm.trim().toLowerCase()
    const valid = req.body.confirm.search('confirm')
    try {
        if(valid !== -1){
            await User.deleteMany({_id : user._id})
            await DayOf.deleteMany({user : user._id})
            return res.redirect('/admin')
        }
        return res.redirect(`/admin/${req.params.id}`)
    } catch (error) {
        return res.redirect('/logout')
    }
}

function newEmployee(req , res) {
    res.render('./Admin/new')
}

async function createEmployee(req , res) {
    req.body.email = req.body.email.trim()
    const checkExisting = await User.find({email : req.body.email})
    try {
        if(checkExisting[0]){
            return res.redirect('/admin')
        }else {
            let employee = new User(req.body)
            employee.save()
            return res.redirect('/admin')
        }
    } catch (error) {
        return res.redirect('/')
    }   
}

async function editHours(req , res){
    return res.redirect('/admin')
}
