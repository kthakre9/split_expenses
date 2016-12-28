module.exports = angular.module('splitExpense')

.controller('userController', ['$scope', 'UserService', 'AuthService','$http' , '$state', function ($scope, UserService, AuthService ,$http, $state) {

    $scope.createUser = createUser;

    function createUser() {

        var user = {
            username: $scope.username,
            password: $scope.password,
            email: $scope.email
        };
        var creds = {
            username: $scope.username,
            password: $scope.password
        }


        UserService.Create(user)
        .then(function (response) {
            AuthService.Login(creds, function(response) {
                AuthService.SetCredentials(creds);
                $state.go('app');
            });
        });
    };

    $scope.addBill = function () {
        var selectedUser = $scope.selectedUser;
        console.log($scope.selectedUser);
    };
}]);
