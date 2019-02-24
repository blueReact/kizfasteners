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


    vm.contactUs = function () {

      console.log(vm.username);

      $http({
          method: 'post',
          url: '/api/contactus',
          data: {
            'title': vm.username,
            'email': vm.email,
            'phone': vm.phone,
            'comment': vm.comment
          },
          headers: {
            'Content-Type': 'application/json' //,
            //Authorization: token
          }
        })
        .then(function (response) {
          
          vm.response = response.data;

          // resetting the fields
          vm.username = vm.email = vm.phone = vm.comment = '';
          console.log(vm.response);

        })
        .catch(function (err) {
          console.log(err);
        });
    }

    vm.adminRegister = function () {

      console.log(vm.username);

      $http({
          method: 'post',
          url: '/api/adminRegister',
          data: {
            'email': vm.email,
            'password': vm.password
          },
          headers: {
            'Content-Type': 'application/json' //,
            //Authorization: token
          }
        })
        .then(function (response) {
          
          vm.response = response.data;

          // resetting the fields
          vm.email = vm.password = '';
          console.log(vm.response);

        })
        .catch(function (err) {
          console.log(err);
        });
    }

    vm.adminLogin = function () {

      console.log(vm.username);

      $http({
          method: 'post',
          url: '/api/adminLogin',
          data: {
            'email': vm.email,
            'password': vm.password
          },
          headers: {
            'Content-Type': 'application/json' //,
            //Authorization: token
          }
        })
        .then(function (response) {
          
          vm.response = response.data;

          // resetting the fields
         // vm.email = vm.password = '';
          console.log(vm.response);
          $location.path("/admindashboard")

        })
        .catch(function (err) {
          console.log(err);
        });
    }

  };


})();