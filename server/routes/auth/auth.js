var express = require('express');
var router = express.Router();
var createContent = require('../../createContent');

router.post('/', function(req, res, next) {
    console.log("home router")
    createContent.sendContent(req, res);

})

module.exports = router;