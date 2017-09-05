using System;
using FilmsCatalog.DAL.Entities;

namespace FilmsCatalog.DAL.Interfaces
{
    public interface IClientManager : IDisposable
    {
        void Create(ClientProfile item);
    }
}
