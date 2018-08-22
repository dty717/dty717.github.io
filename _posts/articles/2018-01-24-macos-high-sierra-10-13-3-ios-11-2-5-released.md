---
layout: post
title: macOS High Sierra 10.13.3 & iOS 11.2.5 released
date: 2018-01-24 00:41
author: nvinside
comments: true
categories: [Apple, ios, macOS High Sierra]
---
Apple was busy today, the update for macOS High Sierra <a href="https://support.apple.com/de-de/HT208465" target="_blank" rel="noopener">fixes several security holes</a>, iOS also fixes some possible <a href="https://support.apple.com/de-de/HT208463" target="_blank" rel="noopener">holes</a>. Both updates are only bugfix releases, there is no new option added related to the <a href="https://www.wired.com/story/apple-iphone-battery-slow-down/" target="_blank" rel="noopener">recently battery scandal</a>. Apple promised to introduce a new option for this, but we got nothing (yet).

<img class="  wp-image-2182 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/img-0005-306x205.jpg" alt="img-0005-306x205" width="419" height="281" />

<!--more-->

I did some research on the official Apple pages and there is nothing mentioned from Meltdown &amp; Spectre which is strange because I expect from a bugfix release that it at least mention something about the biggest hardware hole ever.

<h2>iOS 11.2.5</h2>

<hr />

<strong>Audio</strong>

<ul>
    <li>Available for: iPhone 5s and later, iPad Air and later, and iPod touch 6th generation</li>
    <li>Impact: Processing a maliciously crafted audio file may lead to arbitrary code execution</li>
    <li>Description: A memory corruption issue was addressed through improved input validation.</li>
    <li>CVE-2018-4094: Mingi Cho, MinSik Shin, Seoyoung Kim, Yeongho Lee and Taekyoung Kwon of the Information Security Lab, Yonsei University</li>
</ul>

<strong>Core Bluetooth</strong>

<ul>
    <li>Available for: iPhone 5s and later, iPad Air and later, and iPod touch 6th generation</li>
    <li>Impact: An application may be able to execute arbitrary code with system privileges</li>
    <li>Description: A memory corruption issue was addressed with improved memory handling.</li>
    <li>CVE-2018-4087: Rani Idan (@raniXCH) of Zimperium zLabs Team</li>
    <li>CVE-2018-4095: Rani Idan (@raniXCH) of Zimperium zLabs Team</li>
</ul>

<strong>Kernel</strong>

<ul>
    <li>Available for: iPhone 5s and later, iPad Air and later, and iPod touch 6th generation</li>
    <li>Impact: An application may be able to read restricted memory</li>
    <li>Description: A memory initialization issue was addressed through improved memory handling.</li>
    <li>CVE-2018-4090: Jann Horn of Google Project Zero</li>
</ul>

<strong>Kernel</strong>

<ul>
    <li>Available for: iPhone 5s and later, iPad Air and later, and iPod touch 6th generation</li>
    <li>Impact: An application may be able to read restricted memory</li>
    <li>Description: A race condition was addressed through improved locking.</li>
    <li>CVE-2018-4092: an anonymous researcher</li>
</ul>

<strong>Kernel</strong>

<ul>
    <li>Available for: iPhone 5s and later, iPad Air and later, and iPod touch 6th generation</li>
    <li>Impact: A malicious application may be able to execute arbitrary code with kernel privileges</li>
    <li>Description: A memory corruption issue was addressed through improved input validation.</li>
    <li>CVE-2018-4082: Russ Cox of Google</li>
</ul>

<strong>Kernel</strong>

<ul>
    <li>Available for: iPhone 5s and later, iPad Air and later, and iPod touch 6th generation</li>
    <li>Impact: An application may be able to read restricted memory</li>
    <li>Description: A validation issue was addressed with improved input sanitization.</li>
    <li>CVE-2018-4093: Jann Horn of Google Project Zero</li>
</ul>

<strong>LinkPresentation</strong>

<ul>
    <li>Available for: iPhone 5s and later, iPad Air and later, and iPod touch 6th generation</li>
    <li>Impact: Processing a maliciously crafted text message may lead to application denial of service</li>
    <li>Description: A resource exhaustion issue was addressed through improved input validation.</li>
    <li>CVE-2018-4100: Abraham Masri (@cheesecakeufo)</li>
</ul>

<strong>QuartzCore</strong>

