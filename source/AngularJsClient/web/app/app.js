(function ($, jQuery) {
    "use strict";

    window.app = window.app || { resolver: {} };

    app.module = angular.module("identityDemo", ["ui.router"]);

    app.module.constant('webApiBaseUrl', 'https://localhost:44347/');

    app.module.controller('appController', function ($scope) {
        $scope.pageTitle = "Identity Demo";
        $scope.currentYear = new Date().getFullYear();
    });
})();