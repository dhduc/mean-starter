var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContactSchema = new Schema({
    name: String,
    email: String,
    message: String
});

mongoose.model('Contact', ContactSchema);