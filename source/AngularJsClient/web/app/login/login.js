(function ($, jQuery) {
    "use strict";

    /**
     * @constructor
     * @public
     *
     * @param $scope
     * @param {TokenAuthentication} tokenAuthentication
     */
    function LoginController($scope, tokenAuthentication) {
        $scope.page.title = "Login";
        $scope.profile = tokenAuthentication.getProfile();
        $scope.logout = tokenAuthentication.logout;
    }

    app.module.controller('loginController', LoginController);
})();
