(function(){
	angular.module('myApp')
		.factory('faceFac',fac2);
	function fac2(urlCnst){
		self= {};
		self.compare= function(cb){
			urlCnst.postFormData( urlCnst.compare, {
				face_token1:"08fca83ef14ea236f99594e7cab62dc5",
				face_token2:"08fca83ef14ea236f99594e7cab62dc5"
			}, cb)
		}
		self.detect = function(file,cb){
			urlCnst.postFormData( urlCnst.detect, {
				image_file:file
			},cb);
		}
		self.search = function(face_token,cb){
			urlCnst.postFormData( urlCnst.search,{
				face_token:face_token,
				outer_id:'obama'
			}, cb);
		}
		self.addFace = function(token,cb){
			urlCnst.postFormData( urlCnst.addFace,{
				face_tokens:token,
				outer_id:'obama'
			},cb);
		}
		self.setUserId = function (token,username,cb) {
		    urlCnst.postFormData( urlCnst.setUserId, {
					face_token:token,
					user_id:username
				},cb)
        };
		return self;
	}

})()
