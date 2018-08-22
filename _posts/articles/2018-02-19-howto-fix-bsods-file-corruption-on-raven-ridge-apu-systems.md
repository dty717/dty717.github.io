---
layout: post
title: Howto fix BSODs & File Corruption on Raven Ridge APU Systems
date: 2018-02-19 16:41
author: nvinside
comments: true
categories: [AMD, BSOD, Raven Ridge APU, tutorial, Tutorials]
---
This guide addresses the issue with AMD Raven Ridge APUs (R3 2200G, R5 2400G) which also includes fixes for the "video_TDR_failure" blue screen of death (BSOD). <strong>Everything can be fixed</strong> - that is the good news, the bad news is that some things might need BIOS adjustments from the manufacturer to really solve the performance issue people reported to me or in the forums.

<img class="  wp-image-2912 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/ryzen5_ravenridge-01-300x160.jpg" alt="Ryzen5_RavenRidge-01-300x160" width="398" height="212" />

<!--more-->

I will quickly summarize the problems and how you quickly solve them, keep in mind that all get fixed with the upcoming updates!

<h2>The symptoms</h2>

<ul>
    <li>Video_TDR_Failure BSOD (<span style="text-decoration:underline;">biggest</span> one I think)</li>
    <li>Large network file transfer BSOD on MSI motherboards</li>
    <li>On-board wireless BSOD on MSI boards (needs a BIOS upgrade to solve)</li>
    <li>1703 freeze/hang or BSOD - GPUZ BSOD</li>
    <li>Windows Timer Bug with MSI boards (Windows fix coming with the next patchday)</li>
    <li>3DMark installation corruption (requires the latest software update to fix it)</li>
    <li>Some boards eg ASRock Pro4, are still severely lacking in IGP tuning options (BIOS update required)</li>
</ul>

<h2>The fix</h2>

<ol>
    <li>Clean install (not UPGRADE!) Windows 10</li>
    <li>Download the latest chipset + graphic drivers</li>
    <li>Install first the chipset driver and then the graphics driver! This is important!</li>
    <li>That's already the entire magic, some people might mix this and getting troubles.</li>
</ol>

The rest of the mentioned things need an upcoming or an already released software or BIOS update.

<h2>Conclusion</h2>

<span style="color:#ff0000;">These issues are happening because of programs haven't updated for Raven Ridge. This has nothing to do with AMD's APUs!</span> The tricky part is the software - the chipset/graphics install order, anyway I hope this helps some people.
