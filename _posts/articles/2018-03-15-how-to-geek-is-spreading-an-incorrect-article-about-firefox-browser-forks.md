---
layout: post
title: How-To Geek is spreading an incorrect article about Firefox Browser Forks
date: 2018-03-15 10:49
author: nvinside
comments: true
categories: [ESR, Firefox, Security]
---
I got an eMail from someone who asked me what I think about Browser Forks and if it's true that Browser Forks should't be preferred in case you're unhappy with the original Browser. <a href="https://www.howtogeek.com/335712/update-why-you-shouldnt-use-waterfox-pale-moon-or-basilisk/" target="_blank" rel="noopener">Why You Shouldn’t Use Firefox Forks Like Waterfox, Pale Moon, or Basilisk</a> is an article by How-To Geek which is really poorly written and comes to false conclusions about Firefox Forks.

[caption id="attachment_3808" align="aligncenter" width="640"]<img class=" size-full wp-image-3808 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/quantum-feature-640x353.png" alt="Quantum-Feature-640x353" width="640" height="353" /> Once again it's all about the Fox. Picture Source: Mozilla[/caption]

<!--more-->

<h2>How-To Geek likes the word 'code'</h2>

Hopefully I was counting wrong but the article used 19 times the word code. It would't bother me at all but that seems to be the main argumentation why you should't use any <a href="https://en.wikipedia.org/wiki/Category:Web_browsers_based_on_Firefox" target="_blank" rel="noopener">alternative forks of Mozilla Firefox</a>. I'll make it quick and summery what the <a href="https://www.howtogeek.com/335712/update-why-you-shouldnt-use-waterfox-pale-moon-or-basilisk/" target="_blank" rel="noopener">article has to offer</a>:

<ul>
    <li>Old source code</li>
    <li>Unstable</li>
    <li>Use ESR instead of the Quantum release</li>
    <li>Slower security updates</li>
</ul>

Let's check those arguments and if it's true or not. Keeping in mind that the average 'Joe' takes some time until he really installs the update which also applies especially business environments, schools &amp; co.

<h2>Old source</h2>

Source code is never old, there is code or there is no code. It's mostly based on the current findings, language and if there was an audit (or review or not) - if this statement from How-To Geek assumes that this is about Browser features then it's entirely wrong because that takes time to migrate in every Browser, if it's a Fork or not doesn't matter some Browser blocking explicit function to secure people from eg. installing possible dangerous extensions.

In terms of the security aspect I also need to disagree because it takes time to audit the updated, integrated or changed code commits and this usually doesn't happen over night. New things are not automatically better and old things are not always problematically. In fact adding more features into something makes the product possible more vulnerable because the more code is used the higher the chance is that there mistakes included. Less is in this case better and also results in faster loading times and less memory consumption because the OS has less to load here.

How-To Geek's complaint here ignores the fact that you can pickup the source or the changes and compile the builds yourself which fully destroys the argumentation about possible 'outdated' source code (whatever that really means). I must add here that this is might not be possible for the average user because it might requires to change several things to actually compile it but it's possible overall and that's why I mention it - I'm fully aware that this is however not widely used and people just picking up the compiled binaries.

Since Firefox Quantum or the Forks regularly getting audits or a comparison table it's only guessing that the code by itself is a problem which automatically leads into a weaker Browser. There is no proof for this, especially because it would be difficult some forks integrating unique features or strip things away. Some original forks using an entirely different Engine (eg. Pale Moon).

<h2>Unstable</h2>

This is a poor argument, because crashes also can happen in the original Browsers as well as in all other forks. In fact if you are not migrating every change it might could help to solve problems (theoretically). Some Browser don't migrate everything because it makes no sense or security reasons or because the developer thinks it's better without it.

<h2>Use ESR instead of Quantum</h2>

ESR in it's current form is supported until 2019 and then you anyway end up with using Quantum anyway. At the end you can't escape and it doesn't matter at all because the article from How-To Geek states 'if you don't like Firefox Quantum' - you know what sherlock if you don't like Firefox just don't use it and use Chrome, how about this? Cause Quantum or ESR - it's still Firefox at the end.

<h2>Slow(er) Security Updates</h2>

I would not say this at all, that's depending on several things like how big the team is which maintain the Fork, if there rolling out nightly's or not and if people are able to compile the browser by themselves based on the documentation which is given (or not) within the forks projects.

I would't say that's entirely wrong here but as I already mentioned at the very beginning of this article, it usually takes time to roll-out the release especially in schools because there is often only one administrator for the entire school what this means is that he is might be busy with preparing the PC's with Windows and Software updates. In the meantime a fork Update could have been already arrived. However, I get this point and I see it also critical when it comes to using a forked Browser but there also examples which are always ahead of the original released like <a href="https://chromium.woolyss.com" target="_blank" rel="noopener">woolyss</a> (Chrome[ium]) or on Firefox side <a href="https://en.wikipedia.org/wiki/GNU_IceCat" target="_blank" rel="noopener">GNU IceCat</a>.

However, I have to agree at some point that security updates are problematically and not only for forks, because it's one thing to integrate them and another thing to actually test them. I remember the first 'WebRTC' fixes and the releases after it didn't worked so it took several other builds to fix this problem for everyone. From what I know (in this particularly case) no fork was slower or faster here (to name one example).

Not to mention that some 'security' updates are only existent because Mozilla integrated something on his own which caused it in the first place which is might be no problem for the fork Browser because it never adopted this change. You see the topic here is complex. Faster updates by itself doesn't mean anything the most popular example here is Adobe Flash, it gets regularly security updates and still is insecure as hell.

<h2>Conclusion</h2>

Forks by itself are not more or less secure, overall spoken, it's more a matter of how many people are involved in it. You can't compare a project like the original Firefox with Basilisk because there simply less people involved, the community is not as big and the the original project has more maintainer. But does this really mean it's more insecure? I'm not sure on this since there is no proof on the entire Internet, theoretically more people mean that the chance is higher to find and fix vulnerabilities but that's only theory I like to remember everyone that OpenSSL was also open source and no one found the huge holes because releasing the source and making the audits are two different kind of things not to mention that popular software is might be a bigger target. I'm not going to say unpopular isn't less a target but it's simply difficult to measure which makes How-To Geek's article wrong.

<h3>What do I recommend?</h3>

It's difficult to say I test a lot of Browsers over the time, watch their process and in most cases it's the community which forces the company to take action and integrate something against WebRTC &amp; Co. It seems all Browser are still too slow by making bigger and necessary security changes, that could be because PR reason or because the priorities are on other things.

I think it's up to the user needs, how involved the user is into the security topic, which extensions he use and what he prefers. The best browser is worthless if you're not like it of have problems with it or it's privacy policy.

Overall there is nothing wrong with IceCat or Pale Moon. If you're going to bring the security argumentation then I would't like to say use the Browser which is designed for it and there is only Tor Browser Bundle (based on ESR) and do not make any compromises - if a page doesn't like your Browser and tries to downgrade you because it blocks tor &amp; co, show them your disrespect by leaving the page and make people aware of the fact.

I like to close this article with a mention that this topic is very complex and that there is no and properly never will be a chart which can prove that a fork is more insecure compared to it's original because as mentioned that would be very difficult due mentioned reasons above.
