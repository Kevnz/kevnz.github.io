<!--
id: 58814792167
link: http://kevinisom.info/post/58814792167/tools-of-the-trade-part-0
slug: tools-of-the-trade-part-0
date: Wed Aug 21 2013 08:45:16 GMT+1200 (NZST)
raw: {"blog_name":"kevinisom","id":58814792167,"post_url":"http://kevinisom.info/post/58814792167/tools-of-the-trade-part-0","slug":"tools-of-the-trade-part-0","type":"text","date":"2013-08-20 20:45:16 GMT","timestamp":1377031516,"state":"published","format":"html","reblog_key":"kUGvBdyI","tags":[],"short_url":"http://tmblr.co/Zw68Yysnee7d","highlighted":[],"note_count":0,"title":"Tools of the trade Part 0","body":"<p>I am frequently asked why I don&#8217;t choose lib X, or why I choose tool Z so I thought I&#8217;d go into the tools I use and a little of why I don&#8217;t use others. So I&#8217;m going to have a go at explaining just that. First I want to get some technical details out of the way. </p>\n<p>I use Windows for work, mostly because I have to use Windows for work. I&#8217;d prefer to do my job on a Mac, but considering I work in a .Net shop, that is pretty much out of the question. Now Windows is often treated like an outcast and often neglected when it comes to tooling. But that has been changing.</p>\n<h2>First up</h2>\n<p>The Command Line. Sorry Windows devs, but the command line is really useful, even in Windows, or at least <a href=\"http://technet.microsoft.com/en-US/scriptcenter/dd742419.aspx\" target=\"_blank\">Powershell</a> is. I mean it&#8217;s no bash, but it&#8217;ll do.</p>\n<h2>Chocolatey.</h2>\n<p>From the site &#8220;Chocolatey NuGet is a Machine Package Manager, somewhat like apt-get, but built with Windows in mind&#8221;. This has been a great tool. I now have a script that takes a machine from zero to fully configured without me having to do little more than running a powershell command. From here on out I&#8217;ll be referencing installing apps via chocolatey.</p>\n<h2>ConEmu</h2>\n<p>The default console app in Windows is horrific, actually I don&#8217;t know if a word exists to describe how horrible it actually is. This is one of those area&#8217;s that OS X just kills Windows. However <a href=\"https://code.google.com/p/conemu-maximus5/\" target=\"_blank\">ConEmu</a> provides a better console window to use. It is a console emulator that provides tabs, different consoles and even split screens. Never ever use the default windows console again.</p>\n<p>Install it with  C:\\cinst ConEmu</p>\n<h2>Git</h2>\n<p>I prefer to use Git for my source control needs. I tend to avoid using a GUI for that so I just install Git and then Posh-Git and use Git from Powershell, not the cygwin bash shell Git installs. Post-Git gives you details about the repo that you are in, what branch you are on, uncommited changes and the like</p>\n<p>Install Git C:\\cinst Git<br/>Install Posh-Git C:\\cinst postgit</p>\n<p>Installing Posh-Git will install Git for you, yay Chocolatey. You can install something like Github for Windows or Atlassian SourceTree but you don&#8217;t need them.</p>\n<p>There you have it. Some useful tools that I hope to be building on in future posts. I know it seems a little scary all this talk of the command line but remember what Walter <a href=\"http://24.media.tumblr.com/81880e29e3e6cfdf4223d4ebc0374348/tumblr_mrtaqfZSBO1qzcgizo1_500.png\" target=\"_blank\">says</a></p>\n<h2>OS X</h2>\n<p>There are a few tools that are helpful.</p>\n<h2>Homebrew</h2>\n<p>Like Chocolately, Homebrew is a package manager for OS X. It lets you download and install apps. How to <a href=\"https://github.com/mxcl/homebrew/wiki/Installation\" target=\"_blank\">install Homebrew</a> from the wiki</p>\n<h2>ITerm 2</h2>\n<p>While the default terminal in OS X isn&#8217;t bad iTerm 2 is great. Split panes, hotkey support, and many more features. Download from the <a href=\"http://www.iterm2.com/\" target=\"_blank\">site</a>. </p>\n<h2>Oh-My-Zsh</h2>\n<p>Oh-My-Zsh is framework for managing the configuration for zshell. Oh-My-Zsh allows for different configurations that show many things from that command prompt. Install it and have a play. Oh-My-Zsh <a href=\"https://github.com/robbyrussell/oh-my-zsh\" target=\"_blank\">github repo</a></p>\n<h2>Git</h2>\n<p>As above install with homebrew $ brew install git</p>\n<h2>In conclusion</h2>\n<p>These are foundation tools that I will build off of in future posts.</p>"}
publish: 2013-08-021
tags: 
title: Tools of the trade Part 0
-->


