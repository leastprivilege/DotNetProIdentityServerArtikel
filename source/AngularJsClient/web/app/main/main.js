(function ($, jQuery) {
    "use strict";

    /**
     * @constructor
     * @public
     *
     * @param $rootScope
     * @param $scope
     */
    function MainController($rootScope, $scope) {
        $rootScope.pageTitle = "Index";

    }

    app.module.controller('mainController', MainController);
})();
