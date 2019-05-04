// route-config.js
angular
  .module('myApp')
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "partials/home.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/aboutus", {
      templateUrl: "partials/aboutus/aboutus.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/aerospace-fasteners", {
      templateUrl: "partials/products/aerospace-fasteners.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/contactus", {
      templateUrl: "partials/contactus/contactus.partial.html",
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
    .when("/distributors", {
      templateUrl: "partials/distributors/distributors.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/inner-page", {
      templateUrl: "partials/metricfasteners/metricfasteners.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .otherwise({
      templateUrl: 'partials/error/404.partial.html',
      controller: 'mainController',
      controllerAs: 'vm'
    });

  // // removes URL hash
  // $locationProvider.html5Mode(true);

}