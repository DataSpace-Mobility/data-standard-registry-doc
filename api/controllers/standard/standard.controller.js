var Standard = require("../../models/standard.model");

var create = async (req, res, next) => {
  let data = req.body;
  const shortName = data.info && data.info.shortName ? data.info.shortName : res.status(400).json({message:"Invalid Request"});
  if (shortName) {
    await Standard.find({ "info.shortName": shortName })
      .then(async (result) => {
        if (result.length > 0) {
          res.json({ status: 409, message: "Duplicate entry found" });
        } else {
          {
            const api_auth_key = data.api_auth_key;
            if (
              data.api_auth_key &&
              process.env.api_auth_key === api_auth_key
            ) {
              delete data["api_auth_key"];
              await Standard.create(data)
                .then((result) => {
                  res.json({
                    status: 200,
                    message: "Insert Successful",
                  });
                })
                .catch((err) => {
                  res.json({
                    status: 404,
                    message: "Standard creation failed",
                    description: err,
                  });
                });
            } else {
              res.json({
                status: 404,
                message: "Invalid / No auth key found",
              });
            }
          }
        }
      })
      .catch((err) => console.log(err));
  } else {
    res.json({
      status: 400,
      message: "Bad Request",
    });
  }
};

var get = (req, res, next) => {
  Standard.find({}, function (err, standards) {
    if (err) return next(err);
    res.json(standards);
  });
};

const getAllVersionsByShortName = async (req, res) => {
  const shortName = req.body.shortName;
  if (shortName) {
    await Standard.find({ "info.shortName": shortName })
      .then((result) => {
        if (result.length > 0) {
          result = result[0];
          res.json(result).status(200);
        } else {
          res.json({ status: 404, message: `No data found for ${shortName}` });
        }
      })
      .catch((err) => console.log(err));
  } else {
    res.json({
      status: 400,
      message: "Bad Request",
    });
  }
};

const getAllVersionsByUUID = async (req, res) => {
  const uuid = req.body.uuid;
  if (uuid) {
    await Standard.find({ uuid: uuid })
      .then((result) => {
        if (result.length > 0) {
          result = result[0];
          res.json(result).status(200);
        } else {
          res.json({ status: 404, message: `No data found for ${uuid}` });
        }
      })
      .catch((err) => console.log(err));
  } else {
    res.json({
      status: 400,
      message: "Bad Request",
    });
  }
};

const getLatestVersionByUUID = async (req, res) => {
  const uuid = req.body.uuid;
  if (uuid) {
    await Standard.find({ uuid: uuid })
      .then((result) => {
        if (result.length > 0) {
          result = result[0];
          result["versions"] = [
            result["versions"][result["versions"].length - 1],
          ];
          res.json(result).status(200);
        } else {
          res.json({ status: 404, message: `No data found for ${uuid}` });
        }
      })
      .catch((err) => console.log(err));
  } else {
    res.json({
      status: 400,
      message: "Bad Request",
    });
  }
};

const getLatestVersionByShortName = async (req, res) => {
  const shortName = req.body.shortName;
  if (shortName) {
    await Standard.find({ "info.shortName": shortName })
      .then((result) => {
        if (result.length > 0) {
          result = result[0];
          result["versions"] = [
            result["versions"][result["versions"].length - 1],
          ];
          res.json(result).status(200);
        } else {
          res.json({ status: 404, message: `No data found for ${shortName}` });
        }
      })
      .catch((err) => console.log(err));
  } else {
    res.json({
      status: 400,
      message: "Bad Request",
    });
  }
};

const updateStandard = async (req, res) => {
  if (
    req.body.shortName &&
    req.body.versions.length > 0 &&
    req.body.kindOfUpdate
  ) {
    const shortName = req.body.shortName;
    // Assuming input versions is an array
    const versions = req.body.versions[0];
    // what to update, options -> major, minor, or patch
    const kindOfUpdate = req.body.kindOfUpdate;
    if (req.body.api_auth_key && (process.env.api_auth_key === req.body.api_auth_key)) {
      await Standard.find({ "info.shortName": shortName })
        .then(async (result) => {
          if (result.length > 0) {
            result = result[0];
            result["versions"] = [
              result["versions"][result["versions"].length - 1],
            ];
            version = result["versions"][0].version;
            if (kindOfUpdate.toLowerCase() == "major") {
              version["major"]++;
              version["minor"] = 0;
              version["patch"] = 0;
            } else if (kindOfUpdate.toLowerCase() == "minor") {
              version["minor"]++;
              version["patch"] = 0;
            } else {
              version["patch"]++;
            }
            version["updated_at"] = new Date();
            versions["version"] = version;
            await Standard.update({ $push: { versions: versions } })
              .then((result) => {
                res.json({ status: 200, message: `Updated Standard` });
              })
              .catch((err) =>
                res.json({
                  status: 404,
                  message: `Updated Standard failed`,
                  description: err,
                })
              );
          } else {
            res.json({
              status: 404,
              message: `No data found for ${shortName}`,
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      res.json({
        status: 404,
        message: "Invalid / No auth key found",
      });
    }
  } else {
    res.json({
      status: 400,
      message: "Bad Request",
    });
  }
};

var getById = (req, res, next) => {
  Standard.find({}, function (err, standards) {
    if (err) return next(err);
    res.json(standards);
  });
};

module.exports = {
  create,
  get,
  getById,
  getLatestVersionByShortName,
  updateStandard,
  getAllVersionsByShortName,
  getAllVersionsByUUID,
  getLatestVersionByUUID,
};
