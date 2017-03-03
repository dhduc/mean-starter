var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: String,
    contents: {type: String, default: ''}
});

mongoose.model('Posts', PostSchema);