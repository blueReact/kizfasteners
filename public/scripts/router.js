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

    // Imperial Fasteners
    // Holo-Krome    
    .when("/Holo-Krome-B7-Inch-Heavy-Hex-Cap-Screws", {
      templateUrl: "partials/imperialfasteners/Holo-Krome/Holo-Krome-B7-Inch-Heavy-Hex-Cap-Screws.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/holo-krome-grade-9-heavy-hex-cap-screw-imperial", {
      templateUrl: "partials/imperialfasteners/Holo-Krome/holo-krome-grade-9-heavy-hex-cap-screw-imperial.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/holo-krome-12-point-flange-screws-imperial", {
      templateUrl: "partials/imperialfasteners/Holo-Krome/holo-krome-12-point-flange-screws-imperial.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/holo-krome-hex-cap-screw-silicon-bronze", {
      templateUrl: "partials/imperialfasteners/Holo-Krome/holo-krome-hex-cap-screw-silicon-bronze.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    // UNC-UNF
    .when("/socket-cap-screws-unc-unf", {
      templateUrl: "partials/imperialfasteners/UNC-UNF/socket-cap-screws-unc-unf.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/flat-head-countersunk-sockets-unc-unf", {
      templateUrl: "partials/imperialfasteners/UNC-UNF/flat-head-countersunk-sockets-unc-unf.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/button-head-sockets-unc-unf", {
      templateUrl: "partials/imperialfasteners/UNC-UNF/button-head-sockets-unc-unf.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/shoulder-bolts-unc", {
      templateUrl: "partials/imperialfasteners/UNC-UNF/shoulder-bolts-unc.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/cup-point-set-screws-unc-unf", {
      templateUrl: "partials/imperialfasteners/UNC-UNF/cup-point-set-screws-unc-unf.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/short-arm-hexagon-key-cv-steel-black-finish", {
      templateUrl: "partials/imperialfasteners/UNC-UNF/short-arm-hexagon-key-cv-steel-black-finish.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/long-arm-hexagon-hey-cv-steel-satin-finish", {
      templateUrl: "partials/imperialfasteners/UNC-UNF/long-arm-hexagon-hey-cv-steel-satin-finish.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/pipe-plug", {
      templateUrl: "partials/imperialfasteners/UNC-UNF/pipe-plug.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/high-collar-lock-washers-bare-steel", {
      templateUrl: "partials/imperialfasteners/Washers/high-collar-lock-washers-bare-steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    // Pins
    .when("/slotted-spring-pin", {
      templateUrl: "partials/imperialfasteners/Pins/slotted-spring-pin.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/dowel-pins", {
      templateUrl: "partials/imperialfasteners/Pins/dowel-pins.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/non-vented-pull-dowel", {
      templateUrl: "partials/imperialfasteners/Pins/non-vented-pull-dowel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    // Repair-Kits
    .when("/thread-repair-kit", {
      templateUrl: "partials/imperialfasteners/Repair-Kits/thread-repair-kit.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    // Stainless-Steel
    .when("/thread-repair-insert", {
      templateUrl: "partials/imperialfasteners/Stainless-Steel/thread-repair-insert.partial.html",
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