const _response = (status, body) =>{
    res = {};
    res.status = status;
    res.body = body;

    return res
};

const _insert = (table, request) => {
    const columns = Object.keys(request);
    const values = Object.values(request).map(value => `'${value}'`);

    return query = `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${values.join(', ')});`;
};

const _delete = (table, id) => {
    return query = `DELETE FROM ${table} WHERE id='${id}';`;
};

const _select = (table, id) => {
    return query = `SELECT * FROM ${table} WHERE id=${id};`;
};

module.exports = { _response, _insert, _delete, _select }