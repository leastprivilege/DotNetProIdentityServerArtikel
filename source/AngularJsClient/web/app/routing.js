(function ($, jQuery) {
    "use strict";

    /**
     * @param $stateProvider
     * @param $urlRouterProvider
     *
     * @constructor
     */
    function RoutingConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', getState('main', '/', true))
            .state('login', getState('login'))
            .state('apiAccess', getState('apiAccess'))
            .state('tokenReceived', getState('tokenReceived'));

        $urlRouterProvider.otherwise('/');

        function getState(key, urlOverride, anonymous) {
            var url = urlOverride ? urlOverride : '/' + key;

            return {
                url: url,
                templateUrl: 'app/' + key + '/' + key + '.html',
                controller: key + "Controller",
                anonymous: !!anonymous
            };
        }
    }

    app.module.config(RoutingConfig);

})();
