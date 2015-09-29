(function () {
  'use strict';
  angular
      .module('quizAngular')
      .service('QuizResults', ['$localStorage', function($localStorage){
          this.getResult = function () {
            if(!$localStorage.results) {
                $localStorage.results = JSON.stringify([]);
            }
            return JSON.parse($localStorage.results);
          };

          this.setResult = function (res) {
            var tmp = this.getResult();
            tmp.push(res);
            $localStorage.results = JSON.stringify(tmp);
          };
    }]);
})();
