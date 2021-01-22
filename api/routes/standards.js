var express = require('express');
var router = express.Router();

var StandardController = require('../controllers/standard/standard.controller');

router.post('/', StandardController.create);
router.get('/', StandardController.get);
router.get('/:id', StandardController.getById);

/* 
    * Routers for retriving and inserting data
 */

 router.post('/insert',require('../controllers/standard/data.controller').insert_data);
 router.post('/insert',require('../controllers/standard/data.controller').get_data);

module.exports = router;
