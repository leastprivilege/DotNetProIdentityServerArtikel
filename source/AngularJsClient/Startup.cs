using Microsoft.Owin;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Owin;

namespace AngularJsClient
{
	public class Startup
	{
		public void Configuration(IAppBuilder app)
		{
			var options = new FileServerOptions()
			{
				EnableDefaultFiles = true,
				RequestPath = PathString.Empty,
				FileSystem = new PhysicalFileSystem(@".\web")
			};

			app.UseFileServer(options);
		}
	}
}
