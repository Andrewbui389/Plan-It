const User = require('../models/user');
const DayOf = require('../models/date');

module.exports = {
    editForm,
    editHours
}

async function editForm(req , res) {
    let doc = await DayOf.findById(req.params.id)
    try {
        return res.render('./Admin/editHours' , { doc })
    } catch (error) {
        return res.redirect('/')
    }
}

async function editHours(req , res) {
    let doc = await DayOf.findById(req.params.id)
    let newHour = parseFloat(req.body.hours)
    try {
        doc.totalHours = newHour
        doc.save()
        return res.redirect('/admin')
    } catch (error) {
        return res.redirect('/')
    }
    
}