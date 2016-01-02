'use strict';

/**
 * @ngdoc directive
 * @name memoToolApp.directive:directives
 * @description
 * # directives
 */
angular.module('memoToolApp')
  .directive('directives', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the directives directive');
      }
    };
  });
