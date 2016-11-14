var app = angular.module('splitExpense', ['ui.router', 'ngCookies']);

require('../controllers/loginController');
require('../controllers/userController');
require('../services/authService');

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('app', {
                url: '/',
                views: {
                    header: {
                        templateUrl: '/partials/header.html'
                    },
                    content: {
                        templateUrl:  '/partials/homepage.html'
                    }
                }
            })
            .state('dashboard', {
                url: '/dashboard',
                views: {
                    header:{
                        templateUrl: '/partials/header.html'
                    },
                    content: {
                        templateUrl: '/partials/dashboard.html',
                        controller: 'userController'
                    }
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
                }
            });
    });

module.exports = app;