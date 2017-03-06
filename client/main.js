import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './main.html';

import navbar from '../imports/ui/components/navbar/navbar.js';
class mainCtrl{
	constructor(){
		
	}
}

var module = angular.module('mainModule',[angularMeteor,navbar.name]);
const component = module.component('mainComponent',{
	templateUrl: template,
	controller:mainCtrl
});


export default component;