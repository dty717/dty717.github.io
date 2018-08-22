---
layout: post
title: CAM Free PC Monitoring Software by NZXT is the worst shit I've ever installed!
date: 2018-02-05 13:13
author: nvinside
comments: true
categories: [CAM, Hardware, NZXT]
---
<p style="text-align:center;"><span style="color:#ff0000;">The article is not against NZXT in general, it's about the fact that their CAM software is horrible and that they ignore the community - so I wrote it to show that there some issue + to give some little workaround links in the hope that it might help others with the same problems.
</span></p>

<hr />

Corsair we need to talk, I like almost all of your products but the water-cooling monitoring software is the worst crap I've ever installed and I'm not the only one which is telling you this.

[caption id="attachment_2602" align="aligncenter" width="495"]<img class="  wp-image-2602 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/26070472_164787887616369_1607849250962538496_n.jpg" alt="26070472_164787887616369_1607849250962538496_n" width="495" height="495" /> Kraken x62 looks good but the official CAM software is a nightmare![/caption]

<!--more-->

<h2>It's slow, it's bundled with external software and telemetry!</h2>

So I recently purchased a <a href="https://www.nzxt.com/products/kraken-x62" target="_blank" rel="noopener">Kraken x62</a>, and it looks and works wonderful. So what's the problem?! Well, I went to their homepage and downloaded + installed their <a href="https://camwebapp.com/" target="_blank" rel="noopener">CAM utility</a> which is basically a control panel or dashboard for your Kraken, it also has the ability to control other NZXT products like their <a href="https://www.nzxt.com/products/aer-rgb-hue" target="_blank" rel="noopener">RBG Lightning HUE+</a> device.

<h3>CAM Installer is BS</h3>

I really found no other title but it is what it is, you install the software and you already get fucked the first time because even if you uncheck the components you not like/use it ignores your selection and install the drivers anyway - WTF!? I only wanted to use the CAM program with my Kraken, now I have other drivers on my system for HUE+ and Co. without any reason.

Okay, after a coffee and some f* words later I cooled down and rebooted Windows because the driver needs a reboot to get activated, welcome 1999. Not even display drivers these days need a reboot, but okay, I took the pill and went into the program after a restart .. but wait there was no program?!

<h3>No autostart</h3>

So I wanted to start the CAM application but nothing happened, I mean really nothing! After some research it seems I'm not the only one with the autostart problem, seems it was so poorly coded that simple things like this are problematically. Oh boy! So what I did I created a task scheduler to force the program to start after a reboot and it worked, finally I saw the login screen.

<h3>Why the fuck do I need to login?</h3>

The <em>login</em> is optional and you can use the product in a crippled offline mode, the problem here is that there is no option or way to disable this annoying screen, which means after each Windows reboot you need to approve that you want to use the application in a 'Guest' mode.

BTW serious question, which monitoring software ever needed a login? AIDA, HWiNFO,.. all nope...

<h3>Integrated updater crashes</h3>

The integrated update mechanism crashes when it's blocked via a firewall, so poor coded that there is no fallback or a firewall request. The updater in general is pretty unstable and it has lots of issue.

<h2>Telemetry integrated</h2>

Worst thing the program sends a small amount of data back to an Azure Cloud, there is no opt-out given, I did again some research and NZXT said these is done to improve the product - good joke btw - and to get some information to fix some issue, well how about the most obvious one the autostart issue and the login?! Okay, whatever I setup the program how I liked it and it worked, however the program is slow as hell because it's poorly written in and outdated .NET Framework version, maybe due backward compatibility with Win7 or so, who knows.

No matter in which mode you use the CAM software, as Guest or with a Login it always sends data back to a Cloud and there is nothing you can do about because if you do block the IP/domains you can't login anymore into the program or you loose the integrated update ability.

<h2>Old driver + Intel® Extreme Tuning Utility (Intel® XTU)</h2>

If you check which driver getting installed you see some old USB Driver is getting installed, I guess that's the communication between the software and my Kraken for the lightning and to gain some status information.

