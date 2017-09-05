using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using FilmsCatalog.BLL.DTO;
using FilmsCatalog.BLL.Infrastructure;
using FilmsCatalog.BLL.Interfaces;
using FilmsCatalog.DAL.Entities;
using FilmsCatalog.DAL.Interfaces;

namespace FilmsCatalog.BLL.Services
{
    public class FilmRatingService : IFilmRatingService
    {
        private IUnitOfWork database;

        public FilmRatingService(IUnitOfWork uow)
        {
            database = uow;
        }

        public async Task<OperationDetails> AddRating(FilmRatingDTO filmRatingDto)
        {
            List<FilmRating> filmRatings = database.FilmRatingManager.GetAllFilmRating(filmRatingDto.FilmId).ToList();

            if (filmRatings.Capacity == 0)
            {
                FilmRating filmRating = new FilmRating
                {
                    UserName = filmRatingDto.UserName,
                    Stars = filmRatingDto.Stars,
                    FilmId = filmRatingDto.FilmId
                };
                database.FilmRatingManager.Create(filmRating);
            }
            else
            {
                FilmRating filmRat = filmRatings.Find(e => e.UserName == filmRatingDto.UserName);
                if (filmRat == null)
                {
                    FilmRating filmRating = new FilmRating
                    {
                        UserName = filmRatingDto.UserName,
                        Stars = filmRatingDto.Stars,
                        FilmId = filmRatingDto.FilmId
                    };
                    database.FilmRatingManager.Create(filmRating);
                }
                else
                {
                    filmRat.Stars = filmRatingDto.Stars;
                    database.FilmRatingManager.Change(filmRat);
                }
            }

            await database.SaveAsync();
            return new OperationDetails(true, "Rating added", "");
        }

        public void Dispose()
        {
            database.Dispose();
        }

        public IEnumerable<FilmRatingDTO> GetAllFilmRating(int id)
        {
            Mapper.Initialize(cfg => cfg.CreateMap<FilmRating, FilmRatingDTO>());
            return Mapper.Map<IEnumerable<FilmRating>, List<FilmRatingDTO>>(database.FilmRatingManager.GetAllFilmRating(id));
        }

        public double GetAverageRating(int id)
        {
            Mapper.Initialize(cfg => cfg.CreateMap<FilmRating, FilmRatingDTO>());
            var rat = Mapper.Map<IEnumerable<FilmRating>, List<FilmRatingDTO>>(database.FilmRatingManager.GetAllFilmRating(id));
            if (rat.Count == 0)
            {
                return 0;
            }

            double res = new double();
            foreach (var r in rat)
            {
                res += r.Stars;
            }

            return res / rat.Capacity;
        }
    }
}
