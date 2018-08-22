---
layout: post
title: Microsoft released another out-of-patchday Update - KB4092077
date: 2018-03-09 05:36
author: nvinside
comments: true
categories: [KB4092077, Windows 10]
---
Microsoft acting really weird recently, there rolling a lot of updates out which are not available via WUS or there released out of nowhere without any announcement. Cumulative Update KB4092077 was now released and is right now manually downloadable.

<img class=" size-full wp-image-1851 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/windows-10-840894.jpg" alt="Windows-10-840894" width="590" height="350" />

<!--more-->

<div class="ng-scope">
<h2 class="c-heading-4 f-lean bold ng-binding">Improvements and fixes</h2>
</div>

<div>
<div>
<div>
<ul>
    <li>Addresses issue where, after installing this update, some localized devices have incorrect strings or unusual behavior in different areas of the user interface (UI) that make the UI unusable.</li>
</ul>
Sounds really cryptic too me but yeah okay, we have to accept this which means it's a quality improvement update only aka bugfix release.

The update also needs the <em>Antivirus Workaround</em>, why this is still wrongly listed as 'known issue' is beyond me.
<pre>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\QualityCompat
cadca5fe-87d3-4b96-b7fb-a231484277cc value must be set as 0.</pre>
The update itself is for 1703 Windows Builds only and changes your Windows build version to 15063.936.
<h2>Final Words</h2>
Another update which was released without 'warning' this is really strange because I expect such things to be happening when a patchday has arrived and not when Microsoft is in the <em>mood</em> to fix something. I see it positive that Microsoft is working constantly on the OS to improve the product but quality updates should be more coming to their focus which means, release only planned updates on a patchday - and only release something urgent - for everyone via WSUS. Please don't do such 'manual' downloadable KB things like this, I think that's what most people don't like because a fix should be always available for everyone and not only the ones which monitor Microsoft KB update behavior.

</div>
</div>
</div>

<h2>Download</h2>

<ul>
    <li><a href="http://download.windowsupdate.com/d/msdownload/update/software/updt/2018/03/windows10.0-kb4092077-x64_4f5c797d7df50069c74624ce2e9f059e1941ee04.msu" target="_blank" rel="noopener">windows10.0-kb4092077-x64.msu</a> around 1043,0 MB</li>
    <li><a href="http://download.windowsupdate.com/d/msdownload/update/software/updt/2018/03/windows10.0-kb4092077-x86_158f301d6196741db86329b3ad9d8a92ca554bd7.msu" target="_blank" rel="noopener">windows10.0-kb4092077-x86.msu</a> around 607,5 MB</li>
</ul>

<h3><span style="text-decoration:underline;">Source</span></h3>

<ul>
    <li>March 8, 2018—KB4092077 (OS Build 15063.936) (<a href="https://support.microsoft.com/en-us/help/4092077/march8-2018kb4092077osbuild15063-936" target="_blank" rel="noopener">support.microsoft.com</a>)</li>
</ul>
