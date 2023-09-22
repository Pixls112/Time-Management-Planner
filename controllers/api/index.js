const router = require('express').Router();
const userinputRoutes = require('./userinput');
const calendarRoutes = require('./calendarRoutes');
const dayplannerRoutes = require('./dayplanner-routes')

router.use('/userinput', userinputRoutes);
router.use('/calendar', calendarRoutes);
router.use('/dayplanner', dayplannerRoutes);

module.exports = router;
