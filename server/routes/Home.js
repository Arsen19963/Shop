var express = require('express');
var router = express.Router();
var createContent = require('../createContent');
var middleware = require('../middleware/middleWare');

router.get('/',middleware.staticStore, function(req, res, next) {

    createContent.sendContent(req, res);
})

module.exports = router;