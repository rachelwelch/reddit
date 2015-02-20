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

	$scope.vote = function(id, direction) {
		firebaseService.vote(id, direction, $scope.posts[id].karma).then(function(){
			$scope.getPosts();
		})
	}

	$scope.submitComment = function(id, comment) {
		$scope.commentObj = {};
		commentObj.text = comment;
		commentObj.timestamp = Date.now();

		firebaseService.newComment(id, commentObj).then(function(){
			$scope.getPosts();
		})
	}

})