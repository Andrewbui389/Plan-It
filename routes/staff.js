const express = require('express');
const router = express.Router();
const staffCtr = require('../controllers/staff')

router.get('/' , staffCtr.index)


module.exports = router