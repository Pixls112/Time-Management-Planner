const router = require('express').Router();
const apiRoutes = require('./api');
const logInRoutes = require('./logInRoutes');

// router.use('/', calendarRoutes);
router.use('/api', apiRoutes);
router.use('/', logInRoutes)



module.exports = router;
