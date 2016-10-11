var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlDay = require('../controllers/day');

/* GET home page. */
router.get('/', ctrlMain.index);

/* Daily pages */
router.get('/today', ctrlDay.summary);
router.get('/today/plan', ctrlDay.plan);
router.get('/today/bullet', ctrlDay.bullet);
router.get('/today/chrono', ctrlDay.chrono);

module.exports = router;