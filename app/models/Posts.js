var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: String,
    upvotes: {type: Number, default: 0}
});

mongoose.model('Posts', PostSchema);