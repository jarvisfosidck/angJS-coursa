(function() {
'use strict'
angular.module('NarrowItDownApp'), [])
.controller('getMatchedMenuItemsController', getMatchedMenuItemsController)
.directive('foundItemsDirective', 'foundItemsDirective')

function getMatchedMenuItemsController() {
    matchedItems = this;
    matchedItems.found = {};

}

function foundItemsDirective() {

    var ddo = {
    //templateUrl: 'shoppingList.html',
    scope: {
      found: '<'
    },
    // controller: 'ShoppingListDirectiveController as list',
    controller: ShoppingListDirectiveController,
    controllerAs: 'matchedItems',
    bindToController: true
  };
}





})
