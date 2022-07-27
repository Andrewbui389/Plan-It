const express = require('express');
const router = express.Router();
const adminCtr = require('../controllers/admin')


// GET to /admin to get into admin dashboard
router.get('/' , adminCtr.index)

// GET to /admin fuctionality is to get to a form for creating a new authorized employee
router.get('/new' , adminCtr.new)

//GET to /admin/:id to show a specific employee and their information 
router.get('/:id' , adminCtr.show)

// DELETE /admin to wipe user from the database
router.delete('/:id' , adminCtr.delete)

// POST /admin to actually create a a new employee in the database
router.post('/' , adminCtr.create)


module.exports = router