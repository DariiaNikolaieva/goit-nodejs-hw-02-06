const Users = require("../repository/users-repository");
const { HttpCode } = require("../config/constants");

const registration = async (req, res, next) => {
  const { email, password, subscription } = req.body;
  const user = await Users.findByEmail(email);
  if (user) {
    return res
    .status(HttpCode.CONFLICT)
    .json({
      status: "error",
      code: HttpCode.CONFLICT,
      message: "Email is already existed",
    });
  }

  try {
    const newUser = await Users.createUser({ email, password, subscription });
    return res
    .status(HttpCode.CREATED)
    .json({
      status: "success",
      code: HttpCode.CREATED,
      data: {
        id: newUser.id,
        email: newUser.email,
        subscription: newUser.subscription,
      },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  await res.json();
};

const logout = async (req, res, next) => {
  await res.json();
};

module.exports = {
  registration,
  login,
  logout,
};
