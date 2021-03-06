require('../models/Posts');
var mongoose = require('mongoose');
var Posts = mongoose.model('Posts');

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

exports.index = function(req, res, next) {
    // res.render('posts', { title: 'Posts' });
    Posts.find(function(err, posts){
        if(err){ return next(err); }

        res.json(posts);
    });
};

exports.seeder = Posts.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
        Posts.create({ title: 'Lorem ipsum dolor sit amet', upvotes: 10 });
        Posts.create({ title: 'Tempor incididunt ut labore', upvotes:20 });
    }
});