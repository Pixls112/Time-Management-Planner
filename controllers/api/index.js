const router = require('express').Router();
const userinputRoutes = require('./userinput');
const calendarRoutes = require('./calendarRoutes');
const editRoutes = require('./edit-routes')

router.use('/edit-routes', editRoutes)
router.use('/userinput', userinputRoutes);
router.use('/calendar', calendarRoutes);



module.exports = router;
