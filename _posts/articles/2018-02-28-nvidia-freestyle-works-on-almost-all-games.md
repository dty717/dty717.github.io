---
layout: post
title: NVIDIA Freestyle works on almost all Games
date: 2018-02-28 04:47
author: nvinside
comments: true
categories: [nVidia, NVidia Freestyle, Tutorials]
---
NVIDIA Freestyle is a new feature which was added in the first Beta Driver for this year, officially not every game is supported, there is a <a href="https://www.nvidia.com/en-us/geforce/geforce-experience/games/" target="_blank" rel="noopener">list which shows which game are supported</a>. Freestyle is a better version (more or less) of <a href="https://vibrancegui.com" target="_blank" rel="noopener">VibranceGUI</a>, <a href="https://reshade.me" target="_blank" rel="noopener">ReShade</a> or <a href="http://sfx.thelazy.net/games/" target="_blank" rel="noopener">SweetFX</a> which enhanced your contracts, gamma and more with filters - these filters can be adjusted per needs.

<img class=" size-full wp-image-3093 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/nv-freestyle.jpg" alt="nVidia Freestyle" width="1280" height="719" />

<!--more-->

<h2>How to enable Freetyle?</h2>

https://youtu.be/hFngTQok-ss

The tutorial by Voltec shows how you work with Freestyle but the problem is that you can't use every game with it which is a shame, my tutorial shows you how you use Freestyle on <em>almost every game</em>.

<h3>Requirement Software</h3>

<ul>
    <li><a class="externalLink" href="https://ci.appveyor.com/project/Orbmu2k/nvidiaprofileinspector/build/artifacts" target="_blank" rel="nofollow noopener">Nvidia Inspector 2.1.3.20</a></li>
    <li><a class="externalLink" href="https://www.geforce.com/geforce-experience/download" target="_blank" rel="nofollow noopener">Geforce Experience 3.12 or higher</a></li>
    <li><a class="externalLink" href="http://www.guru3d.com/files-categories/videocards-nvidia-geforce-vista-%7C-7.html" target="_blank" rel="nofollow noopener">Geforce Driver 390.65 or higher</a></li>
</ul>

<h3>Enabling Freestyle for unsupported games</h3>

Open <b>Geforce Experience</b> &gt; Settings &gt; Check "<b>Enable Experimental Features</b>" make sure that the <b>Geforce Experience</b> Overlay is activated
<a class="externalLink" href="https://flic.kr/p/23dZGv8" target="_blank" rel="nofollow noopener"><img class="bbCodeImage LbImage aligncenter" src="https://farm5.staticflickr.com/4652/39528461665_ef17561db7.jpg" alt="[​IMG]" /></a>
Now open <b>Nvidia Inspector</b> &gt; Scroll down to The "<b>Other</b>" Section &gt; Change Value "<b>Ansel Flags For Freestyle Mode</b>", click on <b>0x00000000</b> and scroll down to change the value to <b>0x00000004</b>(Mass Effect Andromeda, Killing Floor 2,...) and apply changes on top right.
<a class="externalLink" href="https://flic.kr/p/23dZGqD" target="_blank" rel="nofollow noopener"><img class="bbCodeImage LbImage" src="https://farm5.staticflickr.com/4607/39528461405_fb2d2c37d5.jpg" alt="[​IMG]" /></a>

Launch the game and press <b>Alt+F3 </b>to see the Freestyle menu. and that's it.

<span style="text-decoration:underline;">Per-Game option (optional)</span>
The above method is a global switch but you can also enable it per-basis type in the game name in the profiles , if doesn't exist you can manually add one through NVIDIA control panel then open Nvidia Inspector choose profile you've added.
<img class="bbCodeImage LbImage aligncenter" src="https://farm5.staticflickr.com/4759/26553442448_97c94df94f.jpg" alt="[​IMG]" />

<h2>Games which will not work with this method</h2>

The following games will definitely not work:

<ul>
    <li>OpenGL based games</li>
    <li>UWP based games (these are the ones from Windows Store)</li>
    <li>Does not work with NVIDIA 391.01 driver</li>
</ul>

<h2>Tested games</h2>

<ul>
    <li>DirectX 9,10,11,12</li>
    <li>Vulkan Games</li>
    <li>Kingdom Come Deliverance</li>
    <li>Fifa 18</li>
    <li>Tomb Raider</li>
    <li>The Talos of Principle (Vulkan)</li>
    <li>....</li>
</ul>

[caption id="attachment_3094" align="aligncenter" width="640"]<img class="alignnone size-full wp-image-3094" src="https://chefkochblog.files.wordpress.com/2018/02/26580386328_41cfed9624_z.jpg" alt="26580386328_41cfed9624_z" width="640" height="269" /> Freestyle activated. The menu on the left gives you tons of options to improve the look with several filters.[/caption]

<h2>ReShade or NVIDIA's Freestyle?</h2>

The ReShade developer was hired by NVIDIA so it doesn't matter what you use, ReShade is more for advance users but several game developers banned this already from their games because it gives a 'unfair' benefit especially in competitive games. It's unclear if Freestyle gets soon or later also banned or not.

<h2>Final Words</h2>

This method works well and is good enough but if you really want the best of the best go with the original ReShade program. It's a shame that it requires extra tools to unlock it and guides like this, I think it would be great if it would work for every game out of the box and directly gets implemented into the driver control panel.
