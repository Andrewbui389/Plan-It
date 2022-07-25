const express = require('express');
const router = express.Router();
const adminCtr = require('../controllers/admin')


// GET to /admin to get into admin dashboard
router.get('/' , adminCtr.index)

// GET to /admin fuctionality is to create a new authorized employee
router.get('/new' , adminCtr.new)

router.post('/' , adminCtr.create)


module.exports = router