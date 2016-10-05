(function () {
'use strict';

angular.module('menuapp')
.controller('categoriesController', categoriesController);


categoriesController.$inject = ['menuappService', 'categories'];
function categoriesController(menuappService, categories) {
  var cats = this;
  cats.categories = categories;
  console.log(this)
}

})();
