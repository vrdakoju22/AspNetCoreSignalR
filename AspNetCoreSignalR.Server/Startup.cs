using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace AspNetCoreSignalR.Server
{
    public class Startup
    {
        public void Configure(IApplicationBuilder application)
        {
            application.UseCors("CorsPolicy");

            application.UseSignalR(x => x.MapHub<ChatHub>(string.Empty));
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options => options.AddPolicy("CorsPolicy", builder =>
            {
                builder
                    .WithOrigins("https://localhost:8020")
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials();
            }));

            services.AddSignalR();
        }
    }
}
