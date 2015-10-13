
var app = angular.module('myApp',["ui.bootstrap", "ngRoute",]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'html/partials/home.html',
      access: {restricted: false}
    })
    .when('/login', {
      templateUrl: 'html/partials/login.html',
      controller: 'loginController',
      access: {restricted: false}
    })
    .when('/logout', {
      controller: 'logoutController',
      access: {restricted: true}
    })
    .when('/register', {
      templateUrl: 'html/partials/register.html',
      controller: 'registerController',
      access: {restricted: false}
    })
    .when('/one', {
      templateUrl: 'html/partials/myDecks.html',
      access: {restricted: true}
    })
    .when('/two', {
      template: '<h1>This is page two!</h1>',
      access: {restricted: true}
    })
    .when('/about', {
      template: '<h1>this is my about page</h1>',
      access: {restricted: false}
    })
    .otherwise({redirectTo: '/'});
});

app.run(function ($rootScope, $location, $route, AuthService) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (next.access.restricted && !AuthService.getUserStatus()) {
      $location.path('/login');
    }
  });
});
