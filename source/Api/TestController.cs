using System.Linq;
using System.Security.Claims;
using System.Web.Http;

namespace Api
{
    [Route("test")]
    public class TestController : ApiController
    {
        public IHttpActionResult Get()
        {
            var caller = User as ClaimsPrincipal;
            var claims = from c in caller.Claims
                            select new { c.Type, c.Value };

            return Json(claims);
        }
    }
}