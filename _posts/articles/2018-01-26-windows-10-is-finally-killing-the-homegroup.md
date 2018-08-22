---
layout: post
title: Windows 10 is finally killing the Homegroup
date: 2018-01-26 14:00
author: nvinside
comments: true
categories: [Homegroup, Windows 10]
---
The latest Windows Insider build of Windows 10 removed the ability to join a HomeGroup. Originally a part of Windows 7 back in 2009 and continuing until now, HomeGroup was a way to share files and devices between computers on your network. Redstone 4 which arrives in 8 weeks will be the first final version which removed the function to join the HomeGroup - and I'm not sad about it!

<img class="alignnone size-full wp-image-2294" src="https://chefkochblog.files.wordpress.com/2018/01/serveimage1.jpg" alt="serveimage" width="695" height="425" />

<!--more-->

<blockquote>Whether it’s connecting PCs and printers on your home network via the Share functionality in Windows or using OneDrive to share a photo album of your last vacation, Windows 10 makes connecting multiple devices and sharing content streamlined and simple. And it’s because of that evolution that with today’s build you’ll start to see us retire the HomeGroup service.</blockquote>

I never really saw a reason to use Homegroup as opposed to just setting up actual share/NTFS permissions. But maybe for an average user, it made sense back in the day.

<h2>Alternative</h2>

A quick solution could be this in case you really miss this function would be:

<ul>
    <li>Set Ethernet or Wifi to <em>Private</em> on all PCs.</li>
    <li>Change advanced sharing settings to "<em>Turn On file &amp; Printer sharing</em>" and set to "use user accounts" rather than HomeGroup.</li>
    <li>Under All networks, turn off password protected sharing.</li>
    <li>Share the folder(s) or drive(s) necessary. Modify the security tab to add the Everyone object and set to read or modify permissions for Everyone as needed.</li>
    <li>Enable the share using advanced sharing and make the Share permission for Everyone match the NTFS permission.</li>
    <li>Map network drives or make a shortcut to <em>\\hostname\share</em> as needed.</li>
    <li>That's it!</li>
</ul>

As long as his Wifi isn't open or shared with neighbors, then only people ON his network would be able to get to the shares. No password prompts ever, no need to have a user account on each machine with the same user/pass or anything like that.

Of course, it's not the most secure way to do it but it's a quick solution if you not want to install another provider or trust another service/NAS - and it does its job.

<span style="text-decoration:underline;"><strong>Resource</strong></span>

<ul>
    <li>Announcing Windows 10 Insider Preview Build 17063 for PC (<a href="https://blogs.windows.com/windowsexperience/2017/12/19/announcing-windows-10-insider-preview-build-17063-pc/#diJmRZyF6E4wCiIV.97">blogs.windows.com</a>)</li>
    <li>
<p class="post-title">How to: Remove Homegroup on Windows 10 (<a href="https://windowsreport.com/remove-homegroup-windows-10/">windowsreport.com</a>)</p>
</li>
</ul>

&nbsp;
