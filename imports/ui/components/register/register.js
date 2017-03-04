import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './register.html';

class registerCtrl{
	constructor(){

	}
}

var module = angular.module('registerModule',[angularMeteor]);

const component = module.component('register',{
	templateUrl: template,
	controller:registerCtrl
});

export default component;