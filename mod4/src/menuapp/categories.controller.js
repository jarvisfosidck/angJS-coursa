(function () {
'use strict';

angular.module('menuapp')
.controller('categoriesController', categoriesController);

categoriesController.$inject = ['menuDataService', 'categories'];
function categoriesController(menuDataService, categories) {
  var cats = this;
  cats.categories = categories.data;
  console.log(this)
}

})();
