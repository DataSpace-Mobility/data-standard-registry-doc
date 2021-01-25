var express = require('express');
var router = express.Router();

var StandardController = require('../controllers/standard/standard.controller');

router.post('/', StandardController.create);
router.get('/', StandardController.get);
router.get('/:id', StandardController.getById);
router.post('/getLatestbyShortName',StandardController.getLatestByShortName)

module.exports = router;
