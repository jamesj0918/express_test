const mysql = require("mysql2/promise");

const _query = async (raw_query) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "test_db",
  });
  let [rows, _] = await connection.execute(raw_query);
  await connection.end();
  return rows;
};
module.exports = _query;
