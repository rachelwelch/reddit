var app = angular.module('reddit');

app.service('firebaseService', function($http, $q) {

	this.getPosts = function() {
		var deferred = $q.defer();
		$http.get('https://devmtn.firebaseio.com/posts.json').then(function(res){
			deferred.resolve(res.data);
		})
		return deferred.promise
	}

	var guid = function() {
			var s4 = function() {
				return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
			}
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      			s4() + '-' + s4() + s4() + s4();
		}

	this.addPost = function(post){
		post.timestamp = Date.now();
		post.comments = [];
		post.karma = 0;
		post.id = guid();

		var deferred = $q.defer();
		$http.put('https://devmtn.firebaseio.com/posts/' + post.id + '.json', post).then(function(res){
			deferred.resolve(res.data);
		})
		return deferred.promise
	}

	// this.vote() = function(post.id, direction) {
	// 	if(direction === 'up') {
 //      		karma++;
 //    	} else if(direction === 'down'){
 //      		karma--;
 //    	}

 //    	var deferred = $q.defer();
	// 	$http.patch('https://devmtn.firebaseio.com/posts/' + post.id + '.json').then(function(res){
	// 		deferred.resolve(res.data);
	// 	})
	// 	return deferred.promise

	// }


})