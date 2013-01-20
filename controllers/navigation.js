/*jslint plusplus: true, devel: true, nomen: true, vars: true, node: true, indent: 4, maxerr: 50 */
/*global require, exports, module */

var hbs         = require("hbs"),
    fs          = require("fs"),
    path        = require("path"),
    sitemap     = require("../data/sitemap.json"),
    tmplName    = "main-menu";

function init() {
    "use strict";
    
    var i = 0,
        node = sitemap[i];
    
    while (node) {
        node.url = "/" + node.name;
        node = sitemap[++i];
    }
    
    var html = fs.readFileSync(path.join(__dirname, "..", "views", "navigation.html"), 'utf8');
    hbs.registerPartial(tmplName, hbs.handlebars.compile(html));
}

exports.helper = function () {
    "use strict";
    
    var tmpl = hbs.handlebars.partials[tmplName];
    return new hbs.SafeString(tmpl({ nodes: sitemap }));
};

init();