const router = require('express').Router();
const bodyParser = require('body-parser');
const withAuth = require('../../utils/auth');
const { Event, User } = require('../../models');
router.use(bodyParser.json())

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('edit-routes');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id, {
    });

    const eventPost = eventData.get({ plain: true });

    res.render('edit', {
      ...eventPost,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Event.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(eventData => {
      if (!eventData) {
        res.status(404).json({message:'No event found with this id'});
        return;
      }
      res.json(eventData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/save-task', withAuth ,async (req, res) => {
  try {
    console.log(req.body);
    const newEvent = await Event.create({
      editTitle:req.body.edititle,
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