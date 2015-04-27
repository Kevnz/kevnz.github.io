<!--
id: 60948497523
link: http://kevinisom.info/post/60948497523/composing-your-web-apps
slug: composing-your-web-apps
date: Thu Sep 12 2013 06:29:30 GMT+1200 (NZST)
raw: {"blog_name":"kevinisom","id":60948497523,"post_url":"http://kevinisom.info/post/60948497523/composing-your-web-apps","slug":"composing-your-web-apps","type":"text","date":"2013-09-11 18:29:30 GMT","timestamp":1378924170,"state":"published","format":"html","reblog_key":"ZeAuIabh","tags":[],"short_url":"http://tmblr.co/Zw68Yyumq4Hp","highlighted":[],"note_count":0,"title":"Composing your web apps","body":"<p>I&#8217;ve been busy lately building Single Page Apps using the YUI App Framework and one thing I found is that when an app hits a certain size the actual Application container gets messy pretty quick. You spend all this time separating out the pieces of your app into views and models, but then the &#8220;glue&#8221; of the routes and event handling you end up with a massive &#8220;mess&#8221; of code. Even well structured code becomes difficult to maintain when it starts to creep up past a few hundred lines of well formatted code. So what can you do?</p>\n<p>My first pass was just trying to mix in multiple apps.</p>\n<script src=\"https://gist.github.com/Kevnz/6521348.js\" type=\"text/javascript\"></script><p>This did not work. I realized that since each module has a views property they are getting overwritten, not merged, and the same was happening with the routes attribute as well. So that&#8217;s no good. So I considered extending App with something like .addSubApp() but that had it&#8217;s own problems.</p>\n<p>What&#8217;s a dev todo? I really wanted the create syntax because that expressed what I wanted. Plus, I love mixing in modules, it allows for a lot of creation with little code. So I had a browse of what the YUI team are <a href=\"http://yuilibrary.com/yui/docs/api/files/base_js_BaseBuild.js.html#l329\" target=\"_blank\">doing</a> and decided that I would have to do something with that.</p>\n<p>What I did</p>\n<script src=\"https://gist.github.com/Kevnz/6521528.js\" type=\"text/javascript\"></script><p>I took the core of the build method in base-built and added specific checks for views and routes and merged them together. This <a href=\"https://github.com/Kevnz/yui-app-extensions/blob/master/src/apps/js/app-create.js\" target=\"_blank\">module</a> is at my YUI App Extensions <a href=\"https://github.com/Kevnz/yui-app-extensions\" target=\"_blank\">repository</a> on <a href=\"https://github.com/\" target=\"_blank\">github</a> and I am happy to take comments or pull requests. I also have several other modules at that repo that are useful for App Development as well.</p>"}
publish: 2013-09-012
tags: ['yui','single page apps']
title: Composing your web apps
-->


Composing your web apps
=======================

I’ve been busy lately building Single Page Apps using the YUI App
Framework and one thing I found is that when an app hits a certain size
the actual Application container gets messy pretty quick. You spend all
this time separating out the pieces of your app into views and models,
but then the “glue” of the routes and event handling you end up with a
massive “mess” of code. Even well structured code becomes difficult to
maintain when it starts to creep up past a few hundred lines of well
formatted code. So what can you do?

My first pass was just trying to mix in multiple apps.

This did not work. I realized that since each module has a views
property they are getting overwritten, not merged, and the same was
happening with the routes attribute as well. So that’s no good. So I
considered extending App with something like .addSubApp() but that had
it’s own problems.

What’s a dev todo? I really wanted the create syntax because that
expressed what I wanted. Plus, I love mixing in modules, it allows for a
lot of creation with little code. So I had a browse of what the YUI team
are
[doing](http://yuilibrary.com/yui/docs/api/files/base_js_BaseBuild.js.html#l329) and
decided that I would have to do something with that.

What I did

I took the core of the build method in base-built and added specific
checks for views and routes and merged them together. This
[module](https://github.com/Kevnz/yui-app-extensions/blob/master/src/apps/js/app-create.js)
is at my YUI App Extensions
[repository](https://github.com/Kevnz/yui-app-extensions) on
[github](https://github.com/) and I am happy to take comments or pull
requests. I also have several other modules at that repo that are useful
for App Development as well.


