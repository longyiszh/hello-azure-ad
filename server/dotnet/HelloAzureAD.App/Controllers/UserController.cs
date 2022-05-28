using HelloAzureAD.App.Models;
using HelloAzureAD.App.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelloAzureAD.App.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IUserService userService;

    public UserController(
        IUserService userService
    )
    {
        this.userService = userService;
    }

    [HttpGet]
    public List<User> GetUsers()
    {
        return userService.Get();
    }

    [Authorize(Roles = "Admin")]
    [HttpPost]
    [Route("add")]
    public List<User> AddUsers([FromBody] List<User> newUsers)
    {
        return userService.Add(newUsers);
    }

}
