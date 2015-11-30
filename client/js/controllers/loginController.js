app.controller('loginController',
  ['$scope','$rootScope', '$location', 'AuthService',
  function ($scope, $rootScope, $location, AuthService) {

        // console.log($rootScope.user);

    $scope.loggedIn = function(){
        console.log(AuthService.getUserStatus());
        if (AuthService.getUserStatus() === true) {
            console.log("true");
            return false;
        }else{
            console.log("false");
            return true;
        }
    };

    $scope.login = function () {

      // initial values
      $scope.error = false;
      $scope.disabled = true;

      // call login from service
      AuthService.login($scope.loginForm.username, $scope.loginForm.password)
        // handle success
        .then(function () {
          $location.path('/');
          $scope.disabled = false;
          $scope.loginForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Invalid username and/or password";
          $scope.disabled = false;
          $scope.loginForm = {};
        });

    };

}]);
