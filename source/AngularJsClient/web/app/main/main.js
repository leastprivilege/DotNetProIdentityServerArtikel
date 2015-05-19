(function ($, jQuery) {
    "use strict";

    /**
     * @constructor
     * @public
     *
     * @param $scope
     * @param {TokenAuthentication} tokenAuthentication
     */
    function MainController($scope, tokenAuthentication) {
        $scope.page.title = "Index";
        $scope.login = tokenAuthentication.login;
    }

    app.module.controller('mainController', MainController);
})();
