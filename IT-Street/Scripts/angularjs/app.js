'use strict';

//declare a module
var ShopApp = angular.module("ShopApp", []);

ShopApp.run(['$rootScope', '$window', '$http', '$location',
    function ($rootScope, $window, $http, $location) {

        //add this so server side will recognise as ajax request
        $http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    }]);
