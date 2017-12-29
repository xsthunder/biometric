'use strict';
(function(){
	angular.module( 'myApp')
		.controller( 'myCtrl',ctrl);
	function ctrl($scope,$mdToast,faceFac){
		var info = alert;
		$scope.name = "123";
		$scope.token = "";
        $scope.users = {};
        var notice = function (msg) {
            msg = msg||"something wrong";
            $mdToast.show(
                $mdToast.simple()
                    .textContent(msg)
                    .hideDelay(3000)
            );
        };
        $scope.maybes =[];
        $scope.chooseImg = function () {
            var file = angular.element(document.querySelector('#file'))[0]
            console.log(file);
            file.click();
        };
        $scope.addFace =function (token) {
            function cb(err,res) {
                if(!err)notice("add Face succeeded")
            }
            faceFac.addFace (token,cb);
        };
        $scope.search = function (token) {
            function cb(err,res) {
                console.log(err,res);
                if(!err){
					$scope.maybes=res.results;
					console.log("search done");
				}
            }
            faceFac.search(token,cb);
        };
		$scope.detect = function(e){
			function cb(err,res){
				if(!err){ $scope.token = res.faces[0].face_token; }
			}
			faceFac.detect(e.files[0],cb);
		};
		$scope.setUserId=function (token,username) {
			function cb(err,res) {
                if(!err){ notice('add succeed'); }
            }
		    faceFac.setUserId(token,username,cb);
        };
	}
})();
