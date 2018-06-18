const db = require('./model');


db.sync({force: true})
.then(() => {
})
.catch((err) => {
  console.log(err);
})
.finally(() => {
  db.close();
})
