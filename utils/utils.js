const { NOTFOUND } = require("dns");
const { builtinModules } = require("module")

const _response = (status, body) =>{
    res = {};
    res.status = status;
    res.body = body;

    return res
}

const _db = (req) => {
    if(req.title != "Title") {
        return 404;
    }
    else return 200;
}


module.exports = { _response, _db }