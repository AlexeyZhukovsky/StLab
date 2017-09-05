using FilmsCatalog.BLL.DTO;
using FilmsCatalog.BLL.Infrastructure;
using FilmsCatalog.DAL.Entities;
using FilmsCatalog.DAL.Interfaces;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using System.Security.Claims;
using FilmsCatalog.BLL.Interfaces;
using System.Linq;

namespace FilmsCatalog.BLL.Services
{
    public class UserService : IUserService
    {
        IUnitOfWork database { get; set; }

        public UserService(IUnitOfWork uow)
        {
            database = uow;
        }

        public async Task<OperationDetails> Create(UserDTO userDto)
        {
            ApplicationUser user = await database.UserManager.FindByEmailAsync(userDto.Email);
            if (user == null)
            {
                user = new ApplicationUser { Email = userDto.Email, UserName = userDto.Email };
                var result = await database.UserManager.CreateAsync(user, userDto.Password);
                if (result.Errors.Count() > 0)
                    return new OperationDetails(false, result.Errors.FirstOrDefault(), "");
                ClientProfile clientProfile = new ClientProfile { Id = user.Id, Name = userDto.Name };
                database.ClientManager.Create(clientProfile);
                await database.SaveAsync();
                return new OperationDetails(true, "Registration successful", "");
            }
            else
            {
                return new OperationDetails(false, "A user with this login already exists", "Email");
            }
        }

        public async Task<ClaimsIdentity> Authenticate(UserDTO userDto)
        {
            ClaimsIdentity claim = null;
            ApplicationUser user = await database.UserManager.FindAsync(userDto.Email, userDto.Password);
            if (user != null)
                claim = await database.UserManager.CreateIdentityAsync(user, DefaultAuthenticationTypes.ApplicationCookie);
            return claim;
        }

        public void Dispose()
        {
            database.Dispose();
        }
    }
}
