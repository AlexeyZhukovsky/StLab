using FilmsCatalog.BLL.DTO;
using FilmsCatalog.BLL.Infrastructure;
using FilmsCatalog.DAL.Entities;
using FilmsCatalog.DAL.Interfaces;
using System.Threading.Tasks;
using FilmsCatalog.BLL.Interfaces;
using System.Collections.Generic;

using AutoMapper;

namespace FilmsCatalog.BLL.Services
{
    public class FilmService : IFilmService
    {
        private IUnitOfWork database;

        public FilmService(IUnitOfWork uow)
        {
            database = uow;
        }

        public async Task<OperationDetails> Create(FilmDTO filmDto)
        {
            Film film = database.FilmManager.Get(filmDto.Id);

            if (film == null)
            {
                film = new Film
                {
                    Id = filmDto.Id,
                    Title = filmDto.Title,
                    PosterPath = filmDto.PosterPath,
                    Overview = filmDto.Overview,
                    RealiseData = filmDto.RealiseData
                };
            }
            else
            {
                return new OperationDetails(false, "this film exists", "title");
            }

            database.FilmManager.Create(film);
            await database.SaveAsync();
            return new OperationDetails(true, "Film added", "");
        }

        public IEnumerable<FilmDTO> GetFilms()
        {
            Mapper.Initialize(cfg => cfg.CreateMap<Film, FilmDTO>());
            return Mapper.Map<IEnumerable<Film>, List<FilmDTO>>(database.FilmManager.GetAll());
        }

        public FilmDTO GetFilm(int id)
        {
            Mapper.Initialize(cfg => cfg.CreateMap<Film, FilmDTO>());
            return Mapper.Map<Film, FilmDTO>(database.FilmManager.Get(id));
        }

        public async Task<OperationDetails> AddImage(ImageDTO imageDto)
        {
            Image image = new Image
            {
                ImgUrl = imageDto.ImgUrl,
                FilmId = imageDto.FilmId
            };
            database.ImageManager.AddImage(image);
            await database.SaveAsync();
            return new OperationDetails(true, "Image added", "");
        }

        public IEnumerable<ImageDTO> GetImages(int filmId)
        {
            Mapper.Initialize(cfg => cfg.CreateMap<Image, ImageDTO>());
            return Mapper.Map<IEnumerable<Image>, List<ImageDTO>>(database.ImageManager.GetImages(filmId));
        }

        public void Dispose()
        {
            database.Dispose();
        }
    }
}
