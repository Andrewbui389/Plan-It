const User = require('../models/user');
const DayOf = require('../models/date');

module.exports = {
    index
};

async function index(req , res) { 
    if(!req.user){
        console.log('breach');
        return res.redirect('/');
    };
    if(req.user.Admin === true) return res.redirect('/admin')
    const date = new Date()
    const templateCurrMonth = `${date.getMonth() + 1}/1/${date.getFullYear()}`
    let data = await DayOf.findOne({clockedOut: null , name : req.user.name})
    let employeeData = await DayOf.find({createdAt : {$gte : templateCurrMonth} , user : req.user._id })
    try {
        return res.render('./Staff/index' , {data , employeeData});
    } catch (error) {
        return res.redirect('/')
    }
    
};

