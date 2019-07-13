//js/routes.js
angular.module('chaty').config(function($stateProvider) {
    $stateProvider
        .state('start', {
            url: "",
            templateUrl: "templates/start.html"

        }).state('login', {
            url: "",
            templateUrl: "templates/login.html",
            controller: "login"

        }).state('register', {
            url: "",
            templateUrl: "templates/register.html",
            controller: "signup"

        }).state('basic', {
            url: '/basic',
            templateUrl: "templates/app.html",
            controller: "app",
            abstract: true

        }).state('basic.activeusers', {
            url: "/activeusers",
            views: {
                "pageContent": {
                    templateUrl: "templates/activeusers.html",
                    controller: "activeusers"

                }
            }
        }).state('basic.chatroom', {
            url: "/chatroom",
            views: {
                "pageContent": {
                    templateUrl: "templates/chatroom.html",
                    controller: "chatroom"

                }
            }
        }).state('basic.about', {
            url: "/about",
            views: {
                "pageContent": {
                    templateUrl: "templates/about.html"

                }
            }
        })
        .state('username', {
            url: "/username",
            views: {
                "pageContent": {
                    templateUrl: "templates/app.html"

                }
            }
        })

})