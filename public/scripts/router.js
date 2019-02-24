// route-config.js
angular
  .module('myApp')
  .config(config);

config.$inject = ['$routeProvider'];

function config($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "partials/home.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/contactus", {
      templateUrl: "partials/contactus.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/adminregister", {
      templateUrl: "partials/admin/adminRegister.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/adminlogin", {
      templateUrl: "partials/admin/adminLogin.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/admindashboard", {
      templateUrl: "partials/admin/adminDashboard.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .otherwise({
      templateUrl: 'partials/error/404.partial.html',
      controller: 'mainController',
      controllerAs: 'vm'
    });

}