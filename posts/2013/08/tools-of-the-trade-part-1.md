<!--
id: 59330283022
link: http://kevinisom.info/post/59330283022/tools-of-the-trade-part-1
slug: tools-of-the-trade-part-1
date: Mon Aug 26 2013 08:45:25 GMT+1200 (NZST)
raw: {"blog_name":"kevinisom","id":59330283022,"post_url":"http://kevinisom.info/post/59330283022/tools-of-the-trade-part-1","slug":"tools-of-the-trade-part-1","type":"text","date":"2013-08-25 20:45:25 GMT","timestamp":1377463525,"state":"published","format":"html","reblog_key":"HfpFFlCF","tags":[],"short_url":"http://tmblr.co/Zw68YytGN4OE","highlighted":[],"note_count":0,"title":"Tools of the Trade: Part 1","body":"<p>After the initial <a href=\"http://kevinisom.info/post/58814792167/tools-of-the-trade-part-0\" target=\"_blank\">post</a> I reckon it&#8217;s time to get started with this series. So the first tool on my list? </p>\n<h2>Node.js</h2>\n<p>Now I&#8217;m not talking about using node as a web server or anything like that. (That will come later) I am talking about using it for tooling. Repetitive tasks should be automated. Automating those tasks using node gives you the advantage of being able to easily use those scripts on any platform. </p>\n<p>For instance, you have a way you like to setup your projects so you write up a script to do just that. If you are on a mac you could write a bash script, on windows maybe powershell. But that isn&#8217;t very portable. you can do it in node, put it up on npm and you can use that script anywhere and everywhere. </p>\n<p>Installing Node and it&#8217;s package manager NPM is easy. Now for most installs I will recommend using chocolatey and brew (see part 0) however at one point npm wasn&#8217;t being installed correctly on the Mac. So head over to the <a href=\"http://nodejs.org/\" target=\"_blank\">Node.js site</a> and download the installer or via chocolatey<br/><span>C:&#62; cinst nodejs.install</span></p>\n<p>You may want to install either Visual C++ 2010 Express edition if you are on Windows, or XCode  if you are on a Mac. Even if you have Visual Studio 2012 installed VC++ 2010 is still required. These tools allow you to build native node modules. Often modules that talk to other systems like databases often require native code to work.</p>\n<p>Next tool</p>\n<h2>Grunt - The JavaScript Task Runner</h2>\n<p><a href=\"http://gruntjs.com/\" target=\"_blank\">Grunt</a> is a task runner that has plenty of available plugins for automating development tasks and is easy to write your own tasks with. You don&#8217;t have to develop on Node to use Grunt in your build process. Any build process that allows you to calls to the command line is capable of using grunt. I have it running in Visual Studio projects where it will even fail a build if something does not work.</p>\n<p>Install Grunt from the command line</p>\n<p>npm install -g grunt-cli</p>\n<p>This will tell npm to download the grunt command line module and install it globally. Next go to the root of your project and run</p>\n<p>npm init</p>\n<p>This will ask you a few questions and create a package.json file. This file will hold your dependencies (among other purposes) </p>\n<p>If you want a quick win to improve your JavaScript development add this grunt file to your project.</p>\n<script src=\"https://gist.github.com/Kevnz/6332153.js\" type=\"text/javascript\"></script><p>Then just install the grunt contrib jshint module</p>\n<p>npm install grunt-contrib-jshint &#8212;save-dev</p>\n<p>Then when you run grunt from the command line your JavaScript files will be linted using JSHint.</p>\n<p>I will be building on that grunt file as this series progresses.</p>\n<h2>In Conclusion</h2>\n<p>Node and Grunt are great tools to improve your Front End Development no matter what platform you target for development or deployment.</p>"}
publish: 2013-08-026
tags: 
title: Tools of the Trade: Part 1
-->


Tools of the Trade: Part 1
==========================

After the initial
[post](http://kevinisom.info/post/58814792167/tools-of-the-trade-part-0) I
reckon it’s time to get started with this series. So the first tool on
my list? 

Node.js
-------

Now I’m not talking about using node as a web server or anything like
that. (That will come later) I am talking about using it for tooling.
Repetitive tasks should be automated. Automating those tasks using node
gives you the advantage of being able to easily use those scripts on any
platform. 

For instance, you have a way you like to setup your projects so you
write up a script to do just that. If you are on a mac you could write a
bash script, on windows maybe powershell. But that isn’t very portable.
you can do it in node, put it up on npm and you can use that script
anywhere and everywhere. 

Installing Node and it’s package manager NPM is easy. Now for most
installs I will recommend using chocolatey and brew (see part 0) however
at one point npm wasn’t being installed correctly on the Mac. So head
over to the [Node.js site](http://nodejs.org/) and download the
installer or via chocolatey\
<span>C:\> cinst nodejs.install</span>

You may want to install either Visual C++ 2010 Express edition if you
are on Windows, or XCode  if you are on a Mac. Even if you have Visual
Studio 2012 installed VC++ 2010 is still required. These tools allow you
to build native node modules. Often modules that talk to other systems
like databases often require native code to work.

Next tool

Grunt - The JavaScript Task Runner
----------------------------------

[Grunt](http://gruntjs.com/) is a task runner that has plenty of
available plugins for automating development tasks and is easy to write
your own tasks with. You don’t have to develop on Node to use Grunt in
your build process. Any build process that allows you to calls to the
command line is capable of using grunt. I have it running in Visual
Studio projects where it will even fail a build if something does not
work.

Install Grunt from the command line

npm install -g grunt-cli

This will tell npm to download the grunt command line module and install
it globally. Next go to the root of your project and run

npm init

This will ask you a few questions and create a package.json file. This
file will hold your dependencies (among other purposes) 

If you want a quick win to improve your JavaScript development add this
grunt file to your project.

Then just install the grunt contrib jshint module

npm install grunt-contrib-jshint —save-dev

Then when you run grunt from the command line your JavaScript files will
be linted using JSHint.

I will be building on that grunt file as this series progresses.

In Conclusion
-------------

Node and Grunt are great tools to improve your Front End Development no
matter what platform you target for development or deployment.


