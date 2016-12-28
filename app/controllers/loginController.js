module.exports = angular.module('splitExpense')

.controller('loginController', ['$scope' ,'AuthService', '$http', '$state', '$cookieStore' , '$rootScope', function ($scope, AuthService, $http, $state, $cookieStore, $rootScope) {

    $scope.logout = function(){
        AuthService.ClearCredentials();
    }

    $scope.login = function (creds) {
        $scope.creds = {
            username: '',
            password: ''
        }
        AuthService.Login(creds, function(response) {
            console.log("login controllers", response);
            if(response.length != 0) {
                AuthService.SetCredentials(creds);
                $state.go('app');
            } else {
                $scope.error = response.message;
            }
        });
    };
    
    $scope.cancel = function () {
        $state.go('app');
    };
}]);
