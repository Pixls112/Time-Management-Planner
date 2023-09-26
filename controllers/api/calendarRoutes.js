const router = require('express').Router();
const { Event, User } = require('../../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  console.log('inside api calendar')
  try {
    // Get all projects and JOIN with user data
    const eventData = await Event.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
console.log(eventData)
    // Serialize data so the template can read it
    const events = eventData.map((event) => event.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('calendar', {
      events,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
