var Standard = require('../../models/standard.model');

var create = (req, res, next) => {
    var newStandard = new Standard(req.body);

    newStandard.save(function (err) {
        if (err)
            return next(err);
        res.json({
            message: 'User created'
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
