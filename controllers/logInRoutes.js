const router = require('express').Router();

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('loginpage');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;