'use strict';
(function(){
	angular.module( 'myApp')
		.factory('urlCnst', cnst);
	function cnst($http){
		var self  = {};
		self.detect = 'https://api-cn.faceplusplus.com/facepp/v3/detect';
		self.compare = 'https://api-cn.faceplusplus.com/facepp/v3/compare';
		self.search = 'https://api-cn.faceplusplus.com/facepp/v3/search';
		self.addFace = 'https://api-cn.faceplusplus.com/facepp/v3/faceset/addface'
		self.postFormData = function( url, obj, cb){
			var pl = new FormData();
			pl.append("api_key", "aHAHS7AKRXU0lMZ7zzHrNkJyBLnCWuxr")
			pl.append("api_secret", "WZWJWFgShF0Im-DC4g7uwzecCpHnSbUo")
			for( var i in obj){
				pl.append( i , obj[i]);
			}
			$http({
				url:url,
				method:'POST',
				data:pl,
				headers:{ 'Content-Type':undefined }
			}).then( function(res){
				cb(null,res.date);
			}, function(res){ 
				cb(res);
			});
		}
		return self;
	}
})()
