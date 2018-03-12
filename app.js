'use strict';

/* DEPENDENCIES */
const express = require('express');
const parser = require('body-parser');
const nunjucks = require('nunjucks');
const router = require('./routes');
const app = express();
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
// const models = require('./models'); // if exported only the indiv objs from db
const db = require('./models'); // if exported entire db

/* MIDDLEWARE */

// logging
app.use(morgan('dev'));

// express.static
app.use(express.static(path.join(__dirname, '/public'))); // might be '/public/stylesheets'

// body-parser
app.use(parser.urlencoded({ extended: true})); // for HTMPL form submits
app.use(parser.json()); // would be for AJAX reqs

// nunjucks
const env = nunjucks.configure('/views', {noCache: true});
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when res.render works with html files, have it use nunjucks to do so

// router
app.use(router);


/* SYNCING  & SERVER */

// Entire db
db.sync({force : true})
.then(function () {
    console.log('All tables created!');
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error.bind(console));

// If exported only indiv objs from db
// models.User.sync()
//   .then(function() {
//     console.log('User table created!');
//     return db.Page.sync();
// })
// .then(function () {
//     console.log('Page table created!');
//     app.listen(3000, function () {
//         console.log('Server is listening on port 3000!');
//     });
// })
// .catch(console.error.bind(console));


/* SERVER */

// // if (!module.parent) {
//   app.listen(3000,() => console.log('listening!!'));
// // }

