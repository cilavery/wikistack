'use strict';
const express = require('express');
const router = express.Router();
const db = require('../models');
const User = db.model('user'); // to access the `User` obj in `db`
const Page = db.model('page'); // to access the `Page` obj in `db`

router.use('/wiki', require('./wiki'));
router.use('/wiki/add', require('./user'));

router.get('/', (req, res, next) => {
  res.render('../views/index.html');
})

module.exports = router;
