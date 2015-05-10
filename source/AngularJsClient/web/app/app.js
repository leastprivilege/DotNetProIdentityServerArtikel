(function ($, jQuery) {
    "use strict";

    window.app = window.app || { resolver: {} };

    app.module = angular.module("identityDemo", ["ui.router"]);

    app.module.run(function ($rootScope) {
        $rootScope.currentYear = new Date().getFullYear();
    });

})();