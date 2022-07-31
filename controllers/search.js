const User = require('../models/user');
const DayOf = require('../models/date');
const xlsx = require('xlsx')
const fs = require('fs')
const os = require('os')

module.exports = {
    searchForm,
    displayDates,
    download
}

let data

async function searchForm(req , res) {
    // const specficUser = await User.findById(req.params.id)
    // let from  = new Date(req.body.from)
    // let to = new Date(req.body.to)
    // const employeeData = await DayOf.find({createdAt : {$gte : from.toLocaleString() , $lte : to.toLocaleString()} ,  user : specficUser._id})
    // console.log(employeeData)
    try {
        return res.render('./Admin/searchForm' , {data})
    } catch (err) {
        return res.redirect('/admin')
    }
}

async function displayDates(req , res) {
    data = await DayOf.find({createdAt : {$gte : req.body.from , $lte : req.body.to}})
    try {
        return res.redirect('/search')
    } catch (err) {
        return res.redirect('/admin')
    }
}

async function download(req , res) {
    let headers = ['Employee Name', 'Date', 'Hours'];
    let dataExport = []
    data.forEach((x) => {
        let newObj = {}
        newObj['Employee Name'] = x.name
        newObj['Date'] = x.createdAt.toLocaleDateString()
        newObj['Hours'] = x.totalHours
        dataExport.push(newObj)
    })

    let ws = xlsx.utils.json_to_sheet(dataExport , {header: headers});

    let wb = xlsx.utils.book_new()

    xlsx.utils.book_append_sheet(wb, ws, "SheetJS")

    let exportFileName = `workbook.xlsx`;

    xlsx.writeFile(wb, exportFileName)

    console.log(fs , 'break')
    console.log(os.homedir() , 'here')

    res.redirect('/search')
}


