using FilmsCatalog.BLL.DTO;
using FilmsCatalog.BLL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using FilmsCatalog.WEB.Cors;

namespace FilmsCatalog.WEB.Controllers
{
    [AllowCrossSite]
    public class FilmController : Controller
    {
        private IFilmService filmSrv;

        public FilmController(IFilmService service)
        {
            filmSrv = service;
        }

        private void SetInitialDataAsync(FilmDTO[] films)
        {
            foreach (var film in films)
            {
                filmSrv.Create(film);

            }
        }

        private void SetInitialDataAsync(ImageDTO[] images)
        {
            foreach (var img in images)
            {
                filmSrv.AddImage(img);
            }
        }

        ImageDTO[] images =
        {
            new ImageDTO
            {
                FilmId = 284053,
                ImgUrl = "https://image.tmdb.org/t/p/w533_and_h300_bestv2/wBzMnQ01R9w58W6ucltdYfOyP4j.jpg"
            },
            new ImageDTO
            {
                FilmId = 284053,
                ImgUrl = "https://image.tmdb.org/t/p/w533_and_h300_bestv2/9vHJFr6pF97mRCrkRwqPzoSpCiF.jpg"
            },
            new ImageDTO
            {
                FilmId = 284053,
                ImgUrl = "https://image.tmdb.org/t/p/w533_and_h300_bestv2/5wNUJs23rT5rTBacNyf5h83AynM.jpg"
            },
            new ImageDTO
            {
                FilmId = 284053,
                ImgUrl = "https://image.tmdb.org/t/p/w533_and_h300_bestv2/9Ay9C65Tlu98thoLSbUfUoqxPqU.jpg"
            },
            new ImageDTO
            {
                FilmId = 284053,
                ImgUrl = "https://image.tmdb.org/t/p/w533_and_h300_bestv2/jY0bDIfFAXzL7hiieqLtr2ec1Gs.jpg"
            },
            new ImageDTO
            {
                FilmId = 315635,
                ImgUrl = "https://image.tmdb.org/t/p/w533_and_h300_bestv2/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg"
            },
            new ImageDTO
            {
                FilmId = 315635,
                ImgUrl = "https://image.tmdb.org/t/p/w533_and_h300_bestv2/vMNEvp4wKAkDIODZjz5BsqVWY9y.jpg"
            },
            new ImageDTO
            {
                FilmId = 315635,
                ImgUrl = "https://image.tmdb.org/t/p/w533_and_h300_bestv2/2j91PzOC2gSWKn53AIIAQi0UYI.jpg"
            },
            new ImageDTO
            {
                FilmId = 315635,
                ImgUrl = "https://image.tmdb.org/t/p/w533_and_h300_bestv2/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg"
            },
            new ImageDTO
            {
                FilmId = 315635,
                ImgUrl = "https://image.tmdb.org/t/p/w533_and_h300_bestv2/7snXgpmWghs6IDmpOCgZkW0X73A.jpg"
            },
            new ImageDTO
            {
                FilmId = 283995,
                ImgUrl = "https://image.tmdb.org/t/p/w533_and_h300_bestv2/aJn9XeesqsrSLKcHfHP4u5985hn.jpg"
            },
            new ImageDTO
            {
                FilmId = 283995,
                ImgUrl = "https://image.tmdb.org/t/p/w533_and_h300_bestv2/xpFIaHL7Rm5kKLcEPDEMpjh4Xq6.jpg"
            },
            new ImageDTO
            {
                FilmId = 283995,
                ImgUrl = "https://image.tmdb.org/t/p/w533_and_h300_bestv2/fMQXhDlQeTnN5CiSCZt2xzSIDdW.jpg"
            },
            new ImageDTO
            {
                FilmId = 283995,
                ImgUrl = "https://image.tmdb.org/t/p/w533_and_h300_bestv2/6orkDomFBr4SXhl9uWWBRlL4PGM.jpg"
            },
            new ImageDTO
            {
                FilmId = 283995,
                ImgUrl = "https://image.tmdb.org/t/p/w533_and_h300_bestv2/4Y4c7HEdtrZiw7QiUc3dHmfZvsI.jpg"
            }

        };

        FilmDTO[] films =
        {
            new FilmDTO {
                Id = 284053,
                Title = "Thor: Ragnarok",
                PosterPath = "/avy7IR8UMlIIyE2BPCI4plW4Csc.jpg",
                Overview = "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
                RealiseData = "2017-10-25"
            },
            new FilmDTO {
                Id = 315635,
                Title = "Spider-Man: Homecoming",
                PosterPath = "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
                Overview = "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
                RealiseData = "2017-07-05"
            },
            new FilmDTO {
                Id = 283995,
                Title = "Guardians of the Galaxy Vol. 2",
                PosterPath = "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
                Overview = "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
                RealiseData = "2017-04-19"
            },
        };

        [Authorize]
        public ActionResult FilmsList()
        {
            SetInitialDataAsync(films);
            SetInitialDataAsync(images);
            return View();
        }

        public JsonResult GetFilmsList()
        {
            IEnumerable<FilmDTO> films = filmSrv.GetFilms();
            var result = films.ToArray();
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetImagesList(int id)
        {
            IEnumerable<ImageDTO> images = filmSrv.GetImages(id);
            var result = images.ToArray();
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetUser()
        {
            var user = HttpContext.User.Identity.Name; 
            return Json(user, JsonRequestBehavior.AllowGet);
        }

    }
}