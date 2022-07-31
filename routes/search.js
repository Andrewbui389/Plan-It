const express = require('express');
const router = express.Router();
const searchCtr = require('../controllers/search')

router.get('/' , searchCtr.searchForm)

router.post('/' , searchCtr.displayDates)

router.get('/download' , searchCtr.download)

module.exports = router