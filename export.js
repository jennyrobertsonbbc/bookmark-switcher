var fs = require('fs');
var fileName = 'export/bookmarklet-swicher.html';

var text = "here I am!";

fs.writeFile(fileName, text, function (err) {
  if (err) throw err;
});
