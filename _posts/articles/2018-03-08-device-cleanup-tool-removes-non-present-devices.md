---
layout: post
title: Device Cleanup Tool removes non Present Devices
date: 2018-03-08 23:33
author: nvinside
comments: true
categories: [Device Cleanup Tool, Review, Software, Windows]
---
This is a short review of the freeware tool developed by Uwe Sieber called 'Device Cleanup Tool'.

<img class=" size-full wp-image-3379 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/device-cleanup-tool.jpg" alt="Device Cleanup Tool" width="557" height="361" />

<!--more-->

<h2>Why do I need another tool?</h2>

First of all it's only one single executable with another single file which is a readme file to introduce the program and show some basic information. So it's a portable little utility and doesn't waste any space, you won't need to install it and it's click'n'run.

Windows (no matter which version) for no reason left the old devices in the Device Manager even if you never use the device anymore, there is no timer or option to configure this and the problem here is that you might have a driver conflict or search for a specific device/driver within the Windows own Device Manager and then you see bunch of leftover devices in the list. You and Windows might get confused and Windows first looks in the own driver database for a proper driver - this can cause some problems if there is no driver for this available or an older device is present which causes some troubles. In this case this little utility can help to solve the problem because it easily let's you remove a specific device (or every one with only few clicks).

<h2>What's wrong with the Windows Device Manager?</h2>

Nothing, you also can remove all the old devices manually but it takes more time since there is no specific option given and you need to enable "Show hidden devices" first in order to see them.

[caption id="attachment_3380" align="aligncenter" width="780"]<img class=" size-full wp-image-3380 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/windows-device-manager.png" alt="Windows Device Manager" width="780" height="292" /> Windows own Device Manager also shows old devices with two clicks.[/caption]

The Device cleanup utility is more comfortable but it's not perfect because the following things are missing or needs to be improved:

<ol>
    <li>There is no 'Deselect all' function</li>
    <li>It doesn't has an option to remove the entire driver (like Windows when an external driver [eg. from WSUS] is used)</li>
    <li>Instead of giving you an option 'Restart as Adminstrator' the program should always require administrative privileges in the first place because Windows won't allow you to remove drivers/devices without administrative rights. A workaround here is to right-click on the program - Properties - Compatibility and check the 'Run this program as Adminstrator' to avoid manually restarting the program to gain the necessary admin rights.</li>
</ol>

These are the known weaknesses of this little program but function wise it does what it promises, you can remove old devices easier than with the Windows own mechanism. A cleanup function would be preferable with upcoming Windows Redstone releases but from what I know no one every did such a feature request because removing old devices doesn't increase your overall PC performance and besides the cosmetic aspect and driver related aspect it doesn't really matter - maybe this could be the reason why Microsoft never improved this function.

<h2>Conclusion</h2>

Device Cleanup Tool can help you in rare situations or if you like your Device Manager 'clean' but it doesn't really offer any feature which the integrated Device Manger not already have since earlier Windows versions.

Because of the mentioned reason the program can't get my full recommendation however, it has it's purpose and there are two rare scenarios which I mentioned when it could help but in most situations you can handle such driver related problems yourself better than Windows.
