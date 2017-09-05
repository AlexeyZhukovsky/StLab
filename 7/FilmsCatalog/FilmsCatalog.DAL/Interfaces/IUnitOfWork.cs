using System;
using System.Threading.Tasks;
using FilmsCatalog.DAL.Identity;

namespace FilmsCatalog.DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        ApplicationUserManager UserManager { get; }

        IClientManager ClientManager { get; }

        IFilmManager FilmManager { get; }

        IFilmRatingManager FilmRatingManager { get; }

        ICommentManager CommentManager { get; }

        IImageManager ImageManager { get; }

        Task SaveAsync();
    }
}
