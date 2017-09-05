using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace FilmsCatalog.DAL.Entities
{
    public class Film
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int? Id { get; set; }

        public string Title { get; set; }

        public string PosterPath { get; set; }

        public string Overview { get; set; }

        public string RealiseData { get; set; }

        public IEnumerable<Comment> Coments { get; set; }

        public IEnumerable<FilmRating> FilmRatings { get; set; }

        public IEnumerable<Image> Images { get; set; }
    }
}
