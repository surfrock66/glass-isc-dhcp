var express = require('express');
var router = express.Router();
var fs = require('fs');
var template_render = require('../lib/render_template.js');

router.post('/', function(req, res, next) {
	var request = req.body;
	res.send(fs.readFileSync("./config_backups/" + request.snapshot, 'utf8'));
});

module.exports = router;