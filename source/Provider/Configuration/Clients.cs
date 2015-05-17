using IdentityServer3.Core.Models;
using System.Collections.Generic;

namespace Provider.Configuration
{
    public class Clients
    {
        public static IEnumerable<Client> Get()
        {
            var mvc = new Client
            {
                ClientName = "MVC Client",
                ClientId = "mvc",
                Flow = Flows.Implicit,

                RedirectUris = new List<string>
                {
                    "https://localhost:44346/"
                },

                AllowedScopes = new List<string>
                {
                    "openid",
                    "user_data",
                    "webapi"
                }
            };

			var angular = new Client
			{
				ClientName = "AngularJS Client",
				ClientId = "angular",
				Flow = Flows.Implicit,

				RedirectUris = new List<string>
				{
					"https://localhost:44300/modal.html"
				},

				AllowedCorsOrigins = new List<string>
				{
					"https://localhost:44300"
				},

				PostLogoutRedirectUris = new List<string>
				{
					"https://localhost:44300/"
				},

				AllowedScopes = new List<string>
				{
					"openid",
					"user_data",
					"webapi"
				}
			};

            return new List<Client>
            {
                mvc,
				angular
            };
        }
    }
}