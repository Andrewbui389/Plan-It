const express = require('express');
const router = express.Router();
const hoursCtr = require('../controllers/hoursEdit')


router.get('/:id' , hoursCtr.editForm)

router.put('/:id' , hoursCtr.editHours)

module.exports = router