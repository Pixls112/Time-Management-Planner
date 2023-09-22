const router = require('express').Router();

const apiRoutes = require('./api');
const calendarRoutes = require('./calendarRoutes');

router.use('/', calendarRoutes);
router.use('/api', apiRoutes);

module.exports = router;
