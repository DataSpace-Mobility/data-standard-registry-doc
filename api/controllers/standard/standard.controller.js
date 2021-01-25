var Standard = require('../../models/standard.model');

var create = (req, res, next) => {
    let data = req.body;
    const shortName = data.info.shortName;
    const data_check = Standard.findOne({info:{shortName:shortName}});
    if(data_check){
        res.json({
            status:409,
            message:"Duplicate entry found"
        });
    }
    var newStandard = new Standard(req.body);

    newStandard.save(function (err) {
        if (err)
            res.json({
                status:404,
                message:"Insert Unsucesessfull"
            })
        res.json({
            status:200,
            message: 'Insert Sucessfull'
        });
    });
};

var get = (req, res, next) => {
    Standard.find({}, function (err, standards) {
        if (err)
            return next(err);
        res.json(standards)
    });
};

var getById = (req, res, next) => {
    Standard.find({}, function (err, standards) {
        if (err)
            return next(err);
        res.json(standards)
    });
};

module.exports = { create, get, getById }
