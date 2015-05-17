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
    function LoginController($rootScope, $scope, tokenAuthentication) {
        $rootScope.pageTitle = "Login";

        $scope.profile = tokenAuthentication.getProfile();

        $scope.logout = tokenAuthentication.logout;
    }

    app.module.controller('loginController', LoginController);
})();