<ul>
    <li>Available for: iPhone 5s and later, iPad Air and later, and iPod touch 6th generation</li>
    <li>Impact: Processing maliciously crafted web content may lead to arbitrary code execution</li>
    <li>Description: A memory corruption issue existed in the processing of web content. This issue was addressed through improved input validation.</li>
    <li>CVE-2018-4085: Ret2 Systems Inc. working with Trend Micro's Zero Day Initiative</li>
</ul>

<strong>Security</strong>

<ul>
    <li>Available for: iPhone 5s and later, iPad Air and later, and iPod touch 6th generation</li>
    <li>Impact: A certificate may have name constraints applied incorrectly</li>
    <li>Description: A certificate evaluation issue existed in the handling of name constraints. This issue was addressed through improved trust evaluation of certificates.</li>
    <li>CVE-2018-4086: Ian Haken of Netflix</li>
</ul>

<strong>WebKit</strong>

<ul>
    <li>Available for: iPhone 5s and later, iPad Air and later, and iPod touch 6th generation</li>
    <li>Impact: Processing maliciously crafted web content may lead to arbitrary code execution</li>
    <li>Description: Multiple memory corruption issues were addressed with improved memory handling.</li>
    <li>CVE-2018-4088: Jeonghoon Shin of Theori</li>
    <li>CVE-2018-4089: Ivan Fratric of Google Project Zero</li>
    <li>CVE-2018-4096: found by OSS-Fuzz</li>
</ul>

<h1 id="main-title">macOS High Sierra 10.13.3</h1>

<hr />

<strong>Audio</strong>

<ul>
    <li>Available for: macOS High Sierra 10.13.2, macOS Sierra 10.12.6</li>
    <li>Impact: Processing a maliciously crafted audio file may lead to arbitrary code execution</li>
    <li>Description: A memory corruption issue was addressed through improved input validation.</li>
    <li>CVE-2018-4094: Mingi Cho, MinSik Shin, Seoyoung Kim, Yeongho Lee and Taekyoung Kwon of the Information Security Lab, Yonsei University</li>
</ul>

<strong>curl</strong>

<ul>
    <li>Available for: macOS High Sierra 10.13.2</li>
    <li>Impact: Multiple issues in curl</li>
    <li>Description: An out-of-bounds read issue existed in the curl. This issue was addressed through improved bounds checking.</li>
    <li>CVE-2017-8817: found by OSS-Fuzz</li>
</ul>

<strong>IOHIDFamily</strong>

<ul>
    <li>Available for: macOS High Sierra 10.13.2, macOS Sierra 10.12.6, OS X El Capitan 10.11.6</li>
    <li>Impact: An application may be able to execute arbitrary code with kernel privileges</li>
    <li>Description: A memory corruption issue was addressed with improved memory handling.</li>
    <li>CVE-2018-4098: Siguza</li>
</ul>

<strong>Kernel</strong>

<ul>
    <li>Available for: macOS Sierra 10.12.6, OS X El Capitan 10.11.6</li>
    <li>Impact: An application may be able to read kernel memory (Meltdown)</li>
    <li>Description: Systems with microprocessors utilizing speculative execution and indirect branch prediction may allow unauthorized disclosure of information to an attacker with local user access via a side-channel analysis of the data cache.</li>
    <li>CVE-2017-5754: Jann Horn of Google Project Zero; Moritz Lipp of Graz University of Technology; Michael Schwarz of Graz University of Technology; Daniel Gruss of Graz University of Technology; Thomas Prescher of Cyberus Technology GmbH; Werner Haas of Cyberus Technology GmbH; Stefan Mangard of Graz University of Technology; Paul Kocher; Daniel Genkin of University of Pennsylvania and University of Maryland; Yuval Yarom of University of Adelaide and Data61; and Mike Hamburg of Rambus (Cryptography Research Division)</li>
</ul>

<strong>Kernel</strong>

<ul>
    <li>Available for: macOS High Sierra 10.13.2</li>
    <li>Impact: An application may be able to read restricted memory</li>
    <li>Description: A memory initialization issue was addressed through improved memory handling.</li>
    <li>CVE-2018-4090: Jann Horn of Google Project Zero</li>
</ul>

<strong>Kernel</strong>

<ul>
    <li>Available for: macOS High Sierra 10.13.2</li>
    <li>Impact: An application may be able to read restricted memory</li>
    <li>Description: A race condition was addressed through improved locking.</li>
    <li>CVE-2018-4092: an anonymous researcher</li>
