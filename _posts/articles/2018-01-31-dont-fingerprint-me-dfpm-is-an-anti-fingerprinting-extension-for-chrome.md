---
layout: post
title: Don't FingerPrint Me (DFPM) is an anti-fingerprinting extension for Chrome
date: 2018-01-31 18:30
author: nvinside
comments: true
categories: [anti-fingerprinting, Browser extensions]
---
Browser fingerprinting has gotten a lot of press over the last few years. The EFF and others have released tools demonstrating it is possible but it is frustrating how few tools there are to actually identify companies using these techniques. The most well-known test program is <a href="https://panopticlick.eff.org/">panopticlick</a>, which quickly test your Browser against known fingerprinting techniques.

<img class="size-full wp-image-2457 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/example_db_marketing.png" alt="example_db_marketing" width="1167" height="840" />

<!--more-->

<h2><a id="user-content-dont-fingerprint-me" class="anchor" href="https://github.com/freethenation/DFPM#dont-fingerprint-me"></a><strong>D</strong>on't <strong>F</strong>inger<strong>P</strong>rint <strong>M</strong>e</h2>

We will take a closer look at this extension and check if it comes with any benefit compared to other solutions and we will check if it really helps to increase your Browser security.

<h3>A warning about such tests, it's same like AVTests.org</h3>

First of all a warning, such tests are not real-world tests, these are simply bunch of JavaScript (mostly) script which getting executed to abuse this low-level API, JavaScript has some weaknesses which are well known and nothing is perfect, such tests alone doesn't say much because it requires as you now noticed JavaScript or other dependencies, it's also questionable if in the real world, not other threats which are not on such lists which are currently unprotected by the Browser itself or any anti-fingerprinting addon. So take such tests not too serious because it's depending on several factors and on several layers of security which are very often by default disabled or controllable from the user behind the monitor.

I see such tests as nothing more or less as some sample to show that it's possible to abuse certain things, but at the same time the data alone not expose you in any way which means your IP alone might expose you but detecting the time or installed fonts on your PC alone doesn't say anything about you, because these are only some little pieces of the entire cake.

<h2>About the extension</h2>

The extension is exclusively for Google Chrome/Chromium and <a href="https://chrome.google.com/webstore/detail/dont-fingerprint-me/nhbedikkbkakbjipijipejfojanppbfg?hl=en">can be installed via the official store</a>. The <a href="https://github.com/freethenation/DFPM">source code is also available here</a> and can be reviewed manually if you are in the mood.

<h4>How does it work?</h4>

Basically, the extension detects the following fingerprint techniques:

<ul>
    <li>WebRTC</li>
    <li>Font fingerprinting</li>
    <li>Canvas</li>
    <li>Audio (partially)</li>
    <li>WebGL (unfinished)</li>
    <li>Screen resolution</li>
</ul>

The extension is a good one and if you're not tweaked your about://flags you can go ahead and use it but if you're a person which played with advance Browser flags you might not know it because you can already restrict such fingerprinting methods globally or via several known adblockers on a per-site basis.

I'm not saying the extension is bad, it really looks promising but I don't see the benefit when you simply can tweak the Browser or install a CHromium build instead which by default stripe e.g. WebRTC away but if you really want to track what's going on the background logging option looks really interesting and gives you a closer look what's really going on, it's similar to the integrated debugging tools from Chrome but with the focus on fingerprinting.

<h2>Verdict</h2>

I like the idea and I'll keep an eye on it, but for now it not gets my recommendation because of the simple fact that the better solution would be to install a hardened Chromium build which does the same on a global level which is, in my opinion, the best you can do however, it has it reason to exist and if you build your own strategies to defend yourself against more and more tracking I say give it a try and see how many the daily pages you visit really tracks about you.

I'm in general very critical when it comes to addons and the benefit is mostly not present.
