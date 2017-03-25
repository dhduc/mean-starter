require('../models/Contact');
var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');

exports.create = function(req, res, next) {
    req.assert('name', 'Name cannot be blank').notEmpty();
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('message', 'Message cannot be blank').notEmpty();

    const errors = req.validationErrors();
    if (errors) {
        // req.flash('errors', errors);
        return res.redirect('/contact');
    }
};

exports.index = function(req, res, next) {
    res.render('contact/index', { title: 'Contact' });
};

exports.middle = function (req, res, next) {
    console.log('start at ' + Date.now());
    next();
};

/**
 *
 * @param req
 * @param res
 */
exports.add = function (req, res) {
    // Save data
    var contactInfo = req.body; //Get the parsed information
    if (!contactInfo.name || !contactInfo.email || !contactInfo.message) {
        res.render('pages/results', {title: 'Error', message: "Sorry, you provided wrong info", type: "error"});
    }
    else {
        var newContact = new Contact({
            name: contactInfo.name,
            email: contactInfo.email,
            message: contactInfo.message
        });
        newContact.save(function(err){
            if(err)
                res.render('pages/results', {title: 'Error', message: "Database error", type: "error"});
            else
                res.render('pages/results', {title: 'Success', message: "New contact added", type: "success", contact: contactInfo});
        });
    }
};