//js/routes.js
angular.module('chaty').config(function($stateProvider){
$stateProvider
  .state('basic',{
    url:'/basic',
    templateUrl:"templates/basic.html",
    abstract:true
  }).state('basic.start', {
    url:"",
    views: {
      "pageContent": {
        templateUrl: "templates/start.html",
            
      }
    }
  }).state('basic.login', {
    url: "/login",
    views: {
      "pageContent": {
        templateUrl: "templates/login.html",
        
      }
    }
  }).state('basic.register', {
    url: "/login",
    views: {
      "pageContent": {
        templateUrl: "templates/register.html",
        
      }
    }
  })

})

