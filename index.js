var yaml = require('yaml');
var fs = require('fs');
var path = require('path');

var y2 = require('yaml2');
var testpath = './posts/2009/08/5-scientific-reasons-a-zombie-apocalypse-could.md';
/*
fs.readFile(testpath, {encoding: 'utf8'}, function (err, contents) {
	//console.log(contents)

	var start = contents.indexOf('<!--') + 5;
	var end = contents.indexOf('-->');
	var thestuff = contents.substring(start, end);
	console.log(start);
	console.log(end);
	console.log(thestuff);
	var lines = thestuff.split();
	console.log(lines.length)
	var post = '';//y2.eval(thestuff);
	console.log(post)
})
*/
var lineReader = require('line-reader');
lineReader.eachLine(testpath, function(line, last) {
  //console.log(line);
  if(line.indexOf('raw:') > -1) {
  	console.log(JSON.parse(line.substring(4)));
  }
  // do whatever you want with line...
  if(last){
    // or check if it's the last one
  }
});
/*
lineReader.open(testpath, function(reader) {
  if (reader.hasNextLine()) {
    reader.nextLine(function(line) {

      console.log(line);
    });
  }
});

*/