---
layout: post
title: Windows 10 17112 (RS4) – New Insider Build via Fast Ring
date: 2018-03-03 23:17
author: nvinside
comments: true
categories: [Insider Build, RedStone 4, RS 4, Windows 10, Windows 10 17112]
---
Yo, boys! Only 3 weeks until Redstone 4 so don't waste you time with this crappy build, anyway I will show you what's new and changed and for those who have no girlfriend a download link - so you have at least something to play with. 😜

<img class=" size-full wp-image-3206 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/redstone4.jpg" alt="Redstone4" width="1280" height="640" />

<!--more-->

<h2>General changes, improvements, and fixes for PC</h2>

<ul>
    <li>We fixed an issue where selecting a notification after taking a screenshot or game clip opened the Xbox app’s home screen instead of opening the screenshot or game clip.</li>
    <li>We fixed an issue where EFI and Recovery partitions were unexpectedly listed in Defragment and Optimize Drives.</li>
    <li>We fixed an issue optimizing drives in Defragment and Optimize Drives didn’t work in the last few flights.</li>
    <li>We fixed an issue resulting in a permanently black window if you dragged a tab out of a Microsoft Edge window, pulled it up to the top edge of the screen, and moved it back down and released it.</li>
    <li>We fixed an issue where the warning on Windows 10 S when trying to run non-Microsoft Store apps from File Explorer might end up stuck behind the File Explorer window.</li>
    <li>We fixed an issue where there was some unexpected extra space in the File Explorer navigation pane before the chevron icons to expand/collapse folders.</li>
    <li>We fixed an issue where if focus was set inside Action Center pressing Esc wouldn’t close the Action Center window.</li>
    <li>We fixed an issue that could result in ShellExperienceHost periodically waking the device from hibernate if active live tiles were pinned to Start.</li>
    <li>We fixed an issue where navigating to Settings &gt; System &gt; Focus Assist &gt; “Customize your priority list” could crash Settings.<a name="_GoBack"></a></li>
</ul>

<h2>Known issues</h2>

<ul>
    <li><strong>IMPORTANT: The Microsoft Store may be completely broken or disappeared altogether after upgrading to this build. <a href="https://aka.ms/17110Store">Please see this forum post</a> for details including a workaround on how to get the Microsoft Store back.</strong></li>
    <li>If you try to open a file that is available online-only from OneDrive that hasn’t been previously downloaded to your PC (marked with a green checkmark in File Explorer), your PC could bugcheck (GSOD). You can work around this problem by right-clicking on these files and selecting “Always keep on this device.” Any file-on-demand from OneDrive that is already downloaded to the PC should open fine.</li>
    <li>Post-install at the first user-prompted reboot or shutdown, a small number of devices have experienced a scenario wherein the OS fails to load properly and may enter a reboot loop state. For affected PCs, turning off fast boot may bypass the issue. If not, it is necessary to <a href="https://aka.ms/WIPBootISO">create a bootable ISO</a> on a USB drive, boot into recovery mode, and this this will allow bypass.</li>
    <li class="">When Movies &amp; TV user denies access to its videos library (through the “Let Movies &amp; TV access your videos library?” popup window or through Windows privacy settings), Movies &amp; TV crashes when the user navigates to the “Personal” tab.</li>
</ul>

<h2>Download</h2>

All builds, 32-bit, 64-Bit and ARM can be downloaded via WZT's + adguards mirror <a href="https://cloud.mail.ru/public/H9id/VAizbwpDs" target="_blank" rel="noopener">here</a>. The credits at this point goes to them for providing the download links and some new cat pictures.

Insider in the Fast-Ring should get the update already automatically since yesterday.

<h2>Problem with <span dir="auto">Hybrid-mode </span></h2>

The new build still has the issue with the Hybrid-mode so you need to turn it off. Start the command prompt with administrative rights and type in: <b>powercfg /hibernate off</b>  or <b>powercfg /H off.</b>

Or alternative via:

<b>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Power</b>

<ul>
    <li><b>HibernateEnabled</b> -&gt; 0</li>
</ul>

Or simply with the Power Options Menu under Windows.

<h3><span style="text-decoration:underline;">Source</span></h3>

<ul>
    <li>
<p class="post-title">Announcing Windows 10 Insider Preview Build 17112 for Fast (<a href="https://blogs.windows.com/windowsexperience/2018/03/02/announcing-windows-10-insider-preview-build-17112-fast/" target="_blank" rel="noopener">blogs.windows.com</a>)</p>
</li>
</ul>
