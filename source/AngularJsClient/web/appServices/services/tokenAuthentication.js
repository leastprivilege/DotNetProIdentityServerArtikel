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
    function TokenAuthentication($window, $state, $rootScope) {
        var manager;
        var popup;

        loadManager();
        function loadManager() {
            manager = new OidcTokenManager($window.oidcConfiguration);
        }

        this.login = function () {
            popup = $window.open('modal.html', '_blank', 'location=no,toolbar=no');

            // Für Redirect-Methode:
            //manager.redirectForToken();
        };

        $window.onLogin = function () {
            // Popup schließen und zu Login-Seite navigieren
            loadManager();
            popup.close();
            $state.go('login');
        };

        this.checkTokenAsync = function () {
            return manager.processTokenCallbackAsync();
        }
        
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

    app.module.service('tokenAuthentication', TokenAuthentication);
})();
