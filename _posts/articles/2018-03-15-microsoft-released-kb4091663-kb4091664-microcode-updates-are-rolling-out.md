---
layout: post
title: Microsoft released KB4091663 & KB4091664 - Microcode Updates are rolling out
date: 2018-03-15 09:11
author: nvinside
comments: true
categories: [KB4090007, KB4091663, KB4091664, Meltdown, microcode, Security, Spectre, Windows 10]
---
Microsoft, HP, Asus, ASRock &amp; Co. rolling microcode updates out right now, ensure you checked if there is an BIOS update for you or not. Now, a bit late already Windows Build 1607 (Anniversary Update) and 1703 (Creators Update) getting Microcode Updates for all Skylake, Kaby Lake and Coffee Lake systems - the download of KB4091663 &amp; KB4091664 is manual which means you won't get the Update for your system over Windows Update.

<img class="  wp-image-3801 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/microsoft-microcode-updates.jpg" alt="Microsoft Microcode Updates" width="629" height="416" />

<!--more-->

<h2>The reason why Microcode Updates are only manual downloadable</h2>

The reason why Microsoft rolls-out their Microcode Update seems simple, the update might causes slow-downs, as <a href="https://www.computerbase.de/2018-03/intel-microcode-updates-windows-10-coffee-kaby-lake/" target="_blank" rel="noopener">proven by Computerbase.de</a>. The CPU tasking performance seems almost identical but the I/O random reading and writing performance decreases especially on faster SSD systems - I'm unsure if this can be fixed by SSD manufactures because I have no research based on this - Not installing the updates is not really a solution here because we're talking about critical security updates. However, on my test System I could notice a 10% difference with the same benchmark but I used an older Samsung SSD (850 Pro). But the fact that it causes slow-downs is also confirmed by Microsoft and partners.

<h2>Downloads</h2>

All downloads are pretty small in size because there only upgrading the existent Microcodes on your OS. It's unclear if Microsoft is going to release these updates more regular now since there is no statement given.

<strong>KB4090007 Windows 1709</strong>

<ul>
    <li><a href="http://download.windowsupdate.com/d/msdownload/update/software/crup/2018/03/windows10.0-kb4090007-x64_7063a0b6a38e2a648aa1d77570503f7062360c9d.msu" target="_blank" rel="noopener">windows10.0-kb4090007-x64.msu</a></li>
    <li><a href="http://download.windowsupdate.com/d/msdownload/update/software/crup/2018/03/windows10.0-kb4090007-x86_837aa8be4d0dc90ec7df8813c2c747d86d91a1a7.msu" target="_blank" rel="noopener">windows10.0-kb4090007-x86.msu</a></li>
</ul>

<strong>KB4091663 Windows 10 1703</strong>

<ul>
    <li><a href="http://download.windowsupdate.com/d/msdownload/update/software/crup/2018/03/windows10.0-kb4091663-x64_3eaa6a2e335b6aa7e459f3c2bfe685a328532e6d.msu" target="_blank" rel="noopener">windows10.0-kb4091663-x64.msu</a></li>
    <li><a href="http://download.windowsupdate.com/d/msdownload/update/software/crup/2018/03/windows10.0-kb4091663-x86_7f4641a56c736682eaecf5a0d9e049e7bfa0480b.msu" target="_blank" rel="noopener">windows10.0-kb4091663-x86.msu</a></li>
</ul>

<strong>KB4091664 Windows 10 1607</strong>

<ul>
    <li><a href="http://download.windowsupdate.com/d/msdownload/update/software/crup/2018/03/windows10.0-kb4091664-x64_281744c0a9847215702ad2e43b8c0e032636af96.msu" target="_blank" rel="noopener">windows10.0-kb4091664-x64.msu</a></li>
    <li><a href="http://download.windowsupdate.com/d/msdownload/update/software/crup/2018/03/windows10.0-kb4091664-x86_9f51b18e65f7cf47cfbb25eae09223c6373fcaf2.msu" target="_blank" rel="noopener">windows10.0-kb4091664-x86.msu</a></li>
</ul>

Microsoft released the Microcode update first for 1709 and only for this build, it's unclear why and no explanation was given, maybe a a 'secure Microsoft' campaign or maybe to test it on a Windows Build which are used by more people, but that's my guess.

<h2>Test if you're patched or not with InSpectre</h2>

The little freeware and portable utility <a href="https://www.grc.com/inspectre.htm" target="_blank" rel="noopener">InSpectre</a> shows you quickly if you're system is patched or not.

[caption id="attachment_3802" align="aligncenter" width="502"]<img class=" size-full wp-image-3802 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/insecptre.png" alt="InSecptre" width="502" height="397" /> InSecptre shows if you're patched against Spectre &amp; Meltdown or not. Sadly it doesn't show on which microcode update you are which means it doesn't show if your BIOS is patched (it only shows the Windows status).[/caption]

<h2>AV programs pointless</h2>

Once again this entire Spectre &amp; Meltdown story has shown that AV programs are useless, the claim they made to protect or even secure your PC is only marketing because none of these 'magic' programs doing the necessary things here - Do they tell you if your PC is vulnerable against Spectre &amp; Meltdown? No! Or do they going to download these patches for you? No! Bios updates via AV product? I never heard of it, because all of these facts AV is more and more a marketing solution in case you download files you you like to scan - but who cares about Virus these days when the rest of the system is anyway open to every other attack which comes up?

I remember when every AV had no protection against Ransomware when it hit the mass and adding these kind protection later into the product seems to only prove that there not prepared for unknown things coming (because no one is).

<h2>Closing Words</h2>

All Microcode updates are out for all Windows 10 users, and the drama seems over. There is an negative impact yes but not on the I/O CPU performance itself, it seems to affect more other hardware like SSD's. This affect gets less noticeable with newer CPU's. Of course we could talk about it that there should be no performance impact but it is how it is, it's not a good deal - to not install the update because you think you're smart and gain more performance, security always must come first.

However I'm thankfully that Microsoft reacted relatively seen fast to address this issue. Sadly, the rest of all Intel CPU users which using an older generation might see never a patch which make me think what the OS can do to protect us against those holes, Spectre is the more dangerous here but I do believe even if you vulnerable there some mechanism to protect you against this, I see JavaScript once again more important because it was proven that Spectre could be abused with JS and this makes it really dangerous because almost every page needs it in order to deliver some functions - in this case you better work with NoScript, Ad-Blockers and whitelists to ensure nothing can infect you.
