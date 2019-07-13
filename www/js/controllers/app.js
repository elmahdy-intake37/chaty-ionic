angular.module('chaty').controller('app', function($scope, $rootScope, $state) {
    $scope.user = {};

    var user = JSON.stringify(localStorage.getItem('username'));
    // var user = JSON.parse(localStorage.getItem('username'));
    console.log("app - username", localStorage.getItem('username'));
    $scope.username = user;

    $rootScope.username = user;
    console.log($rootScope.username);

    $scope.logout = function() {
        localStorage.removeItem('username');

        console.log("logout here");
        socket.emit("diconnect")

        $state.go('login');

    }
})