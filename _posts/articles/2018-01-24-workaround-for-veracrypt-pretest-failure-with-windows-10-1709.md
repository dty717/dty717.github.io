---
layout: post
title: Workaround for VeraCrypt pretest failure on Windows 10 Build 1709
date: 2018-01-24 04:48
author: nvinside
comments: true
categories: [Tips and Tricks, VeraCrypt, Windows 10]
---
The latest VeraCrypt Final/Beta seems to have some troubles with latest Windows changes, which means the pretest fails. This test is needed to verify if your HDD/SSD can be proper encrypted before the actual process really starts to avoid running into problems.

<img class=" size-full wp-image-2187 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/vc2.jpg" alt="vc2" width="477" height="428" />

<!--more-->

<p style="text-align:center;"><span style="color:#ff0000;">The guide is a workaround however this needs to be fixed within VeraCrypt with the next final version.</span></p>

<h2>The Problem</h2>

Once you installed <a href="https://sourceforge.net/projects/veracrypt/" target="_blank" rel="noopener">VeraCrypt Final</a> / <a href="https://www.google.com/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=7&amp;cad=rja&amp;uact=8&amp;ved=0ahUKEwjphOTO1O_YAhUIyWMKHeunD5YQjBAIOTAG&amp;url=https%3A%2F%2Fsourceforge.net%2Fprojects%2Fveracrypt%2Ffiles%2FVeraCrypt%2520Nightly%2520Builds%2F&amp;usg=AOvVaw1e0PAiYLxsDZb_td5OGs5F" target="_blank" rel="noopener">Nightly</a> you might want to start the full disk-encryption (FDE) to encrypt the whole OS partition/drive, you start the setup and do everything what you get asked for - The system shutdowns , yep no reboot! - it shutdown, bad signal already! Okay so you power on your machine and you won't see any input field to type in your password, Windows just boots or you see a error which says that the authentification failed. Well, you just boot into Windows but nothing got encrypted and you see the error (see picture above). That's bad and it sucks!

<h2>Workaround</h2>

<ul>
    <li>If you tell the VeraCrypt wizard to go ahead and skip the pretest and take a look into the EFI filesystem you will notice that there is no EFI/VeraCrypt folder! That's the real issue here. Sadly I could't find what is causing it.</li>
    <li>After the first reboot with no password prompt (as explained in the above scenario), VeraCrypt says that the pre-test failed, however at this moment you can see that the EFI/VeraCrypt partition was created. Go ahead and tell the VeraCrypt wizard that you want to try it again but hold on with the reboot and follow with these steps manually:</li>
</ul>

<ol>
    <li style="list-style-type:none;">
<ol>
    <li>Copy the file: <code>EFI\Microsoft\Boot\bootmgfw.efi</code> to <code>bootmgfw_ms.efi</code></li>
    <li>Copy and replace <code>EFI\VeraCrypt\DcsBoot.efi</code> to <code>EFI\Microsoft\Boot\bootmgfw.efi</code></li>
    <li>Edit <code>EFI\VeraCrypt\DcsProp</code> and put the key within the configuration:
<code>&lt;config key="ActionSuccess"&gt;postexec file(EFI\Microsoft\Boot\bootmgfw_ms.efi)&lt;/config&gt;</code></li>
    <li>After the reboot you finally can enter your password and VeraCrypt finally says that the pretest is okay.</li>
</ol>
</li>
</ol>

I took me one day to figure it out. The issue is already reported on GitHub with similar or exactly the same symptoms.

I hope this gets fixed because as of right now no version - no matter FInal or Beta- seems to have a solution for this.

Stay secure friends! 🕵🏻

<span style="text-decoration:underline;"><strong>Research</strong></span>

<ul>
    <li>Pretest fails on win10 (<a href="https://github.com/veracrypt/VeraCrypt/issues/160" target="_blank" rel="noopener">github.com</a>)</li>
    <li>
<p class="gh-header-title"><span class="js-issue-title">System encryption pretest fails on win10 (<a href="https://github.com/veracrypt/VeraCrypt/issues/269" target="_blank" rel="noopener">github.com</a>)
</span></p>
</li>
    <li>
<p class="gh-header-title"><span class="js-issue-title">Win10 UEFI PreBoot-Auth fails always (<a href="https://github.com/veracrypt/VeraCrypt/issues/264" target="_blank" rel="noopener">github.com</a>)
</span></p>
</li>
</ul>
