

module.exports = {
    index,
    new: newEmployee
}

function index(req , res) {
    if(!req.user){
        console.log('breach')
        return res.redirect('/')
    }
    let data = req.user
    if(req.user.Admin !== true)return res.redirect('/testing')
    res.render('./Admin/index' , {data})
}

function newEmployee(req , res) {

}