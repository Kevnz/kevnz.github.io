<!--
id: 11056899037
link: http://kevinisom.info/post/11056899037/getting-to-know-the-yui-3-overlay
slug: getting-to-know-the-yui-3-overlay
date: Wed Oct 05 2011 23:37:00 GMT+1300 (NZDT)
raw: {"blog_name":"kevinisom","id":11056899037,"post_url":"http://kevinisom.info/post/11056899037/getting-to-know-the-yui-3-overlay","slug":"getting-to-know-the-yui-3-overlay","type":"text","date":"2011-10-05 10:37:00 GMT","timestamp":1317811020,"state":"published","format":"html","reblog_key":"iog2xjWo","tags":[],"short_url":"http://tmblr.co/Zw68YyAJ2kFT","highlighted":[],"note_count":0,"title":"Getting to know the YUI 3 Overlay","body":"<p>I am a <strike>big</strike> huge fan of the <a title=\"The YUI Library home page.\" target=\"_blank\" href=\"http://yuilibrary.com/\">YUI Framework</a>. Now YUI is full of awesomeness. One of the most awesome widgets is the Overlay and that&#8217;s what this post is all about.</p>\n<h3>YUI Widgets</h3>\n<p>One of the foundations of YUI is the <a title=\"YUI Widget Getting Started Guide\" target=\"_blank\" href=\"http://yuilibrary.com/yui/docs/widget/\">Widget</a> class, and the Overlay extends the Widget. In fact the Overlay is only <a title=\"The YUI Overlay source code\" target=\"_blank\" href=\"http://yuilibrary.com/yui/docs/api/files/overlay_js_Overlay.js.html#l9\">one line of JavaScript</a>. In fact that one line starts to show off some of the awesomeness of YUI and how you can use YUI to <a title=\"Composition over inheritance\" target=\"_blank\" href=\"http://en.wikipedia.org/wiki/Composition_over_inheritance\">compose</a> useful controls without having to have thousands of lines of code.</p>\n<h3>Setting up an Overlay.</h3>\n<p>This first <a title=\"Simple Overlay Sample at JSFiddle.net\" target=\"_blank\" href=\"http://jsfiddle.net/kev_nz/CWBJy/\">JSFiddle</a> below shows an overlay being constructed and it&#8217;s contents filled by the srcNode, it&#8217;s width set to 300px, and render being set to true tells YUI to render it into the dom.</p>\n<p><iframe src=\"http://jsfiddle.net/kev_nz/CWBJy/embedded/\"></iframe></p>\n<h3>Next Steps</h3>\n<p>Now I&#8217;m sure you&#8217;re thinking that&#8217;s not very interesting. And it&#8217;s not, however by setting a few additional properties and applying some additional css hopefully I can show just how useful it can be.</p>\n<p>In this example the overlay uses the centered and constrain attributes to show over the div simulating an ajax request while the content is swapped out. The centered attribute centers the widget in the viewport, or if a Node is passed (as in this instance) in, it will be centered to that node. The constrain attribute sets the node to constrain the widget&#8217;s bounding box to.</p>\n<p>Lastly using the <a title=\"YUI 3 Plugin Guide\" target=\"_blank\" href=\"http://yuilibrary.com/yui/docs/plugin/\">plugin functionality</a> that YUI exposes adds animation for showing and hiding the overlay. The <a title=\"Animation Example Plugin\" target=\"_blank\" href=\"http://yuilibrary.com/yui/docs/overlay/overlay-anim-plugin.html\">Animation Plugin example</a> shows how something like that is made.</p>\n<p><iframe src=\"http://jsfiddle.net/kev_nz/KsXzF/embedded/\"></iframe></p>\n<h3>For Tooltips</h3>\n<p>In this sample by setting the align property and some css (inspired by <a title=\"CSS Arrows and Shapes Without Markup\" target=\"_blank\" href=\"http://www.yuiblog.com/blog/2010/11/22/css-quick-tip-css-arrows-and-shapes-without-markup/\">this blog post</a> on it) you can achieve some nice looking (well relative in this example, the colors are a little rough) tooltip with very little code. A much easier to manage option instead of bringing in a library you have no control over just for tool tips.</p>\n<p>The align attribute is used to align a reference point on the widget, with the reference point on another Node, or the viewport. The attribute takes a node as the first argument followed by an array of points. The <a title=\"WidgetPositionAlign Class\" target=\"_blank\" href=\"http://yuilibrary.com/yui/docs/api/classes/WidgetPositionAlign.html\">WidgetPositionAlign</a> class has <a title=\"Properties of the WidgetPositionAlign Class\" target=\"_blank\" href=\"http://yuilibrary.com/yui/docs/api/classes/WidgetPositionAlign.html#properties\">constants</a> defined for this. </p>\n<p><iframe src=\"http://jsfiddle.net/kev_nz/A7tjY/embedded/\"></iframe></p>\n<h3>Extending from the Gallery</h3>\n<p>The <a title=\"The YUI Gallery\" target=\"_blank\" href=\"http://yuilibrary.com/gallery/show\">YUI Gallery</a> has some great <a title=\"Overlay Extras at the YUI Gallery\" target=\"_blank\" href=\"http://yuilibrary.com/gallery/show/overlay-extras\">plugins for the overlay</a>.</p>\n<h3>In Conclusion</h3>\n<p>I hope this has helped show how useful and versatile the overlay control is. As I mentioned when I started, I think the Overlay is a great example of just how powerful YUI is. After all the overlay is 1 line of code</p>\n<p><code>Y.Overlay = Y.Base.create(\"overlay\", Y.Widget, [Y.WidgetStdMod, Y.WidgetPosition, Y.WidgetStack, Y.WidgetPositionAlign, Y.WidgetPositionConstrain]);</code></p>\n<p>That&#8217;s it, simply <a title=\"Wikipedia definition of Mixin\" target=\"_blank\" href=\"http://en.wikipedia.org/wiki/Mixin\">mixing in</a> a number of different small classes you can get a lot of functionality</p>"}
publish: 2011-10-05
tags: 
title: Getting to know the YUI 3 Overlay
-->


