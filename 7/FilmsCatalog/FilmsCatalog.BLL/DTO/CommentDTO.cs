using System;

namespace FilmsCatalog.BLL.DTO
{
    public class CommentDTO
    {
        public string UserName { get; set; }

        public DateTime Date { get; set; }

        public string CommentText { get; set; }

        public int FilmId { get; set; }
    }
}
