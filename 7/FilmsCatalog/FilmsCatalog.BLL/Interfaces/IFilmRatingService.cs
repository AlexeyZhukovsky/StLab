using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using FilmsCatalog.BLL.DTO;
using FilmsCatalog.BLL.Infrastructure;

namespace FilmsCatalog.BLL.Interfaces
{
    public interface IFilmRatingService : IDisposable
    {
        Task<OperationDetails> AddRating(FilmRatingDTO filmRatingDto);

        IEnumerable<FilmRatingDTO> GetAllFilmRating(int id);

        double GetAverageRating(int id);
    }
}
