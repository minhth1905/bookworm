import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import sidebar from '../imports/ui/components/sidebar/sidebar.js';
import navbar from '../imports/ui/components/navbar/navbar.js';
import login from '../imports/ui/components/login/login.js';
import register from '../imports/ui/components/register/register.js';
import main from './main.js';

var module = angular.module('bookworm-app',[angularMeteor,uiRouter,sidebar.name,navbar.name,main.name,
  login.name,
	register.name
	]);

module.config(config);
module.run(run);
function config($stateProvider,$locationProvider, $urlRouterProvider,$qProvider) {
  'ngInject';
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $qProvider.errorOnUnhandledRejections(false);
}

function run ($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    if (error === 'AUTH_REQUIRED') {
      $state.go('login');
    }
  });

  Accounts.onLogin(function () {
    if ($state.is('login')) {
      $state.go('home');
    }
  });

  Accounts.onRegister(function () {
    if ($state.is('register')) {
      $state.go('home');
    }
  });   
}