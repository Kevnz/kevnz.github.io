<!--
id: 20092852744
link: http://kevinisom.info/post/20092852744/windows-8-development-the-javascript-story
slug: windows-8-development-the-javascript-story
date: Thu Mar 29 2012 14:12:12 GMT+1300 (NZDT)
raw: {"blog_name":"kevinisom","id":20092852744,"post_url":"http://kevinisom.info/post/20092852744/windows-8-development-the-javascript-story","slug":"windows-8-development-the-javascript-story","type":"text","date":"2012-03-29 01:12:12 GMT","timestamp":1332983532,"state":"published","format":"html","reblog_key":"44LwgJRK","tags":[],"short_url":"http://tmblr.co/Zw68YyIje9e8","highlighted":[],"note_count":0,"title":"Windows 8 Development, The JavaScript Story","body":"<p>Following my last <a href=\"http://kevinisom.info/post/19909888207/a-weekend-with-windows-8\" title=\"A Weekend With Windows 8\" target=\"_self\">post</a> on my time with Windows 8, I&#8217;d like to write about actually developing for it. </p>\n<p>My day to day development happens on a MacBook Pro with OS X Lion, using TextMate for writing js. I use the <a href=\"http://yuilibrary.com/\" title=\"YUI is a free, open source JavaScript and CSS framework for building richly interactive web applications.\" target=\"_blank\">YUI Library</a> as my go to front end library and I use <a href=\"http://nodejs.org/\" title=\"Node.JS \" target=\"_blank\">node.js</a> both for development tools and when I do non work related development. So yeah, I love JavaScript. So when Microsoft announced that HTML/JavaScript was a first class option for writing apps in Windows 8 it got my interest. (<em>Full disclosure, I previously worked with .Net, and before that with ASP, so I know the MS stack</em>)</p>\n<p>Since I&#8217;ve covered my thoughts on Windows I&#8217;m going to dive straight to Visual Studio 11. Now I&#8217;m no stranger to VS, and have used every version since VS 6. But MS has decided to introduce Metro elements into VS. This caused much wailing and gnashing of teeth. However, when I use VS I turn off all the toolbars and all the panels but the solution explorer. As a text editor on Windows, Visual Studio is hands down awesome. I&#8217;ve lamented on more than one occasion that I wish MS would strip it down and release it as a text editor, the font rendering in Visual Studio now is excellent and nothing comes close to it on Windows. The only thing that I find the least bit annoying is the ALLCAPS for Panels, but if they want it to say SOLUTION EXPLORER instead of Solution Explorer, I&#8217;ll deal.</p>\n<p><strong>File</strong>, <strong>New</strong>, <strong>Project</strong>. You are presented a list of templates for JavaScript apps and MS has done a nice job of giving you starting points for various types of Metro apps. However I didn&#8217;t want any of those, I had decided to make game, and there was no templates for that.</p>\n<p>After starting with a blank template I then proceeded to gather up some libs to use. As mentioned before I love YUI so grabbed it and brought it into my project. Reference it on the page, and what happpens? Intellisense. Now, it wasn&#8217;t full on intellisense with full descriptions, but I got code completion for code I didn&#8217;t expect. I was a little thing, but it was a nice touch. So the YUI code worked with no problem. But then I was only doing some DOM work to start with, now it&#8217;s time to really start working on the code.</p>\n<p>Now as interesting as it would be to write a game from scratch I only had a weekend, so I decided to use <a href=\"http://craftyjs.com/\" title=\"Crafy.js JavaScript Game Library\" target=\"_blank\">Crafy.js</a>, a JavaScript game library. Everything just worked. After I started noticing a bit of a slowdown when lot&#8217;s of things were happening on screen I got worried, was I doing something wrong? Was the idea of writing a fast JavaScript game really a pipe dream? Or was it something else? Well it turns out that I started off using the DOM too much, so I then moved to pure canvas and the game was wicked fast (and I continued to get it fast as I learned how to tune the code)  </p>\n<p>I ran the game in the lastest versions of Chrome and FireFox and was disappointed, especially with audio. I had a number of sounds going at once, as well as background music, shooting sounds, explosions all from events happening on the game and not once did I have a problem with Win8 playing them. Chrome just stopped playing all sound after a few seconds and FireFox only played some of the sounds (though those sounds never stopped and was a nicer degrade over Chrome) </p>\n<p>Never once over the entire weekend did I feel the default tools or experience got in my way. I think that is worth repeating, the tools and experience never got in my way. Something I&#8217;ve not had happen when developing for other platforms. VS was nearly flawless and the debugging experience was nice. I did not however dig deep into the libraries included with Win8, I wanted to see how Win8 HTML/JS apps played with standards. Microsoft could have taken the route of having all the &#8220;goodness&#8221; hanging off of the WinRT libraries, but instead they have used the HTML5 specs for audio, localStorage, web workers and many other advanced bits. This was especially pleasing considering the past history of embrace and extend. </p>\n<p>My verdict is Microsoft has a winner on it&#8217;s hands, at least technically, public relations is a whole different story. But there is a lot to offer a JavaScript developer. I have been continuing to develop my game and hope to have it in the store when it&#8217;s ready.</p>\n<p>I think if you currently make web apps, especially if you want to make html5/javascript games then you owe it to yourself to give Win8 development a go.*</p>\n<p>I will be posting a follow up to this on the generic developer experience as well. That should be in the next few days.</p>\n<p>* If you install Win8 please install onto machine not a VM, I found that Virtualizing Windows 8 was an unpleasant experience and everything was almost unusable from Virtual Box on my MacBook Pro</p>\n<p><iframe frameborder=\"0\" height=\"239px\" marginheight=\"0\" marginwidth=\"0\" scrolling=\"no\" src=\"https://skydrive.live.com/embed?cid=7E2D286DB120424E&amp;resid=7E2D286DB120424E%21617&amp;authkey=AKgpzk8IKaTqcOA\" title=\"Preview\" width=\"320px\"></iframe></p>"}
publish: 2012-03-029
tags: 
title: Windows 8 Development, The JavaScript Story
-->