Getting to know the YUI 3 Overlay
=================================

I am a ~~big~~ huge fan of the [YUI
Framework](http://yuilibrary.com/ "The YUI Library home page."). Now YUI
is full of awesomeness. One of the most awesome widgets is the Overlay
and that’s what this post is all about.

### YUI Widgets

One of the foundations of YUI is the
[Widget](http://yuilibrary.com/yui/docs/widget/ "YUI Widget Getting Started Guide")
class, and the Overlay extends the Widget. In fact the Overlay is only
[one line of
JavaScript](http://yuilibrary.com/yui/docs/api/files/overlay_js_Overlay.js.html#l9 "The YUI Overlay source code").
In fact that one line starts to show off some of the awesomeness of YUI
and how you can use YUI to
[compose](http://en.wikipedia.org/wiki/Composition_over_inheritance "Composition over inheritance")
useful controls without having to have thousands of lines of code.

### Setting up an Overlay.

This first
[JSFiddle](http://jsfiddle.net/kev_nz/CWBJy/ "Simple Overlay Sample at JSFiddle.net")
below shows an overlay being constructed and it’s contents filled by the
srcNode, it’s width set to 300px, and render being set to true tells YUI
to render it into the dom.

### Next Steps

Now I’m sure you’re thinking that’s not very interesting. And it’s not,
however by setting a few additional properties and applying some
additional css hopefully I can show just how useful it can be.

In this example the overlay uses the centered and constrain attributes
to show over the div simulating an ajax request while the content is
swapped out. The centered attribute centers the widget in the viewport,
or if a Node is passed (as in this instance) in, it will be centered to
that node. The constrain attribute sets the node to constrain the
widget’s bounding box to.

Lastly using the [plugin
functionality](http://yuilibrary.com/yui/docs/plugin/ "YUI 3 Plugin Guide")
that YUI exposes adds animation for showing and hiding the overlay. The
[Animation Plugin
example](http://yuilibrary.com/yui/docs/overlay/overlay-anim-plugin.html "Animation Example Plugin")
shows how something like that is made.

### For Tooltips

In this sample by setting the align property and some css (inspired by
[this blog
post](http://www.yuiblog.com/blog/2010/11/22/css-quick-tip-css-arrows-and-shapes-without-markup/ "CSS Arrows and Shapes Without Markup") on
it) you can achieve some nice looking (well relative in this example,
the colors are a little rough) tooltip with very little code. A much
easier to manage option instead of bringing in a library you have no
control over just for tool tips.

The align attribute is used to align a reference point on the widget,
with the reference point on another Node, or the viewport. The attribute
takes a node as the first argument followed by an array of points. The
[WidgetPositionAlign](http://yuilibrary.com/yui/docs/api/classes/WidgetPositionAlign.html "WidgetPositionAlign Class")
class has
[constants](http://yuilibrary.com/yui/docs/api/classes/WidgetPositionAlign.html#properties "Properties of the WidgetPositionAlign Class") defined
for this. 

### Extending from the Gallery

The [YUI Gallery](http://yuilibrary.com/gallery/show "The YUI Gallery")
has some great [plugins for the
overlay](http://yuilibrary.com/gallery/show/overlay-extras "Overlay Extras at the YUI Gallery").

### In Conclusion

I hope this has helped show how useful and versatile the overlay control
is. As I mentioned when I started, I think the Overlay is a great
example of just how powerful YUI is. After all the overlay is 1 line of
code

`Y.Overlay = Y.Base.create("overlay", Y.Widget, [Y.WidgetStdMod, Y.WidgetPosition, Y.WidgetStack, Y.WidgetPositionAlign, Y.WidgetPositionConstrain]);`

That’s it, simply [mixing
in](http://en.wikipedia.org/wiki/Mixin "Wikipedia definition of Mixin")
a number of different small classes you can get a lot of functionality


