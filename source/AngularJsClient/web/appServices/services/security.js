(function ($, jQuery) {
    "use strict";

    /**
     * @ngdoc service
     * @public
     *
     * @param $window
     * @param $state
     * @param $rootScope
     **/
    function Security($window, $state, $rootScope) {
        var manager = new OidcTokenManager();
        var popup;

        this.login = function () {
            popup = $window.open("modal.html", "_blank", "location=no,toolbar=no");
        };

        $window.onLogin = function () {
            // Popup schließen und zu Login-Seite navigieren
            popup.close();
            $state.go('login');
        };
        
        this.getAccessToken = function () {
            return manager.access_token;
        };

        this.getProfile = function () {
            return manager.profile;
        };

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            // Wenn der State nicht als anonym markiert ist und kein Identity-Token hinterlegt ist, State-Wechsel abbrechen
            if (!toState.anonymous && !manager.id_token) {
                event.preventDefault();
            }
        });
    }

    app.module.service('security', Security);
})();
