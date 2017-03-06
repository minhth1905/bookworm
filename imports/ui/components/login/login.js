import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './login.html';

class loginCtrl{

	constructor($scope){
		'ngInject';
		$scope.viewModel(this);
		this.errors = "";
	}

	loginUser(username,password){
		var m = this;
		Meteor.loginWithPassword(username,password,function(error){
			if(error){
				m.errors = error.reason;
			} else {
				
			}
		});
	}
}

var module = angular.module('loginModule',[angularMeteor,uiRouter]);

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

}

export default component;