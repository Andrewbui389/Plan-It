module.exports = function adminCheck(req, res, next) {
    if(req.user.Admin){
        next()
    }else if(!req.user.Admin){
        res.redirect('/staff')
    }
  };