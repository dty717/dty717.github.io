---
layout: post
title: AMDFlaws.com reports multiple CPU Attack Vectors and Vulnerabilities
date: 2018-03-14 05:45
author: nvinside
comments: true
categories: [AMD, AMDFlaws.com, Chimera, CPU, Fallout, Master Key, Ryzenfall, Security]
---
<a href="https://amdflaws.com/" target="_blank" rel="noopener">AMDFlaws.com</a> reports multiple flaws regarding to AMD CPU's. The question is if the page can be trusted as source? I believe so and take it serious but want to add right here and now that I have my doubts about the entire background of this story.

<img class=" size-full wp-image-3755 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/amdflaws-homepage.png" alt="AMDFlaws Homepage" width="1515" height="708" />

<!--more-->

<h2>Overview</h2>

The AMDFlaws.com domain was registered with GoDaddy on the 22, February 2018 and ownership of this particular domain is hidden by <a href="https://www.domainsbyproxy.com/" target="_blank" rel="noopener">Domains By Proxy, LLC</a>. It's questionable why a so called security company hides the domain ownership identity. The researchers gave AMD less than 24 hours to look at the vulnerabilities and respond before publishing the report which is really really short because usually vulnerability disclosure calls for at least 90 days' notice - so that companies have time to address flaws properly.

https://youtu.be/RrhVhFHTe9o

<img class=" size-full wp-image-3953 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/amd-secure-technology-chart-en-e79360f2b4036088.jpeg" alt="AMD-Secure-Technology-Chart-EN-e79360f2b4036088" width="799" height="1037" />

Behind all this is the Israeli cyber security research firm with six employees, checking their page reveals some interesting information for example that their phone number (+1-585-233-0321) is a New York one. There other findings which are mentioned later in this article which made me and the community skeptical about the entire story.

https://youtu.be/BDByiRhMjVA

https://youtu.be/pgYhOwikuGQ

<img class=" size-full wp-image-3756 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/amdflaws-com.png" alt="AMDFlaws.com" width="1011" height="1686" />

<h2>4 Vulnerabilities</h2>

<ul>
    <li><strong>Master Key</strong> - allegedly leverages <em>"multiple vulnerabilities"</em> in the Secure Processor that can infiltrate AMD's Secure Encrypted Virtualization (SEV) and Firmware Trusted Platform Module (fTPM). Masterkey attacks could allow an attacker to permanently damage Zen-based hardware. Masterkey affect Ryzen, Ryzen Pro, Ryzen Mobile and EPYC</li>
    <li><strong>Ryzenfall</strong> - leverages vulnerabilities in the Secure Processor, giving access to protected memory areas including SMRAM and the isolated memory for the Windows Credential Guard. With escalated privileges, malicious code can be injected to take full control of the Secure Processor, bypass the Windows Credential Guard, and gain access to passwords and even encryption keys</li>
    <li><strong>Fallout</strong> - has a similar attack pattern and threat vectors to Ryzenfall, including gaining access to SRAM and Windows Credential Guard. However, an added wrinkle is that it can bypass protections that are in place on certain systems to prevent the BIOS from being overwritten.</li>
    <li><strong>Chimera</strong> - takes advantage of two backdoors reportedly found in the supporting Ryzen chipset via hardware and another one directly in the firmware. Given that the chipset serves as the central staging area for Wi-Fi, Bluetooth, Network, PCI-E, and USB traffic (among others), attackers can install malware in the chipset to perform man-in-the-middle attacks with a keylogger. Chimera affects Ryzen and Ryzen Pro.</li>
    <li>

[caption id="attachment_3824" align="aligncenter" width="602"]<img class=" size-full wp-image-3824 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/amd_01.jpg" alt="amd_01" width="602" height="643" /> Picture Source: CTS-Labs[/caption]</li>
</ul>

There not much details given except that all 4 flaws needs to be executed with administrative privileges. The whitepaper doesn't explain much and was criticized all over the placed on Twitter.

[caption id="attachment_3765" align="aligncenter" width="621"]<img class=" size-full wp-image-3765 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/vulnerabilities-map.png" alt="Vulnerabilities Map" width="621" height="565" /> Picture Source: CTS-Labs[/caption]

Some people actually tried the code and it seems to run which means it might be real.

<h2>AMD is taking action</h2>

<blockquote>At AMD, security is a top priority and we are continually working to ensure the safety of our users as new risks arise. We are investigating this report which we just received, to understand the methodology and merit of the findings.

<hr />

AMD</blockquote>

