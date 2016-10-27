(function() {
'use strict';

angular.module('newApp')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/index.html'
    })
    .state('public.catCollection', {
  url: '/catCollection',
  templateUrl: 'src/public/catCollection.html',
  controller: 'catCollectionController',
  controllerAs: 'catCollectionCtrl',
  // resolve: {
  //   menuCategories: ['MenuService', function (MenuService) {
  //     return MenuService.getCategories();
  //   }]
  // }
})

//test data
.state('public.dogCollection', {
  url: '/dogCollection',
  templateUrl: 'src/public/dogCollection.html',
  controller: 'dogCollectionController',
  controllerAs: 'dogCollectionCtrl',
  // resolve: {
  //   menuCategories: ['MenuService', function (MenuService) {
  //     return MenuService.getCategories();
  //   }]
  // }
})

//test data
.state('public.birdCollection', {
  url: '/birdCollection',
  templateUrl: 'src/public/birdCollection.html',
  controller: 'birdCollectionController',
  controllerAs: 'birdCollectionCtrl',
  // resolve: {
  //   menuCategories: ['MenuService', function (MenuService) {
  //     return MenuService.getCategories();
  //   }]
  // }
})

//test data


}
})();
