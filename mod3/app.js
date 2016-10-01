(function() {
'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('GetMatchedMenuItemsController', GetMatchedMenuItemsController)
    .service('menuSearchService', menuSearchService)
    .directive('foundItems', foundItemsDirective)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");

    GetMatchedMenuItemsController.$inject = ['menuSearchService']
    function GetMatchedMenuItemsController(menuSearchService) {
        var matched = this;
        matched.found = [];
        matched.searchTerm = "";
        matched.resultMessage = "";
        matched.getMatchedMenuItems = function() {
            if (matched.searchTerm.trim() === "") {
                matched.resultMessage = "Nothing found";
                matched.found = [];
            } else {
                var promise = menuSearchService.searchResults(), d, found, x, re;
                try {
                    re = new RegExp(matched.searchTerm, 'gi');
                } catch (e) {
                    matched.resultMessage = "Invalid Search";
                    return false;
                }
                promise.then( function(response) {
                    d = response.data;
                    found = [];
                    for (x in d.menu_items) {
                        if (re.test(d.menu_items[x].description) || re.test(d.menu_items[x].name)) {
                            found.push(d.menu_items[x]);
                        }
                        if (found.length < 1) {
                            matched.resultMessage = "Nothing found";
                        } else {
                            matched.resultMessage = "";
                        }
                    }
                    matched.found = found;
                });
            }
        };
        matched.onRemove = function (index) {
            matched.found.splice(index,1);
        };
    }
    menuSearchService.$inject = ['$http', 'ApiBasePath']
    function menuSearchService($http, ApiBasePath) {
          var service = this;
          var found = [];
          service.searchResults = function (searchTerm) {
            var response = $http({
              method: "GET",
              url: ApiBasePath
            });
            return response;
          }
    }
    function foundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
              found: '<',
              onRemove: '&'
            },
            controller: GetMatchedMenuItemsController,
            controllerAs: 'matched',
            bindToController: true
        };
        return ddo;
    };

})();
