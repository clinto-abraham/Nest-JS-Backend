exports.statusCodeAws = (data) => {
  return data["$metadata"].httpStatusCode;
};

exports.dataAwsOutput = (data) => {
  return data["$metadata"];
};
