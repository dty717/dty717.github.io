---
layout: post
title: Linux Kernel 4.15 against Meltdown & Spectre
date: 2018-01-30 12:37
author: nvinside
comments: true
categories: [Kernel, Linux, Meltdown, Spectre]
---
Linus Torvalds released the final version of the first Linux kernel with Meltdown &amp; Spectre fixes, the new version 4.15 comes with over 1000 changesets and this is mostly to address the current security issue. The new Kernel is now more compatible with VR and the free AMDgpu driver got implemented which means AMD Vega GPUs are better supported. You can get, as always, download the latest kernel on <a href="https://www.kernel.org/" rel="noopener">kernel.org</a>.

<img class="size-full wp-image-2406 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/linux-kernel-1.png" alt="linux-kernel-1" width="500" height="281" />

<!--more-->

<h2>Retpoline patch against Spectre Variant 2</h2>

The Retun Trampoline (Retpoline) patch was implemented to protect against Spectre Variant 2 a current status can be checked with the <code>cat /sys/devices/system/cpu/vulnerabilities/spectre_v2</code> command.

<h4>No Patch against Spectre Variant 1</h4>

Variant 1 of SPectre isn't fixed, the next final Kernel Version 4.16 will address this issue. If you check the status on the current kernel via <code>cat /sys/devices/system/cpu/vulnerabilities/spectre_v1</code> you will see that this is vulnerable.

<h2>AMD graphic system related changes</h2>

HDMI 2.0 and Displayport 1.4 (DP) are now fully supported, resolutions up to 5k are no problems with RX Vega 56 &amp; 64  graphics cards.

<h3>Freesync</h3>

According to the <a href="https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/diff/drivers/gpu/drm/amd/display/TODO?id=f6705bf959efac87bca76d40050d342f1d212587" rel="noopener">todo list</a>, will be supported native without any workarounds in the upcoming kernel versions. The current code has around 130k lines of code and it needs some more time until every bigger bug is found and fixed. Interrupt problems are still here the biggest problem from what I can see.

Among other changes like better CPU support for Coffee Lake, several Thunderbolt related issue got fixed. Advanced Linux Sound Architecture replaces now the old Open Sound System.
