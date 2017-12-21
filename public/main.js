(function(){
	angular.module( 'myApp', [
	])
		.controller('myCtrl', ctrl)
		.factory('myFac', fac)
		.factory('faceFac',fac2)
		.factory('urlCnst',cnst);
	function ctrl($scope, myFac,faceFac){
		$scope.name = "123";
		myFac.hello();
	}
	function cnst($http){
		var self  = {};
		self.detect = 'https://api-cn.faceplusplus.com/facepp/v3/detect';
		self.compare = 'https://api-cn.faceplusplus.com/facepp/v3/compare';
		self.search = 'https://api-cn.faceplusplus.com/facepp/v3/search';
		self.addFace = 'https://api-cn.faceplusplus.com/facepp/v3/faceset/addface'

		return self;
	}
	function fac($http){
		var self = {};
		self.hello = function(){
			$http.get( '/hello');
		}
		self.postFormData=function(url,obj) ={
			var pl = new FormData();
			pl.append('api_key',);
			pl.append
			for (i in obj){
			}
		}
		return self;
	}
	function fac2(urlCnst){
		self= {};
		self.detect = function(){
			urlCnst( urlCnst, {

			})
		}
	}
})()
