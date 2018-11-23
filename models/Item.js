const mongosse = require('mongoose');
const Schema = mongosse.Schema;

// Create Schema
const ItemSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongosse.model('item', ItemSchema);