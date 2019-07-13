angular.module("chaty").factory("User", function($http, $q) {
    return {
        register: function(user) {
            var def = $q.defer()
            $http({
                url: 'http://172.16.2.205:3000/api/register',
                method: 'POST',
                data: user
            }).then(function(res) {
                // 
                if (res.data.status) {
                    def.resolve(res.data.status);
                    console.log("factory", res.data.status);
                } else {
                    console.log("factory error", res.data.status);
                    def.reject("there is no data")
                }
            }, function(err) {
                def.reject(err);
            })
            return def.promise;
        },
        loginfn: function(user) {
                var def = $q.defer()
                $http({
                    url: 'http://172.16.2.205:3000/api/login',
                    method: 'POST',
                    data: user
                }).then(function(res) {
                    console.log(res);
                    if (res.data.status) {
                        console.log("login", res.data.status);
                        def.resolve(res.data.status)
                    } else {
                        console.log("login errror", res.data.status);
                        def.reject("there is no data")
                    }
                }, function(err) {
                    def.reject(err);
                })
                return def.promise;
            }
            // getAllUsers: function() {
            //         var def = $q.defer()
            //         $http({
            //             url: 'http://test.w34.co/json/',
            //             method: 'GET'
            //         }).then(function(res) {
            //             console.log(res);
            //             if (res.data.length) {
            //                 def.resolve(res.data)
            //             }
            //         }, function(err) {
            //             def.reject(err);
            //         })
            //         return def.promise;
            //     }
            // getSingleUser: function(index) {
            //     var def = $q.defer()
            //     $http({
            //         url: 'http://test.w34.co/json/',
            //         method: 'GET'
            //     }).then(function(res) {
            //         if (res.data.status) {
            //             console.log(res.data);
            //             def.resolve(res.data[index])
            //         }
            //     }, function(err) {
            //         def.reject(err);
            //     })
            //     return def.promise;
            // }
    }
})