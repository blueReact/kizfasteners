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

    // DIN-931-ISO-4014-Partially-Threaded-Hex-Cap-Screw
    .when("/8-8-Grade-Bare-Steel-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/DIN-931-ISO-4014-Partially-Threaded-Hex-Cap-Screw/8-8-Grade-Bare-Steel-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    }) 
    .when("/8-8-Grade-Hot-Dip-Galvanized-ISO-FIT", {
      templateUrl: "partials/metricfasteners/DIN-931-ISO-4014-Partially-Threaded-Hex-Cap-Screw/8-8-Grade-Hot-Dip-Galvanized-ISO-FIT.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/10-9-Grade-Bare-Steel-Yellow-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/DIN-931-ISO-4014-Partially-Threaded-Hex-Cap-Screw/10-9-Grade-Bare-Steel-Yellow-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/10-9-Grade-Bare-Steel-with-Extended-Threads", {
      templateUrl: "partials/metricfasteners/DIN-931-ISO-4014-Partially-Threaded-Hex-Cap-Screw/10-9-Grade-Bare-Steel-with-Extended-Threads.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/12-9-Grade-Bare-Steel", {
      templateUrl: "partials/metricfasteners/DIN-931-ISO-4014-Partially-Threaded-Hex-Cap-Screw/12-9-Grade-Bare-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/A2-A4-Stainless-Steel", {
      templateUrl: "partials/metricfasteners/DIN-931-ISO-4014-Partially-Threaded-Hex-Cap-Screw/A2-A4-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    // DIN-933-ISO-4017-Fully-Threaded-Hex-Cap-Screw
    .when("/8-8-Grade-Bare-Steel-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/DIN-933-ISO-4017-Fully-Threaded-Hex-Cap-Screw/8-8-Grade-Bare-Steel-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    }) 
    .when("/8-8-Grade-Hot-Dip-Galvanized-ISO-FIT", {
      templateUrl: "partials/metricfasteners/DIN-933-ISO-4017-Fully-Threaded-Hex-Cap-Screw/8-8-Grade-Hot-Dip-Galvanized-ISO-FIT.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })     
    .when("/10-9-Grade-Bare-Steel-Yellow-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/DIN-933-ISO-4017-Fully-Threaded-Hex-Cap-Screw/10-9-Grade-Bare-Steel-Yellow-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/12-9-Grade-Bare-Steel", {
      templateUrl: "partials/metricfasteners/DIN-933-ISO-4017-Fully-Threaded-Hex-Cap-Screw/12-9-Grade-Bare-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/A2-A4-Stainless-Steel", {
      templateUrl: "partials/metricfasteners/DIN-933-ISO-4017-Fully-Threaded-Hex-Cap-Screw/A2-A4-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/Brass", {
      templateUrl: "partials/metricfasteners/DIN-933-ISO-4017-Fully-Threaded-Hex-Cap-Screw/Brass.partial.html",
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