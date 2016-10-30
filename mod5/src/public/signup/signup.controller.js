(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['myInfoService','allMenuItems','$state'];

function SignUpController(myInfoService,allMenuItems,$state) {
    var $ctrl = this;
    $ctrl.shortNames = [];
    for (var x in allMenuItems.menu_items) {
      $ctrl.shortNames.push(allMenuItems.menu_items[x].short_name.toLowerCase());
    }
    $ctrl.SaveMessage = "";
    $ctrl.UserData = {
        'first_name' : "",
        'last_name' : "",
        'email': "",
        'favorite': "",
        'phone' : "",
        'completed' : false
    };
    $ctrl.signUp = myInfoService.saveInfo;
    $ctrl.submitForm = function() {
        console.log(myInfoService.setMyInfo($ctrl.UserData));
        if (myInfoService.setMyInfo($ctrl.UserData)) {
            //allow user to enter lowercase even though only uppercase works with the AJAX
            $ctrl.UserData.favorite = $ctrl.UserData.favorite.toUpperCase();
            $ctrl.UserData.hasUserData = true;
            $ctrl.SaveMessage = "Your Information Has Been Saved";

            //I created the option to go to the myinfo page after clicking
            //submit
            //$state.go('public.myinfo'); // tells resolves to refresh
        }

    }
    $ctrl.isShortName = function() {
        if ($ctrl.UserData.favorite && $ctrl.shortNames.indexOf($ctrl.UserData.favorite.toLowerCase()) > -1) {
            return true;
        } else {
            return false;
        }
    }

}


})();
