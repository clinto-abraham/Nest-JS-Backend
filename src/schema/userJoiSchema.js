const { Joi } = require("../commons");

exports.userJoiSchema = Joi.object({
  nickname: Joi.string().required(),
  name: Joi.string().required(),
  picture: Joi.string(),
  email: Joi.string().required(),
  sub: Joi.string().required(),
  sid: Joi.string().required(),
});

//  nickname: 'test',
//   name: 'test@gmail.com',
//   picture: 'https://s.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png',
//   updated_at: '2023-05-24T03:47:10.054Z',
//   email: 'test@gmail.com',
//   email_verified: false,
//   sub: 'auth0|646d88be5bdfeb5d16ce7ee4',
//     sid: 'T0RRJ6-MPx60U1p0LlitdaIDy4Z25zwp'

// const { Joi } = require('../commons')

// exports.userJoiSchema = Joi.object({
//     username: Joi.string()
//         .alphanum()
//         .min(3)
//         .max(30)
//         .required(),

//     password: Joi.string()
//         .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
//         .required()
//         .min(4)
//         .max(30)
// }).with('username', 'password')
