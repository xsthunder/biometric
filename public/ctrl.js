'use strict';
(function () {
    angular.module('myApp')
        .controller('myCtrl', ctrl);

    function ctrl($scope, $mdToast, faceFac) {
        var info = alert;
        $scope.name = "123";
        $scope.token = "";
        $scope.users = {};
        var cv = (angular.element(document.querySelector('#cv')))[0];
        var notice = function (msg) {
            msg = msg || "something wrong";
            $mdToast.show(
                $mdToast.simple()
                    .textContent(msg)
                    .hideDelay(3000)
            );
        };

        var canvas = document.querySelector("#cv");
        var video = document.querySelector("#video");
        var context = canvas.getContext('2d');
        var streaming = false;
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
            .then(function (stream) {
                video.srcObject = stream; // 将捕获的视频流传递给video  放弃window.URL.createObjectURL(stream)的使用
                video.play(); //  播放视频
            });

        var width;
        var height;
        video.addEventListener('canplay', function (ev) {
            if (!streaming) {
                width = video.videoWidth;
                height = video.videoHeight / (video.videoWidth / width);
                video.setAttribute('width', width);
                video.setAttribute('height', height);
                canvas.setAttribute('width', width);
                canvas.setAttribute('height', height);
                streaming = true;
            }
        }, false);

        $scope.takeShot = function () {
            // 需要判断媒体流是否就绪
            context.drawImage(video, 0, 0, width, height);// 将视频画面捕捉后绘制到canvas里面
            // canvas.toDataURL('image/png');// 将canvas的数据传送到img里
            function cb(err, res) {
                if (!err) {
                    let face = res.faces[0];
                    $scope.token = res.faces[0].face_token;
                    $scope.face = res.faces[0].attributes;
                    var ctx = cv.getContext('2d');
                    var lk = face.landmark;
                    for (var i in lk) {
                        ctx.strokeRect(lk[i].x, lk[i].y, 5, 5);
                    }
                }
            }

            var s = canvas.toDataURL('image/png');
            s = s.substring(s.indexOf(','));
            // console.log(s);
            faceFac.detect64(s, cb);
        };


        $scope.maybes = [];
        $scope.chooseImg = function () {
            var file = angular.element(document.querySelector('#file'))[0]
            console.log(file);
            file.click();
        };
        $scope.addFace = function (token) {
            function cb(err, res) {
                if (!err) notice("add Face succeeded")
            }

            faceFac.addFace(token, cb);
        };
        $scope.search = function (token) {
            function cb(err, res) {
                console.log(err, res);
                if (!err) {
                    $scope.maybes = res.results;
                    console.log("search done");
                }
            }

            faceFac.search(token, cb);
        };

        function convertImageToCanvas(canvas, image) {
            // 创建canvas DOM元素，并设置其宽高和图片一样
            canvas.width = image.width;
            canvas.height = image.height;
            // 坐标(0,0) 表示从此处开始绘制，相当于偏移。
            canvas.getContext("2d").drawImage(image, 0, 0);
            return canvas;
        }

        $scope.detect = function (e) {
            var file = e.files[0];
            var loadingImg = loadImage(
                file,
                function (img) {
                    convertImageToCanvas(cv, img);
                    var face;

                    function cb(err, res) {
                        if (!err) {
                            face = res.faces[0];
                            $scope.token = res.faces[0].face_token;
                            $scope.face = res.faces[0].attributes;
                            var ctx = cv.getContext('2d');
                            var lk = face.landmark;
                            for (var i in lk) {
                                ctx.strokeRect(lk[i].x, lk[i].y, 5, 5);
                            }
                        }
                    }

                    faceFac.detect(file, cb);
                }
            )

        };
        $scope.setUserId = function (token, username) {
            function cb(err, res) {
                if (!err) {
                    notice('add succeed');
                }
            }
            faceFac.setUserId(token, username, cb);
        };
    }
})();
