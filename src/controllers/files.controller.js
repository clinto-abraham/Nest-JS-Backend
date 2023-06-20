const { fileServices } = require("../services/db.service/file.services");
const { statusCodeAws, dataAwsOutput, generateID } = require("../commons");
const { S3 } = require("../services/aws.service/S3");

exports.filesController = class filesController {
  static async createFile(req, res, next) {
    const { buffer, mimetype, originalname, encoding } = req.file;
    const body = req.body;
    const imageID = generateID();

    const awsResult = await S3.uploadObjectAWS(
      buffer,
      imageID,
      encoding,
      mimetype,
      res
    );
    const dataAws = dataAwsOutput(awsResult);
    const status = statusCodeAws(awsResult);

    if (status === 200 || 204) {
      const foundFileNameOriginal = await fileServices.findByOriginalname(
        res,
        originalname
      );
      const dataPostgresDB = await fileServices.create(
        res,
        imageID,
        body,
        originalname
      );
      return res.status(201).json({
        dataAws,
        dataPostgresDB,
        message: foundFileNameOriginal
          ? `You have re-uploaded same document again with file original name -  ${originalname}, if you want to delete the file then use its id: ${dataPostgresDB.id}`
          : `File has been successfully created with title : ${body.title}`,
      });
    }
  }

  static async updateFileByID(req, res) {
    const id = req.params.id;
    const { buffer, mimetype, encoding } = req.file;
    const body = req.body;

    const awsResult = await S3.uploadObjectAWS(
      buffer,
      id,
      encoding,
      mimetype,
      res
    );
    const dataAws = dataAwsOutput(awsResult);
    const number = await fileServices.updateByQuery(res, id, body);

    return res.status(201).json({
      dataAws,
      dataPostgresDB: `Successfully updated ${number} file in the db with id ${id}`,
    });
  }

  static async getAllFiles(req, res) {
    let setOfURL = [];
    const dataPostgresDB = await fileServices.findAll(res);

    for (let file of dataPostgresDB) {
      setOfURL.push(await S3.getObjectSignedUrl(file.id, res));
    }
    return res.status(200).json({
      aws: setOfURL,
      dataPostgresDB,
    });
  }

  static async getFileByID(req, res) {
    const id = req.params.id;
    const dataPostgresDB = await fileServices.findByQuery(res, id);

    if (dataPostgresDB?.id) {
      const aws = await S3.getObjectSignedUrl(dataPostgresDB.id, res);
      return res.status(200).json({
        dataPostgresDB,
        aws,
      });
    } else {
      res
        .status(404)
        .json({ message: `No file was found with id ${id} in the db` });
    }
  }

  static async deleteFileByID(req, res) {
    const id = req.params.id;
    const awsResult = await S3.deleteFileBySingleKeyAWS(id, res);
    const status = statusCodeAws(awsResult);
    const dataAws = dataAwsOutput(awsResult);

    if (status === 204) {
      const number = await fileServices.deleteByQuery(id);
      return res.status(202).json({
        dataAws,
        dataPostgresDB: `Deleted ${number} file in the db with id ${id}`,
      });
    }
  }

  static async deleteAllFiles(req, res) {
    let imageID = [];
    let fileNamesArray = [];

    const findAllFiles = await fileServices.findAll(res);
    for (let x of findAllFiles) {
      imageID.push(x.id);
    }

    if (imageID.length > 0) {
      imageID.forEach((item) => fileNamesArray.push({ Key: item }));
      const deleted = await S3.deleteAllFilesByMultipleKeysAWS(
        fileNamesArray,
        res
      );
      const count_of_items_deleted = imageID.length;
      if (deleted) {
        const dataPostgresDB = await fileServices.deleteAll(res);
        return res.status(200).json({
          dataPostgresDB: `${
            dataPostgresDB === 0
              ? `All files are deleted successfully and ${dataPostgresDB} files remains in files table`
              : "Deletion action could not be completed!"
          }`,
          aws: deleted,
          count_of_items_deleted,
        });
      }
    } else {
      res.status(404).json({
        message: "No files to be deleted",
        findAllFiles,
      });
    }
  }
};
