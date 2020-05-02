import Joi = require('@hapi/joi');

export const ObserverSchema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  //   password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  //   repeat_password: Joi.ref('password'),
  //   access_token: [Joi.string(), Joi.number()],

  description: Joi.string()
    .alphanum()
    .min(1)
    .max(50),

  // email: Joi.string().email({
  //     minDomainSegments: 2,
  //     tlds: { allow: ['com', 'net'] },
  //   }),
  data_passed: Joi.string()
    .alphanum()
    .min(2),
});
// .with('username', 'birth_year');
//   .xor('password', 'access_token')
//   .with('password', 'repeat_password');
