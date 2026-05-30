import mysql from "mysql2/promise";

const urlDB = `mysql://${process.env.MYSQLSUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}}}/${process.enMYSQLDATABASE}`;

const db = mysql.createPool(urlDB);

export default db;
