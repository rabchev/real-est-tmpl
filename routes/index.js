/*jslint plusplus: true, devel: true, nomen: true, vars: true, node: true, indent: 4, maxerr: 50 */
/*global require, exports, module */

var hbs     = require("hbs"),
    fs      = require("fs"),
    path    = require("path");

hbs.registerPartial('fp-carousel', fs.readFileSync(path.join(__dirname, "..", "views", "fp-carousel.html"), 'utf8'));
hbs.registerPartial('fp-news', fs.readFileSync(path.join(__dirname, "..", "views", "fp-news.html"), 'utf8'));
hbs.registerPartial('fp-events', fs.readFileSync(path.join(__dirname, "..", "views", "fp-events.html"), 'utf8'));
hbs.registerPartial('fp-social', fs.readFileSync(path.join(__dirname, "..", "views", "fp-social.html"), 'utf8'));

exports.index = function (req, res) {
    "use strict";
    
    res.render('index', {
        title: 'Home'
    });
};