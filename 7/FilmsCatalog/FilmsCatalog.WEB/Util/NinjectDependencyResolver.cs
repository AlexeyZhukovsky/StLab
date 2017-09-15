using FilmsCatalog.BLL.Interfaces;
using FilmsCatalog.BLL.Services;
using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FilmsCatalog.WEB.Util
{
    public class NinjectDependencyResolver : IDependencyResolver
    {
        private IKernel kernel;

        public NinjectDependencyResolver(IKernel kernelParam)
        {
            kernel = kernelParam;
            AddBindings();
        }

        public object GetService(Type serviceType)
        {
            return kernel.TryGet(serviceType);
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            return kernel.GetAll(serviceType);
        }

        private void AddBindings()
        {
            kernel.Bind<IUserService>().To<UserService>();
            kernel.Bind<IFilmService>().To<FilmService>();
            kernel.Bind<ICommentService>().To<CommentService>();
            kernel.Bind<IFilmRatingService>().To<FilmRatingService>();
            
        }
    }
}