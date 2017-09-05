using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FilmsCatalog.DAL.Entities;

namespace FilmsCatalog.DAL.Interfaces
{
    public interface IImageManager : IDisposable
    {
        void AddImage(Image item);

        IEnumerable<Image> GetImages(int filmId);
    }
}
