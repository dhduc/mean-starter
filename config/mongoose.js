var config = require('./config'),
    mongoose = require('mongoose');

/**
 * @returns {MongooseThenable|*|{server}}
 */
module.exports = function() {
    var db = mongoose.connect(config.db);
    require('../app/models/Posts');

    return db;
};