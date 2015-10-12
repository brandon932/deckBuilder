
var app = angular.module('myApp',["ngRoute"]);

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
      template: '<h1>This is page one!</h1>',
      access: {restricted: true}
    })
    .when('/two', {
      template: '<h1>This is page two!</h1>',
      access: {restricted: true}
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
