angular.module('chaty').controller('login', function($scope, $state, User) {
    $scope.loginuser = {};
    $scope.loginn = function(valid) {
        if (valid) {
            User.loginfn($scope.loginuser).then(function(data) {
                if (data == 1) {
                    window.localStorage.setItem("username", $scope.loginuser.username);
                    console.log($scope.loginuser);
                    socket.emit("getusers", $scope.loginuser.username)

                    $state.go('basic.activeusers');

                } else {
                    console.log("error msg");
                }

            })
        }
    }
})