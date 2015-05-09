using Microsoft.Owin;
using Owin;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;

[assembly: OwinStartup(typeof(AngularJsClient.Startup))]

namespace AngularJsClient
{
	public class Startup
	{
		public void Configuration(IAppBuilder app)
		{
			var physicalFileSystem = new PhysicalFileSystem(@".\web");
			var options = new FileServerOptions
			{
				EnableDefaultFiles = true,
				FileSystem = physicalFileSystem
			};

			options.StaticFileOptions.FileSystem = physicalFileSystem;
			options.StaticFileOptions.ServeUnknownFileTypes = true;
			options.DefaultFilesOptions.DefaultFileNames = new[] { "index.html" };

			app.UseFileServer(options);
		}
	}
}
