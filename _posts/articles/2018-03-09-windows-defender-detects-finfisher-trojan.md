---
layout: post
title: Windows Defender detects FinFisher trojan
date: 2018-03-09 12:36
author: nvinside
comments: true
categories: [FinFisher, Microsoft, Staatstrojaner, windows defender]
---
<a href="https://cloudblogs.microsoft.com/microsoftsecure/2018/03/01/finfisher-exposed-a-researchers-tale-of-defeating-traps-tricks-and-complex-virtual-machines/" target="_blank" rel="noopener">Microsoft released their final analysis report</a> which shows that Office / Windows Defender detecting FinFisher. Security experts explained that the detection of the latest variant of FinFisher was 'complex' and required to build new strategies to detect the obfuscated code.

[caption id="attachment_3422" align="alignnone" width="1024"]<img class="alignnone size-full wp-image-3422" src="https://chefkochblog.files.wordpress.com/2018/03/windows-defender-detects-finfisher.png" alt="Windows Defender detects FinFisher" width="1024" height="635" /> FinFisher detected by Windows Defender. Picture Source: cloudblogs.microsoft.com[/caption]

<!--more-->

<h2>FinFisher sold to everyone which pays for it</h2>

FinFisher is sold to law-enforcement agencies around the world and its maker, European firm Gamma Group, has been criticized for selling it to repressive regimes, basically everyone who pays for it gets it.

Last year, researchers at FireEye <a href="http://www.zdnet.com/article/microsoft-patches-office-zero-day-used-to-spread-finspy-surveillance-malware/">discovered FinFisher being distributed in Word documents</a> loaded with an attack for an Office zero-day targeting Russian-speaking victims.

<h2>Spaghetti code harder to detect</h2>

One problem was that FinFisher used several emulation tricks and spaghetti code to obfuscate this real behavior they want to confuse disassembly programs. 6 stages until the malware payload has been executed must be defeated in order to reveal his real purpose.

<h2>Defense mechanism against FinFisher</h2>

Microsoft detailed article shows which programs and techniques are effective against FinFisher however, it's also stated that the research could help others to find better ways to detect it - you can bet on it that the developers are going to improve their malware constantly because there getting lots of money from the government and other organizations.

<ul>
    <li><a href="https://products.office.com/en-us/exchange/online-email-threat-protection?ocid=cx-blog-mmpc" target="_blank" rel="noopener">Office 365 Advanced Threat Protection</a></li>
    <li><a href="https://www.microsoft.com/en-us/windowsforbusiness/windows-atp?ocid=cx-blog-mmpc" target="_blank" rel="noopener">Windows Defender Advanced Threat Protection</a></li>
    <li>In additional Windows Defender ATP now also is capable of detecting different attack techniques used by FinFisher, such as memory injection or dll injection.</li>
</ul>

<h2>Conclusion</h2>

Windows Defender is as powerful as all other AV products and constantly (same like all other AV products) regularly gets it's signature and program updates and new features. In my opinion it's a good advice to let it activated and running in the background, ensure you review the options and set them per your needs.

<h3>Is Windows Defender powerful enough?</h3>

I think the FinFisher example here speaks for itself, Microsoft did a good job, they also released their research for others and I'm sure everyone is already working on better techniques to detect such malware. I think for the normal user Windows Defender is good enough it does the same job like other AV products. The real world tests on my end proofing that WD is in combination with a good firewall and some Group Policy changes powerful enough to compete against the current online threats.
