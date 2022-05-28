using HelloAzureAD.App.Models;

namespace HelloAzureAD.App.Services;

public class UserService: IUserService
{
    private readonly List<User> users = new ();

    public List<User> Get() { return users; }

    public List<User> Add(List<User> newUsers)
    {
        foreach (var user in newUsers)
        {
            users.Add(user);
        }
        return newUsers;
    }
}
