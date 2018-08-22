---
layout: post
title: Chrome 64 is out
date: 2018-01-25 00:41
author: nvinside
comments: true
categories: [Android, Browser, Chrome]
---
<a href="https://chromereleases.googleblog.com/search/label/Stable%20updates" target="_blank" rel="noopener">Google just announced</a> the new Chrome final release for Android and all other platforms. An explicit log-file can be found <a href="https://chromium.googlesource.com/chromium/src/+log/63.0.3239.132..64.0.3282.119?pretty=fuller&amp;n=10000" target="_blank" rel="noopener">here</a>. Security updates were one of their focus, Meltdown &amp; Spectre got fixes among several other WebGL and URL related fixes. Starting with Chrome 64, autoplay videos are disabled by default

<img class="  wp-image-2198 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/google-chrome-logo.jpg" alt="google-chrome-logo" width="588" height="316" />

<!--more-->

<h2>Changelog</h2>

<ul>
    <li>[$3000][<a href="https://crbug.com/780450">780450</a>] High CVE-2018-6031: Use after free in PDFium. Reported by Anonymous on 2017-11-01</li>
    <li>[$2000][<a href="https://crbug.com/787103">787103</a>] High CVE-2018-6032: Same origin bypass in Shared Worker. Reported by Jun Kokatsu (@shhnjk) on 2017-11-20</li>
    <li>[$1000][<a href="https://crbug.com/793620">793620</a>] High CVE-2018-6033: Race when opening downloaded files. Reported by Juho Nurminen on 2017-12-09</li>
    <li>[$4000][<a href="https://crbug.com/784183">784183</a>] Medium CVE-2018-6034: Integer overflow in Blink. Reported by Tobias Klein (www.trapkit.de) on 2017-11-12</li>
    <li>[$2500][<a href="https://crbug.com/797500">797500</a>] Medium CVE-2018-6035: Insufficient isolation of devtools from extensions. Reported by Rob Wu on 2017-12-23</li>
    <li>[$2000][<a href="https://crbug.com/789952">789952</a>] Medium CVE-2018-6036: Integer underflow in WebAssembly. Reported by The UK's National Cyber Security Centre (NCSC) on 2017-11-30</li>
    <li>[$1000][<a href="https://crbug.com/753645">753645</a>] Medium CVE-2018-6037: Insufficient user gesture requirements in autofill. Reported by Paul Stone of Context Information Security on 2017-08-09</li>
    <li>[$1000][<a href="https://crbug.com/774174">774174</a>] Medium CVE-2018-6038: Heap buffer overflow in WebGL. Reported by cloudfuzzer on 2017-10-12</li>
    <li>[$1000][<a href="https://crbug.com/775527">775527</a>] Medium CVE-2018-6039: XSS in DevTools. Reported by Juho Nurminen on 2017-10-17</li>
    <li>[$1000][<a href="https://crbug.com/778658">778658</a>] Medium CVE-2018-6040: Content security policy bypass. Reported by WenXu Wu of Tencent's Xuanwu Lab on 2017-10-26</li>
    <li>[$500][<a href="https://crbug.com/760342">760342</a>] Medium CVE-2018-6041: URL spoof in Navigation. Reported by Luan Herrera on 2017-08-29</li>
    <li>[$500][<a href="https://crbug.com/773930">773930</a>] Medium CVE-2018-6042: URL spoof in OmniBox. Reported by Khalil Zhani on 2017-10-12</li>
    <li>[$500][<a href="https://crbug.com/785809">785809</a>] Medium CVE-2018-6043: Insufficient escaping with external URL handlers. Reported by 0x09AL on 2017-11-16</li>
    <li>[$TBD][<a href="https://crbug.com/797497">797497</a>] Medium CVE-2018-6045: Insufficient isolation of devtools from extensions. Reported by Rob Wu on 2017-12-23</li>
    <li>[$TBD][<a href="https://crbug.com/798163">798163</a>] Medium CVE-2018-6046: Insufficient isolation of devtools from extensions. Reported by Rob Wu on 2017-12-31</li>
    <li>[$TBD][<a href="https://crbug.com/799847">799847</a>] Medium CVE-2018-6047: Cross origin URL leak in WebGL. Reported by Masato Kinugawa on 2018-01-08</li>
    <li>[$500][<a href="https://crbug.com/763194">763194</a>] Low CVE-2018-6048: Referrer policy bypass in Blink. Reported by Jun Kokatsu (@shhnjk) on 2017-09-08</li>
    <li>[$500][<a href="https://crbug.com/771848">771848</a>] Low CVE-2017-15420: URL spoofing in Omnibox. Reported by Drew Springall (@_aaspring_) on 2017-10-05</li>
    <li>[$500][<a href="https://crbug.com/774438">774438</a>] Low CVE-2018-6049: UI spoof in Permissions. Reported by WenXu Wu of Tencent's Xuanwu Lab on 2017-10-13</li>
    <li>[$500][<a href="https://crbug.com/774842">774842</a>] Low CVE-2018-6050: URL spoof in OmniBox. Reported by Jonathan Kew on 2017-10-15</li>
    <li>[$N/a][<a href="https://crbug.com/441275">441275</a>] Low CVE-2018-6051: Referrer leak in XSS Auditor. Reported by Antonio Sanso (@asanso) on 2014-12-11</li>
    <li>[$N/A][<a href="https://crbug.com/615608">615608</a>] Low CVE-2018-6052: Incomplete no-referrer policy implementation. Reported by Tanner Emek on 2016-05-28</li>
    <li>[$N/A][<a href="https://crbug.com/758169">758169</a>] Low CVE-2018-6053: Leak of page thumbnails in New Tab Page. Reported by Asset Kabdenov on 2017-08-23</li>
    <li>[$N/A][<a href="https://crbug.com/797511">797511</a>] Low CVE-2018-6054: Use after free in WebUI. Reported by Rob Wu on 2017-12-24</li>
    <li>[$N/A][<a href="https://crbug.com/805285">805285</a>] Various fixes from internal audits, fuzzing and other initiatives</li>
</ul>

<hr />

<h2>Android</h2>

The official <a href="https://chromereleases.googleblog.com/2018/01/chrome-for-android-update.html" target="_blank" rel="noopener">changelog for the Android version</a> is not as long as the rest, but Google notes on their Blog that Chrome 64 for Android prevents sites with an <strong>abusive ad experiences from opening new windows or tabs without user permission</strong>. This isn't their integrated ad-blocker yet, but it's a technique which e.g. blocks other website requests which can't be controlled by the user like automatically redirections. It in theory also blocks the annoying popups which want you to install fake updates.

<img class="alignnone size-full wp-image-2197" src="https://chefkochblog.files.wordpress.com/2018/01/android-v64.png" alt="Android v64" width="748" height="561" />

<h4>Audio Muting</h4>

This version also adds a new <strong>site-wide audio muting setting</strong> as part of Google’s push for <a href="https://9to5google.com/2017/09/14/google-chrome-64-autoplay-behaviors/">more consistent media autoplay behavior</a>. On Android, heading to Settings &gt; Site settings will reveal a new Sound menu. Here users can mute sites from playing audio (set to Allow by default), as well as add exceptions.

<h4><strong>Improved pop-up blocker</strong></h4>

An easier integration was integrated which allows clicked play buttons and site controls to be configured by the user needs. Transparent overlays can be also be blocked from opening new tabs or windows.

&nbsp;

&nbsp;

&nbsp;
