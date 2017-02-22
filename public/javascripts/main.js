var app = angular.module('News', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: '/templates/index/home.html',
            controller: 'HomeCtrl'
        })
        .when('/posts', {
            templateUrl: '/templates/posts/index.html',
            controller: 'PostCtrl'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);

app.factory('Posts', [function () {
    var object = {
        posts: []
    };

    return object;
}]);

app.controller('HomeCtrl', [
    '$scope',
    function ($scope) {
        $scope.page_title = 'Homepage';
    }
]);

app.controller('PostCtrl', [
    '$scope',
    'Posts',
    function ($scope, Posts) {
        $scope.page_title = 'Posts Page';
        $scope.posts = Posts.posts;
        $scope.posts = [
            {title: 'Lorem ipsum dolor sit amet', upvotes: 5},
            {title: 'Tempor incididunt ut labore et', upvotes: 2},
            {title: 'Quis nostrud exercitation', upvotes: 12},
            {title: 'Duis aute irure dolor', upvotes: 15},
            {title: 'Cillum dolore eu fugiat', upvotes: 10},
            {title: 'Sunt in culpa qui officia', upvotes: 35}
        ];

        $scope.addPost = function () {
            if (!$scope.title || $scope.title === '') {
                return;
            }
            $scope.posts.push({
                title: $scope.title,
                upvotes: 0
            });
            $scope.title = '';
        };

        $scope.incrementUpvotes = function (post) {
            post.upvotes += 1;
        };
    }
]);