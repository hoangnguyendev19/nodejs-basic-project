let getHomepage = (req, res) => {
  //logic
  let data = [];
  connection.query(
      'SELECT * FROM `users` ',
      function (err, results, fields) {
          results.map((row) => {
              data.push({
                  id: row.id,
                  email: row.email,
                  address: row.address,
                  firstName: row.firstName,
                  lastName: row.lastName
              })

          });
  return res.render("index.ejs", {dataUsers: data});
};

module.exports = {
  getHomepage,
};
