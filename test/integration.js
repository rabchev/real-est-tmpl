/*jslint plusplus: true, devel: true, nomen: true, node: true, indent: 4, maxerr: 50 */
/*global require, exports, module */

var testCase    = require("nodeunit").testCase,
    http        = require("http"),
    testPort        = 3119,
    appUrl      = "http://localhost:" + testPort,
    app,
    orgPort;

module.exports = testCase({
    "Fixture Setup": function (test) {
        "use strict";
        
        orgPort = process.env.PORT;
        process.env.PORT = testPort;
        app = require("../app.js").server;
        test.done();
    },
    "Index (Home) page": function (test) {
        "use strict";
        
        test.expect(2);
        http.get(appUrl, function (res) {
            res.setEncoding('utf8');
            
            test.equal(res.statusCode, 200);
            test.equal(res.headers["content-type"], "text/html; charset=utf-8");
            
            test.done();
        }).on('error', function (e) {
            console.log("Got error: " + e.message);
            test.done();
        });
    },
    "Agents page": function (test) {
        "use strict";
        
        test.expect(2);
        http.get(appUrl + "/agents", function (res) {
            res.setEncoding('utf8');
            
            test.equal(res.statusCode, 200);
            test.equal(res.headers["content-type"], "text/html; charset=utf-8");
            
            test.done();
        }).on('error', function (e) {
            console.log("Got error: " + e.message);
            test.done();
        });
    },
    "Fixture Teardown": function (test) {
        "use strict";
        app.close();
        process.env.PORT = orgPort;
        test.done();
    }
});
