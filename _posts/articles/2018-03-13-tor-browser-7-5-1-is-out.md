---
layout: post
title: Tor Browser 7.5.1 is out
date: 2018-03-13 08:11
author: nvinside
comments: true
categories: [Browser, Security, Tor, Tor Browser]
---
The Tor Blog just released another versions update for it's Browser which introduced several security updates, interface changes and improvements based on user reports. As always you can find the changelog since the last stable release, 7.0.11 right <a href="https://gitweb.torproject.org/builders/tor-browser-build.git/plain/projects/tor-browser/Bundle-Data/Docs/ChangeLog.txt?h=maint-7.5" target="_blank" rel="noopener">here</a>. You should get the automatic update notification already or in the coming hours.

[caption id="attachment_3652" align="aligncenter" width="342"]<img class="  wp-image-3652 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/download.jpg" alt="download" width="342" height="232" /> Tor Logo: Picture Source Tor Project[/caption]

<!--more-->

<h2>What's news</h2>

<ul>
    <li>All Platforms
<ul>
    <li>Update Firefox to 52.6.0esr</li>
    <li>Update Tor to 0.3.2.9</li>
    <li>Update OpenSSL to 1.0.2n</li>
    <li>Update Torbutton to 1.9.8.5
<ul>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/21847">Bug 21847</a>: Update copy for security slider</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/21245">Bug 21245</a>: Add da translation to Torbutton and keep track of it</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/24702">Bug 24702</a>: Remove Mozilla text from banner</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/10573">Bug 10573</a>: Replace deprecated nsILocalFile with nsIFile (code clean-up)</li>
    <li>Translations update</li>
</ul>
</li>
    <li>Update Tor Launcher to 0.2.14.3
<ul>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/23262">Bug 23262</a>: Implement integrated progress bar</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/23261">Bug 23261</a>: implement configuration portion of new Tor Launcher UI</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/24623">Bug 24623</a>: Revise "country that censors Tor" text</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/24624">Bug 24624</a>: tbb-logo.svg may cause network access</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/23240">Bug 23240</a>: Retrieve current bootstrap progress before showing progress bar</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/24428">Bug 24428</a>: Bootstrap error message sometimes lost</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/22232">Bug 22232</a>: Add README on use of bootstrap status messages</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/10573">Bug 10573</a>: Replace deprecated nsILocalFile with nsIFile (code clean-up)</li>
    <li>Translations update</li>
</ul>
</li>
    <li>Update HTTPS Everywhere to 2018.1.11</li>
    <li>Update NoScript to 5.1.8.3</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/23104">Bug 23104</a>: CSS line-height reveals the platform Tor Browser is running on</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/24398">Bug 24398</a>: Plugin-container process exhausts memory</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/22501">Bug 22501</a>: Requests via javascript: violate FPI</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/24756">Bug 24756</a>: Add noisebridge01 obfs4 bridge configuration</li>
</ul>
</li>
    <li>Windows
<ul>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/16010">Bug 16010</a>: Enable content sandboxing on Windows</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/23230">Bug 23230</a>: Fix build error on Windows 64</li>
</ul>
</li>
    <li>OS X
<ul>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/24566">Bug 24566</a>: Avoid white flashes when opening dialogs in Tor Browser</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/23025">Bug 23025</a>: Add some hardening flags to macOS build</li>
</ul>
</li>
    <li>Linux
<ul>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/23970">Bug 23970</a>: Make "Print to File" work with sandboxing enabled</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/23016">Bug 23016</a>: "Print to File" is broken on some non-english Linux systems</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/10089">Bug 10089</a>: Set middlemouse.contentLoadURL to false by default</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/18101">Bug 18101</a>: Suppress upload file dialog proxy bypass (linux part)</li>
</ul>
</li>
    <li>Android
<ul>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/22084">Bug 22084</a>: Spoof network information API</li>
</ul>
</li>
    <li>Build System
