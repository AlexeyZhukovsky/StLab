using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FilmsCatalog.WEB.Cors;
using FilmsCatalog.BLL.DTO;
using FilmsCatalog.BLL.Interfaces;

namespace FilmsCatalog.WEB.Controllers
{
    [AllowCrossSite]
    public class FilmRatingController : Controller
    {
        private IFilmRatingService ratingSrv;

        public FilmRatingController(IFilmRatingService service)
        {
            ratingSrv = service;
        }

        FilmRatingDTO[] comm =
        {
            new FilmRatingDTO {
                UserName = "Alex",
                Stars = 10,
                FilmId = 284053
            },
            new FilmRatingDTO {
                UserName = "Andrey",
                Stars = 3.5,
                FilmId = 284053
            },
            new FilmRatingDTO {
                UserName = "Alex",
                Stars = 7,
                FilmId = 283995
            }
        };

        [HttpGet]
        public JsonResult GetFilmRating(int id)
        {
            SetInitialDataAsync(comm);
            IEnumerable<FilmRatingDTO> rating = ratingSrv.GetAllFilmRating(id);
            return Json(rating, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetAverageRating(int id)
        {
            double averageRating = ratingSrv.GetAverageRating(id);
            return Json(averageRating, JsonRequestBehavior.AllowGet);
        }

        private void SetInitialDataAsync(FilmRatingDTO[] rating)
        {
            foreach (var r in rating)
            {
                ratingSrv.AddRating(r);

            }
        }

        [HttpPost]
        public void AddFilmRating(FilmRatingDTO rating)
        {
            ratingSrv.AddRating(rating);
        }
    }
}