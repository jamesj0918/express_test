const _response = (status, body) => {
  res = {};
  res.status = status;
  res.body = body;

  return res;
};

const _insert = (table, body) => {
  const columns = Object.keys(body);
  const values = Object.values(body).map((value) => `'${value}'`);

  return (query = `INSERT INTO ${table} (${columns.join(
    ", "
  )}) VALUES (${values.join(", ")});`);
};

const _delete = (table, id) => {
  return (query = `DELETE FROM ${table} WHERE id='${id}';`);
};

const _select = (table, id) => {
  return (query = `SELECT * FROM ${table} WHERE id=${id};`);
};

const _update = (table, id, body) => {
  const columns = Object.keys(body);
  const values = Object.values(body);

  const data = columns
    .map((column, i) => {
      return `${column}='${values[i]}'`;
    })
    .join();

  return (query = `UPDATE ${table} SET ${data} WHERE id=${id};`);
};

module.exports = { _response, _insert, _delete, _select, _update };
