var express = require('express');
var router = express.Router();
var ctrlDay = require('../controllers/day');

/* Daily pages */
router.get('/days', ctrlDay.daysListByDate);
router.post('/days', ctrlDay.daysCreate);
router.get('/days/:dayid', ctrlDay.daysReadOne);
router.put('/days/:dayid', ctrlDay.daysUpdateOne);

module.exports = router;