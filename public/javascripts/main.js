var app = angular.module('News', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: '/views/index/home.html',
            controller: 'HomeCtrl'
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