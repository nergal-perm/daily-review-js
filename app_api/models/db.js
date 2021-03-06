var mongoose = require('mongoose');

// Connection to MongoDB
var dbURI = 'mongodb://localhost/daily-review';
mongoose.connect(dbURI);

// Process termination on Windows machines
var readline = require('readline');
if (process.platform === 'win32') {
	var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	rl.on("SIGINT", function() {
		process.emit("SIGINT");
	});
}

// Process termination
var gracefulShutdown = function(msg, callback) {
	mongoose.connection.close(function() {
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};

process.once('SIGUSR2', function() {
	gracefulShutdown('nodemon restart', function() {
		process.kill(process.pid, 'SIGUSR2');
	});
});
process.on('SIGINT', function() {
	gracefulShutdown('app termination', function() {
		process.exit(0);
	});
});
process.on('SIGTERM', function() {
	gracefulShutdown('Heroku app shutdown', function() {
		process.exit(0);
	});
});

mongoose.connection.on('connected', function() {
	console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
	console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
	console.log('Mongoose disconnected');
});


// importing models
require('./days');