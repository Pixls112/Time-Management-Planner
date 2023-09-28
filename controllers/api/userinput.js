const router = require('express').Router();
const bodyParser = require('body-parser');
const withAuth = require('../../utils/auth');
const { Event, User } = require('../../models');
router.use(bodyParser.json())

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('userinput');
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/save-task', withAuth ,async (req, res) => {
  try {
    console.log(req.body);
    const newEvent = await Event.create({
      title:req.body.title,
      start:req.body.start,
      user_id: req.session.user_id,
    });
    console.log(newEvent);
    res.status(200).json(newEvent);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;