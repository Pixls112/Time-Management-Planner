const router = require('express').Router();
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    
    // Pass serialized data and session flag into template
    res.render('dayplanner');
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;