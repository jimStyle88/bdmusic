(function(){
	var myModule = angular.module('bdmusic.controller',[]);

	// 首页控制器
	myModule.controller('homeController', [
		'$scope',
		'$rootScope',
		'$http', 
		function($scope,$rootScope,$http){
			$rootScope.current = {page:'home',title:'首页'};
			$rootScope.currentId = sessionStorage.currentId;

			$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?callback=JSON_CALLBACK&method=baidu.ting.billboard.billList&type=2&size=20&offset=0').success(function(res){
				// console.log(res);
				$scope.songs = res.song_list;
			});
		}
	]);

	// 列表控制器
	myModule.controller('listController',[
		'$scope',
		'$rootScope',
		'$http',
		function($scope,$rootScope,$http){
			$rootScope.current = {page:'list',title:'歌曲列表'};
			$rootScope.currentId = sessionStorage.currentId;

			$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=30&offset=0&callback=JSON_CALLBACK').success(function(res){
				console.log(res);
				$scope.songs = res.song_list;
				$scope.getDetails = function(id){
					$rootScope.currentId = id;

					// 临时保存当前歌曲id
					sessionStorage.setItem('currentId',id);
				}
			}).error(function(){

			})
		}
	]);

	// 播放器控制器
	myModule.controller('playerController',[
		'$scope',
		'$rootScope',
		'$routeParams',
		'$http',
		function($scope,$rootScope,$routeParams,$http){
			var songId = $routeParams.songId;
			$rootScope.current = {page:'player',title:'播放器'};
			$rootScope.currentId = songId;
			
			$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.playAAC&songid='+songId+'&callback=JSON_CALLBACK').success(function(res){
				console.log(res,$rootScope.currentId,$routeParams.songId);
				$scope.song = res.songinfo;
				$scope.file = res.bitrate;
			})
		}
	])
})();