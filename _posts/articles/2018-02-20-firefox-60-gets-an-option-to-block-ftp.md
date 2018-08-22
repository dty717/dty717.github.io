---
layout: post
title: Firefox 60 gets an option to block FTP
date: 2018-02-20 10:01
author: nvinside
comments: true
categories: [Browser, Firefox, Firefox 60]
---
Firefox 60 will get a new about:config option to enable or disable the FTP protocol due security reasons, however it's useless because every modern router has already an option to disallow FTP and this is the better option because FTP is insecure and you should not download something via FTP anymore because your real IP gets exposed among other meta-data relevant issue.

&nbsp;

[caption id="attachment_2934" align="alignnone" width="637"]<img class="alignnone size-full wp-image-2934" src="https://chefkochblog.files.wordpress.com/2018/02/network-ftp_-enabled.png" alt="network.ftp_.enabled" width="637" height="242" /> Nightly build showing the new option to disable it.[/caption]

&nbsp;

<!--more-->

<a href="https://code.google.com/p/chromium/issues/detail?id=333943-in-firefox-and-chrome/" target="_blank" rel="noopener">Back in 2015</a> Mozilla and Google already mentioned that the FTP support will die soon or later.

<h2>Good idea but too late</h2>

The idea behind is good but it's too late as mentioned most router firmware already can disable FTP but same as the new network.ftp.enabled option it's disabled by default which means you manually need to disable the protocols by changing the boolean/value.

<h2>What happens if you disable it?</h2>

Firefox redirects any attempt to load a FTP resource to the default search engine if the FTP protocol was disabled other downloads might get with later Firefox versions a change which mean you see a warning screen that this is an insecure connection.

<h2>Conclusion</h2>

Most people will not change it because it might breaks some sites/FTP downloads and some might need it (for whatever reasons) a solution would be to switch to SFTP (secure file transport is basically an extension) or other (better) decentralized protocols but the internet is when it comes to protocols still too slow changing and I assume only the big guys like Google will change this by blocking it totally in their Browsers or services, which would be a drastic change but same was said about HTTPS and now (thanks to Google) we are a bit more secure. I think we need more drastically changes at some point to wake some people up and to get a more secure internet especially for those people which are not well informed about all of these or the ones which simply don't care.

The idea behind is good but it doesn't protect your OS in case something (eg malware payload) wants to download it from an FTP, a better option would be if the OS or your router would entirely block it and Chrome and Firefox would block the protocol in general but we are far away from such thinking. Sadly.