Worst part with the CAM software is that it installs silently (yep without any chance to intercept into this process) Intel's Extreme Tuning Utility .. (don't you ever forget the ®!) the fun thing here is that this also gets installed on AMD systems and you can't uninstall it because no uninstaller entry is created you can only stop the service via services.msc and do not try to remove the driver because it ends up with a BSOD - I tried that because I tried to remove all files including the driver) I'm not sure what other entries are written on my system but it's so deep into your system that I not recommend to remove it manually. The installed Version is also outdated, if you check the official page you find a more recent version <a href="https://downloadcenter.intel.com/download/24075/Intel-Extreme-Tuning-Utility-Intel-XTU-" target="_blank" rel="noopener">here</a>.

To uninstall XTU you need to remove it entirely with the CAM software, otherwise there is no 'stable' way to do it.

<h2>NZXT we need to talk!</h2>

I saw that NZXT often get attacked on reddit for such things and it's really a no go, you should fire the guy who coded this shit I'm serious on this, there is no excuse for such a work. You should send a signal straight to the community, send apologies and try to fix the old bugs if possible just re-write everything from the stretch in GO, well everything but not .NET.

I suggest the following:

<ul>
    <li>Give us an opt-out toggle for telemetry</li>
    <li>Fix the autostart issue once and for all</li>
    <li>Stop pre-installing unwanted driver and software or at least give us the ability to remove it!</li>
    <li>Fire the guy or team which coded the CAM software, the Corsair Link and Utility Engine is not perfect but much better than the CAM software - that's for sure. Send a signal!</li>
</ul>

<p style="text-align:center;">I hope you guys <em>CAM</em> fix this!</p>

<h2>Open source alternatives</h2>

<ol>
    <li><a href="https://github.com/KsenijaS/krakenx" target="_blank" rel="noopener">krakenx</a></li>
    <li><a href="https://github.com/akej74/grid-control" target="_blank" rel="noopener">Grid Control</a></li>
    <li><a href="https://github.com/RoelGo/CamSucks" target="_blank" rel="noopener">CAMSUCKS</a></li>
    <li><a href="https://github.com/kusti8/hue-plus" target="_blank" rel="noopener">Hue+</a></li>
    <li><a href="https://github.com/kusti8/OpenHWControl" target="_blank" rel="noopener">OpenHWControl</a></li>
</ol>

For normal hardware monitoring <a href="https://www.hwinfo.com/" target="_blank" rel="noopener">HWiNFO</a>.

<h4><span style="text-decoration:underline;">Resource</span></h4>

<ul>
    <li>XTU3SERVICE (CAM Overclocking) (<a href="https://www.reddit.com/r/NZXT/comments/7qgi8o/xtu3service_cam_overclocking/" target="_blank" rel="noopener">reddit.com/r/NZXT</a>)</li>
    <li>Guide: Block CAM telemetry (<a href="https://www.reddit.com/r/NZXT/comments/6ngk1i/guide_block_cam_telemetry/" target="_blank" rel="noopener">reddit.com/r/NZXT</a>)</li>
    <li>Cam v3.3.2 Still wont autostart (<a href="https://support.camwebapp.com/forums/252256-cam-bugs/suggestions/19544059-cam-v3-3-2-still-wont-autostart" target="_blank" rel="noopener">support.camwebapp.com</a>)</li>
    <li>[FIX PROPOSED] CAM 3.3.5 auto-start doesn't work and start minimized either (<a href="https://www.reddit.com/r/NZXT/comments/6u3qaz/fix_proposed_cam_335_autostart_doesnt_work_and/" target="_blank" rel="noopener">reddit.com/r/NZXT</a>)</li>
    <li>Does NZXT's CAM software still spy on you? (<a href="https://www.reddit.com/r/NZXT/comments/70j9oo/does_nzxts_cam_software_still_spy_on_you/" target="_blank" rel="noopener">reddit.com/r/NZXT</a>)</li>
    <li>What Data is NZXT's CAM Software Collecting From You? (<a href="http://www.shacknews.com/article/100613/what-data-is-nzxts-cam-software-collecting-from-you" target="_blank" rel="noopener">shacknews.com</a>)</li>
</ul>

&nbsp;

&nbsp;
