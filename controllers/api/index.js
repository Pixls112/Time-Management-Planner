const router = require('express').Router();
const userinputRoutes = require('./userinput');

router.use('/userinput', userinputRoutes);


module.exports = router;
