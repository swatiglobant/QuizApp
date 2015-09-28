(function() {
  'use strict';

  angular
    .module('quizAngular')
    .controller('UserQuizController', UserQuizController);

  /** @ngInject */
  function UserQuizController($scope, $http) {
    $scope.startTest = false;
    $scope.curQuestion;
    $scope.user={};
    $scope.result = [];

    $scope.start = function () {
      $scope.startTest = true;
    };

    $scope.getResult = function () {
      if(!localStorage.results) {
          localStorage.results = JSON.stringify([]);
      }
      return JSON.parse(localStorage.results);
    };

    $scope.setResult = function (res) {
      var tmp = $scope.getResult();
      tmp.push(res);
      localStorage.results = JSON.stringify(res);
    };

    $http.get('assets/quiz.json').then( function (res) {
      $scope.quizData = res.data.quiz;
      for (var i = 0; i < $scope.quizData.length; i++) {
        $scope.result[i]=0;
      }
    });

    $scope.answer = function (key, ind) {
      if ($scope.quizData[ind-1].answer.id == key) {
        $scope.result[ind-1]=1;
      }
    };

    $scope.calcResult = function () {
      var res, percentage;
      for (var res = 0, i = 0; i < $scope.result.length; i++) {
        res = res + $scope.result[i]
      }
      percentage = (res/$scope.result.length)*100;
      alert(percentage+'%');
      $scope.user.result = percentage;
      $scope.setResult($scope.user);
    };
  }
})();
