require('../models/Posts');
var Posts = require('mongoose').model('Posts');

exports.create = function(req, res, next) {
    var posts = new Posts(req.body);
    user.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(posts);
        }
    });
};