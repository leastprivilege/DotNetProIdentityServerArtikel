using IdentityServer3.Core.Services.InMemory;
using System.Collections.Generic;
using System.Security.Claims;

namespace Provider.Configuration
{
    public class Users
    {
        public static List<InMemoryUser> Get()
        {
            return new List<InMemoryUser>
            {
                new InMemoryUser
                {
                    Subject = "1",
                    Username = "alice",
                    Password = "secret",
                    Claims = new List<Claim>
                    {
                        new Claim("name", "Alice Smith"),
                        new Claim("email", "alice@smith.com"),
                        new Claim("role", "Operations")
                    }
                },
                new InMemoryUser
                {
                    Subject = "2",
                    Username = "bob",
                    Password = "secret",
                    Claims = new List<Claim>
                    {
                        new Claim("name", "Bob Smith"),
                        new Claim("email", "bob@smith.com"),
                        new Claim("role", "Development")
                    }
                }
            };
        }
    }
}