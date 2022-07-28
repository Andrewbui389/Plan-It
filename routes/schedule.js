const express = require('express');
const router = express.Router();
const schedulesCtr = require('../controllers/schedules')


router.get('/' , schedulesCtr.show)

router.post('/create' , schedulesCtr.create)


module.exports = router