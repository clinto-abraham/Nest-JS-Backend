exports.userValidate = async (req, res, next) => {
  const schema = require("../schema");
  const { nickname, name, picture, email, sub, sid } = req.oidc.user;

  try {
    await schema.userJoiSchema.validateAsync({
      nickname,
      name,
      picture,
      email,
      sub,
      sid,
    });
  } catch (error) {
    return res.status(403).json({ error });
  }

  next();
};

// if (!username && !password) {
//     res.status(400).send({
//         message: `${username} : Username and ${password} : Password can not be empty!`,
//     });
//     return;
// }

// if (!username) {
//     res.status(400).send({
//         message: `${username} : Username can not be empty!`,
//     });
//     return;
// }

// if (!password) {
//     res.status(400).send({
//         message: 'Password can not be empty!'
//     });
//     return;
// }
