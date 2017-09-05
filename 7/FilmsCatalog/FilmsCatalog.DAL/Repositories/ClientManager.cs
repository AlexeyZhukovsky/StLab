using FilmsCatalog.DAL.EF;
using FilmsCatalog.DAL.Entities;
using FilmsCatalog.DAL.Interfaces;

namespace FilmsCatalog.DAL.Repositories
{
    public class ClientManager : IClientManager
    {
        public ClientManager(ApplicationContext db)
        {
            Database = db;
        }

        public ApplicationContext Database { get; set; }

        public void Create(ClientProfile item)
        {
            Database.ClientProfiles.Add(item);
            Database.SaveChanges();
        }

        public void Dispose()
        {
            Database.Dispose();
        }
    }
}
