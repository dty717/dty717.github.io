---
layout: post
title: First final version of DNSCrypt-proxy 2.0 is here - works great!
date: 2018-02-06 19:45
author: nvinside
comments: true
categories: [DNSCrypt, DNSCrypt-Proxy 2, Security]
---
Damn, I must admit, the development of the new DNSCrypt-proxy 2.0 was really really fast and the new version works well, I tested it already like 3 hours and it definitely get my recommendation.

<img class="alignnone size-full wp-image-2658" src="https://chefkochblog.files.wordpress.com/2018/02/dnscrypt-proxy2-0.png" alt="dnscrypt-proxy2.0" width="1464" height="945" />

<!--more-->

<h2><strong>DOWNLOAD </strong></h2>

<ul>
    <li><a href="https://github.com/jedisct1/dnscrypt-proxy/releases/download/2.0.0/dnscrypt-proxy-win32-2.0.0.zip" target="_blank" rel="external nofollow noopener">Windows 32 bit dnscrypt-proxy-win32-2.0.0.zip</a></li>
    <li><a href="https://github.com/jedisct1/dnscrypt-proxy/releases/download/2.0.0/dnscrypt-proxy-win64-2.0.0.zip" target="_blank" rel="external nofollow noopener">Windows 64 bit dnscrypt-proxy-win64-2.0.0.zip</a></li>
    <li><a href="https://github.com/jedisct1/dnscrypt-proxy/releases" target="_blank" rel="external nofollow noopener">Other</a></li>
</ul>

Sadly there isn't really a changelog so if you want to see what's changed you need to <a href="https://github.com/jedisct1/dnscrypt-proxy/commits/master" target="_blank" rel="noopener">watch the commits yourself</a>.

<h2>Installation</h2>

<ol>
    <li>Download the package for your system, x64 for 64-Bit and x86 if you are on a 32-Bit host</li>
    <li>Extract the files into e.g. C:\Program Files(x86)\dnscrypt-proxy\</li>
    <li>Remove the "example-" on ever file</li>
    <li>Click on the service-install.bat and allow to install the service</li>
    <li>Now you can tweak your configuration file dnscrypt<em>-proxy.</em>toml like you want. Remember that when you're done to execute the service-restart.bat to apply your changes.</li>
</ol>

<h1>Differences with dnscrypt-proxy 1.x</h1>

