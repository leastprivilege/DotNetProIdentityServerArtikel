(function ($, jQuery) {
    "use strict";

    /**
     * @ngdoc service
     * @public
     *
     * @param {Config} config
     * @param $http
     * @param $q
     * @param {Security} security
     **/
    function TestApi(config, $http, $q, security) {
        var baseUrl = config.getBaseUrl();

        this.getTestAsync = function () {
            return $http.get(baseUrl + 'test', {
                    headers: {
                        'Authorization': 'Bearer ' + security.getAccessToken()
                    }
                }).then(function (result) {
                    return result.data;
                }, function (err) {
                    console.log(err);
                    return $q.reject(err);
                });
        };
    }

    app.module.service('testApi', TestApi);
})();
