'use strict';

angular.module('myApp.home', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider.state({
	name: 'home',
	url: '/',
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
})

.controller('HomeCtrl', [function() {

}]);
