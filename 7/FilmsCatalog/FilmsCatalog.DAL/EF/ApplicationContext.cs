using System.Data.Entity;
using FilmsCatalog.DAL.Entities;
using Microsoft.AspNet.Identity.EntityFramework;

namespace FilmsCatalog.DAL.EF
{
    public class ApplicationContext : IdentityDbContext<ApplicationUser>
    {
        static ApplicationContext()
        {
            Database.SetInitializer<ApplicationContext>(new IdentityDbInit());
        }

        public ApplicationContext()
        {
        }

        public ApplicationContext(string connectionString)
            : base(connectionString)
        {
        }

        public DbSet<ClientProfile> ClientProfiles { get; set; }

        public DbSet<Film> Films { get; set; }

        public DbSet<Comment> Comments { get; set; }

        public DbSet<FilmRating> FilmRatings { get; set; }

        public DbSet<Image> Images { get; set; }

        public static ApplicationContext Create()
        {
            return new ApplicationContext("name = FilmsStore");
        }

        public class IdentityDbInit : DropCreateDatabaseIfModelChanges<ApplicationContext>
        {
            public void PerformInitialSetup(ApplicationContext context)
            {
            }

            protected override void Seed(ApplicationContext context)
            {
                PerformInitialSetup(context);
                base.Seed(context);
            }
        }
    }
}
