(function () {
  'use strict';
  angular
      .module('quizAngular')
      .service('QuizUsers', ['$localStorage', function($localStorage){
          this.getUsers = function () {
            if(!$localStorage.users) {
                $localStorage.users = JSON.stringify([]);
            }
            return JSON.parse($localStorage.users);
          };

          this.setUsers = function (users) {
            $localStorage.users = JSON.stringify(users);
          };
    }]);
})();
