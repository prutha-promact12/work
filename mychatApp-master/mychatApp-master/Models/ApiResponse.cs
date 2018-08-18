using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace ChatApplication.Models
{
  public class ApiResponse
    {
    public bool Status { get; set; }
    public UserLogin User { get; set; }
    public ModelStateDictionary ModelState { get; internal set; }
  }
}