At this point it's unclear how long it will take to fix these issues with AMD's processors since it requires more time to properly analyze the flaws and to find ways to fix it.

<h2>Fake or not?</h2>

There several claims that this could all be a big hoax, however the code of it seems to run and was tested by Jake Williams (<a href="https://twitter.com/MalwareJake/status/973603154276139008" target="_blank" rel="noopener">Twitter link</a>) - usually this alone is a prove that this seems legit.

The following strange parts are found:

<ol>
    <li>The video seems to made with a green screen</li>
    <li>The Isreal company uses a New Yorker phone number</li>
    <li>The domain owner was obfuscated</li>
    <li>The research company gave AMD only 24 hours</li>
    <li>Possible stock market manipulation</li>
    <li>Trademark name for one vulnerability 'Ryzenfall'. Usually no one does this.</li>
    <li>The insecure HTTP cts-labs page points to a newer generated HTTPS AMDFlaws.com page</li>
    <li>According to Dan Guido the story is made up, he is not the only one but to name a bigger person here I listed him.</li>
    <li>Unprofessional whitepaper which not really give as much details as it should.</li>
    <li>Confusing statements within the disclaimer.</li>
    <li><a href="https://www.linkedin.com/company/cts-labs/" target="_blank" rel="noopener">Removed linkedin profile</a> with the same name CTS Labs - Financial Officer (CFO), Yaron Luk-Zilberman</li>
</ol>

[caption id="attachment_3757" align="aligncenter" width="960"]<img class=" size-full wp-image-3757 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/display.jpg" alt="display" width="960" height="1198" /> The flaw is discussed on <a href="https://www.reddit.com/r/Amd/" target="_blank" rel="noopener">/r/Amd</a> on reddit. Picture Source: <a href="https://www.reddit.com/r/Amd/comments/845w8e/alleged_amd_zen_security_flaws_megathread/" target="_blank" rel="noopener">Reddit.com</a> via <a href="https://imgur.com/OkWlIxA" target="_blank" rel="noopener">Imgur</a>[/caption]

Some people do have serious doubts - including myself to be perfectly honest. The domain hides some important information and according to this screen it could all been made up. The whitepaper is really unprofessional and CTS Labs gave AMD no proper time to analyze the 4 flaws.

It's also worth to say here that the registered domain of CTS-Labs points to AMDFlaws.com.

<h3>Market manipulation?</h3>

A good explanation would be to manipulate the stock to create such a hoax but it's only my guess right now. And seems I'm not the only one which <a href="https://twitter.com/SteveNagel12/status/973602868489056256" target="_blank" rel="noopener">thinks this way</a>.

<h2>First Conclusion</h2>

There some people saying it's faked others which really inspected the source of it saying it's real. I will update this story as more information comes in and as AMD reports back to us with their findings based on serious research and not only based on community guessing.

<h2><span style="color:#ff0000;">Update &amp; Final Conclusion</span></h2>

The AMDFlaws story is real and not a hoax, it got <a href="https://twitter.com/aionescu/status/974028647307849730" target="_blank" rel="noopener">confirmed by several independent security researchers</a>.

It seems a failed attempt was made to manipulate the stock market just like I said in the initial post. However the threat itself is real and we need to wait until everything is discovered here and until AMD, ASMedia &amp; Co. are finally responding to it which usually takes several months because auditing and testing this takes it's time and no one likes to rush something to spread possible false information.

I think what we (once again) learned is that people doing everything for money, even shady things like this, however I'm thankfully that this story was real quickly debunked and that the real information are already landed on AMD in order to inspect it, we will see how AMD will handle it and if there is more to say on the details then the pointless whitepaper released by CTS-Labs.

<h3><span style="text-decoration:underline;">Source</span></h3>

