---
layout: post
title: GitHub Hit by Biggest DDOS Attack Ever
date: 2018-03-02 20:54
author: nvinside
comments: true
categories: [GitHub, Security, World]
---
Github was hit by the <a href="https://www.wired.com/story/github-ddos-memcached/amp" target="_blank" rel="noopener">biggest DDoS attack ever recorded</a> on Wednesday. According to Akamai Prolexic the attack peaked at 1.35 Tbps and this attack utilized <a href="http://www.zdnet.com/article/memcached-ddos-the-biggest-baddest-denial-of-service-attacker-yet/" target="_blank" rel="noopener">memcached </a>servers that return 50 times the data to the IP spoofed address of the victim.

[caption id="attachment_3191" align="aligncenter" width="885"]<img class=" size-full wp-image-3191 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/15200088830osbzgqxgu_1_1_l.jpg" alt="15200088830osbzgqxgu_1_1_l" width="885" height="383" /> Picture by Akamai Prolexic shows real-time traffic from the DDoS attack, the inbound traffic is a lot of higher than usual.[/caption]

<!--more-->

<h2>Overview</h2>

A <a href="https://en.wikipedia.org/wiki/Denial-of-service_attack" target="_blank" rel="noopener">DDoS attack</a> is one of the most common methods employed by hackers to take websites down: it involves bombarding sites with more traffic than they can handle, so as to overwhelm their servers and cause enough crashes to take the site offline temporarily.

This kind of attack is called an <a href="http://whatis.techtarget.com/definition/DNS-amplification-attack" target="_blank" rel="noopener">amplification attack</a> and while it's been used before the scale of this one was off the charts.

<blockquote>
<blockquote class="tr_bq">"This attack was the largest attack seen to date by Akamai, more than twice the size of the September 2016 attacks that announced the <a href="https://thehackernews.com/2016/10/ddos-attack-mirai-iot.html" target="_blank" rel="noopener">Mirai botnet</a> and possibly the largest DDoS attack publicly disclosed," <a href="https://blogs.akamai.com/2018/03/memcached-fueled-13-tbps-attacks.html" target="_blank" rel="nofollow noopener">said</a> Akamai, a cloud computing company that helped Github to survive the attack.</blockquote>
<blockquote class="tr_bq">In a post on its engineering blog, Github <a href="https://githubengineering.com/ddos-incident-report/" target="_blank" rel="nofollow noopener">said</a>, "The attack originated from over a thousand different autonomous systems (ASNs) across tens of thousands of unique endpoints. It was an amplification attack using the memcached-based approach described above that peaked at 1.35 Tbps via 126.9 million packets per second."</blockquote>
</blockquote>

The web monitoring and network intelligence firm <a href="https://www.thousandeyes.com/" target="_blank" rel="noopener">ThousandEyes</a> <a href="https://blog.thousandeyes.com/how-github-successfully-mitigated-ddos-attack/" target="_blank" rel="noopener">observed the GitHub attack on Wednesday</a>. "This was a successful mitigation. Everything transpired in 15 to 20 minutes," said Alex Henthorne-Iwane, vice president of product marketing at ThousandEyes. "If you look at the stats you’ll find that globally speaking DDoS attack detection alone generally takes about an hour plus, which usually means there’s a human involved looking and kind of scratching their head. When it all happens within 20 minutes you know that this is driven primarily by software. It’s nice to see a picture of success."

<h2>No Botnet was involved</h2>

The attackers spoofed GitHub’s IP-address and sent queries to several memcached servers that are typically used to speed up database-driven sites. The servers then amplified the returned the data from those requests to GitHub, this happened around   amplified by 50 times.

<h2>Final Words</h2>

It’s nice to know that even with this much traffic, the attackers couldn't do much harm besides interrupting GitHub’s service for a few minutes. Clearly, network infrastructure providers are getting better at handling DDoS attacks – but they’ll need to do more to stay a step ahead of hackers in the future, perfectly would be that even if an attack happens everything works like normal, but I guess that requires a new infrastructure.

Such attacks are <em>useless</em> in my opinion anyway. <img class="alignnone size-full wp-image-3186" src="https://chefkochblog.files.wordpress.com/2018/03/a5qmhta.gif" alt="A5qMhta" width="19" height="24" />
