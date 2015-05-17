(function ($, jQuery) {
    "use strict";

    /**
     * @constructor
     * @public
     *
     * @param $rootScope
     * @param $scope
     * @param {TokenAuthentication} tokenAuthentication
     */
    function MainController($rootScope, $scope, tokenAuthentication) {
        $rootScope.pageTitle = "Index";

        $scope.login = tokenAuthentication.login;
    }

    app.module.controller('mainController', MainController);
})();
