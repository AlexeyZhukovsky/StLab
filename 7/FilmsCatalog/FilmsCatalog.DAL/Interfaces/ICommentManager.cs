using System;
using System.Collections.Generic;
using FilmsCatalog.DAL.Entities;

namespace FilmsCatalog.DAL.Interfaces
{
    public interface ICommentManager : IDisposable
    {
        void Create(Comment item);

        IEnumerable<Comment> GetFilmComment(Func<Comment, bool> predicate);

        IEnumerable<Comment> GetComments(int id);
    }
}
