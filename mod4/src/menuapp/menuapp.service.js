(function () {
'use strict';

angular.module('data')
.service('menuDataService', menuDataService);


menuDataService.$inject = ['$http']
function menuDataService($http) {
      var service = this;
      var found = [];
      service.getAllCategories = function () {
        var response = $http({
          method: "GET",
          url: "https://davids-restaurant.herokuapp.com/categories.json"
        });
        return response;
      }
      service.getItemsForCategory= function (categoryShortName) {
          console.log(categoryShortName)
        var response = $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
        });
        return response;
      }
}

})();
