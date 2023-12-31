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

    const event = eventData.get({ plain: true });

    const dateTime = event.start.toISOString();
    console.log("date time: ", dateTime);

    const date = dateTime.split('T')[0];

    const dateObj = new Date(dateTime);
    dateObj.setHours(dateObj.getHours() - 7);
    console.log("date object: ", dateObj.toString());
    const time = dateObj.toISOString().split('T')[1].split('.')[0];
    
    res.render('edit', {
      ...event,
      date,
      time,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  console.log(req.params.id);
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
router.delete('/:id', async (req, res) => {
  console.log(req.params.id);
  try{
    const eventData = await Event.destroy({
      attributes: ['title','start'],
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(eventData);
  } catch(err){
    res.status(400).json(err);
  }
});

module.exports = router;