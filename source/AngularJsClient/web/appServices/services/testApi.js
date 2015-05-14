(function ($, jQuery) {
    "use strict";

    /**
     * @ngdoc service
     * @public
     *
     * @param webApiBaseUrl
     * @param $http
     * @param $q
     * @param {Security} security
     **/
    function TestApi(webApiBaseUrl, $http, $q, security) {
        this.getTestAsync = function () {
            return $http.get(webApiBaseUrl + 'test', {
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
