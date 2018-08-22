---
layout: post
title: Grammarly Web Extension Hit By Data-Leak Flaw 22 mio. Users at risk
date: 2018-02-07 21:37
author: nvinside
comments: true
categories: [browser extension, Browser extensions, data breach, Grammarly]
---
Grammarly, maybe the most used spellchecker with the most users, has patched a bug that left users’ data exposed to malicious third-party websites. The browser extensions allow the service to check text typed into web-based applications including Gmail, Facebook, Twitter and LinkedIn, as well as online publishing systems such as WordPress. The company also offers mobile apps for Android and iOS.

[caption id="attachment_2722" align="alignnone" width="730"]<img class="alignnone size-full wp-image-2722" src="https://chefkochblog.files.wordpress.com/2018/02/grammarly.png" alt="grammarly" width="730" height="382" /> Picture: Grammarly[/caption]

<!--more-->

<h2>What happened?</h2>

<a href="https://bugs.chromium.org/p/project-zero/issues/detail?id=1527&amp;desc=2" target="_blank" rel="noopener">Tavis Ormandy a security researcher from Google</a>, said he found a flaw in the way the browser extensions handle users’ authentication token. The bug meant any third-party website could pose as the user, logging in as them and observing the text they typed as it was checked by Grammarly. Users which not logged into the addon aren't affected.

<h2>Was the hole abused in the wild?</h2>

It's unclear if the hole was abused or not, I found no information that this was abused. But it is theoretically possible that your data could be leaked, I suggest you change all your passwords for the web-services you used Grammarly for just in case.

<h2>Hole already patched within hours</h2>

Ormandy reported the issue to Grammarly at the end of last week and gave it 90 days before the bug’s details would be made public. As it happened, Grammarly patched its extensions within a matter of hours, releasing new versions over the weekend. Ormandy then published the full details on the website of Google’s Project Zero security scheme, he verified the fix on Chrome and Firefox.

<h2>Conclusion</h2>

No addon is perfect and there are no alternatives because once a service becomes big hackers or attackers might want to find a way to get your data, this is however, not a bad thing because in fact it increases the addon security because more eyes might find more bugs/holes which then getting fixed. I see it positive that Grammarly reacted within hours and immediately fixed the issue.

But using online services, no matter which are always critical and we only can hope that they get reviewed from experts to avoid common mistakes and leaks. Personally I don't make a drama about this story because as mentioned, nothing is perfect and security is some kind of illusion we have and some people expect a perfect bug-less system/addon/OS which will never happen at this point there of course alternatives like an offline database you could use to check your spelling and grammar but it's maybe not as comfortable as an online service.

Hopefully we learned something from this story, we should be more careful which addons and services we trust, Grammarly did a good job in my opinion and they took it very serious - that's what I like, response to such things immediately and try to deal with it instead of leaning back and deny that there is a leak ... Yep, Intel I'm looking in your direction.
