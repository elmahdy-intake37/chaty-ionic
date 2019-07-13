angular.module('chaty').controller('activeusers', function($scope, $timeout, User) {
    socket.on("getusers", function(hager) {
        $timeout(function() {

            $scope.ahmed = hager;

            console.log($scope.ahmed);

        })
    })

})