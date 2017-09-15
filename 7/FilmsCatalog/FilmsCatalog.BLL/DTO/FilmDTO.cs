using System.Collections.Generic;

namespace FilmsCatalog.BLL.DTO
{
    public class FilmDTO
    {
        public int Id { get; set; }

        public string Title { get; set; } 

        public string PosterPath { get; set; }

        public string Overview { get; set; }

        public string RealiseData { get; set; }

        public IEnumerable<CommentDTO> Coments { get; set; }

        public IEnumerable<FilmRatingDTO> FilmRatings { get; set; }
    }
}
