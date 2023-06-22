// const {
//   region,
//   secretAccessKey,
//   accessKeyId,
//   sessionToken,
// } = require("../../environments");
const dotenv = require("dotenv");
dotenv.config();

const { S3Client } = require("../../commons/index.js");

exports.s3Client = new S3Client({
  credentials: {
    region: process.env.region,
    secretAccessKey: process.env.secretAccessKey,
    accessKeyId: process.env.accessKeyId,
    sessionToken: process.env.sessionToken,
  },
});
