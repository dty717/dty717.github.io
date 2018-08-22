---
layout: post
title: New Fingerprinting Method "Crooked Style Sheets" works without JavaScript
date: 2018-01-25 17:00
author: nvinside
comments: true
categories: [Browser fingerprinting, Security]
---
<a href="https://github.com/jbtronics/CrookedStyleSheets" target="_blank" rel="noopener">Crooked Style Sheets</a> is a new Browser fingerprint method which is not depending on JavaScript, there is currently no protection against this new CSS trick. A source code can be found <a href="https://github.com/jbtronics/CrookedStyleSheets" target="_blank" rel="noopener">here</a>.

<img class="alignnone size-full wp-image-2259" src="https://chefkochblog.files.wordpress.com/2018/01/ded.png" alt="Crooked Style Sheets Test Page" width="1916" height="907" />

<!--more-->

<h2>How does the new fingerprint work?</h2>

The new proof of concept not requires JavaScript and works via CSS, even this can reveal some information like which font you use or which Browser you used by visiting the page. The basic concept is that Stylesheets loads different URLs depending on various conditions which then sending information like what you clicked back to the server.

<h2>Protection?</h2>

There is currently no protection or addon which protects you against this new fingerprinting technique but I'm sure there already working on it, it's unclear if it's already used in the wild but the bad guys will not sleep to abuse this new kind of trick to obtain some useful information.

There is a <a href="http://crookedss.bplaced.net/" target="_blank" rel="noopener">demo page here</a> which shows some basic techniques to gain some information such as which font you use or if you clicked a link.

<h2><img class="alignnone size-full wp-image-2260" src="https://chefkochblog.files.wordpress.com/2018/01/crooked-css-ec645a6fbb4674a2.png" alt="crooked-css-ec645a6fbb4674a2" width="1099" height="697" />How big is the risk?</h2>

It's not as big as other fingerprinting methods, the Demo pages uses session-cookies to bring the URLs server side together but some smart people might find a way to do this directly over the IP and timestamp.

This is btw not the first time that CSS was abused, but currently every browser blocks older attacks like the CSS history hack.

&nbsp;

&nbsp;

&nbsp;
