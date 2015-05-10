(function ($, jQuery) {
    "use strict";

    /**
     * @constructor
     * @public
     *
     * @param $rootScope
     * @param $scope
     */
    function LoginController($rootScope, $scope) {
        $rootScope.pageTitle = "Login";

    }

    app.module.controller('loginController', LoginController);
})();
