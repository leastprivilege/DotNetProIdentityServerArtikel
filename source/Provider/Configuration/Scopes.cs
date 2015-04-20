using IdentityServer3.Core.Models;
using System.Collections.Generic;

namespace Provider.Configuration
{
    public class Scopes
    {
        public static List<Scope> Get()
        {
            var userDataScope = new Scope
            {
                Name = "user_data",
                DisplayName = "User data",

                Type = ScopeType.Identity,
                Claims = new List<ScopeClaim>
                {
                    new ScopeClaim("name", alwaysInclude: true),
                    new ScopeClaim("email", alwaysInclude: true),
                    new ScopeClaim("role", alwaysInclude: true)
                }
            };

            var webApiScope = new Scope
            {
                Name = "webapi",
                DisplayName = "Web API",

                Type = ScopeType.Resource,
                Claims = new List<ScopeClaim>
                {
                    new ScopeClaim("role")
                }
            };

            return new List<Scope>
            {
                StandardScopes.OpenId,
                userDataScope,
                webApiScope
            };
        }
    }
}