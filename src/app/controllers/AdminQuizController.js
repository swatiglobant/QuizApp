(function() {
  'use strict';

  angular
    .module('quizAngular')
    .controller('AdminQuizController', ['$scope', 'QuizUsers', 'QuizResults', function ($scope, QuizUsers, QuizResults) {
      $scope.empList = QuizUsers.getUsers();
      $scope.result = QuizResults.getResult();
    }]);
})();