Windows 8 Development, The JavaScript Story
===========================================

Following my last
[post](http://kevinisom.info/post/19909888207/a-weekend-with-windows-8 "A Weekend With Windows 8")
on my time with Windows 8, I’d like to write about actually developing
for it. 

My day to day development happens on a MacBook Pro with OS X Lion, using
TextMate for writing js. I use the [YUI
Library](http://yuilibrary.com/ "YUI is a free, open source JavaScript and CSS framework for building richly interactive web applications.")
as my go to front end library and I use
[node.js](http://nodejs.org/ "Node.JS ") both for development tools and
when I do non work related development. So yeah, I love JavaScript. So
when Microsoft announced that HTML/JavaScript was a first class option
for writing apps in Windows 8 it got my interest. (*Full disclosure, I
previously worked with .Net, and before that with ASP, so I know the MS
stack*)

Since I’ve covered my thoughts on Windows I’m going to dive straight to
Visual Studio 11. Now I’m no stranger to VS, and have used every version
since VS 6. But MS has decided to introduce Metro elements into VS. This
caused much wailing and gnashing of teeth. However, when I use VS I turn
off all the toolbars and all the panels but the solution explorer. As a
text editor on Windows, Visual Studio is hands down awesome. I’ve
lamented on more than one occasion that I wish MS would strip it down
and release it as a text editor, the font rendering in Visual Studio now
is excellent and nothing comes close to it on Windows. The only thing
that I find the least bit annoying is the ALLCAPS for Panels, but if
they want it to say SOLUTION EXPLORER instead of Solution Explorer, I’ll
deal.

**File**, **New**, **Project**. You are presented a list of templates
for JavaScript apps and MS has done a nice job of giving you starting
points for various types of Metro apps. However I didn’t want any of
those, I had decided to make game, and there was no templates for that.

After starting with a blank template I then proceeded to gather up some
libs to use. As mentioned before I love YUI so grabbed it and brought it
into my project. Reference it on the page, and what happpens?
Intellisense. Now, it wasn’t full on intellisense with full
descriptions, but I got code completion for code I didn’t expect. I was
a little thing, but it was a nice touch. So the YUI code worked with no
problem. But then I was only doing some DOM work to start with, now it’s
time to really start working on the code.

Now as interesting as it would be to write a game from scratch I only
had a weekend, so I decided to use
[Crafy.js](http://craftyjs.com/ "Crafy.js JavaScript Game Library"), a
JavaScript game library. Everything just worked. After I started
noticing a bit of a slowdown when lot’s of things were happening on
screen I got worried, was I doing something wrong? Was the idea of
writing a fast JavaScript game really a pipe dream? Or was it something
else? Well it turns out that I started off using the DOM too much, so I
then moved to pure canvas and the game was wicked fast (and I continued
to get it fast as I learned how to tune the code)  

I ran the game in the lastest versions of Chrome and FireFox and was
disappointed, especially with audio. I had a number of sounds going at
once, as well as background music, shooting sounds, explosions all from
events happening on the game and not once did I have a problem with Win8
playing them. Chrome just stopped playing all sound after a few seconds
and FireFox only played some of the sounds (though those sounds never
stopped and was a nicer degrade over Chrome) 

Never once over the entire weekend did I feel the default tools or
experience got in my way. I think that is worth repeating, the tools and
experience never got in my way. Something I’ve not had happen when
developing for other platforms. VS was nearly flawless and the debugging
experience was nice. I did not however dig deep into the libraries
included with Win8, I wanted to see how Win8 HTML/JS apps played with
standards. Microsoft could have taken the route of having all the
“goodness” hanging off of the WinRT libraries, but instead they have
used the HTML5 specs for audio, localStorage, web workers and many other
advanced bits. This was especially pleasing considering the past history
of embrace and extend. 

My verdict is Microsoft has a winner on it’s hands, at least
technically, public relations is a whole different story. But there is a
lot to offer a JavaScript developer. I have been continuing to develop
my game and hope to have it in the store when it’s ready.

I think if you currently make web apps, especially if you want to make
html5/javascript games then you owe it to yourself to give Win8
development a go.\*

I will be posting a follow up to this on the generic developer
experience as well. That should be in the next few days.

\* If you install Win8 please install onto machine not a VM, I found
that Virtualizing Windows 8 was an unpleasant experience and everything
was almost unusable from Virtual Box on my MacBook Pro



