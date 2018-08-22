---
layout: post
title: Ryzen 5 2400G APU Memory Speed Analysis
date: 2018-02-20 10:25
author: nvinside
comments: true
categories: [AMD, APU, Ryzen 5 2400G APU]
---
Our friends from <a href="https://www.pcper.com/reviews/Graphics-Cards/AMD-Ryzen-5-2400G-Memory-Speed-Performance-Analysis" target="_blank" rel="noopener">PC Perspective have run a battery of benchmarks on the new Ryzen 5</a> 2400G APU to see which effect memory speeds have on the performance. From what I know , Ryzen is more sensitive to memory speeds than eg. Intel but what about when you throw a GPU into the mix that is utilizing the same memory pool? The difference in both synthetic and game benchmarks was nearly 11-15% for DDR4-2400 vs DDR4-3200.

[caption id="attachment_2939" align="aligncenter" width="602"]<img class=" size-full wp-image-2939 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/3dmark-single.png" alt="3dmark-single" width="602" height="535" /> Firestrike Benchmark and the difference in Dual vs. Single-Channel. Picture: PC Perspective[/caption]

<!--more-->

<blockquote>For our testing, we are running the Ryzen 5 2400G at three different memory speeds, 2400 MHz, 2933 MHz, and 3200 MHz. While the maximum supported JEDEC memory standard for the R5 2400G is 2933, the memory provided by AMD for our processor review will support overclocking to 3200MHz just fine.</blockquote>

<img class=" size-full wp-image-2940 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/3dmark_2.png" alt="3dmark_2" width="602" height="519" />

The benchmark shows that there is a performance impact and this is no surprise. The scaling seems to go up almost perfectly with the higher speed memory. Dual-Channel seems to be a must in modern platforms because the performance will suffer or you not get the possible expected output especially in applications like Blender, Sony Vegas &amp; Co.

<h2>Final Words and Conclusion</h2>

The next generation on the lower end APUs AMD could add some eDRAM on die itself for the GPU and enable the Vega HBCC to use that eDRAM as HBC in a similar manner to what the HBCC does with HBM2 as HBC that is used on the discrete Vega variants which could solve some issue, especially in case you want to OC via Ryzen Master. It also looks like Vega's L2 cache and that reworking of Vega's L2 cache with respect to the GPU's raster back end and other GPU functional blocks have helped Vega perform much better than previous GCN generation integrated graphics. But AMD needs to think about eDRAM on the lower end APUs and HBM2 for some future high end APUs so Vega's HPCC/HBC IP can benefit APUs also.

Is 12nm going to be eventually used all of AMD's APUs like it will be for the Ryzen CPU only refresh SKUs or will AMD just wait for 7nm to update its line of Zen/Vega APUs. AMD's APU product stack for at least the next several months is finally complete as far as there being Zen/Vega mobile and desktop APU variants availabe finally from AMD. But the 2200G/2400G desktop variants are directly derived from the mobile variants so maybe at 12nm AMD will have some sort of refresh APUs or maybe just one new desktop APU variant at 12nm with a bit larger Vega nCU counts and some sort of extra GPU cache level for its integrated mobile Vega HBCC to use as HBC.

Now comes the process of getting all the Firmware/Driver and Gaming software tweaked for Raven Ridge and that includes testing any games that will be making use of Vega's FP16 (Packed math) and Explicit Primitive Shaders and orher new Vega IP. With Vega's HBCC/HBC IP on hold for APUs until AMD can get either eDRAM or HBM2 for Vega's HBCC to use as HBC.

<h3>Memory</h3>

Faster memory is always a good thing to have for Mobile CPU/Integrated Graphics combo SKUs and eDRAM can be of help also until the HBM2 ecosystem and econony of scale takes hold at some future time and HBM2 can be used on mobile and desktop Zen/Vega products also.

<h3>Application issue</h3>

As right now lots of application needs to be updated to benefit from AMD's FP16 or there simply crashing, <a href="https://chefkochblog.wordpress.com/2018/02/19/howto-fix-bsods-file-corruption-on-raven-ridge-apu-systems/" target="_blank" rel="noopener">I reported about this here</a> already, AMD is not to blame here and it takes some updates to solve all the issue. However, AMD did well here and we only can hope that we get the updates as fast as possible.

<h3>Gaming</h3>

From what I understand, graphics performance is not affected much by RAM Latency, the difference is mostly around 1 up to max. 5%. because the APU has two processors needing access to the RAM.

&nbsp;
