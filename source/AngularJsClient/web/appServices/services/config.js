(function ($, jQuery) {
    "use strict";

    /**
     * @ngdoc service
     * @public
     * */
    function Config() {
        this.getBaseUrl = function () {
            return 'https://localhost:44347/';
        };
    }

    app.module.service('config', Config);
})();