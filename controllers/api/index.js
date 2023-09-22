const router = require('express').Router();
const userinputRoutes = require('./userinput');
const calendarRoutes = require('./calendarRoutes');


router.use('/userinput', userinputRoutes);
router.use('/calendar', calendarRoutes);


module.exports = router;
