(function () {
  "use strict";

  // articles.controller.js
  angular
    .module('myApp')
    .controller('mainController', mainController)

  mainController.$inject = ['$rootScope', '$http', '$location', '$window'];

  function mainController($rootScope, $http, $location, $window) {

    var vm = this;
    vm.fourNotFour = 'Page not found - 404';
    vm.username = '';
    vm.hideError = true;
    vm.success = false;

    vm.contactUs = function () {

      vm.hideError = false;
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
          vm.hideError = true;
          vm.success = true;

          console.log(vm.response);

          refresh();

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

    vm.adminLogout = function () {

      $http({
          method: 'post',
          url: '/api/destroySession',
          headers: {
            'Content-Type': 'application/json' //,
            //Authorization: token
          }
        })
        .then(function (response) {

          // resetting the fields
          // vm.email = vm.password = '';
          console.log(response);

          localStorage.removeItem("admin");
          localStorage.removeItem("isLoggedIn");

          $location.path("/");

        })
        .catch(function (err) {
          console.log(err);
        });

    }

    var refresh = function () {

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

          // $location.path("/admindashboard") ?? not sure why

        })
        .catch(function (err) {
          console.log(err);
        });

    }

    refresh();

    // if($( window ).width()>1024) {
    //   $('.dropdown-menu').css('width', $( window ).width() + 'px');
    //   $('.dropdown-menu').css('height', ($( window ).height() - 40) + 'px');
    // }
    // $('.sub-dropdown-heading').hover(function(){
    //   // var myEl = angular.element( document.querySelector( '.sub-dropdown' ) );
    //   // myEl.toggleClass('active');
    //   $(this).find('.sub-dropdown', this).toggleClass('active');
    // });      

    // $('.dropdown-menu').removeClass('active');
    // $('.dropdown-toggle-j').click(function () {
    //   // $('.dropdown-menu').removeClass('active');
    //   $(this).next().toggleClass('active');
    // });


    $('.dropdown-submenu > a').on("click", function (e) {
      var submenu = $(this);
      $('.dropdown-submenu .dropdown-menu').removeClass('show');
      submenu.next('.dropdown-menu').addClass('show');
      e.stopPropagation();
    });

    $('.dropdown').on("hidden.bs.dropdown", function () {
      // hide any open menus when parent closes
      $('.dropdown-menu.show').removeClass('show');
    });

  };

})();