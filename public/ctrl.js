'use strict';
(function(){
	angular.module( 'myApp')
		.controller( 'myCtrl',ctrl);
	function ctrl($scope,$mdToast,faceFac){
		var info = alert;
		$scope.name = "123";
		$scope.token = "";
        $scope.users = {};
        var cv = (angular.element(document.querySelector('#cv')))[0];
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
        function convertImageToCanvas(canvas,image) {
            // 创建canvas DOM元素，并设置其宽高和图片一样
            canvas.width = image.width;
            canvas.height = image.height;
            // 坐标(0,0) 表示从此处开始绘制，相当于偏移。
            canvas.getContext("2d").drawImage(image, 0, 0);
            return canvas;
        }
        $scope.detect = function(e){

			var file = e.files[0];
			var loadingImg=loadImage(
			    file,
                function (img) {
			        convertImageToCanvas(cv,img);
                    var face ;
                    function cb(err,res){
                        if(!err){
                            face = res.faces[0];
                            $scope.token = res.faces[0].face_token;
                            var ctx = cv.getContext('2d');
                            var lk = face.landmark;
                            for(var i in lk){
                                ctx.strokeRect(lk[i].x,lk[i].y,5,5);
                            }
                        }
                    }
                    faceFac.detect(file,cb);
                }
            )

		};
		$scope.setUserId=function (token,username) {
			function cb(err,res) {
                if(!err){ notice('add succeed'); }
            }
		    faceFac.setUserId(token,username,cb);
        };
	}
})();
