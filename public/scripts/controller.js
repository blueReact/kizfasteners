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
            'username': vm.username,
            'companyname': vm.companyname,
            'email': vm.email,
            'phone': vm.phone,
            'message': vm.message
          },
          headers: {
            'Content-Type': 'application/json' //,
            //Authorization: token
          }
        })
        .then(function (response) {

          vm.response = response.data;

          // resetting the fields
          vm.username = vm.companyname = vm.email = vm.phone = vm.message = '';
          console.log(vm.response);

        })
        .catch(function (err) {
          console.log(err);
          vm.error = err;
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


          localStorage.setItem("admin", vm.response.admin)
          localStorage.setItem("isLoggedIn", vm.response.isLoggedIn)

          $location.path("/admindashboard")

        })
        .catch(function (err) {
          console.log(err);
        });
    }


    vm.getContact = function () {
    $http({
        method: 'get',
        url: '/api/admin',
        headers: {
          'Content-Type': 'application/json',
          //Authorization: token
        }
      })
      .then(function (response) {

        vm.contacts = response.data.user;

        // resetting the fields
        // vm.email = vm.password = '';

        $location.path("/admindashboard")

      })
      .catch(function (err) {
        console.log(err);
      });

  };
  };

})();