const router = require('express').Router();
const apiRoutes = require('./api');
const logInRoutes = require('./logInRoutes');
const signUpRoutes = require('./signUpRoutes');

// router.use('/', calendarRoutes);
router.use('/api', apiRoutes);
router.use('/', logInRoutes);
router.use('/signuppage', signUpRoutes)



module.exports = router;
