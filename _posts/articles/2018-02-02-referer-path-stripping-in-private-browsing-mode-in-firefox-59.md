---
layout: post
title: Referer Path Stripping in Private Browsing Mode in Firefox 59
date: 2018-02-02 09:48
author: nvinside
comments: true
categories: [Browser, Firefox, HTPP Referer, Security]
---
<a title="See all posts by Luke Crouch" href="https://blog.mozilla.org/security/author/lcrouchmozilla-com/">Luke Crouch</a> gave us an <a href="https://blog.mozilla.org/security/2018/01/31/preventing-data-leaks-by-stripping-path-information-in-http-referrers/" target="_blank" rel="noopener">fantastic article about the future of Firefox and how it's handle the 'referer' problem</a> - these leaks usually reveal sensitive information, such what page you visited before. This is pretty a critical thing because such information are also often used by ads, which then gathering information about what you like and what you not like, because you might click on product x more than on other products.

<img class="alignnone size-full wp-image-2520" src="https://chefkochblog.files.wordpress.com/2018/02/referer.png" alt="referer" width="776" height="463" />

<!--more-->

Sadly by default the mode is only enabled in the Private Window, for no reason.

<h2>Protection against such data leaks?</h2>

<ul>
    <li>You can upgrade to Firefox 59 and optimize your about:config so that your traces are let less.</li>
    <li>Install addons like adblock/ublock which might remove the original information or simply block every external request made by it.</li>
</ul>

<h3>Optimal about:config settings</h3>

<pre><code>network.http.sendRefererHeader
        2 = (default) send on all requests (e.g. images, links, etc.)
network.http.referer.trimmingPolicy
        1 = send the URL without its query string
network.http.referer.XOriginTrimmingPolicy
        2 = only send the origin
network.http.referer.XOriginPolicy
        0 = (default) send the referrer in all cases
network.http.referer.spoofSource
    true = send the target URL as the referrer
network.http.referer.userControlPolicy
        2 = strict-origin-when-cross-origin
network.http.referer.hideOnionSource
    true - strip out the referrer when it's a .onion address</code></pre>

It basically sends a spoofed referer all the time and more detaila when the same origin is used, less detaila when cross origin. So, you never leak any real data but you always supply a referer because a bunch of stupid websites still require it to work properly but you can totally just tell them you just came from the page you're going to. More details can be found <a href="https://wiki.mozilla.org/Security/Referrer" target="_blank" rel="noopener">here</a>.

There are stronger settings you could use but it simply breaks too much and these are the most optimal settings without getting any troubles.

<h2>Private Browsing Window nonsense</h2>

Why Every Browser has such a mode is beyond me, Chrome has it's 'Incognito Mode' and Firefox has the 'Private Window' in my eyes this is totally a waste, because people should get the best possible security they can get streight from the beginning and not with seperate options and confusing features.

Such features wasting also a lot of developer resources and the code gets bigger, instead the Browser developer should try to reduce the code as much as possible which then would it make easier to do an audit - and less code loads a lot of faster, so it would be a win-win situation. Now we have some half-cooked browser with options only a hand of people are aware off and at the end no one uses it because it's not compfortable enough and the source code gets bigger with such a mess, not what I expect.

A Browser is one of the most used if not the most used app on your PC and it must be made as secure as possible without any compromises - period. Private Windows and about:config tweaks are just cancer and a waste of time for people which not having the time to mess with this (so basically everyone except nerds) because no one heard of it - Ask your Mom what about:config tweak she uses I bet she will say "What?".
