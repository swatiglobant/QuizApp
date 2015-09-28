(function() {
  'use strict';

  angular
    .module('quizAngular')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/partials/main.html',
      })
      .state('home.login', {
        url: '/login',
        controller: 'LoginController',
        templateUrl: 'app/partials/login.html'
      })
      .state('home.register', {
        url: '/register',
        controller: 'RegisterController',
        templateUrl: 'app/partials/register.html'
      })
      .state('user', {
        url: '/user',
        templateUrl: 'app/partials/user-page.html',
        controller: 'UserQuizController'
      }).
      state('admin',{
        url: '/admin',
        templateUrl: 'app/partials/admin-page.html',
        controller: 'AdminQuizController'
      })
      .state('admin.empList',{
        templateUrl:'app/partials/empList.html',
      })
      .state('admin.empResult',{
        templateUrl:'app/partials/empResult.html',
      })
      .state('about',{
        url:'/About',
        template:'<div><acme-navbar></acme-navbar><h1>About Page</h1></div>'
      });

    $urlRouterProvider.otherwise('/home/login');
  }

})();
