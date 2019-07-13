angular.module('chaty').controller('chatroom', function($scope, $timeout) {
    $scope.mg = {};
    console.log("hadjahsjdhasjda");
    $scope.funko = function($valid) {


        var username = localStorage.getItem("username");
        var content = $scope.mg.msgH

        // console.log("hagerda");
        // console.log($scope.mg.msgH)
        socket.emit("message", content, username)
        $scope.mg.msgH = "";
    }
    socket.on("message", function(hager) {
        $timeout(function() {

            $scope.ahmed = hager;

            console.log(hager);

        })
    })

})