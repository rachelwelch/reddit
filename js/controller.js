var app = angular.module('reddit');

app.controller('PostsController', function($scope, firebaseService) {

	$scope.getPosts = function(){
		firebaseService.getPosts().then(function(result){
			$scope.posts = result;
		})
		return $scope.posts;
	}
	$scope.getPosts();

	console.log($scope.posts)

})