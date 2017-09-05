using System;
using System.Collections.Generic;
using FilmsCatalog.DAL.Entities;

namespace FilmsCatalog.DAL.Interfaces
{
    public interface IFilmRatingManager : IDisposable
    {
        void Create(FilmRating item);

        void Change(FilmRating item);

        FilmRating Get(string userName);

        IEnumerable<FilmRating> GetAllFilmRating(int id);
     }
}
