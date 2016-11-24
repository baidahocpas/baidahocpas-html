/*global angular */
'use strict';

angular.module('acctApp')
.controller('contactCtrl', ['$scope', 'NAV_LINKS', function ($scope, NAV_LINKS) {
  $scope.siteNavLinks = NAV_LINKS.internal;
  $scope.externalNavLinks = NAV_LINKS.external;
  
  $scope.formFields = {
    name: '',
    email: '',
    message: ''
  };
}]);
