using System;
using System.Threading.Tasks;
using FilmsCatalog.DAL.EF;
using FilmsCatalog.DAL.Entities;
using FilmsCatalog.DAL.Identity;
using FilmsCatalog.DAL.Interfaces;
using Microsoft.AspNet.Identity.EntityFramework;

namespace FilmsCatalog.DAL.Repositories
{
    public class FilmsUnitOfWork : IUnitOfWork
    {
        private ApplicationContext db;
        private ApplicationUserManager userManager;
        private IClientManager clientManager;
        private IFilmManager filmManager;
        private ICommentManager commentManager;
        private IFilmRatingManager filmRatingManager;
        private IImageManager imageManager;
        private bool disposed = false;

        public FilmsUnitOfWork(string connectionString)
        {
            db = new ApplicationContext(connectionString);
            userManager = new ApplicationUserManager(new UserStore<ApplicationUser>(db));
            clientManager = new ClientManager(db);
            filmManager = new FilmManager(db);
            commentManager = new CommentManager(db);
            filmRatingManager = new FilmRatingManager(db);
            imageManager = new ImageManager(db);
        }

        public ApplicationUserManager UserManager
        {
            get { return userManager; }
        }

        public IClientManager ClientManager
        {
            get { return clientManager; }
        }

        public IFilmManager FilmManager
        {
            get { return filmManager; }
        }

        public IFilmRatingManager FilmRatingManager
        {
            get { return filmRatingManager; }
        }

        public ICommentManager CommentManager
        {
            get { return commentManager; }
        }

        public IImageManager ImageManager
        {
            get { return imageManager; }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    userManager.Dispose();
                    clientManager.Dispose();
                    filmManager.Dispose();
                }

                this.disposed = true;
            }
        }

        public async Task SaveAsync()
        {
            await db.SaveChangesAsync();
        }
    }
}