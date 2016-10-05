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
    url: '/cat',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    //controller: 'categoriesController as catCtrl',
    resolve: {
      categories: ['menuappService', function () {
        return menuappService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('categories.item', {
     url: '/categories/{itemId}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemsController as itemCtrl',
    params: {
      itemId: null
   },
    resolve: {
      items: ['menuappService', function (menuappService) {
        return menuappService.getItemsForCategory(params.itemId);
      }]
    }
  });

}

})();
