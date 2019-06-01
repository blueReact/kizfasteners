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
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-931-ISO-4014-Partially-Threaded-Hex-Cap-Screw/8-8-Grade-Bare-Steel-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/8-8-Grade-Hot-Dip-Galvanized-ISO-FIT", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-931-ISO-4014-Partially-Threaded-Hex-Cap-Screw/8-8-Grade-Hot-Dip-Galvanized-ISO-FIT.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/10-9-Grade-Bare-Steel-Yellow-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-931-ISO-4014-Partially-Threaded-Hex-Cap-Screw/10-9-Grade-Bare-Steel-Yellow-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/10-9-Grade-Bare-Steel-with-Extended-Threads", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-931-ISO-4014-Partially-Threaded-Hex-Cap-Screw/10-9-Grade-Bare-Steel-with-Extended-Threads.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/12-9-Grade-Bare-Steel", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-931-ISO-4014-Partially-Threaded-Hex-Cap-Screw/12-9-Grade-Bare-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/A2-A4-Stainless-Steel", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-931-ISO-4014-Partially-Threaded-Hex-Cap-Screw/A2-A4-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    // DIN-933-ISO-4017-Fully-Threaded-Hex-Cap-Screw
    .when("/8-8-Grade-Bare-Steel-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-933-ISO-4017-Fully-Threaded-Hex-Cap-Screw/8-8-Grade-Bare-Steel-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/8-8-Grade-Hot-Dip-Galvanized-ISO-FIT", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-933-ISO-4017-Fully-Threaded-Hex-Cap-Screw/8-8-Grade-Hot-Dip-Galvanized-ISO-FIT.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/10-9-Grade-Bare-Steel-Yellow-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-933-ISO-4017-Fully-Threaded-Hex-Cap-Screw/10-9-Grade-Bare-Steel-Yellow-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/12-9-Grade-Bare-Steel", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-933-ISO-4017-Fully-Threaded-Hex-Cap-Screw/12-9-Grade-Bare-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/A2-A4-Stainless-Steel", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-933-ISO-4017-Fully-Threaded-Hex-Cap-Screw/A2-A4-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/Brass", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-933-ISO-4017-Fully-Threaded-Hex-Cap-Screw/Brass.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    // DIN 960 / ISO 8765 Partially Threaded Hex Cap Screw
    .when("/8-8-Grade-Bare-Zinc-1st-fine", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-960-ISO-8765-Partially-Threaded-Hex-Cap-Screw/8.8-Grade-Bare-Zinc-1st-fine.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/8-8-Grade-Bare-Zinc-2nd-fine", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-960-ISO-8765-Partially-Threaded-Hex-Cap-Screw/8-8-Grade-Bare-Zinc-2nd-fine.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/10-9-Grade-Bare-Zinc-1st-fine", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-960-ISO-8765-Partially-Threaded-Hex-Cap-Screw/10-9-Grade-Bare-Zinc-1st-fine.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/10-9-Grade-Bare-2nd-fine", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-960-ISO-8765-Partially-Threaded-Hex-Cap-Screw/10-9-Grade-Bare-2nd-fine.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })


    // DIN 961 / ISO 8676 Fully Threaded Hex Cap Screw (Fine Thread)
    .when("/8-8-Grade-Bare-Zinc-1st-fine", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-961-ISO-8676-Fully-Threaded-Hex-Cap-Screw-Fine-Thread/8-8-Grade-Bare-Zinc-1st-fine.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/8-8-Grade-Bare-Zinc-2nd-fine", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-961-ISO-8676-Fully-Threaded-Hex-Cap-Screw-Fine-Thread/8-8-Grade-Bare-Zinc-2nd-fine.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/10-9-Grade-Bare-2nd-fine", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-961-ISO-8676-Fully-Threaded-Hex-Cap-Screw-Fine-Thread/10-9-Grade-Bare-2nd-fine.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/10-9-Grade-Bare-Zinc-1st-fine", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-961-ISO-8676-Fully-Threaded-Hex-Cap-Screw-Fine-Thread/10-9-Grade-Bare-Zinc-1st-fine.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    // DIN 6921 Hex Flange Bolt (Non-Serrated)
    .when("/10-9-Grade-Yellow-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/DIN-6921-Hex-Flange-Bolt-Non-Serrated/10-9-Grade-Yellow-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    // Japanese Industrial Standard (JIS) Hex Fasteners
    .when("/JIS-B1180-8-8-Small-Head-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/Japanese-Industrial-Standard-JIS-Hex-Fasteners/JIS-B1180-8-8-Small-Head-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/JIS-B1189-10-9-Small-Head-Hex-Flange-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/hexHeadFasteners/Japanese-Industrial-Standard-JIS-Hex-Fasteners/JIS-B1189-10-9-Small-Head-Hex-Flange-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })


    // DIN 912 / ISO 4762 Socket Head Cap Screws
    .when("/8-8-Grade-Bare-Steel-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/DIN-912-ISO-4762-Socket-Head-Cap-Screws/8-8-Grade-Bare-Steel-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/12-9-Grade-Bare-Steel-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/DIN-912-ISO-4762-Socket-Head-Cap-Screws/12-9-Grade-Bare-Steel-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/12-9-Grade-Bare-Steel-FINE-Thread", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/DIN-912-ISO-4762-Socket-Head-Cap-Screws/12-9-Grade-Bare-Steel-FINE-Thread.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/A2-A4-Stainless-Steel", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/DIN-912-ISO-4762-Socket-Head-Cap-Screws/A2-A4-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    // ISO 7380 Button Head Socket
    .when("/10-9-Grade-Bare-Steel-Zinc-Plated-Head-Socket", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/ISO-7380-Button-Head-Socket/10-9-Grade-Bare-Steel-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/A2-Stainless-Steel-Head-Socket", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/ISO-7380-Button-Head-Socket/A2-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    // ISO 7379 Shoulder Bolt    
    .when("/10-9-Grade-Bare-Steel-Zinc-Plated-Shoulder-Bolt", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/DIN-7991-ISO-10642-Flat-Head-Countersunk-Socket/12-9-Grade-Bare-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/A2-Stainless-Steel-Shoulder-Bolt", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/DIN-7991-ISO-10642-Flat-Head-Countersunk-Socket/A2-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    // Set Screws
    .when("/DIN-913-Flat-Point", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/Set-Screws/DIN-913-Flat-Point.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/DIN-914-Cone-Point", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/Set-Screws/DIN-914-Cone-Point.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/DIN-915-Dog-Point", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/Set-Screws/DIN-915-Dog-Point.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/DIN-916-ISO-4029-Cup-Point", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/Set-Screws/DIN-916-ISO-4029-Cup-Point.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/A2-A4-Stainless-Steel", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/Set-Screws/A2-A4-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/DIN-479-8-8-Square-Head", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/Set-Screws/DIN-479-8-8-Square-Head.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })


    // Low Head Socket Cap Screws
    .when("/DIN-6912-8-8-Bare-Steel-with-Guide-Point", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/Low-Head-Socket-Cap-Screws/DIN-6912-8-8-Bare-Steel-with-Guide-Point.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/DIN-7984-8-8-Bare-Steel", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/Low-Head-Socket-Cap-Screws/DIN-7984-8-8-Bare-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/DIN-7984-10-9-Bare-Steel", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/Low-Head-Socket-Cap-Screws/DIN-7984-10-9-Bare-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/DIN-7984-A2-Stainless-Steel", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/Low-Head-Socket-Cap-Screws/DIN-7984-A2-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    // keys
    .when("/DIN-911-ISO-2936-Short-Arm-Chrome-Vanadium", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/keys/DIN-911-ISO-2936-Short-Arm-Chrome-Vanadium.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/DIN-911-ISO-2936-Long-Arm-Chrome-Vanadium", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/keys/DIN-911-ISO-2936-Long-Arm-Chrome-Vanadium.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/DIN-6911-Guide-Point-Chrome-Vanadium", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/keys/DIN-6911-Guide-Point-Chrome-Vanadium.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })


    // Plugs
    .when("/DIN-906-Hexagon-Socket-Pipe-Plug", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/Plugs/DIN-906-Hexagon-Socket-Pipe-Plug.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/DIN-908-Hexagon-Socket-Screw-Plug", {
      templateUrl: "partials/metricfasteners/socketHeadFasteners/Plugs/DIN-908-Hexagon-Socket-Screw-Plug.partial.html",
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