</ul>

<strong>Kernel</strong>

<ul>
    <li>Available for: macOS High Sierra 10.13.2, macOS Sierra 10.12.6, OS X El Capitan 10.11.6</li>
    <li>Impact: A malicious application may be able to execute arbitrary code with kernel privileges</li>
    <li>Description: A memory corruption issue was addressed through improved input validation.</li>
    <li>CVE-2018-4082: Russ Cox of Google</li>
</ul>

<strong>Kernel</strong>

<ul>
    <li>Available for: macOS High Sierra 10.13.2, macOS Sierra 10.12.6</li>
    <li>Impact: An application may be able to execute arbitrary code with kernel privileges</li>
    <li>Description: A logic issue was addressed with improved validation.</li>
    <li>CVE-2018-4097: Resecurity, Inc.</li>
</ul>

<strong>Kernel</strong>

<ul>
    <li>Available for: macOS High Sierra 10.13.2</li>
    <li>Impact: An application may be able to read restricted memory</li>
    <li>Description: A validation issue was addressed with improved input sanitization.</li>
    <li>CVE-2018-4093: Jann Horn of Google Project Zero</li>
</ul>

<strong>LinkPresentation</strong>

<ul>
    <li>Available for: macOS High Sierra 10.13.2, macOS Sierra 10.12.6.2</li>
    <li>Impact: Processing a maliciously crafted text message may lead to application denial of service</li>
    <li>Description: A resource exhaustion issue was addressed through improved input validation.</li>
    <li>CVE-2018-4100: Abraham Masri (@cheesecakeufo)</li>
</ul>

<strong>QuartzCore</strong>

<ul>
    <li>Available for: macOS High Sierra 10.13.2, macOS Sierra 10.12.6, OS X El Capitan 10.11.6</li>
    <li>Impact: Processing maliciously crafted web content may lead to arbitrary code execution</li>
    <li>Description: A memory corruption issue existed in the processing of web content. This issue was addressed through improved input validation.</li>
    <li>CVE-2018-4085: Ret2 Systems Inc. working with Trend Micro's Zero Day Initiative</li>
</ul>

<strong>Sandbox</strong>

<ul>
    <li>Available for: macOS High Sierra 10.13.2</li>
    <li>Impact: A sandboxed process may be able to circumvent sandbox restrictions</li>
    <li>Description: An access issue was addressed through additional sandbox restrictions.</li>
    <li>CVE-2018-4091: Alex Gaynor of Mozilla</li>
</ul>

<strong>Security</strong>

<ul>
    <li>Available for: macOS High Sierra 10.13.2, macOS Sierra 10.12.6</li>
    <li>Impact: A certificate may have name constraints applied incorrectly</li>
    <li>Description: A certificate evaluation issue existed in the handling of name constraints. This issue was addressed through improved trust evaluation of certificates.</li>
    <li>CVE-2018-4086: Ian Haken of Netflix</li>
</ul>

<strong>WebKit</strong>

<ul>
    <li>Available for: macOS High Sierra 10.13.2</li>
    <li>Impact: Processing maliciously crafted web content may lead to arbitrary code execution</li>
    <li>Description: Multiple memory corruption issues were addressed with improved memory handling.</li>
    <li>CVE-2018-4088: Jeonghoon Shin of Theori</li>
    <li>CVE-2018-4089: Ivan Fratric of Google Project Zero</li>
    <li>CVE-2018-4096: found by OSS-Fuzz</li>
</ul>

<strong>Wi-Fi</strong>

<ul>
    <li>Available for: macOS High Sierra 10.13.2, macOS Sierra 10.12.6, OS X El Capitan 10.11.6</li>
    <li>Impact: An application may be able to read restricted memory</li>
    <li>Description: A validation issue was addressed with improved input sanitization.</li>
    <li>CVE-2018-4084: Hyung Sup Lee of Minionz, You Chan Lee of Hanyang University</li>
</ul>

<span style="text-decoration:underline;"><strong>Research</strong></span>

<ul>
    <li>'We want to help America,' Apple CEO Tim Cook says of moving foreign money back to US (<a href="http://abcnews.go.com/Business/apple-make-350b-contribution-us-economy-years/story?id=52405662" target="_blank" rel="noopener">abcnews.go.com</a>)</li>
</ul>

&nbsp;
