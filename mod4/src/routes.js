(function () {
'use strict';

angular.module('menuapp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'categoriesController as catCtrl',
    resolve: {
      categories: ['menuDataService', function (menuDataService) {
        return menuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('categories.item', {
     url: '/item/{itemId}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemsController as itemCtrl',
    params: {
      itemId: null
   },
    resolve: {
      items: ['$stateParams','menuDataService', function ($stateParams,menuDataService) {
        return menuDataService.getItemsForCategory($stateParams.itemId);
      }]
    }
  });

}

})();
