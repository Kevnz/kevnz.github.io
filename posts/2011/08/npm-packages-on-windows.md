<!--
id: 9525974754
link: http://kevinisom.info/post/9525974754/npm-packages-on-windows
slug: npm-packages-on-windows
date: Mon Aug 29 2011 12:57:00 GMT+1200 (NZST)
raw: {"blog_name":"kevinisom","id":9525974754,"post_url":"http://kevinisom.info/post/9525974754/npm-packages-on-windows","slug":"npm-packages-on-windows","type":"text","date":"2011-08-29 00:57:00 GMT","timestamp":1314579420,"state":"published","format":"html","reblog_key":"Dpqn3AXR","tags":[],"short_url":"http://tmblr.co/Zw68Yy8tojRY","highlighted":[],"note_count":0,"title":"NPM Packages on Windows","body":"<p>With all of the progress on getting <a title=\"node.js website\" target=\"_blank\" href=\"http://nodejs.org/\">node.js</a> to run on windows people may want to start writing complex apps with it. Well at least apps that use more than what&#8217;s shipped with it. Now on Linux or OS X that means using <a title=\"node package manager\" target=\"_blank\" href=\"http://npmjs.org/\">npm</a>. Unfortunately npm is still a long way off for windows by the looks of things (it currently uses symlinks and Windows XP doesn&#8217;t have symlinks) but you can still use all of those packages at npmjs.org it just means more work.</p>\n<p>First find a package you will want to use. In this case I want to write a new web app with <a title=\"Express.js web framework\" target=\"_blank\" href=\"http://expressjs.com/\">express.js</a>. Express.js is a web framework for node and is similar to <a title=\"Sinatra web framework for ruby\" target=\"_blank\" href=\"http://www.sinatrarb.com/\">sinatra</a> for ruby. You can use the search functionality available on the npm site to find the <a title=\"express package\" target=\"_blank\" href=\"http://search.npmjs.org/#/express\">express package</a>. You will see the description, version, dependencies, repository, and node engines listed. Take note of the dependencies, you will have to repeat these steps for all the dependencies. Download the latest tgz file (at the time I&#8217;m writing this, it&#8217;s 2.4.6) Unpack the file and rename the folder from package to express. Repeat that for <a title=\"connect middleware for node\" target=\"_blank\" href=\"http://search.npmjs.org/#/connect\">connect</a>, <a title=\"qs for node.js\" target=\"_blank\" href=\"http://search.npmjs.org/#/qs\">qs</a>, and <a title=\"mime for node.js\" target=\"_blank\" href=\"http://search.npmjs.org/#/mime\">mime</a>, as well as jade (or any other template engine you want to use.</p>\n<p>After downloading and renaming all the packages, copy them to a folder called <em>node_modules</em> in your project. You will want to make sure you add the folder to your ignore list for your version control. Unless you&#8217;re going to deploy to a windows machine with <a title=\"IISNode on Github\" target=\"_blank\" href=\"https://github.com/tjanczuk/iisnode\">IISNode</a> as solutions like Heroku and Nodester will install your dependencies for you.</p>\n<p>Finally you will want to create a <a title=\"Details for packages from the commonjs spec\" target=\"_blank\" href=\"http://wiki.commonjs.org/wiki/Packages/1.1\">package.json</a> and list your dependencies so when you deploy or someone wants to use your app they can use npm to install the dependencies and run your app.</p>\n<p>So you should end up with a project directory that looks something like this<br/>root<br/>|&#8212;node_modules<br/>|  |&#8212;connect<br/>|  |&#8212;express<br/>|  |&#8212;jade<br/>|  |&#8212;mime<br/>|  |&#8212;qs<br/>|&#8212;public<br/>|&#8212;views<br/>|&#8212;app.js<br/>|&#8212;package.json </p>\n<p>Hopefully this all makes sense, and here&#8217;s hoping that npm will be coming to windows in the near future. So get going and write some node apps.</p>"}
publish: 2011-08-029
tags: 
title: NPM Packages on Windows
-->


NPM Packages on Windows
=======================

With all of the progress on getting
[node.js](http://nodejs.org/ "node.js website") to run on windows people
may want to start writing complex apps with it. Well at least apps that
use more than what’s shipped with it. Now on Linux or OS X that means
using [npm](http://npmjs.org/ "node package manager"). Unfortunately npm
is still a long way off for windows by the looks of things (it currently
uses symlinks and Windows XP doesn’t have symlinks) but you can still
use all of those packages at npmjs.org it just means more work.

First find a package you will want to use. In this case I want to write
a new web app with
[express.js](http://expressjs.com/ "Express.js web framework").
Express.js is a web framework for node and is similar to
[sinatra](http://www.sinatrarb.com/ "Sinatra web framework for ruby")
for ruby. You can use the search functionality available on the npm site
to find the [express
package](http://search.npmjs.org/#/express "express package"). You will
see the description, version, dependencies, repository, and node engines
listed. Take note of the dependencies, you will have to repeat these
steps for all the dependencies. Download the latest tgz file (at the
time I’m writing this, it’s 2.4.6) Unpack the file and rename the folder
from package to express. Repeat that for
[connect](http://search.npmjs.org/#/connect "connect middleware for node"),
[qs](http://search.npmjs.org/#/qs "qs for node.js"), and
[mime](http://search.npmjs.org/#/mime "mime for node.js"), as well as
jade (or any other template engine you want to use.

After downloading and renaming all the packages, copy them to a folder
called *node\_modules* in your project. You will want to make sure you
add the folder to your ignore list for your version control. Unless
you’re going to deploy to a windows machine with
[IISNode](https://github.com/tjanczuk/iisnode "IISNode on Github") as
solutions like Heroku and Nodester will install your dependencies for
you.

Finally you will want to create a
[package.json](http://wiki.commonjs.org/wiki/Packages/1.1 "Details for packages from the commonjs spec")
and list your dependencies so when you deploy or someone wants to use
your app they can use npm to install the dependencies and run your app.

So you should end up with a project directory that looks something like
this\
root\
|—node\_modules\
|  |—connect\
|  |—express\
|  |—jade\
|  |—mime\
|  |—qs\
|—public\
|—views\
|—app.js\
|—package.json 

Hopefully this all makes sense, and here’s hoping that npm will be
coming to windows in the near future. So get going and write some node
apps.


