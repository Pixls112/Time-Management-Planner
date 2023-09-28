const router = require('express').Router();
const { Event, User } = require('../../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('calendar', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/events', async (req, res) => {

  // Get all events from logged in user
  const eventData = await Event.findAll({
    attributes: ['title', 'start'],
    where: {
      user_id: req.session.user_id
    }
  });
  // Serialize data so the template can read it
  const events = eventData.map((event) => event.get({ plain: true }));

  res.status(200).json(events);
});

router.delete('/events', async (req, res) => {
  const eventData = await Event.destroy({
    attributes: ['title','start'],
    where: {
      user_id: req.session.user_id
    }
  });

})

module.exports = router;
