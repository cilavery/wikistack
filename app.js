'use strict';
const express = require('express');
const parser = require('body-parser');
const nunjucks = require('nunjucks');
const router = require('./routes')
const app = express();
const env = nunjucks.configure('views', {noCache: true});
const fs = require('fs');
const path = require('path');

// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

app.use(router)


let server = app.listen(3000,() => console.log('listening!!'));
