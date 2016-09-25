(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListService', ShoppingListService);

ToBuyShoppingController.$inject = ['ShoppingListService'];
function ToBuyShoppingController(ShoppingListService) {
  var toBuy = this;

  toBuy.items = ShoppingListService.getToByItems();


  toBuy.buyItem = function (index) {
    ShoppingListService.addItem(index);
  }

  toBuy.status = function() {
      if (toBuy.items.length > 0) {
          return false;
      } else {
          return true;
      }
  }
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListService'];
function AlreadyBoughtShoppingController(ShoppingListService) {
  var bought = this;

  bought.items = ShoppingListService.getBoughtItems();

  bought.status = function() {
      if (bought.items.length > 0) {
          return false;
      } else {
          return true;
      }
  }

}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var toBuyItems = ['apples','pie','steak','yogurt','pasta noodles'];
  var alreadyBoughtItems = [];
  service.addItem = function (index) {
    alreadyBoughtItems.push(toBuyItems.splice(index, 1));
  };

  service.removeItem = function (itemIdex) {
    alreadyBoughtItems.splice(itemIdex, 1);
  };

  service.getToByItems = function () {
    return toBuyItems;
  };
  service.getBoughtItems = function () {
    return alreadyBoughtItems;
  };
}

})();
