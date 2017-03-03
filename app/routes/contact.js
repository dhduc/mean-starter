var express = require('express');
var router = express.Router();

var contactCtrl = require('../controllers/contact');

/* GET contact page. */
router.get('/', contactCtrl.index);

router.post('/', contactCtrl.create);

module.exports = router;
