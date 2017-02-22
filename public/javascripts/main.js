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

app.controller('HomeCtrl', [
    '$scope',
    function ($scope) {
        $scope.page_title = 'Homepage';
    }
]);

app.controller('PostCtrl', [
    '$scope',
    function ($scope) {
        $scope.page_title = 'Posts Page';
    }
]);