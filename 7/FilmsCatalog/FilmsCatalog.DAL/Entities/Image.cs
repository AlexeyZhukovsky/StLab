namespace FilmsCatalog.DAL.Entities
{
    public class Image
    {
        public int Id { get; set; }

        public string ImgUrl { get; set; }

        public int? FilmId { get; set; }

        public Film Film { get; set; }
    }
}
