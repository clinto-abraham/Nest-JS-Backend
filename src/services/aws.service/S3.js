const {
  getSignedUrl,
  GetObjectCommand,
  DeleteObjectCommand,
  DeleteObjectsCommand,
  PutObjectCommand,
  statusCodeAws,
} = require("../../commons");
const { s3Client } = require("../../config/aws/s3Client");
const { bucketName } = require("../../environments");

exports.S3 = class S3 {
  static async getObjectSignedUrl(Key, res) {
    const seconds = 3600;
    const params = {
      Bucket: bucketName,
      Key,
    };
    try {
      const command = new GetObjectCommand(params);
      const url = await getSignedUrl(s3Client, command, {
        expiresIn: seconds,
      });
      return url;
    } catch (error) {
      return res
        .status(statusCodeAws(error) ? statusCodeAws(error) : 412)
        .json({
          errorType: error.name,
          error,
          message: `Error at aws - (getSignedUrl or GetObjectCommand), check getObjectSignedUrl method for debug`,
        });
    }
  }

  static async deleteFileBySingleKeyAWS(fileName, res) {
    const deleteParams = {
      Bucket: bucketName,
      Key: fileName,
    };
    try {
      return await s3Client.send(new DeleteObjectCommand(deleteParams));
    } catch (error) {
      return res
        .status(statusCodeAws(error) ? statusCodeAws(error) : 500)
        .json({
          errorType: error.name,
          message: `Some error occurred while deleting data with key: ${fileName} with respect to bucket: ${bucketName}.`,
          error,
        });
    }
  }

  static async deleteAllFilesByMultipleKeysAWS(fileNamesArray, res) {
    const deleteParams = {
      Bucket: bucketName,
      Delete: {
        Objects: fileNamesArray,
      },
    };
    try {
      const { Deleted } = await s3Client.send(
        new DeleteObjectsCommand(deleteParams)
      );
      console.log(
        `Successfully deleted ${Deleted.length} objects from s3Client bucket. Deleted objects:`
      );
      console.log(Deleted.map((d) => ` • ${d.Key}`).join("\n"));
      return Deleted;
    } catch (error) {
      return res
        .status(statusCodeAws(error) ? statusCodeAws(error) : 500)
        .json({
          errorType: error.name,
          message: `Some error occurred while deleting data with array of keys: ${fileNamesArray} with respect to bucket: ${bucketName}.`,
          error,
        });
    }
  }

  static async uploadObjectAWS(buffer, fileName, encoding, mimetype, res) {
    const uploadParams = {
      Bucket: bucketName,
      Body: buffer,
      Key: fileName,
      ContentEncoding: encoding, // required
      ContentType: mimetype,
    };

    try {
      return await s3Client.send(new PutObjectCommand(uploadParams));
    } catch (error) {
      return res
        .status(statusCodeAws(error) ? statusCodeAws(error) : 412)
        .json({
          errorType: error.name,
          error,
          message: `Error at creating new pdf in aws - (PutObjectCommand method), check createPDF service for debug`,
        });
    }
  }
};
