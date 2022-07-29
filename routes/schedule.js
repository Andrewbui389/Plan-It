const express = require('express');
const router = express.Router();
const schedulesCtr = require('../controllers/schedules')
let adminCheck = require('../config/adminSecurity')


router.get('/' , adminCheck ,schedulesCtr.show)

router.get('/view' , schedulesCtr.index)

router.post('/' , adminCheck ,schedulesCtr.create)

router.delete('/:id' , adminCheck ,schedulesCtr.delete)


module.exports = router