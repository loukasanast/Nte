const router = require('express').Router();

router.use('/notes', require('./noteRoutes'));

module.exports = router;