exports.fileValidate = async (req, res, next) => {
  const schema = require("../schema");
  const file = req.file;
  const { caption, title } = req.body;

  try {
    await schema.fileJoiSchema.validateAsync({
      caption,
      title,
      file,
    });
  } catch (error) {
    const data = error.details[0];
    return res.status(403).json({
      error: data.message,
      expectedFileExtension: data.context.valids,
      receivedFile: `${(data.context.value / 1000000).toFixed(2)} MB`,
    });
  }

  next();
};

// const allowedFileExtension = ["image/png", "image/jpeg", "application/pdf"];
// const temp = allowedFileExtension.filter((item) => item === type);
// let calculated = size / 1000000;

// if (temp.length < 1) {
//   return res.status(406).json({
//     message: `${type} is not allowed, please upload from the allowed file extensions`,
//     allowedFileExtension,
//   });
// }

// if (size > 10000000) {
//   return res.status(406).json({
//     message: `The file size of ${calculated}MB has exceeded the maximum threshold of 10MB, please upload file with size less than 10MB or kindly compress the file`,
