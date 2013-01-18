/*jslint plusplus: true, devel: true, nomen: true, vars: true, node: true, indent: 4, maxerr: 50 */
/*global require, exports, module */


var express     = require("express"),
    http        = require("http"),
    path        = require("path"),
    sitemap     = require("./data/sitemap.json");

var app = express();

app.configure(function () {
    "use strict";
    
    app.set("port", process.env.PORT || 3000);
    app.set("views", __dirname + "/views");
    app.set("view engine", "html");
    app.engine('html', require('hbs').__express);
    app.use(express.favicon());
    app.use(express.logger("dev"));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, "public")));
});

app.configure("development", function () {
    "use strict";
    
    app.use(express.errorHandler());
});

var hbs     = require("hbs"),
    fs      = require("fs"),
    path    = require("path"),
    i       = 0,
    route   = sitemap[i];

hbs.registerPartial('footer', fs.readFileSync(path.join(__dirname, "views", "footer.html"), 'utf8'));
hbs.registerPartial('header', fs.readFileSync(path.join(__dirname, "views", "header.html"), 'utf8'));
hbs.registerHelper('navigation', require("./controllers/navigation").helper);

while (route) {
    var controller = route.controler;
    if (!controller || controller === "") {
        controller = route.name;
    }
    app.get("/" + route.name, require("./controllers/" + controller).get);
    route = sitemap[++i];
}

exports.server = http.createServer(app).listen(app.get("port"), function () {
    "use strict";
    
    console.log("Express server listening on port " + app.get("port"));
});
