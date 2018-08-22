---
layout: post
title: What should you do immediately after you installed Windows?
date: 2018-01-29 16:00
author: nvinside
comments: true
categories: [Tips and Tricks, Windows]
---
Well, I finally made the switch to Linux /end of the article. I'm joking, well not really I switched but I want to hear your suggestion and opinion what you do after you fresh installed Windows.

<img class="alignnone size-full wp-image-2364" src="https://chefkochblog.files.wordpress.com/2018/01/519808-clean-up-windows-10-with-microsoft-s-refresh-windows-tool.jpg" alt="Clean Windows" width="810" height="456" />

<!--more-->

Here some most common techniques what a lot of people doing - but is this the 'best'?

&nbsp;

<ul>
    <li><strong>Create user accounts:</strong> Each person who will use the computer should have an individual password-protected account.</li>
    <li><strong>Setup your Yubikey</strong>: I recently purchased a Yubikey and it was worth the money I think if you want secure logins/passwords make sure you use such a Key or an alternative solution.</li>
    <li><strong>Install/update antivirus software (optional):</strong> If not pre-installed, lots of people trying to 'harden' Windows with an external product.<strong>
</strong></li>
    <li><strong>Activate Windows:</strong> I think I do not need to explain this step.</li>
    <li><strong>Install Windows updates:</strong> This function is usually on by default and will begin downloading updates as soon as you are connected to the Internet. Follow prompts for installation. You will need to shut down your computer for the updates to properly install. Your computer is ready to install such an update whenever the <span class="menuitem">Shut Down</span> icon displays a yellow update shield.</li>
    <li><strong>Install needed drivers:</strong> Most people just using Windows Update, however, this method is mostly outdated, personally, I trust station-drivers.com since years when it comes to drivers and re-packs. Ther more up2date and they are the latest one you can get, if you're lazy you also can use programs like Snappy Driver Installer.</li>
    <li><strong>Install external Software: </strong>MS Office (or LibreOffice) and programs which are essential for a daily Windows usage, this is an optional step and is up to everyone cause everyone has other needs! You don't like VLC, just don't install it - easy isn't it?<strong>
</strong></li>
    <li><strong>Remove integrated programs</strong> like Internet Explorer 11: Windows 7,8,10 can remove integrated programs like pre-installed solutions e.g. Internet Explorer 11 or Windows Media Player (depending on which Version/OS you are). This is also optional but help a little bit, Windows actually doesn't remove the files itself but it removes the dependencies/links to such software, this might reduce the attack surface because malware which is depending on several functions/software might getting an error or can't execute their voodoo because something is missing.</li>
    <li><strong>Gpedit.msc changes</strong>: More or less an optional step, but instead of trusting programs like O&amp;O shutup you can simply do it yourself, via gpedit.msc (Group Policy Editor) - depending on your Version (Home doesn't include gpedit.msc and must be manually installed via unofficial ways). Tweak the Windows settings as you need it. Control the telemetry, crypto related settings and set the logging levels how you want it to control if there was something suspicious going on while you're away. There is a powerful mechanism Windows offers and most users aren't aware of this, instead they trusting other applications - why not check the settings and write a script yourself instead? The benefit you learn a lot about scripting and Windows internal settings/options.</li>
    <li><strong>Hardware related settings</strong>: Some drivers/hardware have additional options you can control like WOL (Wake on Lan) or energy-related settings. Set them like you want and need, if you never use WoL consider to disable the option).</li>
    <li><strong>Windows network settings</strong>: Disabling NetBIOS/IP-Helper and network discovery can help to improve the security level because if that is disabled an attacker simply can't abuse such weak mechanism/network problems.</li>
    <li><strong>Tweaking svchost.msc: </strong>Microsoft promised us 20 years ago that services will be modular, which means they get enabled and disabled as long there are needed/used or not used anymore. This never worked or was properly implemented, useless services are still running or starting automatically, you can set them to several states but at the end disabling them or setting them to manually is the best way to ensure they're not starting when you don't want them to be started. It can help to free a little bit RAM but it's questionable if there really changing something on the overall system performance since Windows 10 a lot has changed and most services using only some KB, however, this is optional and tweak the services very carefully. From my experience manually is a good start, do some tests and research and tweak as needed.</li>
    <li><strong>Full Disk Encryption</strong>: Consider to encrypt your Laptop or mobile device, even your desktop PC doesn't suffer much from FDE because modern hardware directly supporting AES 256 encryption like almost every SSD these days. This is maybe one of the most important step, encryption still helps against a lot of attacks. VeraCrypt was and still is my number one choice, before that I trusted TrueCrypt for years. BitLocker seems okay too, but consider to set the algorithm to AES256 via gpedit.msc before you start the process (default is 128).</li>
    <li><strong>Consider to use a Sandbox or RAMDisk</strong>: Even in 2018 these two methods are fine to use and I wished MS would integrate an own implementation of such tools. A RAMDisk or Sandbox can help if you quickly want to isolate known or unknown executables or everything which you want to test. The benefit is that a RAMDisk ist faster than your old HDD, which might help if you want to play a smaller game, this improves the loading speed drastically. A Sandbox is in general a good idea if you test a lot of software because after you're done you simply can remove every trace/leftover automatically. Sandboxing a Browser is not needed these days because every modern Browser runs already isolated, but you could isolate the %tmp% or download folder in case you want to restrict cookies, downloads and other traces which gets written on your HDD/SSD during the browser session.</li>
</ul>

<span style="color:#ff0000;"><span style="text-decoration:underline;">Most Important step</span>:</span>

<span style="text-decoration:underline;"><strong>DO NOT INSTALL EVERY CRAP</strong></span>! Yes, I need to mention this because people asking me daily how to clean Windows or how to remove xyz malware - you simply can avoid all of this if you think before you click, just because it's blinking and tells you can increase your cash within 2 weeks doesn't mean it isn't scam.

If you're unsure, better ask! No master is fallen from the sky! Not even the master himself - aka me - no even I have to ask and search every day because if you want a better internet and a more secure way to browse you have to read and ask a lot of questions because you only learn when you think about something and make your own experience, I can tell you a lot but overall if you won't accept or reject it would't help at all. Try to learn from mistakes, ask and test yourself. There virtual machine software like VirtualBox or VMWare which are there for a reason!

Since each of every mentioned point deserves his own article I decided to write a mini-series about it, this article is just a quick overview and shows some possibilities which you should consider.

&nbsp;
