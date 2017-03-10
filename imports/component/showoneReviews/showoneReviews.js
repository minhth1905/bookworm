import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import readBooks from '../readBooks/readBooks'
import { Reviews } from '../../api/reviews.js';
import { Books } from '../../api/books.js';
import template from './showoneReviews.html';
import login from '../../ui/components/login/login.js';

class ShowoneReviewsCtrl {
  constructor($stateParams, $scope) {
    'ngInject';
    $scope.viewModel(this);
    this.helpers({
      review() {
        var review_id = $stateParams.reviewId;
        var result = Reviews.find({ "_id": $stateParams.reviewId }).fetch()[0];
        return result;
      },
      book() {
        var data = { "cover": "" };
        var result = Reviews.find({ "_id": $stateParams.reviewId });
        result.forEach(function (review) {
          var book_id = review.book_id;
          var booksList = Books.find({
            "_id": book_id
          }).map(function (obj) {
            return {
              "cover": obj.cover
            };
          })
          data = booksList[0];
        })
        console.log(data);
        return data;
      },
      logined(){
				if(Meteor.userId()) return true;
				return false;
			}
    })
  }
}
const name = 'showoneReviews';
export default angular.module(name, [
angularMeteor, readBooks.name, login.name
])
  .component(name, {
    templateUrl: template,
    controller: ShowoneReviewsCtrl
  })
  .config(config);
function config($stateProvider) {
  'ngInject';
 
  $stateProvider.state('showoneReviews', {
    url: '/reviews/:reviewId',
    template: '<showone-reviews></showone-reviews>'
  });
}

