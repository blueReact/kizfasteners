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

    // washer
    // flat washer
    .when("/Flat-Washers-by-ID-OD-and-Thickness", {
      templateUrl: "partials/metricfasteners/washer/flat-washer/Flat-Washers-by-ID-OD-and-Thickness.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-125-ISO-7089-7090-Bare-Steel-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/washer/flat-washer/DIN-125-ISO-7089-7090-Bare-Steel-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-125-ISO-7089-7090-A2-A4-Stainless-Steel", {
      templateUrl: "partials/metricfasteners/washer/flat-washer/DIN-125-ISO-7089-7090-A2-A4-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-125-ISO-7089-7090-Brass", {
      templateUrl: "partials/metricfasteners/washer/flat-washer/DIN-125-ISO-7089-7090-Brass.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-126-Bare-Steel-Hot-Dipped-Galvanized-ISO-FIT", {
      templateUrl: "partials/metricfasteners/washer/flat-washer/DIN-126-Bare-Steel-Hot-Dipped-Galvanized-ISO-FIT.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-433-Small-O-D-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/washer/flat-washer/DIN-433-Small-O-D-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-433-Small-O-D-A2-A4-Stainless-Steel", {
      templateUrl: "partials/metricfasteners/washer/flat-washer/DIN-433-Small-O-D-A2-A4-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-1440-For-Clevis-Pins-Bare-Steel-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/washer/flat-washer/DIN-1440-For-Clevis-Pins-Bare-Steel-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-6916HV-10-Structural-Bare-Steel-Yellow-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/washer/flat-washer/DIN-6916HV-10-Structural-Bare-Steel-Yellow-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-7349-Thick-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/washer/flat-washer/DIN-7349-Thick-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-7603-Sealing-Copper-Aluminum", {
      templateUrl: "partials/metricfasteners/washer/flat-washer/DIN-7603-Sealing-Copper-Aluminum.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-7989-Extra-Thick-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/washer/flat-washer/DIN-7989-Extra-Thick-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-9021B-Fender-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/washer/flat-washer/DIN-9021B-Fender-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-9021B-Fender-A2-A4-Stainless-Steel", {
      templateUrl: "partials/metricfasteners/washer/flat-washer/DIN-9021B-Fender-A2-A4-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/Large-O-D-Car-Body-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/washer/flat-washer/Large-O-D-Car-Body-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    // Locking washer
    .when("/DIN-127B-Spring-Steel-Bare-Steel-Zinc-Plated-Yellow-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/washer/locking-washer/DIN-127B-Spring-Steel-Bare-Steel-Zinc-Plated-Yellow-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-127B-Spring-Steel-Hot-Dipped-Galvanized", {
      templateUrl: "partials/metricfasteners/washer/locking-washer/DIN-127B-Spring-Steel-Hot-Dipped-Galvanized.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-127B-Alloy-Steel-Lock-Washer-Yellow-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/washer/locking-washer/DIN-127B-Alloy-Steel-Lock-Washer-Yellow-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-127B-A2-A4-Stainless-Steel", {
      templateUrl: "partials/metricfasteners/washer/locking-washer/DIN-127B-A2-A4-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-127B-Bronze", {
      templateUrl: "partials/metricfasteners/washer/locking-washer/DIN-127B-Bronze.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-7980-High-Collar-Bare-Steel-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/washer/locking-washer/DIN-7980-High-Collar-Bare-Steel-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-7980-High-Collar-A4-Stainless-Steel", {
      templateUrl: "partials/metricfasteners/washer/locking-washer/DIN-7980-High-Collar-A4-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-128A-Spring-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/washer/locking-washer/DIN-7980-High-Collar-A4-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })


    .when("/DIN-6797A-External-Toothed-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/washer/locking-washer/DIN-6797A-External-Toothed-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-6797J-Internal-Toothed-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/washer/locking-washer/DIN-6797J-Internal-Toothed-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-6798V-Serrated-Countersunk-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/washer/locking-washer/DIN-6798V-Serrated-Countersunk-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-6798-Serrated-A2-Stainless-Steel", {
      templateUrl: "partials/metricfasteners/washer/locking-washer/DIN-6798-Serrated-A2-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-6796-Conical-Spring-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/washer/locking-washer/DIN-6796-Conical-Spring-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/Ribbed-Bare-Steel-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/washer/locking-washer/Ribbed-Bare-Steel-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/NFE-25-511-Contact-Washer-Yellow-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/washer/locking-washer/NFE-25-511-Contact-Washer-Yellow-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/RIPP-LOCK-Lock-Washers", {
      templateUrl: "partials/metricfasteners/washer/locking-washer/RIPP-LOCK-Lock-Washers.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-2093-Disc-Spring-Carbon-Steel-Chrome-Vanadium", {
      templateUrl: "partials/metricfasteners/washer/locking-washer/DIN-2093-Disc-Spring-Carbon-Steel-Chrome-Vanadium.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-137A-Curved-Sping-Zinc-Plated", {
      templateUrl: "partials/metricfasteners/washer/locking-washer/DIN-137A-Curved-Sping-Zinc-Plated.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    // nuts
    .when("/DIN-934-Bare-Steel-Zinc-Plated-Hot-Dip-Galvanized", {
      templateUrl: "partials/metricfasteners/nuts/Hexagon-Nuts/DIN-934-Bare-Steel-Zinc-Plated-Hot-Dip-Galvanized.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-934-Hot-Dip-Galvanized-ISO-FIT", {
      templateUrl: "partials/metricfasteners/nuts/Hexagon-Nuts/DIN-934-Hot-Dip-Galvanized-ISO-FIT.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-934-A2-A4-Stainless-Steel", {
      templateUrl: "partials/metricfasteners/nuts/Hexagon-Nuts/DIN-934-A2-A4-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-934-A2-A4-Stainless-Steel", {
      templateUrl: "partials/metricfasteners/nuts/Hexagon-Nuts/DIN-934-A2-A4-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-934-Brass", {
      templateUrl: "partials/metricfasteners/nuts/Hexagon-Nuts/DIN-934-Brass.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-6915HV-Structural", {
      templateUrl: "partials/metricfasteners/nuts/Hexagon-Nuts/DIN-6915HV-Structural.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-936-Jam-Nut", {
      templateUrl: "partials/metricfasteners/nuts/Hexagon-Nuts/DIN-936-Jam-Nut.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-439-Jam-Nut-A2-Stainless", {
      templateUrl: "partials/metricfasteners/nuts/Hexagon-Nuts/DIN-439-Jam-Nut-A2-Stainless.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/ASTM-A194-2H", {
      templateUrl: "partials/metricfasteners/nuts/Hexagon-Nuts/ASTM-A194-2H.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/Hex-Nut-ISO-ANSI-Pattern", {
      templateUrl: "partials/metricfasteners/nuts/Hexagon-Nuts/Hex-Nut-ISO-ANSI-Pattern.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/Hex-Nut-JIS", {
      templateUrl: "partials/metricfasteners/nuts/Hexagon-Nuts/Hex-Nut-JIS.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-929-Weld-Nut", {
      templateUrl: "partials/metricfasteners/nuts/Hexagon-Nuts/DIN-929-Weld-Nut.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-929-Weld-Nut-A2-Stainless", {
      templateUrl: "partials/metricfasteners/nuts/Hexagon-Nuts/DIN-929-Weld-Nut-A2-Stainless.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    // Locking Nuts
    .when("/DIN-980-All-Metal", {
      templateUrl: "partials/metricfasteners/nuts/locking-nuts/DIN-980-All-Metal.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-980-All-Metal-A2-A4-Stainless-Steel", {
      templateUrl: "partials/metricfasteners/nuts/locking-nuts/DIN-980-All-Metal-A2-A4-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-982-Tall-Nylon-Insert", {
      templateUrl: "partials/metricfasteners/nuts/locking-nuts/DIN-982-Tall-Nylon-Insert.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-985-Nylon-Insert-Zinc-Plated-Hot-Dipped-Galvanized-ISO-FIT", {
      templateUrl: "partials/metricfasteners/nuts/locking-nuts/DIN-985-Nylon-Insert-Zinc-Plated-Hot-Dipped-Galvanized-ISO-FIT.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-985-Nylon-Insert-A2-A4-Stainless", {
      templateUrl: "partials/metricfasteners/nuts/locking-nuts/DIN-985-Nylon-Insert-A2-A4-Stainless.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-985-Nylon-Insert-A2-A4-Stainless", {
      templateUrl: "partials/metricfasteners/nuts/locking-nuts/DIN-985-Nylon-Insert-A2-A4-Stainless.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/K-Lock", {
      templateUrl: "partials/metricfasteners/nuts/locking-nuts/K-Lock.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    // Flange-Nuts
    .when("/DIN-6923-Flange-Nut", {
      templateUrl: "partials/metricfasteners/nuts/Flange-Nuts/DIN-6923-Flange-Nut.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/DIN-6923-Flange-Nut-A2-Stainless-Steel", {
      templateUrl: "partials/metricfasteners/nuts/Flange-Nuts/DIN-6923-Flange-Nut-A2-Stainless-Steel.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/DIN-6926-Hex-Flange-with-Nylon-Insert", {
      templateUrl: "partials/metricfasteners/nuts/Flange-Nuts/DIN-6926-Hex-Flange-with-Nylon-Insert.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/DIN-6927-All-Metal-Hex-Flange-Nut", {
      templateUrl: "partials/metricfasteners/nuts/Flange-Nuts/DIN-6927-All-Metal-Hex-Flange-Nut.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })
    .when("/Hex-Flange-Nut-JIS", {
      templateUrl: "partials/metricfasteners/nuts/Flange-Nuts/Hex-Flange-Nut-JIS.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    // Slotted Nuts
    .when("/DIN-935-Hex-Castle-Nut", {
      templateUrl: "partials/metricfasteners/nuts/Slotted-Nuts/DIN-935-Hex-Castle-Nut.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    // Miscellaneous
    .when("/DIN-1587-Acorn-Nut", {
      templateUrl: "partials/metricfasteners/nuts/Miscellaneous/DIN-1587-Acorn-Nut.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-1587-Acorn-Nut-A2-Stainless", {
      templateUrl: "partials/metricfasteners/nuts/Miscellaneous/DIN-1587-Acorn-Nut-A2-Stainless.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/DIN-6334-Coupling-Nut", {
      templateUrl: "partials/metricfasteners/nuts/Miscellaneous/DIN-6334-Coupling-Nut.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .when("/American-Form-Wing-Nut", {
      templateUrl: "partials/metricfasteners/nuts/Miscellaneous/American-Form-Wing-Nut.partial.html",
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