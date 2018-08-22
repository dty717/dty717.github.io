---
layout: post
title: Mozilla Thunderbird 58 is out
date: 2018-01-23 22:04
author: nvinside
comments: true
categories: [Mozilla, Software, Thunderbird]
---
Mozilla released his first Thunderbird Release for this year, version 58 comes with some nice changes., the <a href="https://mozillagfx.wordpress.com/2017/12/05/off-main-thread-painting/" target="_blank" rel="noopener">rendering process was improved</a> and the <a href="https://blog.mozilla.org/javascript/2017/12/12/javascript-startup-bytecode-cache/" target="_blank" rel="noopener">loading speed</a> also got changed. The full changelog can be found <a href="https://www.mozilla.org/en-US/firefox/58.0/releasenotes/" target="_blank" rel="noopener">here</a>.

[caption id="attachment_2170" align="alignnone" width="1278"]<img class="alignnone size-full wp-image-2170" src="https://chefkochblog.files.wordpress.com/2018/01/tb59-win10.png" alt="TB59-Win10" width="1278" height="862" /> The new Photon interface[/caption]

<!--more-->

For day to day use, it is recommended that most people stick with the stable release that is made available in the standard release channels, while those who like to live right on the cutting edge and experience all the latest feature may like to take a look at the betas.

Personally I like that Mozilla is starting again to work on their Mail client and that we get again a good <a href="https://en.wikipedia.org/wiki/Comparison_of_email_clients" target="_blank" rel="noopener">alternative</a> to Microsoft Outlook &amp; Co.

<h2>New in this release</h2>

<ul>
    <li id="note-787410">Performance improvements, including:
<ul>
    <li>Rendering graphics for Windows users by using <a href="https://mozillagfx.wordpress.com/2017/12/05/off-main-thread-painting/">Off-Main-Thread Painting (OMTP)</a></li>
    <li>Loading pages faster by changing how <a href="https://blog.mozilla.org/javascript/2017/12/12/javascript-startup-bytecode-cache/">Firefox caches and retrieves JavaScript</a></li>
</ul>
</li>
</ul>

<ul>
    <li id="note-787411">Improvements to Firefox Screenshots:
<ul>
    <li>Copy and paste screenshots directly to your clipboard</li>
    <li>Firefox Screenshots now works in Private Browsing mode</li>
</ul>
</li>
    <li>Added Nepali (ne-NP) locale</li>
</ul>

<h2>Bugfixes</h2>

<ul>
    <li>Fonts installed in non-standard directories will no longer appear blank for Linux users</li>
    <li>Various <a href="https://www.mozilla.org/security/known-vulnerabilities/firefox/#firefox58">security fixes</a></li>
</ul>

<h2>Changed</h2>

<ul>
    <li>User profiles created in Firefox 58 (and in future releases) are not supported in previous versions of Firefox. Users who downgrade to a previous version should create a new profile for that version. Learn about <a href="https://support.mozilla.org/kb/install-older-version-of-firefox">alternatives to downgrading</a> on our support site.</li>
    <li>Added a warning to alert users and site owners of planned security changes to sites affected by the <a href="https://wiki.mozilla.org/CA/Upcoming_Distrust_Actions">gradual distrust plan</a> for the <a href="https://blog.mozilla.org/security/2017/10/31/statement-digicerts-proposed-purchase-symantec/">Symantec certificate authority</a></li>
</ul>

<h2>Dev stuff</h2>

<ul>
    <li>Implemented the <a href="https://developer.mozilla.org/docs/Web/API/PerformanceNavigationTiming">PerformanceNavigationTiming</a> API</li>
    <li>Added <a href="https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/workerStart">PerformanceResourceTiming.workerStart</a> so sites can measure service worker startup time</li>
</ul>

<h2>Not fixed in this release</h2>

<ul>
    <li>Users running Firefox for Windows over a Remote Desktop Connection (RDP) may find that audio playback is disabled due to increased security restrictions. <a href="https://support.mozilla.org/kb/i-cant-play-audio-remote-desktop-connection">Learn how to mitigate this issue</a> until it is corrected in an upcoming release.</li>
    <li>Users running certain screen readers may experience performance issues and are advised to <a href="https://support.mozilla.org/kb/can-i-use-my-screen-reader-new-firefox">use Firefox ESR</a> until performance issues are resolved in an upcoming future release</li>
</ul>

No dramatic changes, overall security updates and merges from Firefox but as said the work just began and I'm looking forward to see more changes, I'm also excited to see what the cooperationship with <a href="https://enigmail.net" target="_blank" rel="noopener">Enigmail</a> brings, to push encryption more to the mass, do we get an integrated solution? Who knows!

&nbsp;

&nbsp;

&nbsp;

&nbsp;
