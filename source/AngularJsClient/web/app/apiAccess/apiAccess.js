(function ($, jQuery) {
    "use strict";

    /**
     * @constructor
     * @public
     *
     * @param $rootScope
     * @param $scope
     */
    function ApiAccessController($rootScope, $scope) {
        $rootScope.pageTitle = "API Access";

    }

    app.module.controller('apiAccessController', ApiAccessController);
})();
