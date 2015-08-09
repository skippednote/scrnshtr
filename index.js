require("babel/register");
var scrnshtr = require('./lib');

scrnshtr.listen(scrnshtr.get('port'));
