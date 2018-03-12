const express = require('express');
const router = express.Router();

// GET  /wiki/      (/)       retrieve all wiki pages
router.get('/', (req, res, next) => {
  // res.send('response to GET request to /wiki/');
  res.redirect('/');
});

// POST /wiki/      (/)       submit a new page to the db
router.post('/', (req, res, next) => {
  res.render('addpage');
  console.log('req.body',req.body);
  // res.send('response to POST request to /wiki/');
});

// GET  /wiki/add/  (/add)    retrieve the 'add a page' form
router.get('/add', (req, res, next) => {
  res.render('addpage');
  // res.send('response to GET request to /wiki/add');
});


/*
GET	/users/	get all users, do not change db
GET	/users/123	get user 123, do not change db
POST	/users/	create a user in the db
PUT	/users/123	update user 123 in the db
DELETE	/users/123	delete user 123 from the db
*/



module.exports = router;
