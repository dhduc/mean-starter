var express = require('express');
var router = express.Router();

var postsCtrl = require('../controllers/posts');

/* GET posts page. */
router.get('/', postsCtrl.index);

module.exports = router;
