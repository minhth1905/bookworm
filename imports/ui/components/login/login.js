import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './login.html';

class loginCtrl{

	constructor($scope){
		'ngInject';
		$scope.viewModel(this);
	}

	login(username,password,$state,$location){
		console.log("Minh Phu");
		Meteor.loginWithPassword(username,password,function(error){
			if(error){
				console.log(error.reason);
			} else {
				console.log(Meteor.userId());
			}
		});
	}
}

var module = angular.module('loginModule',[angularMeteor]);

const component = module.component('login',{
	templateUrl: template,
	controller:loginCtrl
});
module.config(config);
function config($stateProvider) {
  'ngInject';
  $stateProvider.state('login', {
    url: '/login',
    template: '<login></login>',
  });

  $stateProvider.state('home', {
    url: '/',
    template: '<main-component></main-component>',
  });

}

export default component;