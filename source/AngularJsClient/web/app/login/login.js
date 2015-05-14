(function ($, jQuery) {
    "use strict";

    /**
     * @constructor
     * @public
     *
     * @param $rootScope
     * @param $scope
     * @param {Security} security
     */
    function LoginController($rootScope, $scope, security) {
        $rootScope.pageTitle = "Login";

        $scope.profile = security.getProfile();

        $scope.logout = security.logout;
    }

    app.module.controller('loginController', LoginController);
})();
