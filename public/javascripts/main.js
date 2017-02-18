var app = angular.module('News', []);

app.factory('posts', [function(){
    var o = {
        posts: []
    };
    return o;
}]);

app.controller('MainCtrl', [
    '$scope',
    'posts',
    function ($scope, posts) {
        $scope.posts = posts.posts;
        $scope.posts = [
            {title: 'Lorem ipsum dolor sit amet', upvotes: 5},
            {title: 'tempor incididunt ut labore', upvotes: 2},
            {title: 'quis nostrud exercitation ullamco', upvotes: 15},
            {title: 'cillum dolore eu fugiat', upvotes: 9},
            {title: 'Duis aute irure dolor', upvotes: 20},
            {title: 'sunt in culpa qui officia', upvotes: 4}
        ];

        $scope.addPost = function () {
            if (!$scope.title || $scope.title === '') {
                return;
            }
            $scope.posts.push({
                title: $scope.title,
                link: $scope.link,
                upvotes: 0
            });
            $scope.title = '';
            $scope.link = '';
        };

        $scope.incrementUpvotes = function (post) {
            post.upvotes += 1;
        };
    }]);