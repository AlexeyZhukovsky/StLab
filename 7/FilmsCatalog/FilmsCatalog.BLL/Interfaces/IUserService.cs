using FilmsCatalog.BLL.DTO;
using FilmsCatalog.BLL.Infrastructure;
using System;
using System.Threading.Tasks;
using System.Security.Claims;

namespace FilmsCatalog.BLL.Interfaces
{
    public interface IUserService : IDisposable
    {
        Task<OperationDetails> Create(UserDTO userDto);

        Task<ClaimsIdentity> Authenticate(UserDTO userDto);
    }
}
