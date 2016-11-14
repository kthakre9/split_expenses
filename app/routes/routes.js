var app = angular.module('splitExpense', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
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
                        templateUrl: '/partials/dashboard.html'
                    }
                }
            });
    });

module.exports = app;