Tools of the trade Part 0
=========================

I am frequently asked why I don’t choose lib X, or why I choose tool Z
so I thought I’d go into the tools I use and a little of why I don’t use
others. So I’m going to have a go at explaining just that. First I want
to get some technical details out of the way. 

I use Windows for work, mostly because I have to use Windows for work.
I’d prefer to do my job on a Mac, but considering I work in a .Net shop,
that is pretty much out of the question. Now Windows is often treated
like an outcast and often neglected when it comes to tooling. But that
has been changing.

First up
--------

The Command Line. Sorry Windows devs, but the command line is really
useful, even in Windows, or at least
[Powershell](http://technet.microsoft.com/en-US/scriptcenter/dd742419.aspx)
is. I mean it’s no bash, but it’ll do.

Chocolatey.
-----------

From the site “Chocolatey NuGet is a Machine Package Manager, somewhat
like apt-get, but built with Windows in mind”. This has been a great
tool. I now have a script that takes a machine from zero to fully
configured without me having to do little more than running a powershell
command. From here on out I’ll be referencing installing apps via
chocolatey.

ConEmu
------

The default console app in Windows is horrific, actually I don’t know if
a word exists to describe how horrible it actually is. This is one of
those area’s that OS X just kills Windows. However
[ConEmu](https://code.google.com/p/conemu-maximus5/) provides a better
console window to use. It is a console emulator that provides tabs,
different consoles and even split screens. Never ever use the default
windows console again.

Install it with  C:\\cinst ConEmu

Git
---

I prefer to use Git for my source control needs. I tend to avoid using a
GUI for that so I just install Git and then Posh-Git and use Git from
Powershell, not the cygwin bash shell Git installs. Post-Git gives you
details about the repo that you are in, what branch you are on,
uncommited changes and the like

Install Git C:\\cinst Git\
Install Posh-Git C:\\cinst postgit

Installing Posh-Git will install Git for you, yay Chocolatey. You can
install something like Github for Windows or Atlassian SourceTree but
you don’t need them.

There you have it. Some useful tools that I hope to be building on in
future posts. I know it seems a little scary all this talk of the
command line but remember what Walter
[says](http://24.media.tumblr.com/81880e29e3e6cfdf4223d4ebc0374348/tumblr_mrtaqfZSBO1qzcgizo1_500.png)

OS X
----

There are a few tools that are helpful.

Homebrew
--------

Like Chocolately, Homebrew is a package manager for OS X. It lets you
download and install apps. How to [install
Homebrew](https://github.com/mxcl/homebrew/wiki/Installation) from the
wiki

ITerm 2
-------

While the default terminal in OS X isn’t bad iTerm 2 is great. Split
panes, hotkey support, and many more features. Download from the
[site](http://www.iterm2.com/). 

Oh-My-Zsh
---------

Oh-My-Zsh is framework for managing the configuration for zshell.
Oh-My-Zsh allows for different configurations that show many things from
that command prompt. Install it and have a play. Oh-My-Zsh [github
repo](https://github.com/robbyrussell/oh-my-zsh)

Git
---

As above install with homebrew \$ brew install git

In conclusion
-------------

These are foundation tools that I will build off of in future posts.


