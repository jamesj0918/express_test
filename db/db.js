const _query = (connection, raw_query, callback) => {
    connection.query(raw_query, (err, rows, fields) => {
        if (err) {
            return(callback(err, null));
        }
        else {
            return(callback(null, rows));
        }
    });
};

module.exports = _query