using System;
using System.Collections.Generic;
using FilmsCatalog.DAL.Entities;

namespace FilmsCatalog.DAL.Interfaces
{
    public interface IFilmManager : IDisposable
    {
        void Create(Film item);

        Film Get(int id);

        IEnumerable<Film> GetAll();

        IEnumerable<Film> Find(Func<Film, bool> predicate);
    }
}
