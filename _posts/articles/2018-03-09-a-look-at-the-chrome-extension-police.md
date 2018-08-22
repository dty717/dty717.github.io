---
layout: post
title: A look at the Chrome Extension 'Extension Police'
date: 2018-03-09 16:00
author: nvinside
comments: true
categories: [AMD, browser extension, Browser extensions, Extension Police, Review, Security]
---
<a href="https://chrome.google.com/webstore/detail/extension-police/ccmccoifgmogllppkahijhkingoeapph" target="_blank" rel="noopener">Extension Police</a> is a Chrome Extension developed by <a href="https://www.linkedin.com/in/juanolaizola/" target="_blank" rel="noopener">Juan Olaizola</a> &amp; <a href="https://www.linkedin.com/in/jderely" target="_blank" rel="noopener">Jean</a> which aims to improve the Browser security by blocking malicious extension based on their permissions and behavior. In this review we're going to check if it's worth to be installed or not.

<img class="alignnone size-full wp-image-3434" src="https://chefkochblog.files.wordpress.com/2018/03/extension-police.png" alt="Extension Police" width="1760" height="944" />

<!--more-->

<h2>Extension Overview</h2>

<a href="http://www.extensionpolice.com" target="_blank" rel="noopener">Extension Police</a> is a Chrome exclusive extension which can take control over every other installed Chrome extension which means you can based on a integrated reputation system (red means potential harmful) block or allow other extensions. The reputation checks the installed Browser extension and based if there good or bad you see some light indicators which showing if the extension has a risk or not.

[caption id="attachment_3435" align="alignnone" width="640"]<img class="alignnone size-full wp-image-3435" src="https://chefkochblog.files.wordpress.com/2018/03/unnamed.jpg" alt="unnamed" width="640" height="400" /> The toggles can enable (allow) or disallow other extension and the red dot shows if it's a riskware extension or not.[/caption]

https://youtu.be/lcd71lQiCPU

<h2>3 Indicators</h2>

<ol>
    <li>A <span style="color:#ff0000;">red dot</span> means that the extension has a potential risk</li>
    <li>A <span style="color:#ffff00;">yellow dot</span> means that the extension has a low risk potential</li>
    <li>A <span style="color:#00ff00;">green dot</span> means that the extension has no risk</li>
</ol>

The indicators are pretty easy to understand and they are quickly showing in colors if you're at as potential risk or not.

<h2>What exactly does the extension checks?</h2>

The reputation scans for the following indicators:

<ul>
    <li>Desktop Capture</li>
    <li>Web Navigation</li>
    <li>Web Requests</li>
    <li>Storage</li>
    <li>Tabs</li>
    <li>Web Request Blocking</li>
    <li>IDLE</li>
    <li>unlimited Storage</li>
    <li>... maybe more permissions</li>
</ul>

These permission are pre-defined in the three indicator colors. That said, it checks all permissions and classifies them in dangerous or not.

<h2>Benefits and cons</h2>

Permission management is overall a good thing but Google and the it's Store already checks all extension for possible dangerous permissions and their extension policy normally blocking badware extensions from been published. Overall the Extension Police extension can't eg. block a payload from been loaded when an extension might load external resources from some mining pages because these normal web permission can't be blocked in order to not break an extension which needs Internet access.

In case you didn't install an extension which not need any Internet permission and you see that it tries to connect to an external page this extension could be useful. But how does the extension knows that? It can't in it's current state. An real-world example would be that you installed accidentally a fake ad-block extension which needs Internet permissions in order to receive filter-list updates so how does Extension Police controls it? The normal user never knows what to do with the permissions, there is a description in Extension Police but in this case it's hard to identify if it's a legitimate connection or not. That's also a reason why Google's own scans not detecting everything because checking the permissions are not enough these days, the real risks are the external payloads which downloading the malware or hijacking your browser.

Besides,  blocking the malware domains or external resources in the first place with ad-blockers seems overall the better strategy, even if you installed a fake/infected extension it can't do anything unless the domain is not in the blocking list.

<h2>Closing Words</h2>

Indicators for possible dangerous permissions are a neat idea but that's not enough to get my recommendation because two things: Extension Policy itself could be infected/faked and re-released within the Google Extension Store and the permission controlling mechanism doesn't block extensions to load external payload - only a ad-blocker/NoScript/PrivacyBadger does - and the best strategy to avoid malware is disallow your browser to allow resources from third-parties eg. Cookies or other connections, this can't be archived with a permission controlling extension alone besides the user might get confused why his favorite extension is marked as potential riskware.

Since it doesn't add any extra security layer over the well-known extension uBlock/uMatrix/NoScript or Privacy Badger it doesn't get my recommendation and I once more can only come to a conclusion that the known ones should be preferred.
