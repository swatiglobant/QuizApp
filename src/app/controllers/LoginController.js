(function() {
  'use strict';

  angular
    .module('quizAngular')
    .controller('LoginController', ['$scope', '$state', '$location', 'QuizUsers', function ($scope, $state, $location, QuizUsers) {

    $scope.login = login;

    function login()
    {
      //$scope.users = _getUsers();
      $scope.users = QuizUsers.getUsers();
      //console.log($scope.users);
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
                //console.log(i);
                flag = true;
              }
        }
        if(flag == false)
          alert('Wrong Credentials!!');
      }
    }

  }]);
})();
