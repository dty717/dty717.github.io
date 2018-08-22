---
layout: post
title: The End of DDR Memory (not anytime soon)
date: 2018-03-16 16:29
author: nvinside
comments: true
categories: [DDR, Hardware, HBM3, HBM4]
---
Don't worry DDR will still survive over the next years but especially in server environment we're going to reach the limits and the bandwidth from the DDR interface is more and more the bottleneck.

[caption id="attachment_3878" align="aligncenter" width="672"]<img class=" size-full wp-image-3878 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/hybrid-memory-cube.jpg" alt="hybrid-memory-cube" width="672" height="371" /> HBM scheme shows the 'future' and how DDR gets replaced. Picture Source: ICR[/caption]

<!--more-->

<h2>High Bandwidth Memory as solution to the bottleneck</h2>

More stacking and higher capacity should bring a lot of more memory per socket and higher speed, last announcements saying HBM 3+ is planned with 6 TB/s and 384 GB per socket. As for today high-end AMDs EPYC, which has 150 GB/s and 2000 GB RAM per socket has the problem that it reaches it's capacities, so you can only go higher in MHz steps in order to gain more speed but this comes at great costs, especially because the prices are exploding right now.

HBM3+ and HBM4 to be released 2022 till 2024 and rolling our in the desktop environments later. Right now only GPU introducing HBM memory to name one example AMD Fiji was the first GPU which used HBM.

Usually in high performance environments the memory seems to be the highest problem, because they mostly deliver around 150 GB/s which is no enough. HBM3/4 could solve this problem. This however affects the exascale server market only and doesn't apply to Desktop systems since you're not reach that much bandwidth right now.

<h2>DDR for the mass</h2>

DDR will still be the mainstream solution but it's expected that over the long run it soon or later will be replaced with HBM, not only because bandwidth reasons, the costs and efficiency plays another big role.

[gallery ids="3879,3880" type="slideshow" orderby="rand"]

<blockquote>
<p dir="ltr" lang="en">The interconnect and memory problems for <a class="external-link" href="https://twitter.com/hashtag/exascale?src=hash&amp;ref_src=twsrc%5Etfw" target="_blank" rel="noopener">#exascale</a> computing - Nicolas Dube of HPE at <a class="external-link" href="https://twitter.com/hashtag/oghpc?src=hash&amp;ref_src=twsrc%5Etfw" target="_blank" rel="noopener">#oghpc</a> <a class="external-link" href="https://t.co/7JxjIdnAwM" target="_blank" rel="noopener">pic.twitter.com/7JxjIdnAwM</a></p>
— Andrew Jones (@hpcnotes) <a class="external-link" href="https://twitter.com/hpcnotes/status/973297251530440704?ref_src=twsrc%5Etfw" target="_blank" rel="noopener">March 12, 2018</a></blockquote>

<h2>Closing Words</h2>

HBM is interesting but the mass still will use DDR for the next 10-20 years, the mass right now still needs DDR because compared to the current prices it's to expensive to change the entire infrastructure and in most cased the current bandwidth is enough - this dramatically changes in case you really require powerful systems which are required by the Military or e.g. the medical industry.

So at the end it's not expected that DDR will be replaced but over the long run (no surprise) it will be replaced by HBM.
