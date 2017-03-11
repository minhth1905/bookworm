import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Categories } from '../../api/categories.js';
import { Books } from '../../api/books.js';
import uiRouter from 'angular-ui-router';
import template from './commentReviews.html';

class CommentReviewsCtrl {
  constructor($stateParams, $scope, $sce) {
    'ngInject';
    $scope.viewModel(this);
  }
} 
const name = 'commentReviews';
var module = angular.module(name,[
  angularMeteor, uiRouter
]);

const component = module.component('commentReviews',{
	templateUrl: template,
	controller:CommentReviewsCtrl
});


export default component;
