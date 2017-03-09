import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Categories} from '../../../api/categories.js';
import template from './addCategory.html';

class addCategory{
	constructor($scope,$state){
		'ngInject';
		$scope.viewModel(this);		
	}

	save(name,description){
		console.log(this.category._id);
		Categories.insert({name : name,description : description});
	}

}

var module = angular.module('addCategory',[angularMeteor]);

const component = module.component('addCategory',{
	templateUrl: template,
	controller:addCategory
});

export default component;