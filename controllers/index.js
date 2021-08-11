// import dependency
const router = require('express').Router();

// support
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');


// router pathing
router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;