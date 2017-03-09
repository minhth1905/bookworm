import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './showReviews.html';
import navbar from '../../ui/components/navbar/navbar.js';

class ShowReviewsCtrl {
  constructor($stateParams, $scope) {
    'ngInject';
 
    //this.bookId = $stateParams.bookId;
    $scope.viewModel(this);
    this.helpers({
      bookId() {
        return $stateParams.bookId;
      }
    })
  }
}
const name = 'showReviews';
export default angular.module(name, [
angularMeteor, navbar.name
])
  .component(name, {
    templateUrl: template,
    controller: ShowReviewsCtrl
  })
  .config(config);
function config($stateProvider) {
  'ngInject';
 
  $stateProvider.state('showReviews', {
    url: '/books/:bookId',
    template: '<show-reviews></show-reviews>'
  });
}

