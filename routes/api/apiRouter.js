/**
 * Created by patrick conroy on 2/3/18.
 */
var express = require('express');
var router = express.Router();
var api=require('./api');

router.post('/login', api.login)
router.post('/logout', api.logout)

module.exports = router;