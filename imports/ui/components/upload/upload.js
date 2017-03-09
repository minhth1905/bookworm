import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './upload.html';

class uploadCtrl{
	constructor($scope,$state){
		'ngInject';
		$scope.viewModel(this);		
	}

	save(title,content) {
		console.log(title);
	}
}

var module = angular.module('upload',[angularMeteor]);

const component = module.component('upload',{
	templateUrl: template,
	controller:uploadCtrl
});

export default component;