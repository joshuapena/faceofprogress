angular.module('HomeCtrl', []).
controller('HomeController', function($scope, $location, cssInjector) {
    console.log("foo");

    $scope.game = function() {
        $location.path('/game');
        console.log("foo game");
    };

    $scope.othergame = function() {
        $location.path('/othergameproject');
        console.log("foo othergame");
    };
});
