const User = require('../models/user')

module.exports = {
    index
}

function index(req , res) { 
    if(!req.user){
        console.log('breach')
        return res.redirect('/')
    }
    res.render('./Staff/index')
}