require('../models/Contact');
var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');

exports.create = function(req, res, next) {
    req.assert('name', 'Name cannot be blank').notEmpty();
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('message', 'Message cannot be blank').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/contact');
    }
};

exports.index = function(req, res, next) {
    res.render('contact/index', { title: 'Contact' });
};