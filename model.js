const Sequelize = require('sequelize')
const DB = new Sequelize('postgres://localhost:5432/plantr')

module.exports = DB;

const Gardener = DB.define('gardener', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

const Plot = DB.define('plot', {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN
})

const Vegetable = DB.define('vegetable', {
  name: Sequelize.STRING,
 color: Sequelize.STRING,
 planted_on: Sequelize.DATE
})
