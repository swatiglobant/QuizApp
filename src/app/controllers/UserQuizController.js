(function() {
  'use strict';

  angular
    .module('quizAngular')
    .controller('UserQuizController', ['QuizQuestions', 'QuizResults', '$scope', function (QuizQuestions, QuizResults, $scope) {
    $scope.quizData = [];
    $scope.startTest = false;
    $scope.curQuestion;
    $scope.user={};
    var result = [], i;

    $scope.start = start;
    $scope.answer = answer;
    $scope.calcResult = calcResult;

    //read questions from json file using service
    QuizQuestions.getData().then(function (data) {
      $scope.quizData = data.data.quiz;
      for (i = 0; i < $scope.quizData.length; i++) {
          result[i]=0;
        }
    }, function (error) {
      console.log(error.statusText);
    });

    function start() {
      $scope.startTest = true;
    };

    function answer(key, ind) {
      if ($scope.quizData[ind-1].answer.id == key) {
        result[ind-1]=1;
      }
    }

    function calcResult() {
      var percentage, ans = 0, len = result.length;
      $scope.startTest = false;
      for (i = 0; i < len; i++) {
        ans = ans + result[i]
      }
      percentage = (ans/len)*100;
      alert('You got '+percentage+'%');
      $scope.user.result = percentage;
      QuizResults.setResult($scope.user);
      $scope.user = {};
    }
  }]);

})();
