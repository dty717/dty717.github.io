---
layout: post
title: Google Exposes Security Flaw in Microsoft Edge
date: 2018-02-20 10:37
author: nvinside
comments: true
categories: [Browser, Edge, Microsoft, Security]
---
The bitch fight between Google and Microsoft is real, it's not the first time Google exposed flaws in Microsoft products (from what I know Microsoft never exposed a Google Flaw but I could be wrong on this). However, Google's Project Zero has exposed a security flaw in Microsoft Edge according to a report from <a href="https://www.neowin.net/news/google-exposes-security-flaw-in-microsoft-edge" target="_blank" rel="noopener">Neowin</a>. Project Zero was last year often in the media to reveal bigger security issue, so like this one, the Edge hole is very difficult to patch.

<img class=" size-full wp-image-2944 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/patch-windows.jpeg" alt="patch-windows" width="600" height="315" />

<!--more-->

<h2>The Story in short</h2>

Microsoft began using Arbitrary Code Guard in Edge with the Creators Update which forced the use of Just-in-Time (JIT) compilers to an isolated sandbox. The problem with this is the address for the JIT process can be fairly easily predicted and then exploited, creating an executable page in the memory.

The bug heen classified as a "<a href="https://bugs.chromium.org/p/project-zero/issues/detail?id=1435" target="_blank" rel="noopener">Medium</a>" severity flaw and was disclosed to Microsoft by Google in November 2017. The standard 90-day-deadline was awarded to the company to fix the issue before it was disclosed to the public. According to the Microsoft Security Response Center (MSRC), the problem turned out to be more complex than initially believed, due to which it was given an additional 14-day grace period by Google.

<h3>Difficult to patch</h3>

The hole is difficult to patch because a patch might break other security mechanisms which were originally designed to protect the Browser against outside attacks.

<h2>Final Words</h2>

I totally love Google's Project Zero and the awesome people behind it because these are the ones which reveal the big security holes in several projects (not only Microsoft related Software btw). Yet again Edge got another hole, but nothing that would not be possible to fix, should you give up? No, but should you consider to use alternatives - Yep! Alternatives are no guarantee but there might getting faster security updates or there simply not affected by such a hole.

Edge is definitely better than Internet Explorer in so many ways and I hope Microsoft take this next time more serious and I also hope they fix this with the upcoming patchday but time will tell us the truth.
