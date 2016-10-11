var request = require('request');
var apiOptions = {
	server: 'http://localhost:3000'
};
var moment = require('moment');

var renderHomePage = function(req, res, responseBody) {
	responseBody.each(function(item, index, array) {
		var dt = moment(item.date)
	});
	res.render('index', { 		
		title: "Последние записи",
		pageHeader: {
			title: "DailyReview",
			strapline: "Достигай большего!"
		},
		days: [{
			date: "11 октября 2016",
			dateForLink: 20161011,
			summary: "Очень хороший и продуктивный день"
		}, {
			date: "10 октября 2016",
			dateForLink: 20161010,
			summary: "Успел очень много"			
		}]
	});	
};


/* GET home page */
module.exports.index = function(req, res) {
	var requestOptions, path;
	path = '/api/days';
	requestOptions = {
		url: apiOptions.server + path,
		method: 'GET',
		json: {},
		qs: ''
	};
	request(
		requestOptions,
		function(err, response, body) {
			renderHomePage(req, res, body);		
		}
	);
};

