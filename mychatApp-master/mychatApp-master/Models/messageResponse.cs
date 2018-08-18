using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace ChatApplication.Models
{
  public class messageResponse
    {
    public bool Status { get; set; }
    public Messages messages { get; set; }
    public ModelStateDictionary ModelState { get; internal set; }
  }
}
