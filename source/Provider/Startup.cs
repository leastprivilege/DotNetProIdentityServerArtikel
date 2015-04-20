using IdentityServer3.Core.Configuration;
using IdentityServer3.Core.Services;
using IdentityServer3.Core.Services.InMemory;
using Microsoft.Owin;
using Owin;
using Provider.Configuration;
using Serilog;

[assembly: OwinStartup(typeof(Provider.Startup))]

namespace Provider
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // tracing
            Log.Logger = new LoggerConfiguration()
                .WriteTo.Trace()
                .CreateLogger();
                
            // in-memory datenhaltung für users, scopes und clients
            var users = new InMemoryUserService(Users.Get());
            var scopes = new InMemoryScopeStore(Scopes.Get());
            var clients = new InMemoryClientStore(Clients.Get());

            // konfigurieren der factory
            var factory = new IdentityServerServiceFactory();
            
            factory.UserService = new Registration<IUserService>(users);
            factory.ScopeStore = new Registration<IScopeStore>(scopes);
            factory.ClientStore = new Registration<IClientStore>(clients);

            // identityserver3 middleware einbinden
            app.UseIdentityServer(new IdentityServerOptions
                {
                    Factory = factory,
                    SiteName = "DotNetPro IdentityServer",

                    SigningCertificate = Certificate.Get()
                });
        }
    }
}
