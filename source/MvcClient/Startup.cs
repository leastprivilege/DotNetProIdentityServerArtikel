using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OpenIdConnect;
using Owin;
using System.Collections.Generic;
using System.IdentityModel.Tokens;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web.Helpers;

[assembly: OwinStartup(typeof(MvcClient.Startup))]

namespace MvcClient
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            JwtSecurityTokenHandler.InboundClaimTypeMap = new Dictionary<string, string>();
            AntiForgeryConfig.UniqueClaimTypeIdentifier = "sub";

            // cookie für lokal anmeldung
            app.UseCookieAuthentication(new CookieAuthenticationOptions
                {
                    // name der middleware
                    AuthenticationType = "Cookies"
                });

        app.UseOpenIdConnectAuthentication(new OpenIdConnectAuthenticationOptions
            {
                // basis-pfad zu identityserver (für discovery dokument)
                Authority = "https://localhost:44345/",
                    
                // client id
                ClientId = "mvc",
                    
                // ein identity token soll zurückgeliefert werden
                ResponseType = "id_token token",
                    
                // angefragte scopes
                Scope = "openid user_data webapi",

                // redirect URI an den token geschickt wird
                RedirectUri = "https://localhost:44346/",

                // middleware mit namen "Cookies" zur lokalen anmeldung verwenden
                SignInAsAuthenticationType = "Cookies",

                // token lebensdauer ignorieren, und cookie middleware konfiguration verwenden
                UseTokenLifetime = false,

                Notifications = new OpenIdConnectAuthenticationNotifications
                {
                    SecurityTokenValidated = n =>
                        {
                            n.AuthenticationTicket.Identity.AddClaim(
                                new Claim("token", n.ProtocolMessage.AccessToken));

                            return Task.FromResult(0);
                        }
                }
            });
        }
    }
}
