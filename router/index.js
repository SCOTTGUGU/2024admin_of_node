const express = require('express');
const router = express.Router();
const logingHandler = require('../router_handle/login');

// 写接口
router.post('/register', logingHandler.register)
router.post('/login', logingHandler.login)
module.exports = router;