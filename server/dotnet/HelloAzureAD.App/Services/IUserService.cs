using HelloAzureAD.App.Models;

namespace HelloAzureAD.App.Services;

public interface IUserService
{
    public List<User> Get();
    public List<User> Add(List<User> newUsers);
}
