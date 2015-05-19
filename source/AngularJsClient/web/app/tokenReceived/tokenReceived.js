(function ($, jQuery) {
    "use strict";

    /**
     * Used for redirect-based authentication
     *
     * @constructor
     * @public
     *
     * @param $state
     * @param {TokenAuthentication} tokenAuthentication
     */
    function TokenReceivedController($state, tokenAuthentication) {
        tokenAuthentication.checkTokenAsync()
            .then(function () {
                $state.go('login');
            });
    }

    app.module.controller('tokenReceivedController', TokenReceivedController);
})();
