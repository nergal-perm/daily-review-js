var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
	title: String,
	priority: {type: String, default: "C"},
	tags: [String]
});

var eventSchema = new mongoose.Schema({
	title: String,
	time: String,
	desc: String,
	tags: [String]
});

var chronoSchema = new mongoose.Schema({
	time: String,
	area: String,
	desc: String,
	duration: Number,
	quality: Number
});

var weatherSchema = new mongoose.Schema({
	dayImage: String,
	dayDesc: String,
	nightImage: String,
	nightDesc: String
});

var daySchema = new mongoose.Schema({
	question: String,
	answer: String,
	summary: String,
	weather: weatherSchema,
	tasks: [taskSchema],
	events: [eventSchema],
	chronos: [chronoSchema],
	date: Date
});

mongoose.model('Day', daySchema);