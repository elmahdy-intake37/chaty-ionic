angular.module('chaty').controller('signup', function($scope, $rootScope, $state, User) {
    $scope.user = {};



    $scope.signup = function(valid) {

        if (valid) {

            if ($scope.user['password'].length > 4) {
                $scope.pass_error = false;
                $scope.repass_error = false;

                User.register($scope.user).then(function(data) {
                    if (data == 1) {
                        console.log("controllers", data);
                        var user = JSON.parse(localStorage.getItem('user'));
                        $state.go('login');

                    } else {
                        console.log("error msg");
                    }
                })


            } else {
                $scope.pass_error = true;
            }


        }
    }



})