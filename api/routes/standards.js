var express = require('express');
var router = express.Router();

var StandardController = require('../controllers/standard/standard.controller');

router.post('/', StandardController.create);
router.get('/', StandardController.get);
router.get('/:id', StandardController.getById);

/* 
    ? Routers for retriving and inserting data
    * @param header (String)
    * @param sub_connected (String)
    * @param desctiption (String)
 */
 router.post('/insert',require('../controllers/standard/data.controller').insert_data);

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
 router.post('/get',require('../controllers/standard/data.controller').get_data);

module.exports = router;
