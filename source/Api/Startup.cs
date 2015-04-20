using IdentityServer3.AccessTokenValidation;
using Microsoft.Owin;
using Owin;
using System.Collections.Generic;
using System.IdentityModel.Tokens;
using System.Web.Http;

[assembly: OwinStartup(typeof(Api.Startup))]

namespace Api
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            JwtSecurityTokenHandler.InboundClaimTypeMap = new Dictionary<string, string>();

            // Unterstützung für identity server access tokens
            app.UseIdentityServerBearerTokenAuthentication(new IdentityServerBearerTokenAuthenticationOptions
                {
                    // basis URL
                    Authority = "https://localhost:44345",
                    ValidationMode = ValidationMode.Local,

                    // konfigurierte scope in identity server
                    RequiredScopes = new[] { "webapi" }
                });

            // web api konfiguration mit attribute routing
            var webApiConfig = new HttpConfiguration();
            webApiConfig.MapHttpAttributeRoutes();

            // kein anonymer zugriff erlaubt
            webApiConfig.Filters.Add(new AuthorizeAttribute());

            // web api einbinden
            app.UseWebApi(webApiConfig);
        }
    }
}
