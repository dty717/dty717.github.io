---
layout: post
title: Firefox & Thunderbird's Master Password System weak since 9 years
date: 2018-03-19 10:00
author: nvinside
comments: true
categories: [Browser, Firefox, Master Password System, Security, Thunderbird]
---
It seems like the integrated Master Password system from Firefox &amp; Thunderbird are since over 9 years weak against known brute-force attacks and still remain unfixed. The findings are based on the work of Justin Dolske &amp; Wladimir Palant.

<img class="  wp-image-3926 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/firefoxsecurity_primary-100038563-large.jpg" alt="firefoxsecurity_primary-100038563-large" width="549" height="366" />

<!--more-->

<h2>Weak System according to Wladimir Palant</h2>

Wladimir Palant which is known to be the author of the AdBlock Plus extension, says the encryption scheme used by the integrated master password feature is weak and can be easily brute-forced. A <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=524403" target="_blank" rel="nofollow noopener">Mozilla bug tracker entry</a> by Justin Dolske from nine years ago reported several similar issue related to the Mozilla Firfox master password feature's launch too. Seems we have finally the confirmation.

<h3>SHA1 iteration count is used</h3>

<blockquote>I eventually found the sftkdb_passwordToKey() function that converts a [website] password into an encryption key by means of applying SHA-1 hashing to a string consisting of a random salt and your actual master password...

Anybody who ever designed a login function on a website will likely see the red flag here...

<hr />

<em>Wladimir Palant</em></blockquote>

SHA-1 function has by default an iteration count of 1 which means it's applied just once, while industry practices regard 10,000 as a solid minimum for this value. Programs like LastPass uses much higher numbers in order to stay protected against brute-force attacks. Later the attacker could decrypt the encrypted passwords stored inside the Firefox or Thunderbird databases.

<h2>Mozilla answered after years</h2>

It was only until this past week when Palant reanimated the original bug report that Mozilla finally provided provided an official answer which suggests this would be fixed with the launch of Firefox's new password manager component called Codename Lockbox. This is some kind of annoying because this will be only available as separate extension.

<h2>Final Words</h2>

Users who want to be sure nobody can read their web passwords should use a third-party password manager application like KeePass or they would forced to use an incredible long password in order to use Firefox &amp; Thunderbird's integrated solution (as for now).

I still can't believe that such old things are only been fixed after years and that it always only gets attention if popular people reporting about it. It's not only a Mozilla exclusive problem, I see tons of old Chrome bug reports too and I start asking myself why there is so little attention to such big and important features.
