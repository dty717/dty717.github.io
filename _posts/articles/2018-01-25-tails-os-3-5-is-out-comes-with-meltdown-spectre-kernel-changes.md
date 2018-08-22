---
layout: post
title: Tails OS 3.5 is out, comes with Meltdown & Spectre Kernel changes
date: 2018-01-25 10:51
author: nvinside
comments: true
categories: [Security, Tails]
---
The privacy-oriented Linux distribution Tails has been updated with a new kernel to mitigate against Spectre. Tails 3.5 also comes with the Tor Browser 7.5, a major upgrade in itself which includes some interface changes to make it more usable, e.g. the welcome page got improved. Among these changes Tails included some smaller fixes to address known issue.

<img class="  wp-image-2252 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/tails-logo.jpg" alt="Tails Logo" width="528" height="338" />

<!--more-->

One of the most important aspect of Tails 3.5 release is the inclusion of the new Linux kernel 4.14.13 as it includes microcode firmware for AMD machines in order to mitigate against the Spectre vulnerability that has been causing headaches across the tech world. Tails 3.4 was released earlier this year, which included the 4.14.12 kernel to migrate a Meltdown patch - this version only partially mitigated Spectre.

Some other changes stated in the release notes:

<ul>
    <li>Update Thunderbird to 52.5.</li>
    <li>Fix printing to a PDF in Tor Browser. (#13403 and #15024)</li>
    <li>Fix the opening of the Applications menu when the time synchronization changed the clock in the past. (#14250)</li>
    <li>Fix the opening of the documentation included in Tails for many non-English languages. (#15160)</li>
    <li>Fix translations of the time synchronization and "Tor is ready" notifications. (#13437)</li>
    <li>Remove the code to migrate from Claws Mail that was preventing Thunderbird to start in some cases. (#12734)</li>
</ul>

<h2>Known issue</h2>

There’s a known issue from the previous release which says there’s a kernel bug during the bootup. Tails says this is nothing to worry about, despite being alarming, and are looking to fix it in an upcoming release.

You can download the new release <a href="https://tails.boum.org/install/download/index.en.html">here</a>.

<span style="text-decoration:underline;"><strong>Source</strong></span>

<ul>
    <li><span class="title"> Tails 3.5 is out (<a href="https://tails.boum.org/news/version_3.5/index.en.html">tails.boum.org</a>)</span></li>
</ul>