<table>
<thead>
<tr>
<th>Features</th>
<th style="text-align:center;">dnscrypt-proxy 1.x</th>
<th style="text-align:center;">dnscrypt-proxy 2.x</th>
</tr>
</thead>
<tbody>
<tr>
<td>Status</td>
<td>Old PoC, barely maintained any more</td>
<td>Very new, but quickly evolving</td>
</tr>
<tr>
<td>Code quality</td>
<td>Big ugly mess</td>
<td>Readable, easy to work on</td>
</tr>
<tr>
<td>Reliability</td>
<td>Poor, due to completely broken handling of edge cases</td>
<td>Excellent</td>
</tr>
<tr>
<td>Security</td>
<td>Written in C, bundles patched versions from old branches of system libraries</td>
<td>Written in standard and portable Go</td>
</tr>
<tr>
<td>Dependencies</td>
<td>Specific versions of dnscrypt-proxy, libldns and libtool</td>
<td>None</td>
</tr>
<tr>
<td>Upstream connections using TCP</td>
<td>Catastrophic, requires client retries</td>
<td>Implemented as anyone would expect, works well with TOR</td>
</tr>
<tr>
<td>XChaCha20 support</td>
<td>Only if compiled with recent versions of libsodium</td>
<td>Yes, always available</td>
</tr>
<tr>
<td>Support of links with small MTU</td>
<td>Unreliable due to completely broken padding</td>
<td>Reliable, properly implemented</td>
</tr>
<tr>
<td>Support for multiple servers</td>
<td>Nonexistent</td>
<td>Yes, with automatic failover and load-balancing</td>
</tr>
<tr>
<td>Custom additions</td>
<td>C API, requires libldns for sanity</td>
<td>Simple Go structures using miekg/dns</td>
</tr>
<tr>
<td>AAAA blocking for IPv4-only networks</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>DNS caching</td>
<td>Yes, with ugly hacks for DNSSEC support</td>
<td>Yes, without ugly hacks</td>
</tr>
<tr>
<td>EDNS support</td>
<td>Broken with custom records</td>
<td>Yes</td>
</tr>
<tr>
<td>Asynchronous filters</td>
<td>Lol, no, filters block everything</td>
<td>Of course, thanks to Go</td>
</tr>
<tr>
<td>Session-local storage for extensions</td>
<td>Impossible</td>
<td>Yes</td>
</tr>
<tr>
<td>Multicore support</td>
<td>Nonexistent</td>
<td>Yes, thanks to Go</td>
</tr>
<tr>
<td>Efficient padding of queries</td>
<td>Couldn't be any worse</td>
<td>Yes</td>
</tr>
<tr>
<td>Multiple local sockets</td>
<td>Impossible</td>
<td>Of course. IPv4, IPv6, as many as you like</td>
</tr>
<tr>
<td>Automatically picks the fastest servers</td>
<td>Lol, it supports only one at a time, anyway</td>
<td>Yes, out of the box</td>
</tr>
<tr>
<td>Official, always up-to-date pre-built libraries</td>
<td>None</td>
<td>Yes, for many platforms. See below.</td>
</tr>
<tr>
<td>Automatically downloads and verifies servers lists</td>
<td>No. Requires custom scripts, cron jobs and dependencies (minisign)</td>
<td>Yes, built-in, including signature verification</td>
</tr>
<tr>
<td>Advanced expressions in blacklists (ads*.example[0-9]*.com)</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Forwarding with load balancing</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Built-in system installer</td>
<td>Only on Windows</td>
<td>Install/uninstall/start/stop/restart as a service on Windows, Linux/(systemd,Upstart,SysV), and macOS/launchd</td>
</tr>
<tr>
<td>Built-in servers latency benchmark</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Query type filter: only log a relevant set of query types</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Support for the Windows Event Log</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Log suspicious queries (leading to NXDOMAIN)</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>IP filtering</td>
<td>Yes, but can be bypassed due to a vulnerability</td>
<td>Yes, doesn't have the vulnerability from v1</td>
</tr>
<tr>
<td>Systemd support</td>
<td>Yes, but don't complain about it</td>
<td>Yes, but don't complain about it either</td>
</tr>
<tr>
<td>Stamps, as a simple way to provide server parameters</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Supported protocols</td>
<td>DNSCrypt v1, DNSCrypt v2</td>
<td>DNSCrypt v1, DNSCrypt v2, DNS-over-HTTP/2</td>
</tr>
<tr>
<td>Time-based access control</td>
<td>No</td>
<td>Yes, per domain, with multiple weekly schedules</td>
</tr>
<tr>
<td>Cloaking (like a HOSTS file for the network)</td>
<td>No</td>
<td>Yes, can also return IPs from other names &amp; flatten CNAME records</td>
</tr>
</tbody>
</table>

<h2>What about SimpleDNSCrypt?</h2>

<a href="https://github.com/bitbeans/SimpleDnsCrypt" target="_blank" rel="noopener">The project is still alive</a>, I assume that there going to release a new version with the updated final DNSCrypt-proxy 2.0 within the next two weeks. Because of the fast changes the project made I don't think that we getting a final build but even a test version would already help a lot of people which aren't experienced with the windows or dnsproxy shell commands.

<h2>Planned features</h2>

<ul>
    <li>Offline responses</li>
    <li>Local DNSSEC validation</li>
    <li>Support for the V1 plugin API</li>
    <li>Real documentation</li>
</ul>

I think the project is really great, of course nothing is perfect and DNSCrypt has it's weaknesses but it's definitely better than nothing in my eyes. I'll keep an eye on the project and will inform you guys once there bigger changes.
