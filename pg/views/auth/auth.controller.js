/*global angular*/
'use strict';

angular.module('acctApp')
.controller('authCtrl', ['Auth', '$state', function(Auth, $state) {
  var aCtrl = this;
  
  aCtrl.user = {
    email: '',
    password: '',
  };
  
  aCtrl.login = function() {
    Auth.$authWithPassword(aCtrl.user).then(function (auth) {
      $state.go('home');
    }, function (error) {
      aCtrl.error = error;
    });
  };
  
  aCtrl.register = function () {
    Auth.$createUser(aCtrl.user).then(function (user) {
      aCtrl.login();
    }, function (error) {
      aCtrl.error = error;
    });
  };
}]);
