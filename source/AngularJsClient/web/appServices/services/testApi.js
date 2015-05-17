(function ($, jQuery) {
    "use strict";

    /**
     * @ngdoc service
     * @public
     *
     * @param webApiBaseUrl
     * @param $http
     * @param $q
     * @param {TokenAuthentication} tokenAuthentication
     **/
    function TestApi(webApiBaseUrl, $http, $q, tokenAuthentication) {
        this.getTestAsync = function () {
            return $http.get(webApiBaseUrl + 'test', {
                    headers: {
                        'Authorization': 'Bearer ' + tokenAuthentication.getAccessToken()
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
