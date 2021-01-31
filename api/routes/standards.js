var express = require('express');
var router = express.Router();

var StandardController = require('../controllers/standard/standard.controller');

router.post('/', StandardController.create);
router.get('/', StandardController.get);
router.get('/:id', StandardController.getById);
router.post('/getLatestVersionByShortName',StandardController.getLatestVersionByShortName);
router.post('/updateStandard',StandardController.updateStandard);
router.post('/getAllVersionsByShortName',StandardController.getAllVersionsByShortName);
router.post('/getAllVersionsByUUID',StandardController.getAllVersionsByUUID);
router.post('/getLatestVersionByUUID',StandardController.getLatestVersionByUUID);

module.exports = router;
