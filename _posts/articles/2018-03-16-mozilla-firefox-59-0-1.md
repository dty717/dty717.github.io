---
layout: post
title: Mozilla Firefox 59.0.1 - Security Bugfix release
date: 2018-03-16 14:22
author: nvinside
comments: true
categories: [Browser, Firefox, Mozilla]
---
Mozilla just released a security bugfix release straight after the final release. The new version fixes several security related issue discovered  originally by the Pwn2Own conference.

<img class=" size-full wp-image-3808 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/quantum-feature-640x353.png" alt="Quantum-Feature-640x353" width="640" height="353" />

<!--more-->

This release is only a bugfix release and doesn't offer anything new or changed compared to the 59.0.0 release. Mozilla is also going to fix a security problem which recently got discovered during the <a href="https://www.bleepingcomputer.com/news/security/firefox-edge-and-safari-browsers-fall-at-famous-pwn2own-hacking-contest/?platform=hootsuite" target="_blank" rel="noopener">Pwn2Own 2018 hacking content</a> there going to update their <a href="https://www.mozilla.org/en-US/security/advisories/" target="_blank" rel="external noopener noreferrer">security advisory page</a> in the coming days.

The Pwn2Own conference found this year a way to bypass Mozilla's Sandbox and a Windows Kernel Escalation of Privilege.

<h2>Changelog</h2>

<ul>
    <li>Various <a href="https://www.mozilla.org/security/advisories/">security fixes</a></li>
</ul>

<h2>Download</h2>

<div class="ipsType_normal ipsType_richText ipsContained">

The update will be rolled-out in the next hours within the Firefox updater.

&nbsp;

</div>

<a href="https://download-installer.cdn.mozilla.net/pub/firefox/releases/59.0.1/win32/en-US/Firefox%20Setup%2059.0.1.exe" target="_blank" rel="external nofollow noopener">Download</a> | <b>32-bit</b> | <a href="https://download-installer.cdn.mozilla.net/pub/firefox/releases/59.0.1/win64/en-US/Firefox%20Setup%2059.0.1.exe" target="_blank" rel="external nofollow noopener">Download</a> | <b>64-bit (</b>en-US)

<a href="https://download-installer.cdn.mozilla.net/pub/firefox/releases/59.0.1/win32/" target="_blank" rel="external nofollow noopener">Download Page</a> | <b>32-bit</b> | <a href="https://download-installer.cdn.mozilla.net/pub/firefox/releases/59.0.1/win64/" target="_blank" rel="external nofollow noopener">Download Page</a> | <b>64-bit </b>- All Languages

<hr />

<h3>Mozilla Firefox 52.7.2 <span style="text-decoration:underline;">ESR</span></h3>

<a href="https://download-installer.cdn.mozilla.net/pub/firefox/releases/52.7.2esr/win32/en-US/Firefox%20Setup%2052.7.2esr.exe" target="_blank" rel="external nofollow noopener">Download</a> | <b>32-bit</b> | <a href="https://download-installer.cdn.mozilla.net/pub/firefox/releases/52.7.2esr/win64/en-US/Firefox%20Setup%2052.7.2esr.exe" target="_blank" rel="external nofollow noopener">Download</a> | <b>64-bit (</b>en-US)

<a href="https://download-installer.cdn.mozilla.net/pub/firefox/releases/52.7.2esr/win32/" target="_blank" rel="external nofollow noopener">Download Page</a> | <b>32-bit</b> | <a href="https://download-installer.cdn.mozilla.net/pub/firefox/releases/52.7.2esr/win64/" target="_blank" rel="external nofollow noopener">Download Page</a> | <b>64-bit </b>- All Languages

All other downloads for other platforms are as always available on their own <a href="https://ftp.mozilla.org/pub/firefox/releases/59.0.1/" target="_blank" rel="noopener">secured FTP server</a>. The <a href="https://www.mozilla.org/en-US/firefox/60.0beta/releasenotes/" target="_blank" rel="noopener">Mozilla 60 beta 4</a> got the same security update among other features and fixes.

<h2>Bugfix release after each new release - why?</h2>

Mozilla's new strategy seems to release 0.1 versions right after the final versions and there is not really an explanation given. It's not the first time Mozilla did this and if there already known problems from the final release they must have been known this already at the same time when there rolled-out the final release because it usually takes some time to identify, review and verify the issue.

This makes me asking why Mozilla not just wait and release the 'real' version including the small bugfix within the first final release. That could be marketing related strategy to bump their Browser. Since there is no explanation given it's difficult to say if it's a quality management problem or PR. Usually bugfix releases are rolled-out after more than one week to address several things - and not just only one or two things - after the major release but it seems changed now, it also could have something to do with the schedule but I think everyone would understand when the release (in terms of quality) would be moved to another day.

<h2>Closing Words</h2>

The release makes me wonder why no one is checking the final builds before their rolling out to avoid this, especially because the Pwn2Own findings got already submitted longer time ago to Mozilla. So at the end you basically always can ignore the final build and wait for the bugfix release instead which saves the troubles to re-download basically the same Browser with only a minor change in it. The admin can also use this strategy instead so he doesn't have to roll-out the same browser for it's clients which saves bandwidth and time resources.

Anyway people are might be thankfully that Mozilla reacted quickly to fix this issue but this would not have happened in the first place by just waiting two more days to release the build, security wise it's good to stay up2date but this not affects everyone so I think the better strategy is to release it for everyone straight for the beginning to avoid confusions.

<h2><span style="text-decoration:underline;"><span style="color:#ff0000;text-decoration:underline;">Update</span></span></h2>

Article was corrected, added the proper changelog among the ESR download links.
