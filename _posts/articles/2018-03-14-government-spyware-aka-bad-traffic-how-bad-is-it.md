---
layout: post
title: Government Spyware aka BAD Traffic - How bad is it?
date: 2018-03-14 13:30
author: nvinside
comments: true
categories: [Bad Traffic, Government Spyware, Security]
---
<a href="https://www.sandvine.com/company" target="_blank" rel="noopener">Sandvine.com</a> middleboxes on Türk Telekom’s network redirected traffic in two countries Turkey &amp; Syria to raise money through affiliate ads and cryptocurrency mining in Egypt. The entire seems underestimated by social media and the TV because BAD Traffic might could only the beginning of an 'traffic fight' and there s very less you can do about it.

[caption id="attachment_3788" align="aligncenter" width="1024"]<img class=" size-full wp-image-3788 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/bad-traffic-image-4-1024x571.png" alt="Bad-Traffic-Image-4-1024x571" width="1024" height="571" /> The targets for malware injection in Turkey and Syria. Picture Source: Citizen Lab 2018.[/caption]

<!--more-->

&nbsp;

<h2>Overview</h2>

&nbsp;

Several devices from Sandvine were used in order to redirect traffic directly to Egypt for malware, ads and mining reasons. TurkTrust was the provider which handled the connection, as reported over <a href="https://nakedsecurity.sophos.com/2013/01/08/the-turktrust-ssl-certificate-fiasco-what-happened-and-what-happens-next/" target="_blank" rel="noopener">here</a>, the provider has in general a 'Trust' problem. The fight has only just began and I do believe that this will happen all over the world soon - or is already ongoing as other multiple sources often <a href="http://appleinsider.com/articles/17/12/14/intentional-event-redirects-cloud-traffic-from-apple-google-others-through-russia" target="_blank" rel="noopener">prove</a>.

The entire background story can be found <a href="https://citizenlab.ca/2018/03/bad-traffic-sandvines-packetlogic-devices-deploy-government-spyware-turkey-syria/" target="_blank" rel="noopener">here</a> - which is worth reading to understand how they spread malware - basically once again by redirected URL/Domains and manipulated software.

<h2>CCleaner &amp; Co. are affect does it mean I need to switch?</h2>

The injected and manipulated malware delivered by CCleaner and other programs are dangerous without any doubt but you not need to switch your installed product just because of this, because there trying to redirect you on other products too which means that they ultimately trying to spread their malware in every product. I assume popular products are a larger target because more people using it and this increases the chance to infect more people, using alternatives doesn't help here because there might be also already infected or the next on the list. Besides, most smaller projects are more vulnerable because less people watching the source code or actually doing a security audit.

In fact every software is a possible target which gets larger as soon it gets popular, recommend all over the place to use alternatives is simply stupid cause there not less a targeted and it doesn't solve the problem that theoretical every download or URL could be redirected or manipulated.

<h2>How Bad is it?</h2>

The problem here is that there is no protection to identify it with the current mechanism, all you can do is to inspect the traffic via deep package inspection and observe it. That said, then it's already too late or when everything is already done.

<ul>
    <li>CAA doesn't help solve the problem</li>
    <li>HTTPS itself is in this case useless because MITM attacks are possible because you have no control over ca root certificates and there (Turk Trust) compromised</li>
    <li>Certificate pinning, does not solve the issue because the first connection could be already compromised. So you can't ensure that this isn't already compromised.</li>
    <li>There is no technique to protect News/Article against spreading fake information, so people might believe everything what they read and if you're not involved or did some research on your own it's almost impossible to say - if it's obvious - if it's fake or not. Of course there some professionals which could inspect it but they mostly want money for the process, so most of the times it's yet again up to the media which you must trust cause they have the money to pay professionals.</li>
    <li>DNS CAA records, combined with DNSSEC can't solve it either because the records could be manipulated directly from the target address via eg. a trojan on the host which sends fake records away in order to confuse others.</li>
    <li>Faking checksums is not a big deal, MD5 and SHA1 are deprecated</li>
</ul>

You can be sure that this point that this is just the beginning and that other countries will adopt it and find larger ways to mass-redirect traffic for their needs, eg. to mine crypto currencies or in order to spy or inject malware into it. That alone is really shocking because there is less you can do about it.

<h2>What can you actually do?</h2>

<ol>
    <li>Inspect the traffic yourself (maybe not for everyone a real option but in case your targeted it should be considered)</li>
    <li>Disallow the TurkTrust certificate and try to re-route the traffic over other CA's</li>
    <li>Validate always your downloads via SHA256 (right now it's not compromised or deprecated).</li>
    <li>Always check the download URL and if it's secure or not, if something is suspicious don't download and don't install it.</li>
    <li>Check the files against <a href="https://www.virustotal.com" target="_blank" rel="noopener">VirusTotal</a> or other analyzers. VT also provides the ability to scan URL's and Android files.</li>
    <li>Check if the Internet traffic is higher than usual, some routers provide stats for this, otherwise check if Windows/Linux with their integrated data traffic programs show more traffic over a long period.</li>
    <li>Ensure to block the programs with a Firewall in order to avoid that a payload can be loaded. I think lots of software don't need any Internet connection, so you easy can block this. However, this is problematically for those programs which need Internet.</li>
    <li>Stay up2date and check news, blogs to ensure you are updated with the latest findings and information how you prevent certain things. Even if you are not tech interested you should at least check if the programs you use are known to be dangerous or not already infected.</li>
</ol>

<h2>Final Words</h2>

This shows again that the vast majority of corporations are non-ethical entities and only seek profit. Only when their profits are endangered, e.g. backlash from the general public, do they act ethically. The problem I see here is that it will be used in a larger scale because there less ways what people can do about it, they might see ads or notice that their Internet is slowed down but then it's mostly already to late, if and only if people notice it, especially in environments with less educated people it could be a problem.

It's unclear at the time of writing this if it's not already abused all over the world under different names, targets and on a larger scale. The ISP here must be in the first place responsible to ensure that certificates are valid and not compromised, in my opinion no matter what you set if there is a 'bad' certificate the ISP should prevent you from connecting to it, this has noting much to do with censorship more like to prevent harm and to prevent it.

I'll monitor this story closely because it's really huge and I'm sure this will soon or later affect more countries and not only Turkey or Syria.

<h3><span style="text-decoration:underline;">Resource</span></h3>

<ul>
    <li>A First Look at Certification Authority Authorization (CAA) (<a href="https://www.net.in.tum.de/fileadmin/bibtex/publications/papers/caa17.pdf" target="_blank" rel="noopener">net.in.tum.de</a>)</li>
</ul>
