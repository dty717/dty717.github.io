---
layout: post
title: OpenVPN 2.4.5 is out
date: 2018-03-01 20:40
author: nvinside
comments: true
categories: [OpenVPN, Software]
---
OpenVPN is trusted by millions of people around the globe and I use it too, the new <a href="https://community.openvpn.net/openvpn/wiki/ChangesInOpenvpn24" target="_blank" rel="noopener">Changelog</a> looks promising since it fixes several problems related to IPv6, DNS, OpenSSL some crypto API related things. As always you should update it as soon as possible.

<img class=" size-full wp-image-3160 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/openvpn.png" alt="OpenVPN" width="1372" height="693" />

<!--more-->

<h2>Download</h2>

As always you can find the latest version for Windows, Linux among the latest source <a href="https://openvpn.net/index.php/open-source/downloads.html" target="_blank" rel="noopener">here</a>. Since several clients from well known VPN providers like PIA, Proton &amp; Co. building their clients around OpenVPN I expect updates very soon.

<h2>Replace closed source VPN program with OpenVPN</h2>

If your VPN provider use a closed source program to connect you to their servers you should consider to switch to OpenVPN because it's more transparent and gets regular updates, especially if something critical was found. An <a href="https://www.techradar.com/news/8-reasons-to-replace-your-vpn-client-with-openvpn" target="_blank" rel="noopener">fantastic guide was written by Mike Williams why you should make the switch</a>.

OpenVPN also gets audits which means the code will be inspected by professionals to reveal possible holes, and the <a href="https://www.theregister.co.uk/2017/05/16/openvpn_security_audit/" target="_blank" rel="noopener">client is secure</a> according to the latest code review last year, the official <a href="https://openvpn.net/index.php/open-source/faq/75-general/295-are-there-any-known-security-vulnerabilities-with-openvpn.html" target="_blank" rel="noopener">FAQ also lists the known problems</a> (from years ago).

<h2>Speed &amp; Latency</h2>

This things depending on which cipher algorithm is choosed, digest algorithm, compression, and your internet speed among the server location.

<h2>Final words</h2>

If you use your own OpenVPN server, it's the safe, possibly more than VPN providers, if you use safe algorithms, don't do compression and disable LZO, you should be in general safe, there are a hell lot of things you need to do to harden your configuration, but this is the very least step. Ask your VPN provider if the provides a .openvpn file so you can easy download it an place it into the openvpn dir, the rest is tweaking for your own needs.

OpenVPN is still one of my 'must' use programs on all operating systems and I never heard something negative about it, maybe because there is nothing you can complain about because it basically installs the driver, provides a small and clean gui and the rest is up to your VPN provider or you tweaking skills.

Is it worth? Definitely yes, it's mostly more secure than using the blooded and spying clients from your VPN providers.

Stay secure friends. 🕵️‍♂️

&nbsp;

&nbsp;
