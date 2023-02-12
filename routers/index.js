const express = require('express');
const router = express();
const homeC = require('../controller/homeController');

router.get('/',homeC.home);

router.get('/chat',homeC.chatUI)

module.exports = router;