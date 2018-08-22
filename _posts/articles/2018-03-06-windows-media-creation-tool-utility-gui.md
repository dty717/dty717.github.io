---
layout: post
title: Windows Media Creation Tool Utility GUI
date: 2018-03-06 04:50
author: nvinside
comments: true
categories: [Media Creation Tool, Software, Windows 10, Windows Media Creation Tool]
---
The user mxman2k has written an AutoIT program which compliments the Windows Media Creation Tool. It's a font-end which offers some options which allows the user to download either an AIO Consumer or a VL edition (ISO/USB).

<img class=" size-full wp-image-3298 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/windows-media-creation-tool-gui.png" alt="Windows Media Creation Tool GUI" width="499" height="227" />

<!--more-->

<h2>Program overview</h2>

The program is unofficial and written with <a href="https://www.autoitscript.com/site/autoit/" target="_blank" rel="noopener">AutoIT</a>, the program is closed source but malware free according to <a href="http://C53B9ABCFAB420D896FEDBE8FAFC8060B82A1E466C99D5B830F604D21E2699F0" target="_blank" rel="noopener">VirusTotal results</a>.

The Media Creation Utility GUI needs the Windows Media Creation program, which will be downloaded (via your default Browser) if you haven't placed it into the same folder as the MediaCreation-SimpleGUI.exe.

<img class=" size-full wp-image-3297 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/mediacreation-simplegui-download.png" alt="MediaCreation-SimpleGUI Download" width="401" height="167" />

Basically it fetches the following link: <a href="https://download.microsoft.com/download/A/B/E/ABEE70FE-7DE8-472A-8893-5F69947DE0B1/MediaCreationTool.exehttps://download.microsoft.com/download/A/B/E/ABEE70FE-7DE8-472A-8893-5F69947DE0B1/MediaCreationTool.exe" target="_blank" rel="noopener">https://download.microsoft.com/download/A/B/E/ABEE70FE-7DE8-472A-8893-5F69947DE0B1/MediaCreationTool.exe</a>.

Once you placed the MediaCreationTool.exe into the same folder you see an basic GUI which allows you to download the official Consumer or Volume ISO/USB file directly from Microsoft. The benefit is that all files are verified by Microsoft and you not need to mess with torrents or other home-brew/infected ISO's.

[caption id="attachment_3299" align="aligncenter" width="499"]<img class=" size-full wp-image-3299 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/gr.gif" alt="gr" width="499" height="227" /> Function Overview[/caption]

The program is easy to understand and it does what it promise.

For Consumer just select the <strong>Consumer</strong> option (default) and click <strong>Create</strong>. The Media Creation Tool (MCT) will take over and obtain the file(s) as it would normally. You get the choice to use default settings or change the 32/64/Both etc via the MCT itself.

For <strong>Volume-Edition</strong> things are a little bit different, <strong>select Volume</strong> and you can then select the VL Edition you require. When you click <strong>Create</strong> you will see a message box explaining some extra things you can do.

<img class=" size-full wp-image-3300 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/mct-start.png" alt="MCT start" width="413" height="271" />

<h2>Download</h2>

I made a mirror on Mega <a href="https://mega.nz/#F!xRtEEDgY!QwgdVzU7zu0xaXvkcbXNXQ" target="_blank" rel="noopener">here</a>, the checksums and the VirusTotal report is also in the folder so you can check and verify everything yourself if you like. The GUI itself is around 844 KB small.

<h2>After the ISO was created</h2>

Once the ISO or USB meda was created, open it and look in the Sources folder delete the <strong>PID.txt</strong> (which contains the default key) and you will have a <strong>AIO VL ISO/USB</strong>.

OR you can just have it as a single edition VL installation.

<h2>Final Words</h2>

The GUI is really good, especially for beginners which are confused or simply want to switch their Windows Edition. The official solution created by Microsoft doesn't offer much options to select a specific Version which is really sad because it might forces users to search on the Internet and then the infection risk is much higher.

The tool gets my recommendation, maybe or hopefully we see a source code soon so that people can compile or review the source to keep this programs and the included links up2date.

Thanks to mxman2k and the community for constantly creating awesome little utilities like this one. <img class="alignnone size-full wp-image-3245" src="https://chefkochblog.files.wordpress.com/2018/03/uu0vofr.gif" alt="uu0vOfR" width="36" height="29" />
