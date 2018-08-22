---
layout: post
title: Memcached DDoS Attacks are the next thing in 2018
date: 2018-03-19 09:30
author: nvinside
comments: true
categories: [DDoS, Memchache, Security]
---
2018 is the year which breaks all records, <a href="https://www.theregister.co.uk/2018/02/20/why_is_the_ethernet_switch_biz_dozing_through_meltdown/" target="_blank" rel="noopener">first Spectre &amp; Meltdown</a> then the <a href="https://www.theregister.co.uk/2018/03/05/worlds_biggest_ddos_attack_record_broken_after_just_five_days/" target="_blank" rel="noopener">biggest DDOS attack in history</a>. Memcached DDoS attacks will become a thing especially because some people made it even more easier to launch such an attack with a few scripts.

[caption id="attachment_3921" align="aligncenter" width="695"]<img class=" size-full wp-image-3921 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/memcached.jpg" alt="Memcached" width="695" height="377" /> Picture Source: GBhackers.com[/caption]

<!--more-->

<h2>Attack is not new</h2>

Reflection or amplification attacks are not new which means attackers have previously used reflection &amp; amplification DDoS attack techniques to exploit flaws in DNS, NTP, SNMP, SSDP, CLDAP, Chargen and other protocols in an attempt to maximize the scale of their cyber attacks. 2016 was one year with more more memchaded DDoS attacks but it was only the beginning.

<h2>Memfixed &amp; Memcrashed</h2>

Two Proof of concepts for the Memcache DDOS attacks has been published online. The <a href="https://pastebin.com/raw/ZiUeinae" target="_blank" rel="noopener">first one</a> written in C language and the scripts utilize a list of 17,000 vulnerable Memcached servers to launch a DDoS attack. The <a href="https://github.com/649/Memcrashed-DDoS-Exploit/blob/master/README.md" target="_blank" rel="noopener">second one</a> built in python and it inherits Shodan,io API to find the list of vulnerable Memcached servers.

[caption id="attachment_3923" align="aligncenter" width="1095"]<img class=" size-full wp-image-3923 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/memfixed1.png" alt="Memfixed" width="1095" height="707" /> The tool written in Python. The PoC published online made the attack even worst, it allows even every script kiddie to launch a high volume Memcached DDoS Attack on weak servers. Keep in mind that this is illegal.[/caption]

<a href="https://twitter.com/037" target="_blank" rel="nofollow noopener">Mohammadi</a> alias 037 created a little utility called "Memfixed" to automate the mitigation process of a Memcached DDoS because according to him vendors are not updating or to the least minimum disabling UDP, companies are being hit with amplified DDoS attacks.

However, this tool is as illegal as DDoS attacks because even if it can shutdown the servers which are been affected to protect them from a larger damage you still have no right to use it because you simply have no server owner rights to do such things. But it's more designed to identify the problematically servers.

<h2>Protection against Memcached DDoS Attacks</h2>

You can block the memcached port in your firewall and allow access only from the database server which is already be enough. Memcached's default port is widely considered to be 11211 (TCP). The easiest example is via iptables assuming that 8.8.8.8 would be our server (which is not) so you have to edit this example accordingly.

<code>iptables -A INPUT -s !8.8.8.8/0 -p tcp --destination-port 11211 -j DROP
</code>

You can archive similar prevention with every other NAT based firewall too.

<h2>My Comment</h2>

Unfortunately it looks like a problem that won’t go away as there are so many server exposed or simply poorly configured which is a real problem and needs to be fixed ASAP. But why was GitHub targeted? perhaps because it’s just so resilient it’s a good test target to see how effective you are which would be my explanation. But you can be sure more is coming and these guys aren't going to sleep for the rest of the year.

<h3><span style="text-decoration:underline;">Source</span></h3>

<ul>
    <li>Powerful New DDoS Method Adds Extortion (<a href="https://krebsonsecurity.com/tag/memcached-attack/" target="_blank" rel="noopener">krebsonsecurity.com</a>)</li>
</ul>
