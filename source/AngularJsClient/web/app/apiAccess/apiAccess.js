(function ($, jQuery) {
    "use strict";

    /**
     * @constructor
     * @public
     *
     * @param $rootScope
     * @param $scope
     * @param {TestApi} testApi
     */
    function ApiAccessController($rootScope, $scope, testApi) {
        $rootScope.pageTitle = "API Access";

        testApi.getTestAsync()
            .then(function (result) {
                $scope.result = result;
            });
    }

    app.module.controller('apiAccessController', ApiAccessController);
})();