<ul>
    <li>Severe Security Advisory on AMD Processors (<a href="https://safefirmware.com/amdflaws_whitepaper.pdf" target="_blank" rel="noopener">safefirmware.com [PDF]</a>)</li>
    <li>Security firm discloses range of Ryzen, Epyc, and AMD chipset vulnerabilities (<a href="https://techreport.com/news/33368/security-firm-discloses-range-of-ryzen-epyc-and-amd-chipset-vulnerabilities" target="_blank" rel="noopener">techreport.com</a>)</li>
    <li>Assassination Attempt on AMD by Viceroy Research &amp; CTS Labs, AMD "Should Be $0" (<a href="https://www.gamersnexus.net/industry/3260-assassination-attempt-on-amd-by-viceroy-research-cts-labs#!/ccomment-page=1" target="_blank" rel="noopener">gamersnexus.net</a>)</li>
    <li>AMD Processors And Chipsets Reportedly Riddled With New Ryzenfall, Chimera And Fallout Security Flaws (Updated) (<a href="https://hothardware.com/news/amd-processors-and-chipsets-ryzenfall-chimera-fallout-security-flaws" target="_blank" rel="noopener">hothardware.com</a>)</li>
    <li>AMD's Ryzen, Epyc security co-processor and chipset have major flaws, researchers claim (<a href="https://www.pcworld.com/article/3262967/security/amds-ryzen-epyc-security-co-processor-and-chipset-have-major-flaws-researchers-claim.html" target="_blank" rel="noopener">pcworld.com</a>)</li>
    <li>RESEARCHERS POINT TO AN AMD BACKDOOR—AND FACE THEIR OWN BACKLASH (<a href="https://www.wired.com/story/amd-backdoor-cts-labs-backlash/" target="_blank" rel="noopener">wired.com</a>)</li>
    <li>After short-selling surge, Israeli firm says it finds AMD chip flaw (<a href="https://www.reuters.com/article/us-cyber-amd/after-short-selling-surge-israeli-firm-says-it-finds-amd-chip-flaw-idUSKCN1GP273" target="_blank" rel="noopener">reuters.com</a>)</li>
    <li>Researchers Say AMD Processors Have Serious Vulnerabilities and Backdoors (<a href="https://motherboard.vice.com/en_us/article/kzpm5x/amd-secure-processor-ryzen-epyc-vulnerabilities-and-backdoors" target="_blank" rel="noopener">motherboard.vice.com</a>)</li>
    <li>
<div class="articleHeader">

CTS-Labs Details Potential AMD Security Vulnerabilities (<a href="https://www.pcper.com/reviews/Editorial/CTS-Labs-Details-Potential-AMD-Security-Vulnerabilities" target="_blank" rel="noopener">pcper.com</a>)

</div></li>
    <li>AMD allegedly has its own Spectre-like security flaws (<a href="https://www.cnet.com/news/amd-has-a-spectre-meltdown-like-security-flaw-of-its-own/#" target="_blank" rel="noopener">cnet.com</a>)</li>
    <li>Alleged AMD Zen Security Flaws Megathread (<a href="https://www.reddit.com/r/Amd/comments/845w8e/alleged_amd_zen_security_flaws_megathread/" target="_blank" rel="noopener">reddit.com/r/amd</a>)</li>
    <li>
<p class="heading-9 bluish">AMDFlaws Legal Disclaimer (<a href="https://amdflaws.com/disclaimer.html" target="_blank" rel="noopener">amdflaws.com</a>)</p>
</li>
    <li>Arrigo Triulzi‏ via Tw<span class="FullNameGroup">itter (<a href="https://twitter.com/cynicalsecurity/status/973591954096381952" target="_blank" rel="noopener">twitter.com</a>)</span></li>
    <li>Josh Walrath‏ v<span class="FullNameGroup">ia Twitter (<a href="https://twitter.com/JoshDWalrath/status/973642874981003265" target="_blank" rel="noopener">twitter.com</a>)</span></li>
    <li>Jake Williams‏<span class="FullNameGroup"><span class="UserNameBreak"> </span>via Twitter (<a href="https://twitter.com/MalwareJake/status/973607360210980864">twitter.com</a>) he says <a href="https://twitter.com/MalwareJake/status/973603154276139008" target="_blank" rel="noopener">it's real</a> </span></li>
    <li>
<div class="mmkmJ">Linus Torvalds reaction on Google+ (<a href="https://plus.google.com/+LinusTorvalds/posts/PeFp4zYWY46" target="_blank" rel="noopener">plus.google.com</a>)</div></li>
    <li>Dan Guido via Twitter (<a href="https://twitter.com/dguido/status/973647387569934337" target="_blank" rel="noopener">twitter.com</a>)</li>
    <li>CTS-Labs.com (yep, no HTTPS!) (<a href="http://cts-labs.com/">cts-labs.com</a>)</li>
    <li>Tavis Ormandy via twitter (<a href="https://twitter.com/taviso/status/973622044200919040" target="_blank" rel="noopener">twitter.com</a>)</li>
    <li>AMD And CTS Labs: A Story Of Failed Stock Manipulation (<a href="https://seekingalpha.com/article/4157242-amd-cts-labs-story-failed-stock-manipulation" target="_blank" rel="noopener">seekingalpha.com</a>)</li>
</ul>
