/*jslint plusplus: true, devel: true, nomen: true, vars: true, node: true, indent: 4, maxerr: 50 */
/*global require, exports, module */

var path    = require("path"),
    agents  = require(path.join(__dirname, "..", "data", "agents.json")),
    idx     = 0,
    data    = {
        title: "Agents",
        rows: []
    };

while (agents.length) {
    data.rows[idx++] = agents.splice(0, 3);
}

exports.get = function (req, res) {
    "use strict";
    
    res.render("agents", data);
};