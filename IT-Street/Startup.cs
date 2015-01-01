using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(IT_Street.Startup))]
namespace IT_Street
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
