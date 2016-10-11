var request = require('request');

/* Главная страница дня*/
module.exports.summary = function(req, res) {
	/* 
	1. Найти запись о текущем дне в БД
	1а.Если записи нет, то инициализировать день:
		- загрузить данные о погоде
		- загрузить вопрос дня
		- создать запись в БД
	1б.Если запись есть - загрузить ее данные в формы
	*/


	res.render('day-summary', {
		title: "Резюме дня",
		pageHeader: {
			title: "DailyReview",
			strapline: "Достигай большего!"
		},
		importantTasks: [{
			title: "Очень важное дело №1",
			priority: "A"
		}, {
			title: "Не очень, но все же важное дело",
			priority: "B"
		}],
		importantEvents: [{
			title: "Очень важное событие",
			time: "10:00",
			tags: ["Финансы", "Событие"]
		}, {
			title: 'Фильм "Мост в Терабитию"',
			time: "18:00",
			tags: ["Контент", "Важно"]
		}],
		weather: {
			day: {
				image: "chancerain.gif",
				desc: "Проливные дожди. Повышение 5C. Ветер С от 15 до 25 км/ч. Вероятность дождя 40%"
			},
			night: {
				image: "nt_chancesnow.gif",
				desc: "Снегопад ночью. Понижение -1C. Ветер ССЗ от 10 до 15 км/ч. Вероятность снега 40%."
			}
		}
	});
}

module.exports.plan = function(req, res) {
	res.render('day-plan', {
		title: "План дня",
		pageHeader: {
			title: "DailyReview",
			strapline: "Достигай большего!"
		},
		tasks: [{
			title: "Очень важное дело №1",
			priority: "A",
			tags: ["Важно", "Финансы"]
		}, {
			title: "Не очень, но все же важное дело",
			priority: "B",
			tags: ["Работа"]
		}],		
		question: "Какой-то вопрос дня?"
	});
}

module.exports.bullet = function(req, res) {
	res.render('day-bullet', {
		title: "События, достижения, результаты",
		pageHeader: {
			title: "DailyReview",
			strapline: "Достигай большего!"
		},
		events: [{
			title: "Очень важное событие",
			time: "10:00",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non mattis elit, vitae blandit velit. Donec id odio non ligula fringilla volutpat. Integer sed dictum nisl, ac sodales magna. Nullam at tortor dui. Integer dictum risus neque, id cursus neque sodales eget. Donec eleifend mauris a leo convallis malesuada. Maecenas consectetur elit quis risus congue commodo. Proin porttitor gravida dui ut ullamcorper. Aenean vel lectus velit. Donec vestibulum sapien luctus, aliquet magna eget, fringilla nulla. Suspendisse at finibus metus. Etiam dapibus ultrices molestie. In hac habitasse platea dictumst.",
			tags: ["Финансы", "Событие"]
		}, {
			title: 'Фильм "Мост в Терабитию"',
			time: "18:00",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper quam leo, sit amet luctus purus gravida at. Proin maximus nibh faucibus odio porttitor, quis hendrerit quam ornare. Vestibulum malesuada dolor eget quam convallis bibendum ac non diam. Nunc bibendum tempor diam, at pretium justo sollicitudin ut. Etiam ultrices elit non mi gravida, id molestie tellus malesuada. Morbi ligula leo, sollicitudin a diam id, tincidunt pretium lacus. Integer elit lorem, viverra malesuada nulla vitae, pretium faucibus erat.",
			tags: ["Контент", "Важно"]
		}]		
	});
}

module.exports.chrono = function(req, res) {
	res.render('day-chrono', {
		title: "Хронодекс",
		pageHeader: {
			title: "DailyReview",
			strapline: "Достигай большего!"
		},
		chronos: [{
			time: "08:00",
			area: "З Со",
			desc: "Принял душ",
			duration: 2,
			quality: 3
		}, {
			time: "08:30",
			area: "З Ед",
			desc: "Приготовил и съел завтрак",
			duration: 2,
			quality: 1
		}]
	});
}