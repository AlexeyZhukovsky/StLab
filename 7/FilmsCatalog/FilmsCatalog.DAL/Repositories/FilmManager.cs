using System;
using System.Collections.Generic;
using System.Linq;
using FilmsCatalog.DAL.EF;
using FilmsCatalog.DAL.Entities;
using FilmsCatalog.DAL.Interfaces;

namespace FilmsCatalog.DAL.Repositories
{
    public class FilmManager : IFilmManager
    {
        private ApplicationContext database;

        public FilmManager(ApplicationContext db)
        {
            database = db;
        }

        public IEnumerable<Film> GetAll()
        {
            return database.Films;
        }

        public Film Get(int id)
        {
            return database.Films.Find(id);
        }

        public void Create(Film item)
        {
            database.Films.Add(item);
            database.SaveChanges();
        }

        public IEnumerable<Film> Find(Func<Film, bool> predicate)
        {
            return database.Films.Where(predicate).ToList();
        }

        public void Dispose()
        {
            database.Dispose();
        }
    }
}
