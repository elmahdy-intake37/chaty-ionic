angular.module('chaty').controller('logout', function($scope, $state, User) {
    $scope.user = {};

    $scope.logout = function() {


        console.log("logout here");
        socket.emit("diconnect")

        $state.go('login');



    }

})