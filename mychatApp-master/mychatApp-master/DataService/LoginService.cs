using ChatApplication.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChatApplication.DataService
{
  public interface LoginService{
    Task<UserLogin> AddUserAsync(UserLogin info);
    Task<UserLogin> GetUserAsync(string name);
    Task<List<UserLogin>> GetUsersAsync();
    Task<bool> UpdateUserStatusAsync(UserLogin info);
  }
}
