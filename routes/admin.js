const express = require('express');
const router = express.Router();
const adminCtr = require('../controllers/admin')



router.get('/' , adminCtr.index)

module.exports = router