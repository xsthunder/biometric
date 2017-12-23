'use strict';
(function(){
	angular.module( 'myApp')
		.factory('myFac', fac1);
	function fac1($http,$log){
		var self = {};
		self.post =function(url,obj,cb){
			$http.post(url,obj)
				.then(function(res){
					cb(null,res.data);
				}, function(res){
					cb(res);
				});
		}
		self.get = function(url, cb){
			$http.get(url)
				.then( function(res){
					cb(null,res.data);
				}, function(res){
					cb(res);
				})
		}
		self.hello = function(cb){
			self.get('hello',cb);
		}
		self.addUser = function(token,name,cb){
			self.post('/add-user',{
				face_token:token,
				nickname,name
			} ,cb);
		}
		self.login = function(token,cb){
			self.post('/login',{
				face_token:token
			},cb);
		}
		self.postmsg = function( token,name,msg,cb){
			self.post('msg',{
				face_token:token,
				msg:msg,
				face_token:token
			},cb);
		}
		self.getmsg = function( cb){
			self.get('msg',cb);
		}
		return self;
	}
})()
