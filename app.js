(function () {

  'use strict';

  angular
    .module('app', [])
    .controller('AppController', AppController);

  AppController.$inject = ['$scope', '$http'];

  function AppController($scope, $http) {

    var ac = this;

    ac.initialize = initialize;

    ac.initialize();

    return ac;

    function initialize() {

      console.log('AppController');

      $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });

      $http.get("assets/skills.json").then(function (skills) {
        $scope.skills = skills.data;
      });
      $http.get("assets/experiences.json").then(function (experiences) {
        $scope.experiences = experiences.data;
      });
      $http.get("assets/projects.json").then(function (projects) {
        $scope.projects = projects.data;
      });

    }

  }

})();