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
        var manager = new OidcTokenManager({
            authority: 'https://localhost:44345/',
            post_logout_redirect_uri: 'https://localhost:44300/'
        });
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

        this.logout = function () {
            manager.redirectForLogout();
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
