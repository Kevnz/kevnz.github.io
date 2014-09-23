<!--
id: 59334328934
link: http://kevinisom.info/post/59334328934/using-and-abusing-yui-models-and-modelsync-rest
slug: using-and-abusing-yui-models-and-modelsync-rest
date: Mon Aug 26 2013 09:30:00 GMT+1200 (NZST)
raw: {"blog_name":"kevinisom","id":59334328934,"post_url":"http://kevinisom.info/post/59334328934/using-and-abusing-yui-models-and-modelsync-rest","slug":"using-and-abusing-yui-models-and-modelsync-rest","type":"text","date":"2013-08-25 21:30:00 GMT","timestamp":1377466200,"state":"published","format":"html","reblog_key":"v5zDldOf","tags":[],"short_url":"http://tmblr.co/Zw68YytGcW9c","highlighted":[],"note_count":0,"title":"Using and abusing YUI Models and ModelSync.Rest","body":"<p>I have been building some apps lately with the <a href=\"http://yuilibrary.com/yui/docs/app/\" target=\"_blank\">YUI App Framework</a> a JavaScript MV* framework built with YUI. One of the enhancements of the <a href=\"http://yuilibrary.com/yui/docs/model/\" target=\"_blank\">Model</a> is the ModelSync capabilities provided by the <a href=\"http://yuilibrary.com/yui/docs/model/#restful-xhr\" target=\"_blank\">REST</a> module. See the example below.</p>\n<script src=\"https://gist.github.com/Kevnz/6333147.js\" type=\"text/javascript\"></script><p>However it is simple enough to add additional url calls. By specifying the url property of the model. The sync module will take the model attributes and use Y.Lang.sub to process the url property. So what does that mean? Individual methods can set the url property and then make a request to retrieve the data at that endpoint.</p>\n<p>Depending on your purposes and url configuration you will want to either set the url property to null after the load is complete or update the url to a default configuration</p>\n<script src=\"https://gist.github.com/Kevnz/6333330.js\" type=\"text/javascript\"></script><p>This also works with the <a href=\"http://yuilibrary.com/yui/docs/model-list/\" target=\"_blank\">ModelList</a> as well so you can craft custom queries to retrieve data to populate the list.</p>\n<p>Extending models and model lists this way is really simple and can help extend your application.I was really pleased to see that this just works out of the box and required no additional changes to the Sync layer.</p>\n<p>The next post I&#8217;ll be doing on the YUI App Framework will be creating sub apps and modularizing your app to allow for greater composability and better maintenance.</p>"}
publish: 2013-08-026
tags: 
title: Using and abusing YUI Models and ModelSync.Rest
-->


Using and abusing YUI Models and ModelSync.Rest
===============================================

I have been building some apps lately with the [YUI App
Framework](http://yuilibrary.com/yui/docs/app/) a JavaScript MV\*
framework built with YUI. One of the enhancements of the
[Model](http://yuilibrary.com/yui/docs/model/) is the ModelSync
capabilities provided by the
[REST](http://yuilibrary.com/yui/docs/model/#restful-xhr) module. See
the example below.

However it is simple enough to add additional url calls. By specifying
the url property of the model. The sync module will take the model
attributes and use Y.Lang.sub to process the url property. So what does
that mean? Individual methods can set the url property and then make a
request to retrieve the data at that endpoint.

Depending on your purposes and url configuration you will want to either
set the url property to null after the load is complete or update the
url to a default configuration

This also works with the
[ModelList](http://yuilibrary.com/yui/docs/model-list/) as well so you
can craft custom queries to retrieve data to populate the list.

Extending models and model lists this way is really simple and can help
extend your application.I was really pleased to see that this just works
out of the box and required no additional changes to the Sync layer.

The next post I’ll be doing on the YUI App Framework will be creating
sub apps and modularizing your app to allow for greater composability
and better maintenance.


