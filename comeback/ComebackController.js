var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));


var Comeback = require('./Comeback');


//new comeback
router.post('/', function (req, res) {
    Comeback.create({
            comeback : req.body.comeback,
            rating : req.body.rating
        }, 
        function (err, comeback) {
            if (err) return res.status(500).send("There was a problem adding the comeback to the database.");
            res.status(200).send(comeback);
        });
});


// get all comebacks
router.get('/', function (req, res) {
    Comeback.find({}, function (err, comebacks) {
        if (err) return res.status(500).send("There was a problem finding the comebacks.");
        res.status(200).send(comebacks);
    });
});

// get comeback by id
router.get('/:id', function (req, res) {
    Comeback.findById(req.params.id, function (err, comeback) {
        if (err) return res.status(500).send("There was a problem finding the comeback.");
        if (!comeback) return res.status(404).send("No comeback found.");
        res.status(200).send(comeback);
    });
});

// delete comeback by id
router.delete('/:id', function (req, res) {
    Comeback.findByIdAndRemove(req.params.id, function (err, comeback) {
        if (err) return res.status(500).send("There was a problem deleting the comeback.");
        res.status(200).send("Comeback: "+ comeback.comeback +" was deleted.");
    });
});


// add a comeback
router.put('/:id', function (req, res) {
    Comeback.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, comeback) {
        if (err) return res.status(500).send("There was a problem updating the comeback.");
        res.status(200).send(comeback);
    });
});


module.exports = router;