using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.DependencyInjection;

namespace AspNetCoreSignalR.Client
{
    public class Startup
    {
        public void Configure(IApplicationBuilder application, IHostingEnvironment environment)
        {
            application.UseStaticFiles();
            application.UseSpaStaticFiles();

            application.UseSpa(x =>
            {
                x.Options.SourcePath = "ClientApp";
                if (environment.IsDevelopment())
                {
                    x.UseAngularCliServer("serve");
                }
            });
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSpaStaticFiles(x => x.RootPath = "ClientApp/dist");
        }
    }
}
