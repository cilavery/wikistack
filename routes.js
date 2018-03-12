'use strict';
const express = require('express');
const router = express.Router();
const db = require('./models');
const Page = db.model('page') //how to access db tables, if exporting the entire db

router.get('/', (req, res, next) => {
  res.render('./views/index.html');
})




module.exports = router;
