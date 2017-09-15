using System;

namespace FilmsCatalog.DAL.Entities
{
    public class Comment
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public DateTime Date { get; set; }

        public string CommentText { get; set; }

        public int? FilmId { get; set; }

        public Film Film { get; set; }
    }
}
