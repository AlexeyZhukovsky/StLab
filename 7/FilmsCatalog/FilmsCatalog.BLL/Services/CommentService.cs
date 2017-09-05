using System.Collections.Generic;
using System.Threading.Tasks;
using FilmsCatalog.BLL.DTO;
using FilmsCatalog.BLL.Infrastructure;
using FilmsCatalog.DAL.Entities;
using FilmsCatalog.DAL.Interfaces;
using FilmsCatalog.BLL.Interfaces;
using AutoMapper;

namespace FilmsCatalog.BLL.Services
{
    public class CommentService : ICommentService
    {
        private IUnitOfWork database;

        public CommentService(IUnitOfWork uow)
        {
            database = uow;
        }

        public async Task<OperationDetails> AddComment(CommentDTO commentDto)
        {
            Comment comment = new Comment
            {
                UserName = commentDto.UserName,
                Date = commentDto.Date,
                FilmId = commentDto.FilmId,
                CommentText = commentDto.CommentText
            };
            database.CommentManager.Create(comment);
            await database.SaveAsync();
            return new OperationDetails(true, "Comment added", "");
        }

        public void Dispose()
        {
            database.Dispose();
        }

        public IEnumerable<CommentDTO> GetAllFilmComment(int id)
        {
            Mapper.Initialize(cfg => cfg.CreateMap<Comment, CommentDTO>());
            return Mapper.Map<IEnumerable<Comment>, List<CommentDTO>>(database.CommentManager.GetComments(id));
        }
    }
}
