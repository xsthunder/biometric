// 'use strict';
// (function(){
// 	angular.module( 'myApp')
// 		.factory('myFac', fac1);
// 	function fac1($http,$log){
// 		var self = {};
//         self.post = function (url,obj,cb) {
//             var data ="";
//             $http.post(self.baseUrl+url, obj,{
//                 headers:{'Content-Type':'application/x-www-form-urlencoded'},
//                 transformRequest:function(obj) {
//                     var str = [];
//                     for(var p in obj)
//                         str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
//                     return str.join("&");
//                 }
//             }).then(function (res) {
//                 cb(null,res.data);
//             },function () {
//                 cb(res);
//             })
//         };
// 		self.get = function(url, cb){
// 			$http.get(url)
// 				.then( function(res){
// 					cb(null,res.data);
// 				}, function(res){
// 					cb(res);
// 				})
// 		};
// 		self.hello = function(cb){
// 			self.get('hello',cb);
// 		};
// 		self.addUser = function(token,name,cb){
// 			self.post('/user',{
// 				face_token:token,
// 				nickname:name
// 			} ,cb);
// 		};
// 		self.getUser = function (cb) {
// 		    self.get('/user' ,cb);
//         };
// 		self.postmsg = function( token,name,msg,cb){
// 			self.post('msg',{
// 				face_token:token,
// 				msg:msg
// 			},cb);
// 		};
// 		self.getmsg = function( cb){
// 			self.get('msg',cb);
// 		};
// 		return self;
// 	}
// })()
