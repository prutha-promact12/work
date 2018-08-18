using ChatApplication.Data;
using ChatApplication.Models;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApplication.Hubs
{

  public class ChatHub : Hub
  {
    private ChatDBContext _service;
    private UserLogin data;

    public ChatHub(ChatDBContext service)
    {
      _service = service;
    }

    //public Task Sendnotify(string userId)
    //{
    //  var msg = "you have new message";
    //  return Clients.Client(userId).SendAsync("sendnotify",msg);
    //}
    public Task Send(string userId,string senderid, string message,string sender)
    {
     return Clients.Clients(userId,senderid).SendAsync("send",message,sender);
    }

    public void setconnectid(string name)
    {
       data = _service.LoginData.SingleOrDefault(c => c.name == name);
      data.ConnectionID = Context.ConnectionId;
      _service.LoginData.Attach(data);
      _service.Entry(data).State = EntityState.Modified;
      _service.SaveChanges();
    }
    public void setstatus(string name)
    {
      data = _service.LoginData.SingleOrDefault(c => c.name == name);
      data.isConnect = "1";
      _service.LoginData.Attach(data);
      _service.Entry(data).State = EntityState.Modified;
      _service.SaveChanges();
    }
  }
}
