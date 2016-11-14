module.exports = angular.module('splitExpense')

    .controller('userController', ['$scope', '$http' , '$state', function ($scope, $http, $state) {

        $http.get("/users").success(function (response) {
            $scope.users = response;
        });

        $scope.sendEmail = function(){
            var email = $scope.email;
             var data = {
                 email: email
             };
            console.log("data" , data);

            $http.post('/sendEmail', data). success(function (response) {
                console.log("data inside email", response);
                //$scope.users = data;
                $state.go('dashboard');
            })
        };

        $scope.createUser = function() {
            var username = $scope.username;
            var password = $scope.password;
            var email = $scope.email;

            var data = {
                username: username,
                password: password,
                email: email
            };
            console.log("data", data);


            $http.post('/users', data).success(function (response) {
                console.log("data inside users", response);
                //$scope.users = data;
                $state.go('dashboard');
            }).
            error(function (err) {
                console.log('Error: ' + err);
            });
        };
    }]);
