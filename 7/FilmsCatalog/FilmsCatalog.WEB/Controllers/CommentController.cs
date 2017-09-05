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
    public class CommentController : Controller
    {
        private ICommentService commentSrv;

        public CommentController(ICommentService service)
        {
            commentSrv = service;
        }

        CommentDTO[] comm =
        {
            new CommentDTO {
                UserName = "Alex",
                Date = new DateTime(2017, 09, 01),
                CommentText = "Fuuuuu",
                FilmId = 284053
            },
            new CommentDTO {
                UserName = "Andrey",
                Date = new DateTime(2017, 08, 01),
                CommentText = "Aeeeee",
                FilmId = 284053
            },
            new CommentDTO {
                UserName = "Alex",
                Date = new DateTime(2017, 09, 01),
                CommentText = "Urrrrr",
                FilmId = 283995
            }
        };

        public JsonResult GetFilmComments(int id)
        {
            SetInitialDataAsync(comm);
            IEnumerable<CommentDTO> comments = commentSrv.GetAllFilmComment(id);
            return Json(comments, JsonRequestBehavior.AllowGet);
        }

        private void SetInitialDataAsync(CommentDTO[] comments)
        {
            foreach (var comment in comments)
            {
                commentSrv.AddComment(comment);
            }
        }

        [HttpPost]
        public void AddComment(CommentDTO comment)
        {
            commentSrv.AddComment(comment);
        }

    }
}