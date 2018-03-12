const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false // can be changed to false if logging errors are too verbose
});

const Page = db.define('page', {
  title: { type: Sequelize.STRING, allowNull: false, defaultValue: 'Title Pending'},
  urlTitle: { type: Sequelize.STRING,  allowNull: false, isUrl: true, defaultValue: 'http://www.foo.com'}, // might need a property setting this to be 'url-safe': might mean smth to do w/ percent-encoding?
  content: { type: Sequelize.TEXT,  allowNull: false, defaultValue: 'Pending'},
  status: { type: Sequelize.ENUM('open', 'closed')}
});

const User = db.define('user', {
  name: { type: Sequelize.STRING,  allowNull: false, defaultValue: 'Need Name'},
  email: { type: Sequelize.STRING,  allowNull: false, isEmail: true, defaultValue: 'Need Email@address.com'}, // shouldn't this be  `type: Sequelize.STRING, unique: true`?
});


module.exports = db;

// module.exports = {
//   Page: Page,
//   User: User,
//   db: db
// };



