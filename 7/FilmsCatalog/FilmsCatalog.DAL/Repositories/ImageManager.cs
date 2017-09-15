using System.Collections.Generic;
using System.Linq;
using FilmsCatalog.DAL.EF;
using FilmsCatalog.DAL.Entities;
using FilmsCatalog.DAL.Interfaces;

namespace FilmsCatalog.DAL.Repositories
{
    public class ImageManager : IImageManager
    {
        private ApplicationContext database;

        public ImageManager(ApplicationContext db)
        {
            database = db;
        }

        public void AddImage(Image item)
        {
            database.Images.Add(item);
            database.SaveChanges();
        }

        public IEnumerable<Image> GetImages(int filmId)
        {
            return database.Images.Where(x => x.FilmId == filmId);
        }

        public void Dispose()
        {
            database.Dispose();
        }
    }
}
