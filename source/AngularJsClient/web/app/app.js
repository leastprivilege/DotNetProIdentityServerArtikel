(function ($, jQuery) {
    "use strict";

    window.app = window.app || { resolver: {} };

    window.oidcConfiguration = {
        // client id
        client_id: "angular",

        // redirect URI an den token geschickt wird
        redirect_uri: "https://localhost:44300/modal.html",
        // Für Redirect-Methode:
        //redirect_uri: "https://localhost:44300/#/tokenReceived?x=x&",

        // URI, auf die nach dem Logout zurückgeleitet wird
        post_logout_redirect_uri: 'https://localhost:44300/',

        // ein identity token soll zurückgeliefert werden
        response_type: "id_token token",

        // angefragte scopes
        scope: "openid user_data webapi",

        // basis-pfad zu identityserver (für discovery dokument)
        authority: "https://localhost:44345/",

        // zu Demonstrationszwecken: alle Claims speichern/anzeigen
        filter_protocol_claims: false
    };

    app.module = angular.module("identityDemo", ["ui.router"]);

    app.module.constant('webApiBaseUrl', 'https://localhost:44347/');

    app.module.controller('appController', function ($scope) {
        $scope.pageTitle = "Identity Demo";
        $scope.currentYear = new Date().getFullYear();
    });
})();