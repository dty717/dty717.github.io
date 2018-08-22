---
layout: post
title: Microsoft closed the 'Skip Ahead' function yesterday - You can still join!
date: 2018-02-07 19:19
author: nvinside
comments: true
categories: [Insider Program, Skip Ahead, Windows 10, WIndows Insider]
---
Microsoft officially closed the Insider program which means if you want to opt-in into Redstone 5 builds you are out of luck, but wait you still join the party! With this little registry tweak it's possible to get insider builds, the only requirement is that you need already an Insider-Account, if you create a new account and apply this tweak then you have no luck.

<img class="alignnone size-full wp-image-2706" src="https://chefkochblog.files.wordpress.com/2018/02/microsoft-celebrates-the-one-year-anniversary-of-the-windows-insider-program-493314-2.jpg" alt="I'm Windows Insider" width="1909" height="1137" />

<h2><!--more-->
What exactly is Windows Insider 'skip ahead?'</h2>

Skip ahead is a new option for Insiders in the Fast ring that allows users to jump ahead, past the current Fall Creators Update preview builds, and onto the development branch where the update coming after the Fall Creators Update is being developed.

<h2>Enable it via registry</h2>

<ul>
    <li>Open Windows <em>Settings</em> -&gt; <em>Update &amp; Security</em> -&gt; <em>Insider</em></li>
    <li>Change to „<em>Skip ahead to the next release</em>“</li>
    <li>Do <strong>not</strong> close the <em>Settings</em>.</li>
    <li>Press Win + R, <em>regedit</em> and hit enter.</li>
    <li>Go to the path <strong>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsSelfHost\Applicability</strong></li>
    <li>Doubleclick on <em>ContentTyp</em> and change Active to <strong>Skip</strong></li>
    <li>Go to the path <strong>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsSelfHost\UI\Selection</strong></li>
    <li>Doubleclick on <em>UIContentTyp</em> and change Active to <strong>Skip</strong></li>
    <li>Restart your PC.</li>
</ul>

<blockquote>Windows Registry Editor Version 5.00

; Works with RS 4 and RS 5
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsSelfHost\Applicability]
"ContentTyp"=hex(2):53,00,6b,00,69,00,70,00,00,00

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsSelfHost\UI\Selection]
"UIContentTyp"=hex(2):53,00,6b,00,69,00,70,00,00,00</blockquote>

Restart your Windows and you see the following option again:
<img class="alignnone size-full wp-image-2707" src="https://chefkochblog.files.wordpress.com/2018/02/skip-ahead-redstone-4.jpg" alt="skip-ahead-redstone-4.jpg" width="1799" height="1331" />

This little registry tweak should re-enable the function. In my test case it already started to download Build 16257.1000.
