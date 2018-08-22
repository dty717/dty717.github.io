---
layout: post
title: Which is the best Windows Edition? - Here is the answer!
date: 2018-01-30 14:31
author: nvinside
comments: true
categories: [Windows 10]
---
There <a href="https://en.wikipedia.org/wiki/List_of_Microsoft_Windows_versions" rel="noopener">different Windows Versions</a> and each has its benefit but what is the best one and most secure one which I can suggest?! The short answer and the <strong>winner is the Enterprise Version</strong> but why?

<img class="alignnone size-full wp-image-2410" src="https://chefkochblog.files.wordpress.com/2018/01/win10management.jpg" alt="win10management" width="770" height="427" />

<!--more-->

<h2>It's not LTSB/LTSC!</h2>

Windows LTSB (now LTSC) is maybe a special tip but it's not the best choice due to the simple fact that it won't get feature upgrades, the next major update will be available 2019 for this Edition (maybe earlier if MS decide to release something). The problem with this edition is as mentioned, there no feature upgrades, it gets security updates, sure but latest RS 3 / RS 4 changes will not be included and some changes made a lot of sense in a security aspect, e.g. Homegroup got removed and Windows Defender got more powerful than ever, the EMET integration hardens the OS already against 90% of all attacks which is not included in the normal LTSC version. Security wise it's not smart to use an OS which not getting new security functions.

<h2>What about the Education version?!</h2>

The Education and Enterprise Version are very similar, officially Cortana isn't included in this version and this is together with the activation the only bigger difference, however, the upgrading mechanism in ENterprise is better and you anyway need KMS to activate it so you simply can use the Enterprise version.

<h2>What about S, K, N, G or other editions?</h2>

The G (Chinese government edition) officially doesn't exist and you need to create it yourself. I showed several methods how to do this on my GitHub account but it also lacks feature updates similar like the LTSC version. The N/K Versions not including Windows Media Player function but you anyway remove this with the 'features wizard' in the ENterprise version, the problem with such slimmed versions are that they won't recognize your Smartphone because this requires media feature components, of course, you can manually install them afterwards but that is a waste of time and ends up with wasting more HDD/SSD space compared when you install the normal Enterprise version straight fresh on your drive.

<h2>What about the feature updates/telemetry?</h2>

The Enterprise versions have a toggle to opt-out of telemetry via gpedit.msc

<img class="size-full wp-image-2411 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/dwfd.png" alt="dwfd" width="1187" height="645" />

<img class="size-full wp-image-2412 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/dwfwf.png" alt="dwfwf" width="686" height="636" />

<h3>What about the damn app updates?</h3>

That is indeed a problem and annoying however you can configure it via gpedit, to disallow app updates and once you uninstalled them you won't get new apps (only in case you made a major update). So you have to do this procedure only when you fresh installed Windows or in case you did a major Windows upgrade eg. from Redstone 3 to Redstone 4.

From my tests no app is connecting to the internet anymore unless you really use them, I did this test with Redstone 3, adding a bunch of domains into your HOSTS is pointless because unless you started/used apps or opt-in into insider builds you will never see any connection. The myth that MS is secretly 'spy' on you via apps is nothing as an unproven myth, I did a Wireshark/Burp log and in 1 week of constantly running Windows 10 I got 4 MB of upload collected and 12 MB of download, these can be explained with other Microsoft security mechanism, like updating the clock, downloading certificates checking for Windows defender signature updates and more which btw all can be controlled by gpedit! No tools at all needed to control this but this behavior is a bit different in Windows 10 Pro versions, so stay away from the Pro versions.

<h2>Windows Enterprise Version is the winner for a reason</h2>

I'm aware that Windows 10 Enterprise is not really an option for most of all people because it requires KMS and another license to activate it but unless Microsoft decided to remove the crap out of the Pro version I have no problem to admit or recommend to pirate the OS until MS solved it, because why should you give up on your Privacy just because Microsoft decides to include more crap in the Pro version without any opt-out toggle? They are going to fuck you, so say fuck you too and pirate it! Without drama and attention, nothing will be changed and MS really seems to want to learn it the hard way. I'm not saying you should not pay in general for it but as said, unless Microsoft not fixed this privacy-related issue an integrate exactly the same options into every version I say "why not?". It only proves that people want the change and if you won't listen to the crowd it's simply your own fault.

<h3>The best groud</h3>

The ENterprise version has a solid ground, of course, it has the app store, Cortana, and some pre-installed apps but that can be removed. The more important thing is that it allows you to opt-out of everything and this is the reason why the Enterprise wins the battle.

<h2>Consider switching to Linux!</h2>

If you really need to pirate Windows, ask yourself if it's worth and if you really want to support such things?! What about Linux and why not? Linux getting better and better and it's stable enough for a daily usage, of course, it takes some time to make the switch and learn something new but it's much less time then trying to fix Microsoft own mess with each new 'idea' they trying to integrate.

<h2>Which distro?</h2>

<ul>
    <li>Ubuntu LTS (Trusty Thar)</li>
    <li>SolusOS</li>
    <li>Linux Mint</li>
    <li>Kubuntu (Zesty Zapus)</li>
    <li>Xubuntu (Artful Aardvark)</li>
</ul>

These are some suggestion from me, you can game on them and you can use it as a daily basis. Since VulkanAPI is coming to more and more games, it will be more and more possible to game the same like on Windows, the responsibility is only up to the developer to support such API to allow gaming on each platform - but well, marketing Windows is still all about money and exclusive contracts.

<h2>Verdict</h2>

Microsoft gives people an Edition with is worth to be installed but this requires another key and an activation process which is different from the normal procedure, that's a real dilemma. Why Microsoft not want to add a global opt-out seems to be crystal clear, you get the OS free and you pay with some metadata, if there would be an opt-out no one or only a few people would opt-in and this might cost a lot of money because they can't sell your data and this is the real reason. I'm not going to say that telemetry is by default bad but it can be abused and the controlling mechanism is something which needs to be improved and as long Microsoft decides to ignore this so long I will recommend the Enterprise version.

I finally made the switch to Linux as my main OS and I can (when I need to) start a virtual machine to test the latest Windows OS, I see no problem in doing it because I still can check several new things and report about it. I do not regret anything, maybe only that I made the switch way too late. People argue with the game argument but that's a publisher/developer created thing and not a Linux thing, the API to support all OS are there and everyone can create games which run the same on every OS, the DOOM release is a fantastic example it runs with the same framerates on Linux because it was well coded and most of your favourite applications are maybe already available too for Linux.

I'll keep an eye on every Windows version and report my findings back.
