---
layout: post
title: How to create a WinPE or ISO
date: 2018-02-01 17:40
author: nvinside
comments: true
categories: [Tutorials, Windows, WinPE]
---
Okay, you might want to create a WinPE - well you don't know what that is? Don't worry we're all here to learn, so let's start with the basics.

<img class="wp-image-2511 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/windows-pe.jpg" alt="windows-pe" width="305" height="308" />

<!--more-->

<h2>Why WindowsPE?</h2>

WinPE has the following uses according to <a href="https://en.wikipedia.org/wiki/Windows_Preinstallation_Environment">Wikipedia</a>:

<ul>
    <li>Deployment of workstations and servers in large corporations as well as pre-installation by system builders of workstations and servers to be sold to end users.</li>
    <li>Recovery platform to run 32-bit or 64-bit recovery tools such as Winternals ERD Commander or Windows Recovery Environment (Windows RE).</li>
    <li>Platform for running third-party 32-bit or 64-bit disk cloning utilities.</li>
</ul>

Or in other words, it's a modern replacement for old DOS days which allows you to play with the OS and third-party apps while you're testing something, besides this little gimmick it provides you with recovery options which are useful in case something happened.

<h2>Requirements</h2>

<ul>
    <li>Download the latest <b><a href="https://developer.microsoft.com/en-us/windows/hardware/windows-assessment-deployment-kit" rel="nofollow noopener">Windows 10 ADK</a></b> (Assessment and Deployment Kit) or <b><a href="https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewADK" rel="nofollow noopener">Windows Insider Preview ADK</a>.</b></li>
    <li>You may, of course, install the full ~7 GB ADK - you only need components <b>Deployment Tools</b> and <b>Windows Preinstallation Environment</b>:</li>
</ul>

<img class="alignnone size-full wp-image-2507" src="https://chefkochblog.files.wordpress.com/2018/02/174821d1517226761-create-winpe-iso-image.png" alt="WinPE Installation" width="746" height="548" />

<h2>Installation</h2>

<img class="alignnone size-full wp-image-2508" src="https://chefkochblog.files.wordpress.com/2018/02/174822d1517226747-create-winpe-iso-image.png" alt="Run as admin" width="721" height="427" />

After you installed the program, start the command prompt with administrative privileges.

Create WinPE files with the following command:

&nbsp;

[caption id="attachment_2509" align="alignnone" width="740"]<img class="alignnone size-full wp-image-2509" src="https://chefkochblog.files.wordpress.com/2018/02/174822d1517226747-create-winpe-iso-image1.png" alt="174822d1517226747-create-winpe-iso-image" width="740" height="196" /> <code>MARKDOWN_HASHe0673ed22522ac96d22d9f6b514490ecMARKDOWN_HASH</code>[/caption]

&nbsp;

<b> </b>Plug in a clean USB flash drive and enter following command, replacing path D:\WinPEx64 with actual path to folder where you created the PE files, and drive letter I: with the actual drive letter of your USB drive: <b><code>MakeWinPEMedia /UFD D:\WinPEx64 I:</code></b>

If you want to create a WinPE ISO, change the <b>/UFD</b> switch to <b>/ISO</b> and add path and filename where you want to create the ISO file:

<b><code>MakeWinPEMedia /ISO D:\WinPEx64 F:\WPE64.iso</code></b>

You will be warned that the USB flash drive will be formatted, Accept with <b>Y</b>:

<img class="alignnone size-full wp-image-2510" src="https://chefkochblog.files.wordpress.com/2018/02/image.png" alt="image" width="979" height="512" />

That's it, you are done with the process now you can boot into you created media.
