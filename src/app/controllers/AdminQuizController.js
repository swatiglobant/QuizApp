(function() {
  'use strict';

  angular
    .module('quizAngular')
    .controller('AdminQuizController', AdminQuizController);

  /** @ngInject */
  function AdminQuizController($scope) {
    $scope.empList = JSON.parse(localStorage.users);
    $scope.result = JSON.parse(localStorage.results);
  }
})();
