<!--
id: 9624151961
link: http://kevinisom.info/post/9624151961/no-browser-left-behind
slug: no-browser-left-behind
date: Thu Sep 01 2011 00:02:04 GMT+1200 (NZST)
raw: {"blog_name":"kevinisom","id":9624151961,"post_url":"http://kevinisom.info/post/9624151961/no-browser-left-behind","slug":"no-browser-left-behind","type":"text","date":"2011-08-31 12:02:04 GMT","timestamp":1314792124,"state":"published","format":"html","reblog_key":"kmSdIKU9","tags":[],"short_url":"http://tmblr.co/Zw68Yy8zfEUP","highlighted":[],"note_count":0,"title":"No Browser Left Behind","body":"<blockquote>\n<p>IE6 users don&#8217;t deserve to use the internet.</p>\n<p>Die IE6 DIE!</p>\n<p>Your browser sucks.</p>\n<p>Nobody users the internet with JavaScript turned off.</p>\n</blockquote>\n<p>All things I&#8217;ve said or heard. But sometimes you can&#8217;t shut the door to ie6 or any fringe browser. But that doesn&#8217;t mean you have to give ever browser the exact same experience. Besides, what about users that have JavaScript turned off? Or use a screen reader? Can you say no to paying customers? Maybe you can, but not everyone has that luxury.</p>\n<p>All Browsers can be supported, that doesn&#8217;t mean that they have to be supported in the same way. For instance, you have some boxes that by design should have rounded corners, and a drop shadow. Now that&#8217;s easy in a modern browser that doesn&#8217;t suck. But to get that in older browsers requires more divs, more images, more work and more importantly the solution adds to the burden of older browsers with slower rendering engines and slower javascript engines.</p>\n<p>So that&#8217;s it. Don&#8217;t make those older browsers work hard. If you want to have a form popup in an overlay, allow a user to fill in the details, submit it to the site, have the overlay fade away and then update any relevant page elements with data from a callback. That&#8217;s a lot of work for those older slower browsers. Not only is it a lot of work for the browser, the further you have to go back the more work it is for the developer. However have the default behavior actually take a user to a page that has the form in it, have the form then post to the server, and then redirect the browser back to the default page and have the server render the updated html. </p>\n<p>Now that may sound like a lot of work, but really, more than likely it is. Most script libraries that do that sort of thing already let&#8217;s you structure your markup that way. This way you have handled both the older browser as well as the scriptless browser, and as long as you followed accessibility guidelines you should be sorted with screen readers fairly well too.</p>\n<p>The key thing is to not try to be a hero and spend hundreds of hours making a web application that looks and works right in all the browsers (unless you turn off JavaScript) and as always, communicate with the stakeholders about how much work is required for either option and the pitfalls of each.</p>\n<p>Some resources</p>\n<ul><li><a title=\"Understanding Progressive Enhancement\" target=\"_blank\" href=\"http://www.alistapart.com/articles/understandingprogressiveenhancement\">Understanding Progressive Enhancement</a> at A List Apart.</li>\n<li><a title=\"ARIA And Progressive Enhancement\" target=\"_blank\" href=\"http://www.alistapart.com/articles/aria-and-progressive-enhancement/\">ARIA and Progressive Enhancement</a> at A List Apart</li>\n<li><a title=\"Accessible Forms\" target=\"_blank\" href=\"http://www.webstandards.org/learn/tutorials/accessible-forms/beginner/\">Accessible Forms</a> at The Web Standards Project</li>\n<li><a title=\"Creating Accessible HTML\" target=\"_blank\" href=\"http://www.deaflibrary.org/accessibility.html\">Creating Accessible</a> HTML at the Deaf Resource Library</li>\n</ul>"}
publish: 2011-09-01
tags: 
title: No Browser Left Behind
-->


No Browser Left Behind
======================

> IE6 users don’t deserve to use the internet.
>
> Die IE6 DIE!
>
> Your browser sucks.
>
> Nobody users the internet with JavaScript turned off.

All things I’ve said or heard. But sometimes you can’t shut the door to
ie6 or any fringe browser. But that doesn’t mean you have to give ever
browser the exact same experience. Besides, what about users that have
JavaScript turned off? Or use a screen reader? Can you say no to paying
customers? Maybe you can, but not everyone has that luxury.

All Browsers can be supported, that doesn’t mean that they have to be
supported in the same way. For instance, you have some boxes that by
design should have rounded corners, and a drop shadow. Now that’s easy
in a modern browser that doesn’t suck. But to get that in older browsers
requires more divs, more images, more work and more importantly the
solution adds to the burden of older browsers with slower rendering
engines and slower javascript engines.

So that’s it. Don’t make those older browsers work hard. If you want to
have a form popup in an overlay, allow a user to fill in the details,
submit it to the site, have the overlay fade away and then update any
relevant page elements with data from a callback. That’s a lot of work
for those older slower browsers. Not only is it a lot of work for the
browser, the further you have to go back the more work it is for the
developer. However have the default behavior actually take a user to a
page that has the form in it, have the form then post to the server, and
then redirect the browser back to the default page and have the server
render the updated html. 

Now that may sound like a lot of work, but really, more than likely it
is. Most script libraries that do that sort of thing already let’s you
structure your markup that way. This way you have handled both the older
browser as well as the scriptless browser, and as long as you
followed accessibility guidelines you should be sorted with screen
readers fairly well too.

The key thing is to not try to be a hero and spend hundreds of hours
making a web application that looks and works right in all the browsers
(unless you turn off JavaScript) and as always, communicate with the
stakeholders about how much work is required for either option and the
pitfalls of each.

Some resources

-   [Understanding Progressive
    Enhancement](http://www.alistapart.com/articles/understandingprogressiveenhancement "Understanding Progressive Enhancement")
    at A List Apart.
-   [ARIA and Progressive
    Enhancement](http://www.alistapart.com/articles/aria-and-progressive-enhancement/ "ARIA And Progressive Enhancement")
    at A List Apart
-   [Accessible
    Forms](http://www.webstandards.org/learn/tutorials/accessible-forms/beginner/ "Accessible Forms")
    at The Web Standards Project
-   [Creating
    Accessible](http://www.deaflibrary.org/accessibility.html "Creating Accessible HTML")
    HTML at the Deaf Resource Library


