---
layout: post
title: OBS Studio v21 released - Comes with nice changes
date: 2018-01-23 10:30
author: nvinside
comments: true
categories: [OBS-Studio, Software]
---
Streamers mostly use Xsplit or OBS-Studio both tools are nice but only OBS-Studio is open source and is mostly ahead of all other programs because of it, the community fixes things really fast and everyone can contribute - this is the reason I love OBS and it I use it since years without much problems.

<img class=" size-full wp-image-2161 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/obs-studio.png" alt="OBS-Studio" width="1121" height="771" />

The interface is still one of the things I love, it's easy to use, clean and everyone can understand the toggles without doing some research because everything was designed so that beginners can understand it.

<!--more-->

This version features scripting through Lua and Python, Multivew Projector, new audio meters, per-scene transitions, audio ducking, and much much more. Read the full notes and download can be found <a href="https://github.com/jp9000/obs-studio/releases/tag/21.0.1" target="_blank" rel="noopener">here</a>.

The default theme was switched to dark, there also some smaller changes to avoid confusions e.g. the "Multi-adapter Compatibility" got renamed to "SLI/Crossfire Capture Mode (Slow)".

<h2>New Audio features</h2>

Audio was a focus with this release, as you can see on the screenshot the volume bars are now easier to identificate, red means too much loud and green means there is less noise. Among this visible change the audio output got improved, 2.1, 4.0, 4.1, 5.1, and 7.1 audio to stream/recording are now supported which is really a benefit especially if you have several tracks or want to provide your listeners a better sound experience.

An "Audio Meter Decay Rate" option in audio settings was added to allow selecting a specific delay rate (fast, medium, slow) for the audio meters if desired, which gives you more control over it.

The new sidechain/ducking compression allows you to add those filters which then gives you the ability to lower the audio level of an audio source based upon how loud another source is - nice one!

An quick overview how the audio mixer works is given <a href="https://obsproject.com/wiki/Understanding-The-Mixer" target="_blank" rel="noopener">here</a>.

<h2>Scripting</h2>

Several changes were made which affect the script engine, Luajit/Python3 was added and several example script were directly integrated like e.g. an example clock. The script engine allow you to integrate and play with animation related stuff like intros/outros or transitions between the scenes.

<h2>Final words</h2>

The new release is awesome, I love it and I still recommend this program to anyone, YouTubers, streamers or anyone who want to capture something.

<ul>
    <li style="text-align:center;">Good program which gets better and better</li>
    <li style="text-align:center;">Good and helpful community</li>
    <li style="text-align:center;">Open source and free to use</li>
    <li style="text-align:center;">Plugins are available</li>
    <li style="text-align:center;">Everyone can contribute and help</li>
</ul>

It's a really powerful program and gets more and more professional with each new release, of course the program works on Linux &amp; macOS too which makes it even more attractive.
