var express = require('express');
var router = express.Router();

var contactCtrl = require('../controllers/contact');

/* GET contact page. */
router.get('/', contactCtrl.index);

router.use(contactCtrl.middle);

router.post('/', contactCtrl.add);

module.exports = router;
