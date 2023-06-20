const { Joi } = require("../commons");

const fileSchema = Joi.object({
  fieldname: Joi.string().required(),
  originalname: Joi.string().required(),
  encoding: Joi.string().required(),
  mimetype: Joi.string()
    .required()
    .valid("image/png", "image/jpeg", "application/pdf"),
  buffer: Joi.binary().required(),
  size: Joi.number()
    .min(1000)
    .max(10000000)
    .required()
    .label("File upload size")
    .messages({
      "number.min": "File must be at least 1 KB",
      "number.max": "File must be max 10 MB in size",
    }),
  // .error((errors) => {
  //   errors.forEach((err) => {
  //     console.log(err, "err at joi");
  //   });
  //   return errors;
  // }),
});

exports.fileJoiSchema = Joi.object({
  caption: Joi.string(),
  title: Joi.string(),
  file: fileSchema,
});

//   fieldname: 'file',
//   originalname: 'Profile.jpeg',
//   encoding: '7bit',
//   mimetype: 'image/jpeg',
//   buffer: <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 00 00 01 00 01 00 00 ff db 00 43 00 08 06 06 07 06 05 08 07 07 07 09 09 08 0a 0c 14 0d 0c 0b 0b 0c 19 12 13 0f ... 37881 more bytes>,
//   size: 37931
