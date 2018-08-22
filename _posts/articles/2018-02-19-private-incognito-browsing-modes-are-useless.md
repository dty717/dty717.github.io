---
layout: post
title: Private-/Incognito Browsing modes are useless
date: 2018-02-19 13:20
author: nvinside
comments: true
categories: [Browser, in, Security]
---
Yes you heard right, the private data modes which are offered by Chrome, Firefox &amp; Co. are useless, they don't prevent you from been tracked, what they basically do is that they block the access to the local storage and restricting several other mechanisms, but modern tracking technologies don't need local storage access.

<img class="alignnone size-full wp-image-2902" src="https://chefkochblog.files.wordpress.com/2018/02/new-mozilla-browser-blocks-tracking.jpg" alt="New-Mozilla-Browser-Blocks-Tracking" width="738" height="451" />

<!--more-->

<h2>Wasted focus and wasted develop power</h2>

These modes are 'optional' and in my opinion, the logic behind is horribly wrong because:

<ol>
    <li>The development is slowed down to implement such an extra mode, instead of integrating it as default</li>
    <li>It doesn't prevent from been tracked because e.g. JavaScript and Canvas working without local storage access and can track you across the website</li>
    <li>The focus of any 'secure' Browser should be to build for everyone the best security-related things right into the Browser, so that a normal user doesn't need add-ons -They could be infected/manipulated and the risk is much higher to run into such an issue since a lot of Google Store/AMO add-ons are faked, especially popular add-ons like uBlock &amp; Co.</li>
</ol>

Developers often need to implement other ways to e.g. not break AV products, because odern AV products interceptingininto your HTTP/HTTPS traffic directly to filter it, which is a complicated process and some browser security mechanism might get problems with such techniques, such process means more work, because Browser developer need to fix the 'AV mess' and self-created problems because of that.

<h2>Anti-Browser mechanism are behind</h2>

All security-related Browser mechanism are behind of the current web-tracking defaults and because of these people going to trust add-ons instead, this is another horrible failure and the Browser Developer should be made responsible to at least provide or explain that there certain things which are not blocked by default, so that the default user is aware that there techniques out there which he needs manually to take care of, ideal the developer would work on this and provide an own implementation to 'fix' this. It's not that Canvas &amp; Co. are new, there exist since many many years and there are easy solutions available like e.g. to fake the output data but Chrome, Firefox &amp; Co. refuse to implement something to avoid this - for no reason.

<h3>No Browser is perfect</h3>

If you use Firefox Chrome, at the end it doesn't matter, cause you need to manually tweak them anyway, install add-ons and if you do not want to waste your lifetime on this you are mostly the same way vulnerable. I've not seen any 'privacy' focused Browser ever, every Browser collects data, every Browser needs addons to fix 10 or more years old tracking mechanism and at the end the normal user will never spend his entire day to adjust each domain, only a handful of people really doing it, instead there just installing an adblocker, but the thing is that an adblocker doesn't protect you from the pages which you allowed, which means if you whitelisted/allowed example.com because you need to login into that page you're almost as vulnerable as not using any ads-blocker or security addon because you can be monitored anyway with programs like <a href="https://github.com/citp/OpenWPM" target="_blank" rel="noopener">OpenPWM</a> (<a href="https://webtap.princeton.edu" target="_blank" rel="noopener">WebTAP</a>) or other third-party scripts which are maybe implemented into the domain. Blocking 3rd-party scripts only helps as long you do not need them, as soon as some functions are depending on them and you whitelisted them you're 'doomed' since you Browser won't take care of it.

<h2>People don't turn off their ad-blockers</h2>

The problem is because of the tracking, spying and so people not turn their adblockers off for pages which are depending on it and I understand it because you never know if it's infected or compromised or if it's not trying to track you. At the end, the ads industry doomed themselves with it because people trying to 'overblock' everything to avoid malware/crypto hijacking &amp; co.

There is no solution for this, some pages now trying to integrate buttons to support the page with ads or via crypto background mining but this is maybe not what most people want - and again the little pages suffering from it.

<h2>No Solution available</h2>

In my opinion, we need solutions directly implemented into the Browser for everyone, not optional - just for everyone out of the box, box about:config, about:flags or add-ons. Because how many time you overall waste to configure your Browser just to gain a little bit more privacy is not worth at the end you still getting tracked from those sites you allowed.

<h2>Conclusion</h2>

Tracking gets more and more aggressive, ironical with more anti-tracking add-ons you only force the ads industry to come up with something new and the circle is then closed. What can you do, use a Pi-Hole and block the tracking domains, and all other domains?! Or you go the addon day and waste your entire day trying to get the website running, who really does that?

<h3><span style="text-decoration:underline;">What really needs to be changed?</span></h3>

<ol>
    <li>The Browser needs to be secured in the first place not by add-ons or anything else, integrate proper standards which can be used by a larger group of people and not only those who are aware of xyz add-ons or 'tricks'.</li>
    <li>Remove the Private and Incognito Mode, it's useless and focus on 1.</li>
    <li>Implementing third-party resources, scripts or dependencies is always problematically because as webmaster you simply lose control, sadly this a known technique know. Surfing without any JavaScript blocker is already 'dangerous', especially if you surf on 'darker' areas on the www.</li>
    <li>Laws, I think since everything gets abused we simply need stronger laws to protect the non-technical people running into tracking traps.</li>
    <li>Webmaster are responsible, there should be a punishment when there data leaks, in other words, this would force the website owner/webmaster to integrate less script to take a better control over their own content. Since there is no punishment they simply can use the excuse 'it wasn't me it was the fault of a dependency I integrated into my website".</li>
</ol>

<h3>So should you give up?</h3>

Hell no! But maybe take the pressure on the Browser creator and ask them why he doesn't implement something against IFrames, Canvas &amp; Co. instead of installing add-ons, that would maybe the better decision to get attention to the real problem, of course installing an add-on in the meantime is a workaround.

It's really hard these days and there seems to be no solution, everything has pros and cons like with almost everything in life but it could be easier.
