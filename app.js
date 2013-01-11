/*jslint plusplus: true, devel: true, nomen: true, vars: true, node: true, indent: 4, maxerr: 50 */
/*global require, exports, module */


var express = require("express"),
    routes = require("./routes"),
    http = require("http"),
    path = require("path");

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
    path    = require("path");

hbs.registerPartial('footer', fs.readFileSync(path.join(__dirname, "views", "footer.html"), 'utf8'));
hbs.registerPartial('header', fs.readFileSync(path.join(__dirname, "views", "header.html"), 'utf8'));
hbs.registerPartial('navigation', fs.readFileSync(path.join(__dirname, "views", "navigation.html"), 'utf8'));

app.get("/", routes.index);
app.get("/for-rent", require("./routes/forRent").get);
app.get("/for-sale", require("./routes/forSale").get);
app.get("/agents", require("./routes/agents").get);
app.get("/news", require("./routes/news").get);
app.get("/events", require("./routes/events").get);
app.get("/contact-us", require("./routes/contactUs").get);

http.createServer(app).listen(app.get("port"), function () {
    "use strict";
    
    console.log("Express server listening on port " + app.get("port"));
});
