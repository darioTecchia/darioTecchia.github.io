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

      $scope.scrollTo = function (itemId) {
        console.log(itemId);
        document.querySelector('#' + itemId).scrollIntoView({
          behavior: 'smooth'
        });
      }

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