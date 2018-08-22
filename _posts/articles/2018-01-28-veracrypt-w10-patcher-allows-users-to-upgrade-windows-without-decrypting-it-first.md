---
layout: post
title: veracrypt-w10-patcher allows users to upgrade Windows without decrypting it first
date: 2018-01-28 16:00
author: nvinside
comments: true
categories: [Software, VeraCrypt]
---
The <a href="https://github.com/th-wilde/veracrypt-w10-patcher">veracrypt-w10-patcher project</a> is something which I wished would be integrated native into VeraCrypt, it allows the user to upgrade their Windows without the need to decrypt the system drive first.

<img class="alignnone size-full wp-image-2343" src="https://chefkochblog.files.wordpress.com/2018/01/veracrypt-w10-patcher.png" alt="VeraCrypt W10 Patcher" width="993" height="894" />

<!--more-->

<h2>How does it work?</h2>

The script simply prepares Windows for the upgrade, it works with all Windows major upgrades until Windows 1709 (Creators Update).

https://youtu.be/uK-kUTNiWIk

The script which you can download <a href="https://github.com/th-wilde/veracrypt-w10-patcher">here</a> must be placed into the root dir of a Windows 10 installation media which you can create with <a href="https://rufus.akeo.ie/">Rufus</a> or via the official <a href="https://www.microsoft.com/en-us/software-download/windows10">media creation tool</a>. After that simply run the script with administrative privileges and the patching process will start immediately, which might take a while to finish. It's important to don't boot from this new modified media because it would end up with an normal installation procedure, just start the setup normally and do an in-place upgrade like you would normally do.

A detailed procedure what the script does is explained on the official page.

<h2>Use it with caution</h2>

The script is not perfect and the developer is not responsible if you 'brick' your Windows, there is a '<a href="https://github.com/th-wilde/veracrypt-w10-patcher/issues/3">Hall of Blame</a>' were people reported that Windows got destroyed. The <a href="https://github.com/th-wilde/veracrypt-w10-patcher/issues/2">Hall of Fame</a> shows that the script worked for several testers.

It's up to everyone if he wants to take the risk or not, if you want to ensure that the upgrade not ends up with a new installation, better decrypt Windows.

<h2>Conclusion</h2>

I did a test with an upgrade from 1703 to 1709 and it worked without much trouble, however, I see this as too complicated for the normal user and VeraCrypt should native integrate a method to patch the OS as optional feature. This would maybe help to avoid questions and of course, it would be a useful function.

I liked the idea and it truly worked (for me) - it's dangerous and the warnings are given but it can save a lot of time.