<ul>
    <li>All Platforms
<ul>
    <li>Switch from gitian/tor-browser-bundle to rbm/tor-browser-build</li>
</ul>
</li>
    <li>Windows
<ul>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/22563">Bug 22563</a>: Update mingw-w64 to fix W^X violations</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/20929">Bug 20929</a>: Bump GCC version to 5.4.0</li>
</ul>
</li>
    <li>Linux
<ul>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/20929">Bug 20929</a>: Bump GCC version to 5.4.0</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/23892">Bug 23892</a>: Include Firefox and Tor debug files in final build directory</li>
    <li><a href="https://trac.torproject.org/projects/tor/ticket/24842">Bug 24842</a>: include libasan.so.2 and libubsan.so.0 in debug builds</li>
</ul>
</li>
</ul>
</li>
</ul>

Among these changes several interface corrections were made, I'll copy &amp; pasta this to make it easier to understand why these user interface changes were made.

<h3>Tor Browser 8.0a3 (Beta)</h3>

<ul>
    <li>Update Firefox to 52.7.0esr</li>
    <li>Update Tor to 0.3.3.3-alpha</li>
    <li>Update Tor Launcher to 0.2.15.1</li>
    <li>Bug 23136: Moat integration (fetch bridges for the user)</li>
    <li>Translations update</li>
    <li>Update HTTPS Everywhere to 2018.2.26</li>
    <li>Bug 25339: Adapt build system for Python 3.6 based build procedure</li>
    <li>Bug 25356: Update obfs4proxy to v0.0.7</li>
    <li>Bug 25147: Sanitize HTML fragments created for chrome-privileged documents</li>
    <li> Windows Bug 25112: No sandboxing on 64-bit Windows &lt;= Vista</li>
</ul>

<hr />

<ol>
    <li><b>Welcome Screen</b>Our old screen had way too much information for the users, leading many of them to spend great time confused about what to do. Some users at the paper experiment spent up to 40min confused about what they needed to be doing here. Besides simplifying the screen and the message, to make it easier for the user to know if they need to configure anything or not, we also did a 'brand refresh' bringing our logo to the launcher.<img class=" aligncenter" src="https://extra.torproject.org/blog/2018-01-23-tor-browser-75/tor-launcher-bridge-small.gif" />

<b>Censorship circumvention configuration</b>

This is one of the most important steps for a user who is trying to connect to Tor while their network is censoring Tor. We also worked really hard to make sure the UI text would make it easy for the user to understand what a bridge is for and how to configure to use one. Another update was a little tip we added at the drop-down menu (as you can see below) for which bridge to use in countries that have very sophisticated censorship methods.

<img class=" aligncenter" src="https://extra.torproject.org/blog/2018-01-23-tor-browser-75/tor-launcher-select-bridge-small.gif" />

<b>Proxy help information</b>

The proxy settings at our Tor Launcher configuration wizard is an important feature for users who are under a network that demands such configuration. But it can also lead to a lot of confusion if the user has no idea what a proxy is. Since it is a very important feature for users, we decided to keep it in the main configuration screen and introduced a help prompt with an explanation of when someone would need such configuration.

<img class=" aligncenter" src="https://extra.torproject.org/blog/2018-01-23-tor-browser-75/proxy-small.gif" />

