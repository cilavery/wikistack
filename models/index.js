const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('page', {
  title: { type: Sequelize.STRING },
  urlTitle: { type: Sequelize.STRING }, // might need a property setting this to be 'url-safe': might mean smth to do w/ percent-encoding?
  content: { type: Sequelize.TEXT },
  status: { type: Sequelize.ENUM('open', 'closed') }
});

const User = db.define('user', {
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING }, // shouldn't this be  `type: Sequelize.STRING, unique: true`?
});


module.exports = {
  Page: Page,
  User: User
};
