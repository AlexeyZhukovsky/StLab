using System.Collections.Generic;
using System.Linq;
using FilmsCatalog.DAL.EF;
using FilmsCatalog.DAL.Entities;
using FilmsCatalog.DAL.Interfaces;

namespace FilmsCatalog.DAL.Repositories
{
    public class FilmRatingManager : IFilmRatingManager
    {
        private ApplicationContext database;

        public FilmRatingManager(ApplicationContext db)
        {
            database = db;
        }

        public void Create(FilmRating item)
        {
            database.FilmRatings.Add(item);
            database.SaveChanges();
        }

        public void Change(FilmRating item)
        {
            database.FilmRatings.FirstOrDefault(p => p.UserName == item.UserName).Stars = item.Stars;
            database.SaveChanges();
        }

        public void Dispose()
        {
            database.Dispose();
        }

        public IEnumerable<FilmRating> GetAllFilmRating(int id)
        {
            return database.FilmRatings.Where(x => x.FilmId == id);
        }

        public FilmRating Get(string userName)
        {
            return database.FilmRatings.Find(userName);
        }
    }
}
