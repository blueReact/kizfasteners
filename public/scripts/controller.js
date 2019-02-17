(function () {
  "use strict";

  // articles.controller.js
  angular
    .module('myApp')
    .controller('mainController', mainController)

    mainController.$inject = ['$rootScope', '$http', '$location']; 

  function mainController($rootScope, $http, $location) {

    var vm = this;
    vm.fourNotFour = 'Page not found - 404';  
    vm.username = '';


    vm.contactUs = function() {
      console.log(vm.username);

      $http({
        method: 'post',
        url: '/api/contactus',
        data: {
          'title': vm.username
        },
        headers: {
          'Content-Type': 'application/json'//,
          //Authorization: token
        }
      })
      .then(function (response) {
        vm.response = response.data;
        console.log(vm.response);
      })
      .catch(function (err) {
        console.log(err);
      });
    }

  };
  

})();