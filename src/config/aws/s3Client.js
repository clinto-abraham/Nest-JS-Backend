const {
  region,
  secretAccessKey,
  accessKeyId,
  sessionToken,
} = require("../../environments");
const { S3Client } = require("../../commons/index.js");

exports.s3Client = new S3Client({
  credentials: {
    region,
    secretAccessKey,
    accessKeyId,
    sessionToken,
  },
});
