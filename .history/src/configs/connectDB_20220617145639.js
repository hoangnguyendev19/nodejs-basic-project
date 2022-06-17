// get the client
import mysql from "mysql2";
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "basic_mysql_db",
});

// simple query
connection.query(
  "SELECT * FROM `users` WHERE",
  function (err, results, fields) {
    console.log("check mysql: ");
    console.log(results); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
  }
);

export default connection;

// with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );
