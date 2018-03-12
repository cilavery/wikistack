const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false // can be changed to false if logging errors are too verbose
});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Title Pending'
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
    },
    defaultValue: 'http://www.foo.com',
    getterMethods: {
      route() {
        return `/wiki/${this.urlTitle}`;
      }
    }
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: 'Content Pending'
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Name Pending' },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
    defaultValue: 'email_pending@address.com'
  } // shouldn't this be  `type: Sequelize.STRING, unique: true`?
});

module.exports = db; // exporting entire db

// module.exports = { // exporting indiv objs from db
//   db: db
//   Page: Page,
//   User: User,
// };
