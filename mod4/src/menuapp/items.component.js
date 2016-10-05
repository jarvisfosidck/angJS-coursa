(function () {
'use strict';

angular.module('menuapp')
.component('categories', {
  templateUrl: 'src/menuapp/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
