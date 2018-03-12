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

/* MIDDLEWARE */

// logging
app.use(morgan('dev'));

// express.static
app.use(express.static(path.join(__dirname, '/public/views')));

// body-parser
app.use(parser.urlencoded({ extended: true})); // for HTMPL form submits
app.use(parser.json()); // would be for AJAX reqs

// nunjucks
const env = nunjucks.configure('/public/views', {noCache: true});
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when res.render works with html files, have it use nunjucks to do so

// router
app.use(router);

/* SERVER */

// if (!module.parent) {
  app.listen(3000,() => console.log('listening!!'));
// }

