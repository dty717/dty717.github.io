---
layout: post
title: Fundamental problems with every Browser
date: 2018-02-01 15:51
author: nvinside
comments: true
categories: [Browser, Security]
---
Browser leaks, private or incognito mode, but does this really help? I definitly say no every Browser has fundamental logicallproblems it starts with the fact that every browser seems to include some kind of incognito mode, and other garbage which only a handful people really use because it might break things.

<!--more-->

<h2>Building a better Browser</h2>

<ul>
    <li>Do not include any so called 'private' 'incognito' or secure mode into the Browser, it's marketing and nothing but that.</li>
    <li>Spripping awary incognito mode reduces the source code in size which means it's faster to audit which then means you can use other resources to create and fix more important things</li>
    <li>Less code loads faster and works more efficent</li>
    <li>Stop trying to solve protocol related issue to stripp away header information because the moment you impment it the bad guys and even the big ones like Amazon simply abusing other protocol weaknesses</li>
    <li>Build better network protocols to avoid abusing 20 years old weaknesses ..in other words blast from the past. Trying to fix vulnerable protocols is a mission impossible especially because each day better hardware is born which makes it much easier to exploit and abuse it</li>
    <li>Each protocol must have a end of life, let FTP die once and for all don't even support it on a hardware level via your router, it's dangerous - period.</li>
</ul>
