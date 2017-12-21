'use strict';
(function(){
	angular.module( 'myApp')
		.controller( 'myCtrl',ctrl);
	function ctrl($scope,myFac,faceFac){
		$scope.name = "123";
		$scope.detect = function(e){
			function cb(err,res){
				console.log(err,res);
			};
			faceFac.detect(e.files[0],cb);
		};
		
		myFac.hello();
//		faceFac.compare();
	}
})()
