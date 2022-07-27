const User = require('../models/user');
const DayOf = require('../models/date');

module.exports = {
    clockIn,
    clockOut
};

async function clockIn(req , res) {
    req.body['user'] = req.user._id
    req.body['name'] = req.user.name
    let setDay = await new DayOf(req.body)
    setDay.save()
    try {
        return res.redirect('/staff');
    } catch (error) {
        return res.redirect('/');
    }
};

async function clockOut(req , res) {
    let data = await DayOf.findById(req.params.id)
    try {
        data.clockedOut = new Date()
        data.totalHours = (((data.clockedOut.getTime() / 60000) - (data.clockedIn.getTime() / 60000)) / 60).toFixed(2)
        data.save()
        return res.redirect('/staff');
    } catch (error) {
        return res.redirect('/')
    }
    
};
