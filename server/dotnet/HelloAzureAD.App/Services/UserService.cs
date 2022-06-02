using HelloAzureAD.App.Models;

namespace HelloAzureAD.App.Services;

public class UserService: IUserService
{
    private readonly List<User> users = new ();

    public List<User> Get() { return users; }

    public List<User> Add(List<User> newUsers)
    {
        List<User> addingUsers = new();
        foreach (var user in newUsers)
        {
            User addingUser = user with
            {
                ID = Guid.NewGuid().ToString()
            };
            addingUsers.Add(addingUser);
        }
        users.AddRange(addingUsers);
        return addingUsers;
    }
}
