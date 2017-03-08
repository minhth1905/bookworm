import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Reviews } from '../../api/reviews.js';
import { Books } from '../../api/books.js';
import template from './showReviews.html';
import navbar from '../../ui/components/navbar/navbar.js';

class ShowReviewsCtrl {
  constructor($stateParams, $scope) {
    'ngInject';
 
    this.bookId = $stateParams.bookId;
    $scope.viewModel(this);
    this.helpers({
      all_review() {
        var book_id = $stateParams.bookId;
        console.log(book_id);
        var all_reviews = Reviews.find({ "book_id": book_id });
        if(all_reviews.count() == 0)
          return 0;  
        return all_reviews; 
      },
      book_cover() {
        var book_id = $stateParams.bookId;
        var cover_obj = Books.findOne({ "_id": book_id });
        return cover_obj;
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

