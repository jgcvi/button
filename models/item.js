var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
	name: String,
	img: String,
	price: Number,
	created_at: Date,
	updated_at: Date
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
