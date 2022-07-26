const express = require('express');
const router = express.Router();
const clockCtr = require('../controllers/clock')

router.post('/' , clockCtr.clockIn)

router.put('/:id' , clockCtr.clockOut)


module.exports = router