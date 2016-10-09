(function () {
'use strict';

angular.module('menuapp')
.controller('ItemsController', ItemsController);
ItemsController.$inject = ['menuDataService', 'items'];
function ItemsController(menuDataService, data) {
  var items = this;
  this.items = data.data.menu_items;
  console.log(data.data)
}

})();
