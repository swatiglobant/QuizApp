(function() {
  'use strict';

  angular
    .module('quizAngular')
    .controller('RegisterController', ['$scope','$state', 'QuizUsers', function($scope, $state, QuizUsers){

      $scope.user = {};
      $scope.register = register;

      function register(){
        $scope.users = QuizUsers.getUsers();
        $scope.users.push($scope.user);
        QuizUsers.setUsers($scope.users);
        alert("You are successfully registered !!");
        $state.go('home.login');
      }

    }]);

})();