As part of our work with the UX team, we will also be coordinating user testing of this new UI to continue iterating and make sure we are always improving our users' experience. We are also planning a series of improvements not only for the Tor Launcher flow but for the whole browser experience (once you are connected to Tor) including a new user onboarding flow. And last but not least we are streamlining both our mobile and desktop experience: Tor Browser 7.5 adapted the security slider design we did for mobile bringing the improved user experience to the desktop as well.</li>
    <li>We ship the first release in Tor's 0.3.2 series, <a href="https://blog.torproject.org/tor-0329-released-we-have-new-stable-series">0.3.2.9</a>. This release includes support for the <a href="https://blog.torproject.org/tors-fall-harvest-next-generation-onion-services">Next Generation of Onion Services</a>.</li>
    <li>On the security side we enabled content sandboxing on Windows and fixed remaining issues on Linux that prevented printing to file from working properly. Additionally, we improved the compiler hardening on macOS and fixed holes in the W^X mitigation on Windows.</li>
    <li>We finally moved away from Gitian/tor-browser-bundle as the base of our reproducible builds environment. Over the past weeks and months <a href="https://rbm.torproject.org/">rbm</a>/<a href="https://gitweb.torproject.org/builders/tor-browser-build.git/">tor-browser-build</a> got developed making it much easier to reproduce Tor Browser builds and to add reproducible builds for new platforms and architectures. This will allow us to ship 64bit bundles for Windows (currently in the alpha series available) and bundles for Android at the same day as the release for the current platforms/architectures is getting out.</li>
</ol>

<hr />

<h2>Tor and The Firefox problem</h2>

More and more people going to <a href="https://blog.torproject.org/comment/273512#comment-273512" target="_blank" rel="noopener">realize that hardening Firefox with the old methods don't work anymore</a> in Firefox. Which is not incorrect, it even gets worse with Quantum releases because there several other restrictions given within the Browser eg. working with multiple profiles while hardening something with about:config might not has the effect you expect - it's unclear at this time how Mozilla or the Tor project is going to solve this but I assume additional code needs to be integrated to face this issue.

I'm not sure if it's because PR reasons but power users these days are really frustrated and I totally can understand it. The best advise I can give here is to simply not touch some about:config because the Tor Security Slider might not face those changes, especially in recently updated builds which might not address all the recently added configuration changes.

I can't predict the future but I assume over the long term, since the original (non ESR) release gets more and more security features integrated that the tor project must split up from this and release their own release, I think that would be the best because we're going to have the discussion ground that there are power users and normies which might never adjust any settings. Normally that wasn't a problem but the browser might has unexpected crashes when you try to install new extension or change something on the default configuration - that's a real problem and I'm really curious how there going to solve it.

<h2>Closing Words</h2>

Tor, I2P and all the <a href="https://github.com/dty717/ProjectX" target="_blank" rel="noopener">other good stuff</a>? I love it and I monitor it since years, thanks that such projects and people exist which regularly maintain the code, blog and updating us on important news.

Sadly were going to face bigger problems with Firefox more and more and a lot of people are upset about the decisions Mozilla is doing, that could be PR related but to be perfectly honest that's my best guess - the questions is how there going to satisfy power-users without breaking things or the existent code of the ESR Firefox?!

I like to close my article with something positive, the tor project gets my full respect since years, there often several doubts about how effective they really can protect us but just ignore this and focus on the things which are really important. I see a lot of passioned people in the tor community and that's good, a lot of people seems to woke up and realize that there is a need for security features and protection mechanism since almost everything is trying to get our data somehow with some shady techniques. Tor does definitely offer some layer of security here because the normal user not needs to tweak several things or install lots of extension to improve the browser experience and that's what people like and what the tor project should continue to focus on.

Thanks for the update and the continue fight against the ones which trying to get us on our daily browsing habits. <img class="alignnone size-full wp-image-3318" src="https://chefkochblog.files.wordpress.com/2018/03/f3h9xqz.gif" alt="F3h9xqz" width="27" height="24" />

<h3><span style="text-decoration:underline;">Source</span></h3>

<ul>
    <li>Tor Browser 7.5 is released (<a href="https://blog.torproject.org/tor-browser-75-released" target="_blank" rel="noopener">blog.torproject.org</a>)</li>
    <li>A Usability Evaluation of Tor Launcher' (<a href="https://petsymposium.org/2017/papers/issue3/paper2-2017-3-source.pdf" target="_blank" rel="noopener">petsymposium.org [PDF]</a>)</li>
</ul>
