var cats = require('./cats');

exports = module.exports = function () {
    return function statusCat(req, res, next) {
        var _writeHead = res.writeHead;
        res.writeHead = function (status) {
            if (status in cats) {
                res.setHeader('X-Status-Cat', cats[status]);
            }
            _writeHead.apply(res, arguments);
        };
        next();
    };
};

exports.cats = cats;
