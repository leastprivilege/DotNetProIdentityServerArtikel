(function ($, jQuery) {
    "use strict";

    /**
     * @param $stateProvider
     * @param $urlRouterProvider
     * @constructor
     */
    function RoutingConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', getState('main', '/'))
            .state('login', getState('login'))
            .state('apiAccess', getState('apiAccess'));

        $urlRouterProvider.otherwise('/');

        function getState(key, urlOverride) {
            var url = urlOverride ? urlOverride : '/' + key;

            return {
                url: url,
                templateUrl: 'app/' + key + '/' + key + '.html',
                controller: key + "Controller"
            };
        }
    }

    app.module.config(RoutingConfig);

})();
