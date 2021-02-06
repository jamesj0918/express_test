const _response = (status, body) =>{
    res = {};
    res.status = status;
    res.body = body;

    return res
}

const _insert = (table, request) => {
    const columns = Object.keys(request);
    const values = Object.values(request).map(value => `'${value}'`);

    return query = `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${values.join(', ')});`;
}


module.exports = { _response, _insert }