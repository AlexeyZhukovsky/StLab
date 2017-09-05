using System;
using System.Threading.Tasks;
using FilmsCatalog.BLL.DTO;
using FilmsCatalog.BLL.Infrastructure;
using System.Collections.Generic;

namespace FilmsCatalog.BLL.Interfaces
{
    public interface IFilmService : IDisposable
    {
        Task<OperationDetails> Create(FilmDTO filmDto);

        FilmDTO GetFilm(int id);

        IEnumerable<FilmDTO> GetFilms();

        Task<OperationDetails> AddImage(ImageDTO imageDto);

        IEnumerable<ImageDTO> GetImages(int filmId);
    }
}
