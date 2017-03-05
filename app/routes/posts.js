var express = require('express');
var router = express.Router();

var postsCtrl = require('../controllers/posts');

/* GET posts page. */
router.get('/', postsCtrl.index);

router.put('/create', postsCtrl.add);

module.exports = router;
