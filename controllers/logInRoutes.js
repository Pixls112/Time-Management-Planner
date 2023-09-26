const router = require('express').Router();
const User = require('../models/user')

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('loginpage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/api/calendar');
    return;
  }

  res.render('loginpage');
});



router.post('/login', async (req, res) => {
  try {
    console.log("inside login")
    console.log(req.body)
    const userData = await User.findOne({ where: { name: req.body.name}});
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    console.log(validPassword)
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      console.log(userData.id)
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;