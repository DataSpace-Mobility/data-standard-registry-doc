var express = require('express');
var router = express.Router();

var StandardController = require('../controllers/standard/standard.controller');
const dataController = require('../controllers/standard/data.controller');

router.post('/', StandardController.create);
router.get('/', StandardController.get);
router.get('/:id', StandardController.getById);

/* 
    ? Routers for retriving and inserting data
    * @param header (String)
    * @param sub_connected (String)
    * @param desctiption (String)
    * There params could be sent as individual or as an array
 */
 router.post('/insert',dataController.insert_data);

/* 
    ? Expected parameter - `header` or [`header`,`header`]
    ! Expected Format - 
    ! [
    !    {
    !        `header` : [
    !            {
    !                `sub_heading`:description
    !            },
    !            {
    !                `sub_heading`:description
    !            }
    !            ...
    !        ]
    !    },
    !    {
    !        `header` : [
    !            {
    !                `sub_heading`:description
    !            },
    !            {
    !                `sub_heading`:description
    !            }
    !            ...
    !        ]
    !    }
    ! ]
  */
 router.post('/get',dataController.get_data);

module.exports = router;
