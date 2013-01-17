/*jslint plusplus: true, devel: true, nomen: true, node: true, indent: 4, maxerr: 50 */
/*global require, exports, module */

var testCase  = require("nodeunit").testCase;

module.exports = testCase({
    "index controller": function (test) {
        "use strict";
        
        test.expect(2);
        
        var ctrl = require("../controllers/index");
        
        ctrl.get({}, {
            render: function (view, model) {
                test.equal(view, "index");
                test.equal(model.title, "Home");
            }
        });
        
        test.done();
    }
});