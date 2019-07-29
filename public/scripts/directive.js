(function () {
  "use strict";

  // articles.controller.js
  angular
    .module('myApp')
    .directive('stopccp', stopccp);  

  stopccp.$inject = [];  

  function stopccp() {
    return {
      scope: {},
      link: function (scope, element) {
        element.on('copy paste cut drag drop', function (event) {
          event.preventDefault();
        });
      }
    };
  }

})();