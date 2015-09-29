(function () {
  'use strict';
  angular
      .module('quizAngular')
      .service('QuizQuestions', ['$q', '$http', function($q, $http){
          var deferred = $q.defer();
          this.getData = function () {
              return $http.get('assets/quiz.json')
                .success(function(response) {
                    //console.log(response);
                    deferred.resolve(response);
                    return deferred.promise;
                }).error(function(response) {
                    deferred.reject(response);
                    return deferred.promise;
                });
            };
    }]);
})();
