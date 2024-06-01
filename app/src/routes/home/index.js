"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);
router.post('/login', ctrl.process.login);
router.get('/write', ctrl.write);

// router.get('/write', function(요청,응답){
//     응답.sendFile(__dirname + '/write.html')
// });

module.exports = router; //밖에선 쓸 수 있게 내보냄 (server.js랑 연결해줘야 하니까)
