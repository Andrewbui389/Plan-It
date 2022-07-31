const express = require('express');
const router = express.Router();
const hoursCtr = require('../controllers/hoursEdit')




router.delete('/:id' , hoursCtr.delete)

router.get('/:id' , hoursCtr.editForm)

router.put('/:id' , hoursCtr.editHours)



module.exports = router