var app = angular.module('reddit');

app.controller('PostsController', function($scope, firebaseService) {

	$scope.getPosts = function(){
		firebaseService.getPosts().then(function(result){
			$scope.posts = result;
		})
	}
	$scope.getPosts();

	$scope.addPost = function(){
		firebaseService.addPost($scope.newPost).then(function(){
			$scope.getPosts();
			$scope.newPost = {};
		})
	}

	// $scope.vote = function(post.id, direction) {
	// 	firebaseService.vote()
	// }

})