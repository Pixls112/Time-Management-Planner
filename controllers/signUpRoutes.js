const router = require('express').Router();
const User = require('../models/user')

router.get('/', async (req, res) => {
    try {
      // Pass serialized data and session flag into template
      res.render('signuppage');
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/signup', async (req, res) => {
    try {
      const userData = await User.create(req.body);

      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });


  module.exports = router;