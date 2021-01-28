var Standard = require('../../models/standard.model');

var create = async (req, res, next) => {
    let data = req.body;
    const shortName = data.info.shortName;
    await Standard.find({"info.shortName":shortName})
        .then(async result => {
            if(result.length>0){
                res.json({status:409,message:"Duplicate entry found"})
            }else{
                {
                    const api_auth_key = data.api_auth_key;
                    delete data['api_auth_key'];
                    if(data.api_auth_key && process.env.api_auth_key === api_auth_key){
                        await Standard.create(data)
                            .then(result => {
                                res.json({
                                    status:200,
                                    message: 'Insert Successful'
                                });
                            })
                            .catch(err => {
                                res.json({
                                    status:404,
                                    message:"Standard creation failed",
                                    description:err
                                })
                            });
                    }else{
                        res.json({
                            status:404,
                            message:"Invalid / No auth key found"
                        })
                    }}
            }
        })
        .catch(err=> console.log(err));
};

var get = (req, res, next) => {
    Standard.find({}, function (err, standards) {
        if (err)
            return next(err);
        res.json(standards)
    });
};

const getLatestByShortName = async (req,res) => {
    const shortName = req.body.shortName;
    await Standard.find({
        "$where":() => {return {"info.shortName":shortName}},
        "$sort":() => {return {"versions.created_at":-1}},
        "$slice":() => {return 1}
    }).then(result => {
        res.status(200).json(result[0])
    }).catch(err => console.log(err))
}

var getById = (req, res, next) => {
    Standard.find({}, function (err, standards) {
        if (err)
            return next(err);
        res.json(standards)
    });
};

module.exports = { create, get, getById, getLatestByShortName }
