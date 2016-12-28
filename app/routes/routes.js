var app = angular.module('splitExpense', ['ui.router', 'ngCookies']);

require('../controllers/loginController');
require('../controllers/userController');
require('../services/authService');
require('../services/userService');

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('welcome', {
                url: '/welcome',
                views: {
                    header: {
                        templateUrl: '/partials/header.html'
                    },
                    content: {
                        templateUrl:  '/partials/homepage.html'
                    }
                },
                data: {
                    requireLogin: false
                }
            })
            .state('app', {
                url: '/dashboard',
                views: {
                    header:{
                        templateUrl: '/partials/header.html',
                        controller: 'loginController'
                    },
                    content: {
                        templateUrl: '/partials/dashboard.html',
                        controller: 'userController'
                    }
                },
                data: {
                    requireLogin: true
                }
            })
            .state('login', {
                url: '/login',
                views: {
                    header:{
                        templateUrl: '/partials/header.html'
                    },
                    content: {
                        templateUrl: '/partials/login.html',
                        controller: 'loginController'
                    }
                },
                data: {
                    requireLogin: false
                }
            })
            .state('signup', {
                url: '/signup',
                views: {
                    header:{
                        templateUrl: '/partials/header.html'
                    },
                    content: {
                        templateUrl: '/partials/signUp.html',
                        controller: 'userController'
                    }
                },
                data: {
                    requireLogin: false
                }
            });
    });

    app.run(function($rootScope, $state ,$cookies, $http) {
        $rootScope.$state = $state;

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            $rootScope.globals = $cookies.getObject('user') || {};
            var loggedIn = $rootScope.globals.currentUser;
            var requireLogin = toState.data.requireLogin;

            if (requireLogin && !loggedIn) {
                $state.go('login');
              }
        })
    });

module.exports = app;
