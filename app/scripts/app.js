'use strict';

/**
 * @ngdoc overview
 * @name remittanceApp
 * @description
 * # remittanceApp
 *
 * Main module of the application.
 */
angular
  .module('remittanceApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-storage',
    'timer',
    'ngclipboard',
    'platanus.rut',
    'formatAsCurrencyCode',
    'ng-phone',
    'ui.bootstrap',
    'angular.filter'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/send', {
        templateUrl: 'views/send.html',
        controller: 'SendCtrl',
        controllerAs: 'send'
      })
      .when('/terms', {
        templateUrl: 'views/terms.html',
        controller: 'TermsCtrl',
        controllerAs: 'terms'
      })
      .when('/views/bank_selector_chile', {
        templateUrl: 'views/bank_selector_chile.html'
      })
      .when('/views/bank_selector_colombia', {
        templateUrl: 'views/bank_selector_colombia.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
