/*jslint plusplus: true, devel: true, nomen: true, vars: true, node: true, indent: 4, maxerr: 50 */
/*global require, exports, module */

exports.get = function (req, res) {
    "use strict";
    
    res.render('forRent', {
        title: 'For Rent'
    });
};