---
layout: post
title: Microsoft Security Updates March 2018 Edition
date: 2018-03-13 20:10
author: nvinside
comments: true
categories: [KB4000825, KB4056564, KB4073011, KB4087398, KB4088776, KB4088782, KB4088785, KB4088827, KB4088875, KB4088876, KB4088878, KB4088879, KB4088880, KB4089082, KB4089175, KB4089187, KB4089229, KB4089344, KB4089453, KB4089694, KB4090450, Microsoft, patchday, Security, Windows]
---
Microsoft today released a bunch of new updates - for all Windows Builds. The March 2018 Patchday is as expected and there <em>this time</em> no surprises. As always you can download and install the latest updates manually via the MS update catalog or via WUS.

<img class=" size-full wp-image-3725 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/microsoft-patchday-neu.png" alt="Microsoft-Patchday-Neu.png" width="660" height="330" />

<!--more-->

<h2>Overview</h2>

Microsoft has updated its own Security Advisory <a href="https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/ADV180002">ADV180002 Guidance to mitigate speculative execution side-channel vulnerabilities</a>.

<a href="https://support.microsoft.com/km-kh/help/4088876/windows-81-update-kb4088876" target="_blank" rel="noopener">KB4088876</a> (<span style="text-decoration:underline;">Spectre and Meltdown</span>)

This update provides cumulative Spectre and Meltdown protections for 32-Bit (x86) and 64-Bit (x64) versions of Windows except the <a href="https://support.microsoft.com/en-us/help/4078130" target="_blank" rel="noopener">KB4078130</a> update that was offered to disable mitigation against Spectre Variant 2, however this doesn't mean that these are microcode updates because Microsoft not integrates those things in security or rollup related patches.

<h2>Downloads</h2>

All downloads are also available via WUS right now or are been rolled out during the next hours.

<h3>Windows 10</h3>

<ul class="ticker">
    <li>
<p class="ticker__body"><a href="https://support.microsoft.com/en-us/help/4090913/march5-2018kb4090913osbuild16299-251" target="_blank" rel="noopener">Windows 10 KB 1709 (Build 16299.309)</a></p>
</li>
    <li>
<p class="ticker__body"><a href="https://support.microsoft.com/en-us/help/4092077/march8-2018kb4092077osbuild15063-936" target="_blank" rel="noopener">Windows 10 KB 1703 (Build 15063.966) </a></p>
</li>
    <li>
<p class="ticker__body"><a href="https://support.microsoft.com/en-us/help/4077525" target="_blank" rel="noopener">Windows 10 KB 1607 (Build 14393.2125)</a></p>
</li>
    <li>
<p class="ticker__body"><a href="https://support.microsoft.com/en-us/help/4000824/windows-10-update-history-version-1511" target="_blank" rel="noopener">Windows 10 KB 1511 (Build 10586.1478)</a></p>
</li>
    <li>
<p class="ticker__body"><a href="https://support.microsoft.com/help/4091666" target="_blank" rel="noopener">Windows 10 KB 1507 (Build 10240.17797)</a></p>
</li>
    <li><a href="https://support.microsoft.com/kb/890830" target="_blank" rel="external noopener noreferrer">KB890830</a> aka <a href="https://www.microsoft.com/en-us/download/malicious-software-removal-tool-details.aspx" target="_blank" rel="noopener">Windows Malicious Software Removal Tool</a> - March 2018</li>
</ul>

<strong>Windows 8.1 and Windows Server 2012 R2</strong>

<ul>
    <li><a href="https://www.catalog.update.microsoft.com/Search.aspx?q=KB4088876" target="_blank" rel="external noopener noreferrer">KB4088876</a></li>
    <li class="c-heading-3 article-heading ng-binding ng-scope"><a href="https://www.catalog.update.microsoft.com/Search.aspx?q=KB4088879" target="_blank" rel="external noopener noreferrer">KB4088879</a></li>
</ul>

<strong>Windows 7 SP1 &amp; Windows Server 2008 R2 SP</strong>

<ul>
    <li><a href="https://www.catalog.update.microsoft.com/Search.aspx?q=KB4088875" target="_blank" rel="external noopener noreferrer">KB4088875</a></li>
    <li><a href="https://www.catalog.update.microsoft.com/Search.aspx?q=%20KB4088878" target="_blank" rel="external noopener noreferrer">KB4088878</a></li>
</ul>

<strong>Realtek HD Audio v6.0.1.8393 WHQL for Win 7 - Win 10</strong>

