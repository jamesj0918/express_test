const _response = (status, body) =>{
    res = {};
    res.status = status;
    res.body = body;

    return res
}

const _code = (req) => {
    if(req.body.title != "Title") {
        return 404;
    }
    else return 200;
}

const _query = (db, raw_query, callback) => {
    db.query(raw_query, (err, rows, fields) => {
        if (err) {
            return(callback(err, null));
        }
        else {
            return(callback(null, rows));
        }
    });
};

module.exports = { _response, _query, _code }