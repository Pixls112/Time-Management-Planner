const router = require('express').Router();
const userRoutes = require('../../models/user');
const eventRoutes = require('../../models/event');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);

module.exports = router;
