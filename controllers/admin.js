

module.exports = {
    index
}

function index(req , res) {
    if(!req.user){
        console.log('breach')
        return res.redirect('/')
    }
    let data = req.user
    res.render('./Admin/index' , {data})
}

function new(req , res) {

}