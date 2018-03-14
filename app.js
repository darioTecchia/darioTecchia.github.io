(function () {

  'use strict';

  angular
    .module('app', [])
    .controller('AppController', AppController);

  AppController.$inject = ['$scope', '$http'];

  function AppController($scope, $http) {

    var ac = this;

    ac.initialize = initialize;
    ac.changeCSS = changeCSS;

    ac.initialize();

    return ac;

    function changeCSS(cssFile, cssLinkIndex) {

      var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

      var newlink = document.createElement("link");
      newlink.setAttribute("rel", "stylesheet");
      newlink.setAttribute("type", "text/css");
      newlink.setAttribute("href", cssFile);

      document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
    }

    function initialize() {

      console.log('AppController');

      if (!!localStorage.getItem('darkIsSetted')) {
        if (localStorage.getItem('darkIsSetted')) {
          changeCSS('assets/style/app_dark.css', 0);
        }
      }

      var isDark = false;

      $scope.toogleDarkMode = function () {
        $('i.fa-moon').toggleClass('fa-sun');
        if (!isDark) {
          localStorage.setItem('darkIsSetted', true);
          changeCSS('assets/style/app_dark.css', 0);
          isDark = !isDark;
        } else {
          changeCSS('assets/style/app.css', 0);
          localStorage.setItem('darkIsSetted', false);
          isDark = !isDark;
        }
      }

      // Smooth Scroll
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

      // Get skills, projects and experiences from files.
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