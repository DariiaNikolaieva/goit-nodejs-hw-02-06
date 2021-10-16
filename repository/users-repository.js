const User = require('../model/user-model')

const findByEmail = (email) => {}

const createUser = async (options) => {
    const user = new User(options);
    return await user.save();
  };

module.exports = {
    findByEmail,
    createUser,
}