---
layout: post
title: DNSCrypt Proxy 2 for Android via Magisk Module available
date: 2018-03-13 11:48
author: nvinside
comments: true
categories: [Android, DNS over TLS, DNSCrypt, DNSCrypt-Proxy 2, Security]
---
Good news for security fans - I was already reporting that DNSCrypt Proxy v2 gets a second life - now Android also gets supported with an Magisk Module coded by <a class="text-normal" href="https://github.com/bluemeda">bluemeda</a>. The Module downloadable via the official Magisk Module Manager and the <a href="https://github.com/Magisk-Modules-Repo/dnscrypt-proxy-magisk" target="_blank" rel="noopener">source code is available on GitHub</a>.

<img class=" size-full wp-image-3677 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/dnscrypt-proxy-2-for-android.png" alt="DNSCrypt Proxy 2 for Android" width="909" height="834" />

<!--more-->

<h2>Installing the Module</h2>

The install instructions (as you also can see on the screenshot) are given on the GitHub page. Like every other Magisk Module you download the Package you like to install, in our case the DNSCrypt Proxy 2 for Android package, install it and reboot your phone. Ensure the Module was activated and checked in the 'installed module' panel within the magisk manger and that's already it.

Right now the Module works on ARM and ARM64 supported devices.

<h2>Configuration</h2>

Normally you not need to configure anything here, since the <a href="https://github.com/jedisct1/dnscrypt-proxy/releases" target="_blank" rel="noopener">official binaries and configuration are used</a> you could go with it - but you might want to tweak this because you like to use your own or another resolver to query the DNS requests.

In the case you like to change something you can open the <code>/system/etc/dnscrypt-proxy/dnscrypt-proxy.toml</code> file with any text editor, some file manager like Solid Explorer coming with an integrated viewer/editor to edit the file as per your needs. The things which are changeable are documented via the <a href="https://github.com/jedisct1/dnscrypt-proxy/wiki/Basic-dnscrypt-proxy.toml-editing" target="_blank" rel="noopener">official documentation</a>.

[caption id="attachment_3678" align="aligncenter" width="965"]<img class=" size-full wp-image-3678 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/dnscryptproxy-android.png" alt="DNSCryptProxy Android" width="965" height="601" /> These are the configuration options, the .toml file is the DNSCrypt v2 configuration file, all other files are optional and you can configure a blacklist, cloaking and forwarding rules per your own needs.[/caption]

Another option would be to <a href="https://github.com/Magisk-Modules-Repo/dnscrypt-proxy-magisk/releases" target="_blank" rel="noopener">download the package manually</a>, open it and edit the configuration manually so that after you flashed the package you won't have to do the editing stuff in Android but keep in mind that whenever there is an update your configuration gets overridden unless you set it as 'read-only' in Android with your file manager.

<h2>Important things to know</h2>

<ol>
    <li>Android P gets DNS-over-TLS support then you might not need DNSCrypt-Proxy anymore, however keep in mind that this is controlled by Google and in case you distrust Google DNSCrypt-Proxy v2 is still good to go.</li>
    <li>The Magisk Module author is not the official developer, DNSCrypt-Proxy v2 related questions and problems needs to be discussed in the <a href="https://github.com/jedisct1/dnscrypt-proxy" target="_blank" rel="noopener">official channel.</a></li>
    <li>x86 support is from what I know not planned, but everything is possible. The binary just needs to be compiled with it, so everything is possible. Once there official binaries the module might adopt these changes and include them.</li>
    <li>The module is provided as it is, it doesn't fix known or additional reported problems and is just there to add DNSCrypt-Proxy v2 support into Android.</li>
</ol>

<h2>Closing Words</h2>

DNSCrypt-Proxy v2 on Android? Hell, yes - count me in! Thanks once again to the community which are working very hard to provide us security affine people which such good things.
