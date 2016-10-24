(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);


MyInfoService.$inject = ['$http', 'ApiPath'];
function MyInfoService($http, ApiPath) {
  var service = this;
  service.myInfo = {
      'first_name' : "jarvis",
      'last_name' : "fosdick",
      'email': "jarvis@emal.com",
      'favoriteItem': "A2",
      'phone' : "970-970-0000"
  };
  // service.getMyInfoHTTP = function () {
  //   var response = $http({
  //     method: "GET",
  //     url: (ApiBasePath + "/categories.json")
  //   });
  //   return response;
  // };

    service.saveInfo = function() {
        //if valid contiue to next step
        console.log('info saved');
    }
    service.getMyInfo = function() {
        return service.myInfo;
    }
    service.getShortName = function() {
        return service.myInfo.favoriteItem;
    }
}


})();
