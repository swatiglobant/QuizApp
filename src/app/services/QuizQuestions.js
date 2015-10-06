(function () {
  'use strict';
  angular
      .module('quizAngular')
      .service('QuizQuestions', ['$q', '$http', function($q, $http){

          this.getData = function () {
              return $http.get('assets/quiz.json');
            };
    }]);
})();
