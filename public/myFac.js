'use strict';
(function(){
	angular.module( 'myApp')
		.factory('myFac', fac1);
	function fac1($http){
		var self = {};
		self.hello = function(){
			$http.get( '/hello');
		}
		return self;
	}
})()
