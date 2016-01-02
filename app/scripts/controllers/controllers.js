'use strict';

/**
 * @ngdoc function
 * @name memoToolApp.controller:ControllersCtrl
 * @description
 * # ControllersCtrl
 * Controller of the memoToolApp
 */
angular.module('memoToolApp')
  .controller('ControllersCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
