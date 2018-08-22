---
layout: post
title: nVidia's Power Management explained
date: 2018-01-23 00:36
author: nvinside
comments: true
categories: [nVidia, Tips and Tricks]
---
Ghacks wrote an wrong article about how NVidia's Power Management work, I'm here to correct the false statements in the mentioned article. Does nVidia's Power management improve Windows performance? No, what it does is basically it regulates the 3D clock speed when it's needed.

<img class=" size-full wp-image-2129 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/nvidia-power-management.png" alt="nVidia power management" width="1265" height="878" />

It's not only Ghacks that spreads the myth that 3D mode (high performance) causes to never downclock to 2D mode or improve 'nVidia performance'.

<!--more-->

<h2>What does 'Prefer Maximum Performance' really do?</h2>

Prefer maximum performance locks the GPU into a higher voltage and higher clock state. For example your GPU will stay at its '3D' clocks in all situations and not lower itself into an idle state once there is no need for it.

This does not improve Windows performance, it does actually boost only the application which requesting higher 3d performance,

https://youtu.be/EwXDcKiLSdg

<h2>Differences</h2>

<h4>Maximum performance</h4>

Prefer max performance: Locks the GPU into a higher voltage and higher clock state, your GPU will stay at its '3D application/game' clocks in all situations and not lower itself into an idle state. This does only consumes more energy when the application requests it! Which means Windows by itself does not consumes more energy because when it goes into idle your card will use exactly the same energy cause it downclocks to 2D.

<img class=" size-full wp-image-2130 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/feg.png" alt="feg" width="928" height="627" />

The myth, that 'prefer maximum performance' never downclocks is wrong, it's based on the application, not Windows.

<h4>Adaptive</h4>

Adaptive: The GPU will reduce clock speeds and voltages when it isn't under heavy load, i.e. when browsing the web/watching a video. MadVR for example gets a benefit using this mode and perform the best here.

<h4>Optimal power</h4>

Optimal Power: Basically everything adaptive does, however if your GPU is doing nothing (i.e. on the desktop) Optimal power won't keep re-rendering the frame over and over, if it's the same frame it'll just pull it from memory and display that frame

<h2>Does it affects the performance?</h2>

https://youtu.be/bI6DF2ce6t8

The 'maximum' mode does have an impact on the application performance since it can use more resources because your graphic cards can have access to higher clock rates.

<h2>What mode should you use?</h2>

If you watch videos, use adaptive for the rest optimal is enough it will give you same FPS except of a few extreme cases. Prefer Max Performance on a per-game basis if a particular game exhibits sub-60 fps behavior due to the GPU not hitting its full 3D speed, e.g. some older DX9 games that otherwise run at the mid-2D/3D or even idle 2D clock speed.

<span style="text-decoration:underline;"><strong>Resource</strong></span>

<ul>
    <li>
<p class="ipsType_pageTitle ipsContained_container">Saw a loss of 7 FPS, running Prefer Max Power, over my normal; Adaptive Mode (<a href="https://www.avsim.com/forums/topic/505134-saw-a-loss-of-7-fps-running-prefer-max-power-over-my-normal-adaptive-mode/" target="_blank" rel="noopener">avsim.com</a>)</p>
</li>
    <li>Nvidia GeForce Tweak Guide (<a href="http://www.tweakguides.com/NVFORCE_1.html" target="_blank" rel="noopener">tweakguides.com</a>)</li>
</ul>
