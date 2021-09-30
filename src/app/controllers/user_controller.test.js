const UserController = require("./user_controller");
const { User, sync } = require("../models/user_model");

describe(UserController.name, () => {
  it("Should list users", async () => {
    const user = "user@email.com",
      password = "pAssssssssdasdasdas123566sddsa7";

    await User.create({ userEmail: user, password });

    const users = await new UserController().userController({ user, password });

    expect(users).toHaveLength(1);
    console.log({ users });
  });
});
