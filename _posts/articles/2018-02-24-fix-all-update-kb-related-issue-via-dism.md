---
layout: post
title: Fix all Update (KB) related issue via DISM
date: 2018-02-24 13:42
author: nvinside
comments: true
categories: [DISM, Tips and Tricks, Windows]
---
There might be a problem with an update and you need to get rid of it, that's the reasons I write this little guide here to show what you really can remove a specific update, even if it's not listed in the 'view installed update list'. Microsoft already gave us from the beginning to ability to uninstall the updates and this process can be easy when you use the Deployment Image Servicing and Management (<a href="https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/what-is-dism" target="_blank" rel="noopener">DISM.exe</a>) tool - which comes included in every Windows 7 or a higher version.

<img class="alignnone size-full wp-image-3023" src="https://chefkochblog.files.wordpress.com/2018/02/maxresdefault2.jpg" alt="maxresdefault" width="1280" height="720" />

The article here addresses the issue how to get rid of a specific KB (Update) and shows some more DISM commands to fix broken Windows online images. With a few tricks in the Windows Deployment Image Servicing and Management command utility, admins can solve some of the most common Windows 10 update problems plaguing their users.

<!--more-->

DISM is really powerful and is well documented in the official Microsoft docs, which you can find right <a href="https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/deployment-image-servicing-and-management--dism--command-line-options" target="_blank" rel="noopener">here</a>. There is an unofficial GUI utility for it in case you're not really a friend of the command line which is called <a href="https://www.chuyu.me" target="_blank" rel="noopener">DISM++</a> developed by a Chinese guy since several years but it's not really needed because the command line parameters are very easy to understand and as already mentioned, well documented,

<h2>Identify the installed cumulative updates (KB)</h2>

First, we need to find the list of packages installed on the PC with the issue by performing this command

<div class="codecontent"><code>dism /online /get-packages /format:table</code></div>

<div></div>

Alternative you can use this to get a better view

<div class="codecontent"><code>dism /online /get-packages /format:table &gt; patches.txt</code></div>

This will generate a list called 'patches.txt' were you can see all installed updates or hotfixes.

<h2>Remove the problematically KB</h2>

<div class="codecontent">Let's say you want to remove the Package_for_KB2870699~31bf3856ad364e35~amd64~~6.2.1.1 package, then use the following command to silently remove it:</div>

<div class="codecontent"><code>DISM.exe /Online /Remove-Package /PackageName:Package_for_KB2870699~31bf3856ad364e35~amd64~~6.2.1.1 /quiet /norestart</code></div>

<div></div>

<div>You could use this command in a batch script in case you want to remove more than one update, the hardest process is to find the exact name but with the given method you just need to look at KB number to identify which package you need to remove. If you want to get rid of a hotfix this is a little bit more complicated because there is no specific identification given and the names are random, so before you install a hotfix, ensure you make a list of the currently installed updates and compare it against the list after you installed the hotfix.</div>

<h2>Other useful commands</h2>

Displays a basic Help and stores it into a file

<code>dism /? dism /mount-wim /? &gt;C:\dismhelp.txt
</code>
Display a list of all the Windows images contained:

<code>dism /get-wiminfo /wimfile:
</code>
Mount an Windows image:

<code>dism /mount-wim /wimfile: /index:1 /mountdir:c:\mount
</code>
Image status/cleanup:

<code>dism /get-mountedwiminfo if okay remount the image dism /remount-wim /mountdir: dism /cleanup-wim</code>

Add all drivers from a folder:

<code>dism /image:c:\mount /add-driver /driver:c:\drivers
</code>
Add all drivers from top-level folders and all folders below:

<code>dism /image:c:\mount /add-driver /driver:c\drivers /recurse
</code>
Add specific driver:

<code>dism /image:c:\mount /add-driver /driver:c:\drivers\mydriver.inf
</code>
Add unsigned driver:

<code>dism /image:c:\mount /add-driver /driver:c:\drivers\mydriver.inf /forceunsigned
</code>
List of all drivers:

<code>dism /image:c:\mount /get-drivers dism /image:c:\mount /get-drivers /format:table</code>

Get a specific driver info:

<code>dism /image:c:\mount /get-driverinfo /driver:c:\drivers\usb\usb.inf
</code>
Remove a driver:

<code>dism /image:c:\mount /remove-driver /driver:oem1.inf
</code>
Remove multiple drivers:

<code>dism /image:c:\mount /remove-driver /driver:oem1.inf /driver:oem2.inf
</code>
For large drivers (eg nVidia)
<code>dism /image:c:\mount /add-driver /driver:c:\drivers\nvidia /forceunsigned /scratchdir:c:\temp dism /image:c:\mount /add-driver /driver:c:\drivers\ /recurse /scratchdir:c:\temp</code>

Add specific Packages:

<code>dism /get-wiminfo /wimfile: dism /mount-wim /wimfile: /name:”Windows 7 HomeBasic” /mountdir:c:\mount dism /image:c:\mount /add-package /packagepath:c:\packages\package1.cab /packagepath:c:\packages\package2.cab dism /unmount-wim /mountdir:c:\mount /commit</code>

Add an MSU update (replace the XXXXX with your KB number of the update you like to install)

<code>dism /image:c:\mount /add-package /packagepath:c:\updates\xxxxx.msu
</code>
Add all updates from a folder:

<code>dism /image:c:\mount /add-package /packagepath:c:\updates
</code>

Manage Windows features:

<code>dism /online /get-features | more dism /online /enable-feature /featurename: dism /online /disable-feature /featurename:&lt;add-you-feature-you'll-like-to-remove-here&gt;</code>

Fix SFC problems and scan your image for problems:

<code>DISM /Online /Cleanup-Image /RestoreHealth
</code>

There are a lot of more useful command lines which you could use but I think these are the most used ones which help to fix or modify your image.

<h2>Final Words</h2>

A small utility called DISM is really powerful and it helps to fix a lot of troubles, it's not hard to use, just ensure you start DISM via administrative privileges to get access to everything and then you can repair most of all Windows issue if you aware of the right parameters, of course, some situations are not fixable but these are normally really rare and most of the time the user itself caused such bigger problems by himself.

Fixing troubles and modding an image is more or less easily possible with DISM and it's really a lifesaver and a swiss knife in several situations.

&nbsp;
