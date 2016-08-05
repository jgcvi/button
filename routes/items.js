var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/item.js');
mongoose.connect('mongodb://localhost/buttondb');

router.get('/items', function(req, res, next) {
Item.find({}, function(err, items) {
		if(err) {
			res.send(err);
		} else {
			res.json(items);
		}
	})
});

router.get('/todo/:id', function(req, res, next) {
	Item.findOne({
		name: req.params.id
	}, function(err, items) {
		if(err) {
			res.send(err);
		} else {
			res.json(items);
		}
	});
});

// now starts admin calls
router.post('/item', function(req, res, next) {
	var item = req.body;
	Item.save(item, function(err, result) {
		if(err) {
			res.send(err);
		} else {
			res.json(result);
		}
	});
});

router.put('/todo/:id', function(req, res, next) {
	var item = req.body;
	var updObj = {};

	/*
	* figure out data model and complete here
	*/
});

module.exports = router;
