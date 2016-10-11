var mongoose = require('mongoose');
var Day = mongoose.model('Day');
var moment = require('moment');

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
}; 


module.exports.daysListByDate = function(req, res) {
	var dateBegin = moment().subtract(7, 'days');

	var query = Day.find({
		date: {$gt: dateBegin.toDate()}
	});
	
	query.exec(function(err, days) {
		sendJsonResponse(res, 200, days);	
	});
};

module.exports.daysCreate = function(req, res) {
	sendJsonResponse(res, 200, {"status": "success"});
};
module.exports.daysReadOne = function(req, res) {
	if (req.params && req.params.dayid) {
		Day
			.findOne({date: req.params.dayid}) 
			.exec(function (err, day) {
				if (!day) {
					sendJsonResponse(res, 404, {
						"message":"Данные за указанную дату не найдены"
					});
					return;
				} else if (err) {
					sendJsonResponse(res, 500, err);
					return;
				}
				sendJsonResponse(res, 200, day);
		});
	} else {
		sendJsonResponse(res, 404, {
			"message": "Не указан dayid в запросе"
		});
	}
};

module.exports.daysUpdateOne = function(req, res) {
	sendJsonResponse(res, 200, {"status": "success"});
};

