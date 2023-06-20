const { CreateBucketCommand, fileBuffer } = require("../commons");
const { s3Client } = require("../config/aws/s3Client.js");
const { S3 } = require("../services/aws.service/S3");

exports.testController = class testController {
  static async pdfManager(req, res) {
    const { buffer, originalname, encoding, mimetype } = req.file;
    const awsResult = S3.createPDF(buffer, originalname, encoding, mimetype);
    res.status(201).json({ awsResult });
  }

  static async createBucket(req, res) {
    const { bucketName } = req.body;
    const run = async () => {
      // Create an Amazon s3Client bucket.
      try {
        const data = await s3Client.send(
          new CreateBucketCommand({
            Bucket: bucketName,
          })
        );
        console.log("Successfully created a bucket called ", data.Location);
        return res.status(201).json({ data }); // For unit tests.
      } catch (err) {
        return res.status(406).json({ err });
      }
    };

    run();
  }

  static async test(req, res) {
    console.log(req.oidc.user, "req.oidc.user");
    res.status(201).json({ user: req.oidc.user });
  }
};
