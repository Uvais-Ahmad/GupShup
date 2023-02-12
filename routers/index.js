const express = require('express');
const router = express();
const homeC = require('../controller/homeController');

router.get('/',homeC.home);

module.exports = router;