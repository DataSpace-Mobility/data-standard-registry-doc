var Standard = require('../../models/standard.model');

var create = async (req, res, next) => {
    let data = req.body;
    const shortName = data.info.shortName;
    const data_check = await Standard.findOne({info:{shortName:shortName}});
    if(data_check){
        res.json({
            status:409,
            message:"Duplicate entry found"
        });
    }
    const api_auth_key = data.api_auth_key;
    delete data['api_auth_key'];
    if(process.env.api_auth_key === api_auth_key){
        var newStandard = new Standard(data);
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
    }else{
        res.json({
            status:404,
            message:"Invalid / No auth key found"
        })
    }
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
