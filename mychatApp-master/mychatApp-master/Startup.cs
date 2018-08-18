using ChatApplication.Data;
using ChatApplication.DataService;
using ChatApplication.Hubs;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ChatApplication
{
  public class Startup
    {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }
    public IConfiguration Configuration { get; }
    public object GlobalHost { get; private set; }

    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
        {
      services.AddDbContext<ChatDBContext>(options => options.UseSqlServer(
              Configuration.GetConnectionString("DefaultConnection")));
      services.AddScoped<LoginService, SQLLoginService>();
      services.AddScoped<MessageService, SQLMessageService>();
      services.AddMvc();
      services.AddCors(options =>
      {
        options.AddPolicy("CorsPolicy",
            builder => builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials());
      });

      services.AddSignalR();
    }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {

      if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
      app.UseDefaultFiles();
      app.UseStaticFiles();
      app.UseCors("CorsPolicy");

      app.UseSignalR(routes =>
      {
        routes.MapHub<ChatHub>("/chat");
      });
      app.UseMvc();
      app.Run(async (context) =>
            {
                await context.Response.WriteAsync("NOT FOUND !");
            });
        }
    }
}
