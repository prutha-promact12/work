using ChatApplication.Models;
using Microsoft.EntityFrameworkCore;

namespace ChatApplication.Data
{
  public class ChatDBContext : DbContext
    {
    public ChatDBContext(DbContextOptions<ChatDBContext> options):base(options)
    {

    }
    public DbSet<UserLogin> LoginData { get; set; }
    public DbSet<Messages> ChatMessage { get; set; }
  }
}
