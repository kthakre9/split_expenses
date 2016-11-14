module.exports = angular.module('splitExpense')

    .controller('loginController', ['$scope' ,'AuthService', '$http', '$state', '$cookieStore' , '$rootScope', function ($scope, AuthService, $http, $state, $cookieStore, $rootScope) {

        // reset login status
        AuthService.ClearCredentials();

        $scope.login = function () {
            AuthService.Login($scope.username, $scope.password, function(response) {
                console.log(response);
                if(response.length != 0) {
                    AuthService.SetCredentials($scope.username, $scope.password);
                    $state.go('dashboard');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };

        $scope.cancel = function () {
            $state.go('app');
        };
    }]);
