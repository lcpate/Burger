

var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");


router.get('/', function(req, res) {
    res.redirect('/burgers');
});

//Get route to pull all burgers
router.get('/burgers', function(req, res) {
    burger.all(function(burgerData) {
        res.render('index', { burger_data: burgerData });
    });
});

//Post route to create a new burger with entered params
router.post('/burgers/create', function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        console.log(result);
        res.redirect('/');
    });
});

//Put route to update a burger
router.put('/burgers/:id', function(req, res) {
    burger.update(req.params.id, function(result) {
        console.log(result);

        res.sendStatus(200);
    });
});



// Export routes for server.js to use.
module.exports = router;