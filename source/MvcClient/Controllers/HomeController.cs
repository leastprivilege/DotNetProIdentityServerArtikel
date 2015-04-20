using Newtonsoft.Json.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace MvcClient.Controllers
{
    public class HomeController : Controller
    {
        // GET: home
        public ActionResult Index()
        {
            return View();
        }


        // GET: home/login
        [Authorize]
        public ActionResult Login()
        {
            return View();
        }

        public ActionResult Logout()
        {
            Request.GetOwinContext().Authentication.SignOut();

            return View();
        }

        public async Task<ActionResult> ApiAccess()
        {
            var user = User as ClaimsPrincipal;
            var token = user.FindFirst("token").Value;

            var result = await CallApiAsync(token);
            ViewBag.Json = result.ToString();

            return View();
        }

        private async Task<JArray> CallApiAsync(string token)
        {
            var client = new HttpClient();
            client.SetBearerToken(token);

            var response = await client.GetAsync("https://localhost:44347/test");
            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();
            return JArray.Parse(content);
        }
    }
}