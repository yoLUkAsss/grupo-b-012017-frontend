'use strict';

angular.module('aloloco-app', [
    'ngRoute',
    'ngResource',
    'HomeController'
]).config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './views/home.html',
                controller: 'HomeController'
            });
    }
    ]);
