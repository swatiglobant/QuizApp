(function() {
  'use strict';

  angular
    .module('quizAngular')
    .controller('UserQuizController', ['$window', 'QuizQuestions', 'QuizResults', '$scope', '$interval', function ($window, QuizQuestions, QuizResults, $scope, $interval) {
    $scope.quizData = [];
    $scope.startTest = false;
    $scope.selected;
    $scope.user={};
    $scope.list={};
    $scope.list.count=0;
    $scope.tempCount=0;
    $scope.maxQues;
    $scope.quesTime;

    var result = [], i, timer;

    $scope.start = start;
    $scope.answer = answer;
    $scope.calcResult = calcResult;
    $scope.cancel = cancel;
    $scope.nextQues = nextQues;
    $scope.submitAns = submitAns;

    //read questions from json file using service
    QuizQuestions.getData().then(function (data) {
      $scope.quizData = data.data.quiz;
      $scope.maxQues = $scope.quizData.length;
      for (i = 0; i < $scope.quizData.length; i++) {
          result[i]=0;
        }
    }, function (error) {
      console.log(error.statusText);
    });

    function start() {
      //console.log($scope.quizData);
      if ($scope.user.name != undefined) {
        $scope.quesTime = $scope.quizData[0].duration; //first question duration
        timer = $interval(function() {
          if ($scope.quesTime > 0) {
            $scope.quesTime --;
            //console.log($scope.quesTime);
          }
          else {
              $scope.nextQues();
          }
        }, 1000);
        $scope.startTest = true;
      }
      else {
        alert("Enter name");
      }
    };

    function answer(key, ques) {
      $scope.selected = key;
      if (ques.answer.id == key) {
        result[ques.id]=1;
      }
    }

    function calcResult() {
      var percentage, ans = 0, len = result.length;
      for (i = 0; i < len; i++) {
        ans = ans + result[i]
      }
      percentage = (ans/len)*100;
      alert('You got '+percentage+'%');
      $scope.user.result = percentage;
      QuizResults.setResult($scope.user);
      $interval.cancel(timer);  //stop timer
      timer = undefined;
      $scope.cancel();
    }

    function cancel() {
      $scope.user = {};
      $scope.startTest = false;
      $scope.list.count=0;
      for (i = 0; i < $scope.quizData.length; i++) {
        result[i]=0;
      }
    }

    function nextQues() {
      $scope.list.count += 1;
      //$scope.$apply();
      if ($scope.list.count < $scope.maxQues) {
        $scope.quesTime = $scope.quizData[$scope.list.count].duration;
      }
      if(($scope.list.count == $scope.maxQues) && ($scope.startTest == true)) {
        $scope.calcResult();
        //console.log("Stoppped");
      }
    }

    function submitAns(ques) {
      if ($scope.selected === undefined) {
        if(confirm("No Option selected!!\n Do you want to continue?"))
        {
          //ques.isAnswered = true;
          $scope.nextQues();
          $scope.selected = undefined;
        }
      } else {
        //ques.isAnswered = true;
        $scope.nextQues();
        $scope.selected = undefined;
      }
    }
    // var windowElement = angular.element($window);
    //   windowElement.on('beforeunload', function (event) {
    //   event.preventDefault();
    // });

  }]);

})();
