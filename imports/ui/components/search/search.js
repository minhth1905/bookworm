import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Books} from '../../../api/books.js';
import template from './search.html';

class searchCtrl{
	constructor($scope,$stateParams){
		'ngInject';
		$scope.viewModel(this);
		this.helpers({
			books(){
				var querry = $stateParams.search;
				console.log(querry);
				
				var books = Books.find({name : { $regex : querry }});
				return books;			
			}
		})

	}
}
var module = angular.module('searchModule',[angularMeteor,uiRouter]);

const component = module.component('search',{
	templateUrl: template,
	controller:searchCtrl
});

export default component;
