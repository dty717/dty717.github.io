---
layout: post
title: Critical hole in uTorrent lets Hackers Control your PC Remotely
date: 2018-02-27 17:08
author: nvinside
comments: true
categories: [hacking, Security, uTorrent]
---
uTorrent, meh! It was once the best torrent program and went to shit because the greed of their developers and wrong decisions to integrate ads into their program just to make some money, now you get what you deserve! The latest uTorrent software has a bug that lets hackers control your PC remotely, the report came from <a href="https://thehackernews.com/2018/02/torrent-download-software.html" target="_blank" rel="noopener">TheHackerNews</a> which points to its source, again a Google Project Zero found.

<img class="alignnone size-full wp-image-3063" src="https://chefkochblog.files.wordpress.com/2018/02/utorrent.png" alt="uTorrent" width="800" height="420" />

<!--more-->

<h2>Affected products</h2>

Both versions are affected the desktop client and the recently launched web version. uTorrent basically starts a locally hosted HTTP RPC server which allows users to access it's interface over any web browser, the issue is that remote attackers can take control of the software with very little interaction, this is a result of bad coding, because it seems the code wasn't tested well against known attacking techniques.

<h2>Patch already available and the issue will be fixed</h2>

The next uTorrent version will address this issue and fix the hole. Sadly this wasn't the first time uTorrent was involved in such a massive problem and the trust in the developers and their program goe around zero simply because the program is too intransparent.

<h2>Alternatives</h2>

Since uTorrent is a nightmare with all their ads (I wonder how long it takes until someone spread malware in the ads?) I recommend you to switch to <a href="https://www.qbittorrent.org/" target="_blank" rel="noopener">qBittorrent</a>, because I use it since years and it's open source. - it does it's job and problems getting fixed really really quick because a lot of people watching the source code and it's really easy to provide a patch or comment on the code directly to find identify fix possible problems before a version gets released in public.
