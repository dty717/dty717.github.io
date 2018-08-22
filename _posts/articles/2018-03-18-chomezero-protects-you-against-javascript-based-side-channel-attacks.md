---
layout: post
title: ChomeZero protects you against JavaScript-based side-channel attacks
date: 2018-03-18 15:45
author: nvinside
comments: true
categories: [Browser extensions, Chrome, ChromeZero, Security]
---
A new Chrome extension was <a href="https://github.com/IAIK/ChromeZero" target="_blank" rel="noopener">released on GitHub</a>, by some academics which allows to protect your Chrome or Chrome based Browser against JavaScript code to avoid a data leakage from a computer's RAM or CPU.

[caption id="attachment_3905" align="aligncenter" width="1034"]<img class=" size-full wp-image-3905 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/chromezero.png" alt="ChromeZero" width="1034" height="464" /> ChromeZero Settings.[/caption]

<!--more-->

<h2>Overview</h2>

The extension isn't available right now in the official Chrome Web Store you have to manually download and install it as time of writing this article. This might gets changed in the near future to simplify the installation process. ChromeZero can protect you against JavaScript based side-channel attacks like, one popular example is <a href="https://arxiv.org/pdf/1507.06955v1.pdf" target="_blank" rel="noopener">Rowhammer</a>. The minimum requirement for this extension is Chrome v49, porting the extension to Firefox is might be possible in later versions.

The developers of the extension say that currently there are eleven state-of-the-art side-channel attacks that can be performed via JavaScript code running in a browser (see picture below).

[caption id="attachment_3906" align="aligncenter" width="850"]<img class=" size-full wp-image-3906 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/js-zero-attacks-table.png" alt="JS-zero-attacks-table" width="850" height="259" /> 11 attack vectors which abuse different kind of things like Sensor API, Memory addresses and more. Picture Source: GitHub ChromeZero project[/caption]

The research shows that each of those attacks needs access to various local details for which it uses JavaScript code to leak or recover and gather the needed information before mounting the actual side-channel attack like Rowhammer, Loophole &amp; Co.

<h3>Extension Installation</h3>

As mentioned the extension didn't made it into the official Chrome Web Store (yet), users can install it by downloading the extension's source code <a href="https://github.com/IAIK/ChromeZero" target="_blank" rel="external nofollow noopener">from GitHub</a> which requires you going to Chrome's extensions management page (alias <a href="//extension">chrome://extensions</a>). You then must enabling "Developer Mode," in order to install external extension, clicking on the "Load Unpacked" button and then selecting the folder "/chromezero" from inside the extension's source code will load the extension, don't delete the folder because it's needed to load the extension each time you start or restart your Browser, so keep it on a place were it doesn't bother you.

<h2>Using ChromeZero</h2>

Fife smilies representing how strong the extension restricts certain attack sectors. The performance impact is minimal on this process, the developers saying it requires 1,54% of the overall Browser resources and has a minimal impact of Browser page loading latency (depending on several variables) from approximately 0.01064s up to 0.08908s.

The academics who originally created Chrome Zero are also the ones behind the JavaScript-version of the Rowhammer attack, which means those guys know what there talking about and have also contributed in the past to the discovery of the Meltdown and Spectre vulnerabilities.

<table>
<thead>
<tr>
<th>Requirement</th>
<th style="text-align:center;">Off</th>
<th>Low</th>
<th>Medium</th>
<th>High</th>
<th>Tin Foil Hat</th>
</tr>
</thead>
<tbody>
<tr>
<td>Memory addresses</td>
<td style="text-align:center;">-</td>
<td>Buffer ASLR</td>
<td>Array preloading</td>
<td>Non-deterministic array</td>
<td>Array index randomization</td>
</tr>
<tr>
<td>Accurate Timing</td>
<td style="text-align:center;">-</td>
<td style="text-align:center;">Ask</td>
<td>Low-resolution timestamp</td>
<td>Fuzzy time</td>
<td>Disable</td>
</tr>
<tr>
<td>Multithreading</td>
<td style="text-align:center;">-</td>
<td style="text-align:center;">-</td>
<td>Message delay</td>
<td>WebWorker polyfill</td>
<td>Disable</td>
</tr>
<tr>
<td>Shared data</td>
<td style="text-align:center;">-</td>
<td style="text-align:center;">-</td>
<td>Slow SharedArrayBuffer</td>
<td>Disable</td>
<td>Disable</td>
</tr>
<tr>
<td>Sensor API</td>
<td style="text-align:center;">-</td>
<td style="text-align:center;">-</td>
<td>Ask</td>
<td>Fixed value</td>
<td>Disable</td>
</tr>
</tbody>
</table>

<ul>
    <li><strong>Off</strong>: The extension is disabled, all JavaScript functions are enabled.</li>
    <li><strong>Low</strong>: Most features are enabled, but require permission from the user; the sensor API is allowed.</li>
    <li><strong>Medium</strong>: Most features are enabled, user permission is required for sensors.</li>
    <li><strong>High</strong>: Protects against all currently known microarchitectural and side-channel attacks.</li>
    <li><strong>Tin Foil Hat</strong>: Same as <strong>high</strong>, but additionally blocks even more functions that we consider a danger to a user's security or privacy.</li>
</ul>

<h2>Closing Words</h2>

I think once the extension made it's way into the Chrome Web Store it might have a bigger change to get noticed and reviewed. The settings are strange and not really what I expected from security experts but I totally get the point that they just wanted to provide an interface which can be understood by everyone - even beginners. Hopefully we see some more documentation about what each of the options exactly toggle on the official page soon.

I tried the extension and it worked on the maximum settings without any problem on the normal Chrome (66) and Chromium (67) versions, let's hope that this might native gets integrated into future Browser versions so that you can easily control this via some Browser flags instead of an separate extensions ultimately I expect that all of the listed attack sectors soon or later gets closed without that any workarounds or extensions are required which would be the best solution for everyone.

Other extensions can only request JavaScript based API's, so currently you have to use this extension in order to stay protected against the 11 shows attacks.

Please keep in mind that the addon is still in an earlier stage as for now and you might report bugs directly in the <a href="https://github.com/IAIK/ChromeZero/issues" target="_blank" rel="noopener">bug-tracker</a>.

<h3><span style="text-decoration:underline;">Source</span></h3>

<ul>
    <li>ChromeZero (<a href="https://github.com/IAIK/ChromeZero" target="_blank" rel="noopener">github.com</a>)</li>
</ul>
