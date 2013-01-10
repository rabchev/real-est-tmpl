
var hbs     = require("hbs"),
    fs      = require("fs"),
    path    = require("path");

hbs.registerPartial('partial', fs.readFileSync(path.join(__dirname, "..", "views", "partial.html"), 'utf8'));

exports.index = function(req, res){
  res.render('index', {
        title: 'My Bazz',
        some_value: 'foo bar',
        list: ['cat', 'dog']
    });
};