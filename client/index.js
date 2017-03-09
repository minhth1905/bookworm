import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor'

import sidebar from '../imports/ui/components/sidebar/sidebar.js';
import navbar from '../imports/ui/components/navbar/navbar.js';
import login from '../imports/ui/components/login/login.js';
import register from '../imports/ui/components/register/register.js';
import main from './main.js';

// var module = angular.module('bookworm-app',[angularMeteor,uiRouter, sidebar.name,navbar.name, main.name]);


var module = angular.module('bookworm-app',[angularMeteor,uiRouter,sidebar.name,navbar.name,main.name,
  login.name,
	register.name
	]);


function onReady() {
  angular.bootstrap(document, ['bookworm-app']);
   $(document).ready(function() {
    $('#summernote').summernote();
  }); 
   
  $(document).ready(function() {
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
      });
  });   
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
