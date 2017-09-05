namespace FilmsCatalog.DAL.Entities
{
    public class FilmRating
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public double Stars { get; set; }

        public int? FilmId { get; set; }

        public Film Film { get; set; }
    }
}
