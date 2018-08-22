---
layout: post
title: Chrome's integrated Ad-Blocker explained
date: 2018-02-05 12:01
author: nvinside
comments: true
categories: [adblockers, Browser, Chrome, Google]
---
You can hate Google or you can like them, but they are usually the first which introducing the new things which everyone else only copy. There were the first which introduced e.g. the sandbox mechanism and the first which released a phishing filter among several other web browser defaults. Now the next step is that the users finally getting an integrated ad-blocker.

<img class="alignnone size-full wp-image-2597" src="https://chefkochblog.files.wordpress.com/2018/02/chrome-block-ads-desktop-settings.png" alt="chrome-block-ads-desktop-settings" width="1024" height="243" />

<!--more-->

Google Chrome already blocks eg malware, fraud, phishing, pop-up/under/-redirects, and other unwanted behavior through their Google Safe Browsing service. The Browser also checks every website you visit against a list of malicious websites that it periodically downloads from Safe Browsing.

<h2>EasyList and EasyPrivacy blocklists as ground</h2>

Google Chrome will periodically download a set of block rules in the background, which consist of two popular ad blocking lists: <a href="https://easylist.to/" target="_blank" rel="noopener">EasyList</a> (advertisement) and <a href="https://easylist.to/easylist/easyprivacy.txt" target="_blank" rel="noopener">EasyPrivacy</a> (tracking). EasyList and EasyPrivacy is built-in to many popular ad blocking extension including uBlock Origin and AdBlock Plus, as well as in privacy oriented apps and web browsers.

Advance users can force an blocklist update manually via <kbd>chrome://components</kbd> which allows you to update the “Subresource Filter Rules” component.

<h3>What but Google Analytics &amp; Co are integrated into EasyList</h3>

That's correct, it seems that Google uses the entire EasyList which means their own services like Google Analytics getting blocked too. It's unclear if Google will integrate some hardcoded exceptions later or not. I assume their might whitelistening some services but it's only guessing at this point.

<h2>Integrated Notification System</h2>

[gallery ids="2598,2599" type="rectangular"]

As you can see you get a small notification which shows you the status of the page and if there popups and ads been blocked or not. The Desktop popup looks a little bit different from the Android Version (right screenshot).

<h2>Conclusion</h2>

Most people have a fear that Google might control the ad-industry even more which is maybe a point, their 'Better ads' program is at the end nothing but a push for their own services but on the other side a lot of ads these days getting infected with malware and this might can help. I see this change with both of my eyes, the one which liked that the normal user finally get at least something integrated and the other eyes sees that Google tries to push their own products/ads.

I will definitely keep an eye on this story and I hope they not trying to manipulate the EasyList or trying to bypass this somehow, this would be a bad idea and would only end up with more fear and doubts against Google. At this point I like to see it positive and hope other Browsers will also wake up and integrate something like an native ad-blocker, I'm especially always disappointing from Mozilla these guys always telling us there fighting for our security but the most changes always coming from Google and there as stated into the short introduction the first when it comes to new browser security features.

Hopefully one day we get a good balance and compromise between ads, Browser and the most important gap - the user which is behind the screen because ad-blocking is fine and cool but you shouldn't forget that we need to pay our bills and over-blocking doesn't help anyone at all because your favorite site might get closed or need to find other ways eg browser mining to survive, as always there some black sheeps which abusing such things and we the small bloggers and pages need to suffer.

At this point I'm thankfully that we get such integrated mechanism, because most people are not aware of their addon solutions or too lazy or have other reasons to not install an external ad-blocking solutions.

<h4><span style="text-decoration:underline;">Resource</span></h4>

<ul>
    <li>Coalition for Better Ads to Introduce Better Ads Experience Program (<a href="https://www.betterads.org/coalition-for-better-ads-to-introduce-better-ads-experience-program/" target="_blank" rel="noopener">betterads.org</a>)</li>
    <li>Safebrowsing source code (<a href="https://chromium.googlesource.com/chromium/src.git/+/2fd18acbc089387f9db59c2b152eb1bea8cd7b76/components/safe_browsing/db/util.h" target="_blank" rel="noopener">chromium.googlesource.com</a>)</li>
    <li>Content activation list (<a href="https://chromium.googlesource.com/chromium/src.git/+/ba2d685c04f9b1a228caa4dc0a0c9565b5e093f2/components/subresource_filter/content/browser/content_activation_list_utils.cc" target="_blank" rel="noopener">chromium.googlesource.com</a>)</li>
    <li></li>
</ul>
