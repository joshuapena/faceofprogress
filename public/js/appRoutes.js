angular.module('appRoutes', []).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    })
    .when('/othergameproject', {
        templateUrl: 'views/othergameproject.html',
        controller: 'OtherGameController'
    })
    .when('/game', {
        templateUrl: 'views/game.html',
        controller: 'GameController'
    })
    .otherwise({ redirectTo: '/' });
}]);
