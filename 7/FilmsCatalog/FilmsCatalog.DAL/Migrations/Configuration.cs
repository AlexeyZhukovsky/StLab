using System.Data.Entity.Migrations;

namespace FilmsCatalog.DAL.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<FilmsCatalog.DAL.EF.ApplicationContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(FilmsCatalog.DAL.EF.ApplicationContext context)
        {
        }
    }
}
