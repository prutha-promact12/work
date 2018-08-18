using ChatApplication.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChatApplication.DataService
{
  public interface MessageService{
    Task<Messages> AddMsgAsync(Messages data);
    Task<List<Messages>> GetMsgAsync();
    Task<bool> UpdateReadStatusAsync(Messages data);
  }
}
