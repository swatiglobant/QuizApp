(function() {
  'use strict';

  angular
    .module('quizAngular')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController($scope, $state) {
    $scope.user;
    $scope.getUsers = function () {
      if(!localStorage.users){
          localStorage.users = JSON.stringify([]);
      }
      return JSON.parse(localStorage.users);
    }
    $scope.setUsers = function (users) {
        localStorage.users = JSON.stringify(users);
    }
    $scope.register = function () {
        $scope.users = $scope.getUsers();
        console.log($scope.user);
        $scope.users.push($scope.user);
        $scope.setUsers($scope.users);
        alert("You are successfully registered !!");
        $state.go('home.login');
      };
    }
})();
