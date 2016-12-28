module.exports = angular.module('splitExpense')

    .factory('AuthService', ['$http', '$rootScope', '$cookies', function ($http, $rootScope, $cookies) {
        var service = {};

        service.Login = function (creds, callback) {
            $http.post('/api/users/authenticate', {
                username: creds.username,
                password: creds.password
            })
                .then(function (res) {
                    callback(res);
                });
        };

        service.SetCredentials = function (creds) {
            var authdata = window.btoa(creds.username + ':' + creds.password);

            $rootScope.globals = {
                currentUser : {
                        username: creds.username,
                        authdata: authdata
                }
            };

            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
            $cookies.putObject('user', $rootScope.globals);
            console.log($rootScope.globals);
        };

        service.ClearCredentials = function () {
            $rootScope.globals = {};
            $cookies.remove('user');
            $http.defaults.headers.common.Authorization = 'Basic ';
        };

        return service;
    }])
