(function() {
  'use strict';

  angular
    .module('quizAngular')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $state, $location) {
    $scope.getUsers = function () {
      return JSON.parse(localStorage.users);
    }
    $scope.users = $scope.getUsers();
    $scope.login = function () {
      if($scope.username =='admin' && $scope.password == 'admin')
      {
        $state.go('admin');
      }
      else
      {
        var len=$scope.users.length, flag=false;
        for(var i=0; i<len; i++)
        {
            if($scope.users[i].username == $scope.username && $scope.users[i].password == $scope.password)
              {
                $state.go('user');
                console.log(i);
                flag = true;
              }
        }
        if(flag == false)
          alert('Wrong Credentials!!');
      }
    };
  }
})();
