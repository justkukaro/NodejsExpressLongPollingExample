var express = require('express');
var router = express.Router();
var session = require('../session');

router.post('/', function (req, res, next) {
    let data = req.body.sendData;
    for (let atom of session.resList) {
        atom.send({data});
    }
    session.resList = [];
    res.send({data});
});

router.get('/', function (req, res, next) {
    session.resList.push(res);
});

module.exports = router;
