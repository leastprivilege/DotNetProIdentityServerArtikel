(function ($, jQuery) {
    "use strict";

    window.app = window.app || { resolver: {} };

    app.module = angular.module("identityDemo", ["ui.router"]);

    app.module.constant('webApiBaseUrl', 'https://localhost:44347/');

    app.module.run(function ($rootScope) {
        $rootScope.pageTitle = "Identity Demo";
        $rootScope.currentYear = new Date().getFullYear();
    });

})();