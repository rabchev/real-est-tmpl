/*jslint plusplus: true, devel: true, nomen: true, vars: true, node: true, indent: 4, maxerr: 50 */
/*global require, exports, module */

var path    = require("path"),
    props  = require(path.join(__dirname, "..", "data", "for-rent.json")),
    idx     = 0,
    data    = {
        title: "For Rent",
        rows: props
    };

exports.get = function (req, res) {
    "use strict";
    
    res.render("for-rent", data);
};