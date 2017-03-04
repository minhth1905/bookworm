import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './sidebar.html';

class sidebarCtrl{
	constructor(){

	}
}

var module = angular.module('sidebarModule',[angularMeteor]);

const component = module.component('sidebar',{
	templateUrl: template,
	controller:sidebarCtrl
});

function config($stateProvider) {
  'ngInject';
    
}

export default component.config(config);