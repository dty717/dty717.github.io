---
layout: post
title: Mozilla Firefox Quantum 59.0 is out
date: 2018-03-13 10:34
author: nvinside
comments: true
categories: [Browser, Firefox, Firefox 59, Mozilla Firefox Quantum]
---
Mozilla today released the final version of Firefox Quantum, <a href="https://www.mozilla.org/en-US/firefox/59.0/releasenotes/" target="_blank" rel="noopener">Version 59</a> brings several improvements related to the security aspect and also some improvements from existent utilities like the screenshot functionality.

<img class=" size-full wp-image-3669 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/firefox-59.jpg" alt="Firefox 59.jpg" width="768" height="384" />

<!--more-->

<h2>Changelog</h2>

As always Mozilla is going to upload the changelog a bit later, it can be found <a href="https://www.mozilla.org/en-US/firefox/releases/" target="_blank" rel="noopener">here</a>. The Android app is going to be rolled out over the next few days. The latest ESR 52.7.0 changelog can be found <a href="https://www.mozilla.org/en-US/firefox/52.7.0/releasenotes/" target="_blank" rel="noopener">here</a> but it only contains "Various stability and regression fixes".

<h3>Download</h3>

<ul>
    <li><a class="dl" href="https://download-installer.cdn.mozilla.net/pub/firefox/releases/59.0/win32/en-US/Firefox%20Setup%2059.0.exe" target="_blank" rel="external nofollow noopener">Download</a> | <b>32-bit</b>  en-US (international)</li>
    <li><a class="dl" href="https://download-installer.cdn.mozilla.net/pub/firefox/releases/59.0/win64/en-US/Firefox%20Setup%2059.0.exe" target="_blank" rel="external nofollow noopener">Download</a> | <b>64-bit</b>  en-US (international)</li>
    <li><a class="dl" href="https://www.mozilla.org/en-US/firefox/all/" target="_blank" rel="external nofollow noopener">Download Page</a> | All Languages and OS</li>
    <li><a class="dl" href="https://www.mozilla.org/en-US/firefox/organizations/all/" target="_blank" rel="external nofollow noopener">Download Page</a> | Extended Support Release</li>
    <li><a class="dl" href="https://portableapps.com/apps/internet/firefox_portable" target="_blank" rel="external nofollow noopener">Download Page</a> | Portable</li>
    <li><a class="dl" href="https://play.google.com/store/apps/details?id=org.mozilla.firefox" target="_blank" rel="external nofollow noopener">Download Page</a> | Android App</li>
</ul>

A download mirror is as always provided by Mozilla itself, you can manually download all releases from their own secured <a href="https://ftp.mozilla.org/pub/firefox/releases/59.0/" target="_blank" rel="noopener">FTP server</a>.

<h2>Summary</h2>

The following summery explains all security, UI and performance changes.

<ul>
    <li>Firefox Home Page content loads up to 15% faster now.</li>
    <li>Drag &amp; Drop Top Sites elements on Firefox's Home page and other customization options.</li>
    <li>Fix popup content on multi-monitor systems with different DPI settings is now fixed according to the source code commits - Reported by several people.</li>
    <li>Faster page load times by loading content either from the user's hard drive or networked cache content while using pre-loaded content.</li>
    <li>Graphics rendering improvements for Mac Firefox installations which original got introduced in Firefox 58.</li>
    <li>You can (for now) mark HTTP sites as insecure in Firefox, which will be come the default in Firefox 60.</li>
    <li>Screenshot tool with several improvements regarding to feature requests.</li>
    <li>Firefox 59.0 includes a number of privacy enhancements which can be found under about:preferences#privacy.</li>
    <li>Top level navigation to date:// URIs is by default blocked.</li>
    <li>HTTP-Auth dialogs can't be triggered by cross-origin images anymore.</li>
    <li>Mozilla added an "Assistant App". The user can decide to work with it or not, this was a requested feature, it should help to improve the Browser experience.</li>
    <li>Firefox 59 for Android supports HTTP Live Streaming (HLS) playback.</li>
    <li>Removed the about: page. for Android users. The user sees a dialogue instead.</li>
    <li>CSS engine functionality was introduced in the Android Firefox version.</li>
</ul>

<h3>Developer only changes</h3>

<ul>
    <li>Experimental Tab Hiding API is by default now available as a wish from the community.</li>
    <li>Extensions can now override proxy settings.</li>
    <li>IndexDB use no longer impacted by cookie settings.</li>
    <li>Cookie API supports first-party isolation mode and FPI cookies. External extensions are able to control the internal behavior via Cookie API.</li>
    <li>Support for decentralization protocols eg. dat://, dweb://, ipfs://, ipns:// and ssb://</li>
    <li>Support W3C specifications for pointer events.</li>
    <li>Web Developer Tools improvements: network monitor shows a preview of the rendered HTML if the response is a HTML. The StorageManager and CookieManagment access got improved.</li>
    <li>Theme API was improved according to user feedback.</li>
    <li>RTP Transceiver implemented to give "pages more fine grained control over calls".</li>
</ul>

<h3>Workaround for a possible crash (affects only Windows 7 users)</h3>

[caption id="attachment_3673" align="aligncenter" width="981"]<img class=" size-full wp-image-3673 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/firefox-v59-windows-7-workaround.png" alt="Firefox v59 WIndows 7 workaround" width="981" height="410" /> Windows 7 users might need to turn this off in order to avoid a crash.[/caption]

"Prevent accessibility services from accessing your browser" might need to be turned off according to some user reports, I could't confirm this in a VM - but you might be affected by this. Mozilla told me that there going to fix this once there know what causing it. Some users on Twitter are reporting that even switching the toggle might already is enough to crash the Browser.

<h2>Final Words</h2>

No remaining issue so far in this release which is really good, there of course several possible reported minor problems but these gets addressed in another bugfix release.

Besides some gimmick changes I think overall it's a good release and another important step was made into a better web experience, new protocol support is always good and the developer changes makes sense because there mostly requested by those who actually code extensions/websites or for those who are going to test it.

&nbsp;

&nbsp;
