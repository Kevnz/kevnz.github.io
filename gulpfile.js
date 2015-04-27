'use strict';
var gulp = require('gulp');

var deploy = require('gulp-gh-pages'); 
var replace = require('gulp-replace'); 
var del = require('delete');
var tap = require('gulp-tap');
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
var ejs = require('ejs');

var fs = require('fs');
var path = require('path');

gulp.task('blog-posts', function () {
    var postTemplate = fs.readFileSync('./blog.ejs', {encoding:'utf8'});
    fs.mkdirSync(path.join(__dirname,'/post/'));
    return gulp.src(['./posts/2012/**/*.md','./posts/2013/**/*.md', './posts/2011/**/*.md', './posts/2010/**/*.md', './posts/2010/**/*.md'])
        .pipe(tap(function (file, t) {
            //console.log(file.contents);
            console.log(file.path)
            var fullPost = decoder.write(file.contents);

            var lineReader = require('line-reader');
            var contents = {}
            lineReader.eachLine(file.path, function(line, last) {
              //console.log(line);
              if(line.indexOf('raw:') > -1) {
                var postData = JSON.parse(line.substring(4));
                var fpath = path.join(__dirname, '/post/', postData.id.toString(), postData.slug);

                fs.mkdirSync(path.join(__dirname, '/post/', postData.id.toString())); 
                fs.mkdirSync(fpath);
                //console.log(fpath);
                var rendered = ejs.render(postTemplate, {post: postData});
                //console.log(JSON.parse(line.substring(4)).body);
                //console.log(rendered);
                
                fs.writeFile(fpath + '/index.html', rendered, function (err) {
                  if (err) throw err;
                  //console.log('It\'s saved!');
                });
              }
              // do whatever you want with line...
              if(last){
                // or check if it's the last one
              }
            });
        }))


});

gulp.task('purge', function (callback) {
    del.sync('./dist')
    callback(null);
 
});  
gulp.task('deploy', function () {
    return gulp.src('./post/**/*')
        .pipe(deploy());
});

gulp.task('build' , ['browserify-dev','browserify-prod']);
gulp.task('dev' , ['browserify-dev']);

gulp.task('publish', ['purge', 'prep'], function () { 

    return gulp.src('./dist/**/*')
        .pipe(deploy());});

gulp.task('default' , ['build']);
