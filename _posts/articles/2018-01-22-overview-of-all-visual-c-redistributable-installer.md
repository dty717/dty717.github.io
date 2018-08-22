---
layout: post
title: Overview of all Visual C++ Redistributable Installer
date: 2018-01-22 22:08
author: nvinside
comments: true
categories: [Software, VCRedist, Windows]
---
When it comes to space I bitch-fight about every MB cause I have no HDD anymore and SSD isn't as cheap as the old HDD however, you might not like that each Microsoft provided Visual C++/Runtime installer needs around 100 MB or more to just extract some .dll files into the Windows Systems32/SysWOW64 dir. There are several solutions and I want to write about them to show if it's worth using them or not.

<img class=" size-full wp-image-2121 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/visual-c-aio-installeruninstaller-18-01-22.png" alt="Visual C++ AIO InstallerUninstaller 18.01.22" width="499" height="387" />

<!--more-->

<a href="https://baltagy1.blogspot.de/" target="_blank" rel="noopener">BALTAGY</a>, <a href="https://diakov.net/7451-microsoft-visual-c-2005-2008-2010-2012-2013-2015-redistributable-package.html" target="_blank" rel="noopener">Diakov</a>, <a href="http://repacks.net/forum/viewtopic.php?t=125" target="_blank" rel="noopener">repacks.net</a>,  <a href="https://www.wincert.net/forum/index.php?/files/file/48-microsoft-visual-2005-2017-bc-redistributable-x86x64-10172017-by-ricktendo/" target="_blank" rel="noopener">WinCert.net</a> are the well know places to check when it comes to such repacks. <a href="http://www.majorgeeks.com/files/details/visual_c_runtime_installer.html)" target="_blank" rel="noopener">Majorgeeks</a> or <a href="http://www.softpedia.com/get/Others/Signatures-Updates/Visual-C-Runtime-Installer.shtml" target="_blank" rel="noopener">Softpedia</a> often providing good mirrors without the need to login into unknown pages/forums or without the need to download unknown files from suspicious file-sharing hoster.

If you not familiar with the VCRedist background, read this <a href="https://www.howtogeek.com/256245/why-are-there-so-many-microsoft-visual-c-redistributables-installed-on-my-pc/" target="_blank" rel="noopener">article on HowToGeeks</a>.

<h2>Overview</h2>

<ul>
    <li>Microsoft Visual 2005-2017 B/C++ Redistributable x86/x64 By Ricktendo</li>
    <li>Visual C++ AIO by Wilenty</li>
    <li>Visual C++ Runtime Installer (All-In-One) by Burf</li>
    <li>
<p class="ipsType_pageTitle ipsContained_container"><span class="ipsType_break ipsContained">Microsoft Visual C ++ 2005-2008-2010-2012-2013-2017 Redistributable Package DC (basically a rip-off from Ricktendo with updated files released under another name)
</span></p>
</li>
    <li>
<p class="ipsType_pageTitle ipsContained_container"><span class="ipsType_break ipsContained">Microsoft Visual C++ Redistributable 2005-2018 Repack by BALTAGY
</span></p>
</li>
</ul>

These are the current ones which are usually getting updates here and then, mostly when MS decided to release new redistributable .dll files.

<h2>The good and bad using such packages</h2>

<h4>Pro</h4>

<ol>
    <li>Less HDD/SSD space waste</li>
    <li>Command Line installation possible</li>
    <li>Integration into OS repacks via e.g. NTLite or command line possible</li>
    <li>You always have the latest files</li>
    <li>Installation / Uninstall process easy</li>
    <li>Less download bandwidth</li>
    <li>More time for coffee</li>
</ol>

[caption id="attachment_2126" align="aligncenter" width="1125"]<img class=" size-full wp-image-2126 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/afterinstallation.png" alt="AfterInstallation" width="1125" height="634" /> Nice and clean, all latest files are installed - but you wasted as less as possible storage space![/caption]

<h4>Con</h4>

<ol>
    <li>Most repacks - if not all - getting replaced by the official ones, means if you install software which are bundled with their own VCRedist package runtime it ends up with the fact that there getting overridden and you waste HDD storage space again - One workaround is (if possible) to extract the software you want to install and remove the vcredist package and hope the Installer doesn't give you an error back.</li>
    <li>You must trust the repacker or check/verify the files yourself</li>
</ol>

You see there more pro arguments then con arguments, and the real problem is mostly only that external programs want to override the files.

<h2>What's the best package</h2>

I dunno, and it doesn't matter at the end because as long the files are the same (official .dll files from MS) and there the latest you can get the moment you install it, it should't matter. Wilenty and Burf are often ahead when it comes to updates, there both really fast, in most cases after Microsoft updated their official files they both immediately releasing new updates on the same day or week. Burf's package is more terminal based while Wilenty comes with an user interface, so it's up to you what you prefer but from the size, Burf's is the smallest to download.

Each of such repacks having their own 'charm' if you just want to get all the latest files while you recently fresh installed Windows, go with Burf's package, if you a guidance with a GUI I say try the Wilenty or <span class="ipsType_break ipsContained">BALTAGY</span> repack.

&nbsp;
