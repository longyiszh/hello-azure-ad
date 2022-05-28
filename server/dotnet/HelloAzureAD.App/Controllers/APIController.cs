using HelloAzureAD.App.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelloAzureAD.App.Controllers;

[ApiController]
[Route("[controller]")]
public class APIController : ControllerBase
{
    [HttpGet]
    public CommonMessage GetReadyState()
    {
        return new CommonMessage(
            OK: true,
            Content: "API Works!"
        );
    }
}
