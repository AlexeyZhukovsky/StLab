using System;
using System.Collections.Generic;
using System.Linq;
using FilmsCatalog.DAL.EF;
using FilmsCatalog.DAL.Entities;
using FilmsCatalog.DAL.Interfaces;

namespace FilmsCatalog.DAL.Repositories
{
    public class CommentManager : ICommentManager
    {
        private ApplicationContext database;

        public CommentManager(ApplicationContext db)
        {
            database = db;
        }

        public void Create(Comment item)
        {
            database.Comments.Add(item);
            database.SaveChanges();
        }

        public void Dispose()
        {
            database.Dispose();
        }

        public IEnumerable<Comment> GetFilmComment(Func<Comment, bool> predicate)
        {
            return database.Comments.Where(predicate).ToList();
        }

        public IEnumerable<Comment> GetComments(int id)
        {
           return database.Comments.Where(x => x.FilmId == id);
        }
    }
}
