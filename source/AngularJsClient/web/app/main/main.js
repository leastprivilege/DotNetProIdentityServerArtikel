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
    function MainController($rootScope, $scope, security) {
        $rootScope.pageTitle = "Index";

        $scope.login = security.login;
    }

    app.module.controller('mainController', MainController);
})();
