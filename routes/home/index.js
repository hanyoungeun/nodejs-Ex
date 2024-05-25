"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get('/', ctrl.home);
router.get('/login', ctrl.login);
router.get('/write', ctrl.write);

// router.get('/write', function(요청,응답){
//     응답.sendFile(__dirname + '/write.html')
// });

module.exports = router; //밖에선 쓸 수 있게 내보냄 (server.js랑 연결해줘야 하니까)
