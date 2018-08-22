---
layout: post
title: Sandboxie 5.24 adds Support for Secure Boot
date: 2018-03-14 11:44
author: nvinside
comments: true
categories: [Sandboxie, Security, Software]
---
The new Windows <a href="http://www.sandboxie.com/" target="_blank" rel="noopener">Sandboxie</a> version is out, the biggest change seems to be that it finally added a feature what was requested by the community for a long time now - <a href="https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface#SECURE-BOOT" target="_blank" rel="noopener">Secure Boot</a>.

[caption id="attachment_3783" align="aligncenter" width="1034"]<img class=" size-full wp-image-3783 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/sandboxie-5-24.png" alt="Sandboxie 5.24" width="1034" height="325" /> Sandboxie Control Window. Picture Source Softpedia.[/caption]

<!--more-->

<h2>Changelog</h2>

<a href="https://www.sandboxie.com/VersionChanges#v_5.24" target="_blank" rel="noopener">Version 5.24</a> adds several new things, like Favicons support, Secure Boot &amp; code improvements since the code now switched to the Visual Studio 2015 IDE.

Among these changes a lot of bug and several crashes got fixed.

<ul>
    <li>Added support for Secure Boot.</li>
    <li>Fixed Win 7-64 Sbie driver load failure with KB4056897 /KB4056894.</li>
    <li>Fixed BSOD in Win 10-32 CU with KB4074592.</li>
    <li>Fixed Win 10-32 FCU dllhost.exe / sbiedll.dll initialization fail.</li>
    <li>Fixed crash in Windows 10 FR Build 17035 and added support for FR up to 17101.</li>
    <li>Fixed BSOD with Print2Flash install.</li>
    <li>Fixed Office 2013-C2R failure to start.</li>
    <li>Source code updated to Visual Studio 2015.</li>
    <li>Added support for Firefox Favicons (Right-click on your Sandbox --&gt; Sandbox Settings--&gt; Applications ---&gt; Web Browser ---&gt; Firefox --&gt; Allow direct access to Firefox bookmark and history database).</li>
    <li>Addressed an issue in which Opera 51/Chrome v64 dev/Canary were crashing when Sandboxed [viewtopic.php?p=130933#p130933]</li>
    <li>For x86 systems --&gt; If you encounter "SBIE2335 Initialization failed for process Start.exe [11 / 87]" after creating a new Sandbox/installing this beta, please allow 30 seconds to go by, then re-try the action. This is being investigated.</li>
</ul>

<h2>Secure Boot</h2>

Since version 5.24, Sandboxie is now able to work with Secure Boot together, which means you don't need to disable it anymore to fear negative things like crashes or that the program won't work at all. This was all fixed in the latest release and

<h2>FireJail - Linux alternative</h2>

The open source software <a href="https://firejail.wordpress.com" target="_blank" rel="noopener">FireJail</a>, is for Linux user a good and free alternative which is till under active development. It offers similar functions like Sandboxie and is also as small in size so you won't have to install heavy products in both situations.

<h2>Download</h2>

<a href="https://www.sandboxie.com/SandboxieInstall.exe" target="_blank" rel="noopener">https://www.sandboxie.com/SandboxieInstall.exe</a> | For x86 and X64 systems, around 5,37 MB (<a href="https://www.sandboxie.com/AllVersions.php" target="_blank" rel="noopener">MD5/SHA1</a>)

<h2>Closing Words</h2>

Sandboxie gets my recommendation on Windows and should be preferred over any AV because this kind of security layer is in my opinion much better because no matter if you get infected or not, closing the isolated sandbox removes everything which is maybe not offered by AV products because at some point every product will be bypassed with some unknown malware soon or later.

The product is not freeware but you can test it on a trial period, since Sandboxie is here and there on a sale I see no argument to not buy it because it's worth. The work with the product might be a bit complicated at the beginning but once you read the <a href="https://www.sandboxie.com/FrequentlyAskedQuestions" target="_blank" rel="noopener">documents</a> and got used to it you will quickly make bigger steps forward in a more secure Windows.

<h3><span style="text-decoration:underline;">Source</span></h3>

<ul>
    <li>Sandboxie 5.24 Released  (<a href="https://forums.sandboxie.com/phpBB3/viewtopic.php?f=2&amp;t=25557" target="_blank" rel="noopener">forums.sandboxie.com</a>)</li>
</ul>

&nbsp;
