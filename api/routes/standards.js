var express = require('express');
var router = express.Router();

var StandardController = require('../controllers/standard/standard.controller');

router.post('/', StandardController.create);
router.get('/', StandardController.get);
router.get('/:id', StandardController.getById);
router.post('/getLatestbyShortName',StandardController.getLatestByShortName);
router.post('/updateStandard',StandardController.updateStandard);
router.post('/getAllByShortName',StandardController.getAllByShortName);
router.post('/getAllStandardByUUID',StandardController.getAllStandardByUUID);
router.post('/getLatestStandardByUUID',StandardController.getLatestStandardByUUID);

module.exports = router;
