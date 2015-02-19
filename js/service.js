var app = angular.module('reddit');

app.service('firebaseService', function($http, $q) {

	this.getPosts = function() {
		var deferred = $q.defer();
		$http.get('https://devmtn.firebaseio.com/posts.json').then(function(res){
			deferred.resolve(res.data);
		})
		return deferred.promise
	}


})