<ul>
    <li>Microsoft also released another Realtek driver update today over WUS. YOu can recieve the driver over WUS directly or manually <a href="https://www.catalog.update.microsoft.com/Search.aspx?q=6.0.1.8393" target="_blank" rel="noopener">here</a>.</li>
</ul>

<strong>Adobe Flash Player Update</strong>

<ul>
    <li><a href="http://download.windowsupdate.com/c/msdownload/update/software/secu/2018/03/windows10.0-kb4088785-x64_77dd9446e174111825db27d31e1ebd7834e7e31a.msu" target="_blank" rel="noopener">windows10.0-kb4088785-x64.msu</a></li>
    <li><a href="http://download.windowsupdate.com/d/msdownload/update/software/secu/2018/03/windows10.0-kb4088785-x86_0918d009b62c115b790b61c9f398442dde33e797.msu" target="_blank" rel="noopener">windows10.0-kb4088785-x86.msu</a></li>
</ul>

<h2>Closed vulnerabilities</h2>

<ul>
    <li><strong>Windows 10 version 1709</strong>: 24 vulnerabilities</li>
    <li><strong>Windows 10 version 1703</strong>: 28 vulnerabilities</li>
    <li><strong>Windows 10 version 1607</strong>: 29 vulnerabilities</li>
    <li><strong>Windows 8.1</strong>: 20 vulnerabilities</li>
    <li><strong>Windows 7</strong>: 21 vulnerabilities</li>
    <li><strong>Internet Explorer 11</strong>: 7 vulnerabilities, 2 critical and 5 important</li>
    <li><strong>Microsoft Edge</strong>: 16 vulnerabilities, 12 critical and 4 important</li>
</ul>

<h2>Known Issues</h2>

The following issue are known for Windows 7 and Windows 8.1. Windows 10 has <em>no known issue</em> this time (the error 0x80070643 is by itself not really related the update, so I won't see it as issue but I list it because MS does).

<ul>
    <li>(Windows 10) Windows Update History reports that KB4054517 failed to install because of error 0x80070643. You can manually check via winver (RUN Command) if the update was installed or not.</li>
    <li>(Windows 7) SMB Servers may leak memory after installing the update.</li>
    <li>(Windows 7) Stop error on machines with the Physical Address Extension (PAE) mode disabled. This update is not delivered to x86 systems with PAE disabled!</li>
    <li>(Windows 7) Stop error on machines not support Single Instructions Multiple Data (SIMD) Extensions 2 (SSE2).</li>
    <li>(Windows 7 and 8.1) No updates for systems without compatible AntiVirus solution or Registry key set - This still requires the AV registry workaround.</li>
</ul>

<h2>Closing Words</h2>

This Patchday is so far without any reports which means you can go ahead and install the updates without been worried about consequences.

I found nothing which had a negative impact on my test machines. Surprisingly the 'dead' Office 2007 got updates even if it's end of life.

<h3><span style="text-decoration:underline;">Source &amp; Resource</span></h3>

<ul>
    <li>March 2018 Windows security update – Expanding our efforts to protect customers (<a href="https://blogs.windows.com/windowsexperience/2018/03/13/march-2018-windows-security-update-expanding-our-efforts-to-protect-customers/#ARtTE1uLUvjkXEL3.97" target="_blank" rel="noopener">blogs.windows.com</a>)</li>
    <li>Intel’s Microcode Revision Guidance (<a href="https://newsroom.intel.com/wp-content/uploads/sites/11/2018/03/microcode-update-guidance.pdf" target="_blank" rel="noopener">newsroom.intel.com [PDF]</a>)</li>
    <li>March security updates expand Meltdown-Spectre protection for Windows (<a href="http://www.zdnet.com/article/march-security-updates-expand-meltdown-spectre-protection-for-windows/" target="_blank" rel="noopener">zdnet.com</a>)</li>
    <li>THE MARCH 2018 SECURITY UPDATE REVIEW (<a href="https://www.zerodayinitiative.com/blog/2018/3/13/the-march-2018-security-update-review" target="_blank" rel="noopener">zerodayinitiative.com</a>)</li>
    <li>
<p class="entry-title">March 2018 Office Update Release (<a href="https://blogs.technet.microsoft.com/office_sustained_engineering/2018/03/13/march-2018-office-update-release/" target="_blank" rel="noopener">blogs.technet.microsoft.com</a>)</p>
</li>
    <li>SANS ISC InfoSec Forums - Microsoft March 2018 Patch Tuesday (<a href="https://isc.sans.edu/forums/diary/Microsoft+March+2018+Patch+Tuesday/23441/" target="_blank" rel="noopener">isc.sans.edu</a>)</li>
</ul>
