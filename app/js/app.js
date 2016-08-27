(function(){
	var app = angular.module('bdmusic',['ngRoute','bdmusic.controller']);

	app.config(['$routeProvider',function($routeProvider){
		// 首页
		$routeProvider.when('/',{
			templateUrl:'/views/home.html',
			controller:'homeController'
		});

		// 列表页
		$routeProvider.when('/list',{
			templateUrl:'/views/list.html',
			controller:'listController'
		});

		// 播放器
		$routeProvider.when('/player/:songId',{
			templateUrl:'/views/player.html',
			controller:'playerController'
		});
	}]);
})();