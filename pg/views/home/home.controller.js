/*global angular */
'use strict';

angular.module('acctApp')
.controller('homeCtrl', ['$scope', 'NAV_LINKS', function ($scope, NAV_LINKS) {
  $scope.siteNavLinks = NAV_LINKS.internal;
  $scope.externalNavLinks = NAV_LINKS.external;
  
}]);
