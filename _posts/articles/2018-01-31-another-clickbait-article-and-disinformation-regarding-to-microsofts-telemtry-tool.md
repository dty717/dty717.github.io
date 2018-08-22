---
layout: post
title: Another clickbait Article and disinformation regarding to Microsoft's Telemtry tool
date: 2018-01-31 19:03
author: nvinside
comments: true
categories: [Telemetry, Windows 10]
---
Is it true that even if you set Telemetry level in the Enterprise to 0 still doesn't disable everything - Yes, 0 actually seems to not mean zero here, it includes Security related telemetry but is that a reason to be worried about?

<img class="  wp-image-2464 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/5140-tele-1.png" alt="5140.tele-1.png" width="645" height="345" />

<!--more-->

<span class="fn">Preston Gralla</span> wrote an article on Computerworld, he '<a href="https://www.computerworld.com/article/3252327/microsoft-windows/don-t-believe-microsoft-s-latest-privacy-hype.html?utm_source=feedburner&amp;utm_medium=feed&amp;utm_campaign=Feed%3A+computerworld%2Fnews%2Ffeed+%28Latest+from+Computerworld%29" target="_blank" rel="noopener">Don’t believe Microsoft’s latest privacy hype</a>'. Well that's your own 'believe' not a proof and not really a consent for an article isn't it, that's more Reddit niveau and not what I expect from such a big site like Computerworld.

He is complaining about that Microsoft should totally disable Telemetry or at least gives the user the ability to opt-out, so what's the news I'm writing this since day one. However if you check his prove you will notice there is none. Except his words this article is nothing except clickbait yet again to make clicks/money to get attention with something out of nothing - in other words some kind of fake news because a believe or a personal opinion is not something can take serious if there is nothing behind.

<h2>Telemetry</h2>

Stop thinking that this is a devil, that's wrong, the problem is as mentioned, that there is no opt-out and that is the only problem besides this no article I'm aware of ever provided a Whireshark log with something which really shows that Microsoft is spying. Maybe because of the fact that the stream is encrypted.

<h4>Gibberish data in the Telemetry viewer</h4>

People like me and others noticed that the tool Microsoft provides with the upcoming Redstone 4 are more or less cryptic and gibberish if you're not an expect or aware of certain terms. This has two reason, because the entire program is beta and works via <a href="https://en.wikipedia.org/wiki/JSON" target="_blank" rel="noopener">json</a> database and the fact that some methods for a security reason have a cryptic name to make it harder for attackers to decrypt it. These are the real reasons and not some believe that this is because Microsoft wants to hide it, a simply prove can be done by opening other json files and you see similar function and methods, you can do this with any other file and you might see some 'cryptic' function that's kind of normal.

Telemetry can help to solve problems like to identify crash reports and more, it's by default not the devil, it can be abused of course but if you want a prove, open ComputerWorld page and you see it might even collects more data than Microsoft within 24 hours.

<img class="alignnone  wp-image-2462" src="https://chefkochblog.files.wordpress.com/2018/01/fwf.png" alt="fwf" width="792" height="409" />

For someone who constantly fighting against Windows 10 without any proof he is using a page which might even collects more than MS as we can see here. So if you complain why not mention that your own site or the site you wrote your believes not also collects data? Right because you see what you want to see and you shoot against Microsoft because that gives you the clicks - right?

&nbsp;

[caption id="attachment_2466" align="aligncenter" width="798"]<img class=" size-full wp-image-2466 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/networkx.png" alt="networkX" width="798" height="639" /> Svhcost.exe also connects to other mechanism like smartscreen, certificate updates, clock time syncronisation and other mechanism so these amount of data re depending how you use your Windows and which services your opt-in/opt-out.[/caption]

Ass you can see in my tests with 1803 and NetWorX Windows Enterprise sends ~3 MB away, this is with the gpedit.msc Telemetry option set to 0 (Security). Windows Defender is enabled, the other services which I removed from the screenshots are BitTorrent, Discord &amp; Co. The download is higher because it also counts Windows Defender updates within the same executable (svchost.exe).

I think this is pretty much okay and other application and Browser ads trying to upload more, of course this is depending on how often you visit a page and how often you check Windows Update or if you upload unknown malware samples into Microsoft cloud, so the numbers are variable here but this was collected within 24 hours with twice checking for updates + WD signature update, that's not much, almost nothing.

I'm aware that my own Blog is connected to Ads but I not cry or make a complaint when I can't do it better and of course I not write shitty clickbait articles without anything.

<h2>Conclusion</h2>

Telemetry is at some point okay but some might not like it and there should be something to globally opt-out, this was promised and broken, the real only privacy concern I see here but to say that Microsoft is here to judge without checking some facts it wrong and yet again only shows that wannabe expert should better shut up when it comes to this, I not saw much serious articles which really prove exactly data have been collected and if it's only meta-data or real problematically data like your unique MAC address, what I know for sure is that the Windows own activation mechanism collects the IP, MAC address and more, which is documented from the beginning over <a href="https://technet.microsoft.com/en-us/library/bb457054.aspx" target="_blank" rel="noopener">here</a>. So everyone is so concerned about Telemetry but no one is the obvious, the activation mechanism already collects the data during the activation process and this not only since Windows 10.

<ul>
    <li>Do not make a complaint without professional whiresark log</li>
    <li>Do not make a complaint against the big ones to get clicks, your article simply suck like most of ComputerWorld articles</li>
    <li>Do not scare people - this is already some kind of mass manipulation, data collection is a common thing not a Microsoft created or exclusive one</li>
    <li>Do not post troll articles which vanish after some months because you realized you couldn't prove anything - Remember this garbage article <a href="https://thehackernews.com/2016/02/microsoft-windows10-privacy.html" target="_blank" rel="noopener">here</a>? Maybe check the original source, <a href="https://voat.co/v/technology/comments/835741" target="_blank" rel="noopener">it's gone because it was nothing but crap</a>.</li>
</ul>

This makes me angry, not because I want to defend a position here but because of such articles bigger pages getting more attention and they don't deserve it with such half-baked articles which spreading nothing but personal believes and people might ending up seen it as facts.

I'll definitely provide a wireshark dump among several other information in an article and on my GitHub when Redstone 4 is finally out to debunk some myths and to check what Microsoft really collects cause I'm totally of sick hearing all the time 'spying' without anything except believes.
