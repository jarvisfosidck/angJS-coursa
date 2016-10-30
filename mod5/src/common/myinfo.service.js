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
          'phone' : "",
          'completed' : false
      };
    service.getMyInfo = function() {
        service.validateInfo();
        return service.myInfo;
    }
    service.setMyInfo = function(obj) {
        var tmp = service.myInfo;
        service.myInfo = obj;
        service.validateInfo();
        if (service.myInfo.completed) {
            return true;
        } else {
            return false;
        }
    }
    service.getShortName = function() {
        return service.myInfo.favorite;
    }
    //if a user edits their profile and it's incomplete
    //then clicks to leave the view, then returns to the myinfo page
    //lets make sure their info is still valid
    service.validateInfo = function() {
        service.myInfo.completed = true;
        for (var x in service.myInfo) {
            if (service.checks[x]) {
                if (!service.checks[x](service.myInfo[x])){
                    service.myInfo.completed = false;
                }
            }
        }
    }
    service.checks = {
        'first_name' : function(val) {
            if (val && val.length >= 4) {
                return true;
            }
            return false;
        },
        'last_name' : function(val) {
            if (val && val.length >= 4) {
                return true;
            }
            return false;
        },
        'email': function(val) {
            //not great email check
            //demo only
            if (val && /@/.test(val)) {
                return true;
            }
            return false;
        },
        'phone' : function(val) {
            if (/(\d{3})-(\d{3})-(\d{4})/.test(val) || val == "") {
                return true;
            }
            return false;
        }
    }
}
})();
