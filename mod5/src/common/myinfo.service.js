(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);


MyInfoService.$inject = ['$http', 'ApiPath'];
function MyInfoService($http, ApiPath) {
  var service = this;
  service.myInfo = {
      'first_name' : "",
      'last_name' : "",
      'email': "",
      'favorite': "",
      'phone' : ""
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
        return service.myInfo.favorite;
    }
}


})();
