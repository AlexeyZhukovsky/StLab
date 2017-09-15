using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using FilmsCatalog.BLL.DTO;
using FilmsCatalog.BLL.Infrastructure;

namespace FilmsCatalog.BLL.Interfaces
{
    public interface ICommentService : IDisposable
    {
        Task<OperationDetails> AddComment(CommentDTO commentDto);

        IEnumerable<CommentDTO> GetAllFilmComment(int id);
    }
}
