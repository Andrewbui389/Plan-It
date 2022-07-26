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
    let data = await DayOf.findOne({clockedOut: null , name : req.user.name})
    try {
        return res.render('./Staff/index' , {data});
    } catch (error) {
        return res.redirect('/')
    }
    
};

