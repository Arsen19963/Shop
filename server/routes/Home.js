var express = require('express');
var router = express.Router();
var createContent = require('../createContent');
var middleware = require('../middleware/middleWare');

router.get('/', function(req, res, next) {

    createContent.sendContent(req, res);
})

module.exports = router;