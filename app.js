// modules
var express = require('express');
var app     = express();
var routes  = require('./routes');

var port = process.env.PORT || 3000;

app.configure(function() {
    app.use(express.static(__dirname + '/public'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});

// handle errors
app.use(function(err, req, res, next) {
    if(!err) return next();
    console.log(err.stack);
    res.json({error: true});
});

// routes
// GET
app.get('/', routes.index);

// POST

// DELETE

// start app
app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
