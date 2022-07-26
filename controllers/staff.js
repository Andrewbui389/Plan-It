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
    let data = await DayOf.findOne({clockedOut: null , name : req.user.name})
    res.render('./Staff/index' , {data});
};

