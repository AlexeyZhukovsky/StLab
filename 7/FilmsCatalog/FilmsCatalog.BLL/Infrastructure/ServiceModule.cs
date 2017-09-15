using FilmsCatalog.DAL.Interfaces;
using FilmsCatalog.DAL.Repositories;
using Ninject.Modules;

namespace FilmsCatalog.BLL.Infrastructure
{
    public class ServiceModule : NinjectModule
    {
        private string connectionString;

        public ServiceModule(string connection)
        {
            connectionString = connection;
        }

        public override void Load()
        {
            Bind<IUnitOfWork>().To<FilmsUnitOfWork>()
                .WithConstructorArgument(connectionString);
        }
    }
}
