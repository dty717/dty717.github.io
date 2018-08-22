---
layout: post
title: Does changing Process Priority have any effect on game or application performance?!
date: 2018-02-27 20:40
author: nvinside
comments: true
categories: [application performance, gaming performance, Review, Tips and Tricks]
---
This article is designed to answer the old question if setting the program or game to another priority class changes the FPS or application overall performance or not.

<img class=" size-full wp-image-3076 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/dwd.png" alt="dwd" width="750" height="457" />

<!--more-->

<h2>What is the process priority setting for?</h2>

To answer the question if it really changes something we need to understand how the priority function in Windows works. By default, every program runs on 'normal' which means the OS (Windows) handles the system resources automatically. The priority only dictates how often the OS should try to run your process. But take a look in task manager when playing a game your game already takes 99% of the CPU time (if it was badly coded). So no matter how high priority you set, you'll never be able to achieve more than a 1% speedup. And even if you manage that, you do it by starving other important processes that actually needed that 1% for a smooth running OS, Consequences might be that other background applications starting to stuttering, or just getting instability because important bits of Windows can't be executed.

<h3>Windows is not a real-time OS!</h3>

Windows is not exactly a real-time operating system, the latency is quite low, older operating systems are 'faster' this is due several aspects but you only have to know that it's all about how fast the application can operate while you use other things in the background. If you're interested then this <a href="https://www.google.ca/search?q=C04X1116607.pdf&amp;gbv=1&amp;sei=K5GVWtenC4aukwX78pY4" target="_blank" rel="noopener">pdf</a> is a really good start.

The process priority <em>class</em> raises or lowers all effective thread priorities in the process and is therefore considered the 'base priority'.

So, every process has a:

<ul>
    <li><strong>Base process priority class</strong>.</li>
    <li><strong>Individual thread priorities</strong>, offsets of the base priority class.</li>
    <li><strong>An option to reset the class</strong>, some games automatically reset their state back to normal.</li>
</ul>

Vista or newer Windows systems, use of the <a href="http://msdn.microsoft.com/en-us/library/ms684247(VS.85).aspx" target="_blank" rel="noopener">Multimedia Class Scheduler</a> which is the proper way to achieve real-time operations in what is <em>not</em> a real-time OS. It works, for the most part, though is not perfect since the OS isn't designed for real-time operations.

<h2>Is it a good idea to run games at higher priority setting than Normal?</h2>

<div class="post-text">

There's absolutely no problem with a thread having a Real-time or High priority on a normal Windows 10 system - they aren't necessarily for special processes running on dedicated machines. I imagine that multimedia drivers and/or processes might need threads with a real-time priority, eg while streaming with OBS studio, however, such a thread should not require much CPU - it should be blocking most of the time in order for normal system events to get processing.

https://youtu.be/niNc4Xr46xk

The example shows that the application runs faster, but faster doesn't necessarily mean more FPS it can give you a slight boost especially on single-core systems when the system is busy with other tasks.

On multi-core systems the benefit is way less and only bad coded applications need special adjustments.
<h3>Changing the priority permanently via regedit</h3>
<code>Windows Registry Editor Version 5.00</code>

<code>[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\\PerfOptions]
"CpuPriorityClass"=dword:00000003</code>

This changes the priority class forever, however, some application can override it. If you like to revert it, just delete the entire entry. Only apply the tweak in case you tested it before and don't do this blindly for every application or game!

An alternative to this tweak is using Process Lasso (but overall it does provide the same) as shown here:

[caption id="attachment_3083" align="alignnone" width="827"]<img class="alignnone size-full wp-image-3083" src="https://chefkochblog.files.wordpress.com/2018/02/game-bitsum-hp-power-plan-option.jpg" alt="game bitsum HP power plan option" width="827" height="574" /> The Gaming Mode and it's Power Plan is nothing but a switch like Windows 'High performance' Plan and does the same, the difference here is that it automatically can switch the plan based on which .exe is started[/caption]

[caption id="attachment_3084" align="aligncenter" width="564"]<img class=" size-full wp-image-3084 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/game-mode-list.jpg" alt="game mode list" width="564" height="461" /> Similar to the registry tweak, you give Windows or Process Lasso the programs which should get a 'High'er priority[/caption]
<h2>Windows 10 Game Mode</h2>
In  nutshell spoken the Game Mode does nothing but the same, it tries to prioritize some processes eg your Game to get 'optimal' game experience but this is far away from being stable or usable as of right now because such a mode doesn't check if other applications are already running on High or Real-Time which then causes (again) some problems which can result in stuttering (micro-stuttering), frame drops and even freezes.

Vulkan API based games like DOOM don't need any tweaks because there working quite different and you can check your task manager that there immediately get prioritized. In most cases you get a slight boost in D3D games but not in 'modern' ones which are built around Vulkan.
<h2>Is it dangerous to set something to real-time?</h2>
<a href="https://blogs.msdn.microsoft.com/oldnewthing/20100610-00/?p=13753" target="_blank" rel="noopener">According to this article, yes</a>. According to my own research, no! I wouldn't say that there are no risks because your application or OS entirely can freeze in several situations but it doesn't crash it, it's depending on several things like how many applications you have open, how many systems resources you have and how many cores or if you overclocked something or not. These variables apply to every user.
<h3>FPS vs. Latency</h3>
CHanging the priority might boost your FPS but you have to fight with latency, you might see that the mouse becomes 'laggy' this is when your PC runs out of resources and the last step before your Game/Application/OS starts to freeze.

</div>

<h2> Conclusion</h2>

<ul>
    <li>Giving a process a higher priority won't make it go <em>faster</em>. Your programs will never use more CPU time than they need (or more than 100% obviously).</li>
    <li>It just means that if you have two processes that both want CPU time, the one with a higher priority will get it.</li>
    <li>So, if for example, you're doing some background task that might take a while, and it's making a game stutter, you can lower the priority for the background task (or raise the one for the game, though that might interrupt other things you might want going on) to stop the stuttering.</li>
    <li>"Realtime" or "High" in Windows is just another priority setting. It only means that you can't set another priority higher than that.</li>
    <li>It can 'boost' your application or game but not as much as you think, setting the priority to "High" seems okay in case you only game and don't listen to Spotify at the same time because then the CPU might gets busy again and the opposite happens, you decrease the performance since your CPU tries to handle Spotify, a typically result here is that the sound starts to crackle.</li>
    <li>If you put any process to high priority it will increase performance because it allocates more resources to that specific process - that's the theory but not always 'true'.</li>
    <li>Core Parking is another story which I will write about in a separate article, but I already can spoil that Core's are quite different handled in Windows 10 which means you do not need any tools or task manager programs to 'adjust' or tweak this. Is is only 'needed' in Windows 7 or below since Windows 8 or higher is very well optimized for multi-core CPUs.</li>
    <li>You do not need programs like Process Lasso there only providing a GUI for Windows integrated mechanism, however, it can be easier to work with them as with messing with the registry or finding the specific options in Windows, hopefully, the Game Mode will get improvements to address this.</li>
    <li>Well coded applications and games don't need tweaks because there can check the system resources automatically but in some situations, adjustments can slightly increase the overall performance based on how well the program was coded to detect additional things like how many Cores you have, how many system resources are available after you started the game.</li>
    <li>CPU bound games are only affected, this has nothing to do with GPU 'focused' games since you won't gain anything from it.</li>
</ul>

<h2>Final Words</h2>

We learned today that setting "High" is okay but not always a guarantee and it depends on several variables, for single-core CPUs and optimized programs it definitely will get a performance boost will on overclocked machines or multi-core applications and CPUs it might can causes troubles. Especially in D3D9 (DirectX 9) in combination with Windows 10 own 'Game mode' it causes stuttering.

Don't do it if you have enough system resources, it's not worth the possible trouble especially if you have some background applications opened but do it when you only have one application open like one game or Photoshop, Sony Vegas or other photo/video editing programs.

In case you really have high end harder, never change it because your system would have enough resources and the OS then can finish it's todo list (tasks) one by one. Windows 10 and modern hardware normally won't take benefits from changing it, in most cases, the problem is the game or application which needs some changes, in this case, I would ask the developer directly to fix this or to use an up2date engine. Remember that the original old school engines like HL² were never designed to handle several cores at the same time, there are more such examples of course but it overall shows that this is a common engine problem.

<h3><span style="text-decoration:underline;">Research</span></h3>

<ul>
    <li>
<p class="title">Scheduling Priorities (<a href="https://msdn.microsoft.com/en-us/library/windows/desktop/ms685100(v=vs.85).aspx" target="_blank" rel="noopener">msdn.microsoft.com</a>)</p>
</li>
    <li>Lower Task Priorities in Windows to Avoid Slowdowns (<a href="https://lifehacker.com/5546429/lower-task-priorities-in-windows-to-avoid-slowdowns" target="_blank" rel="noopener">lifehacker.com</a>)</li>
    <li>Windows Process I/O Priorities (<a href="https://bitsum.com/pl_io_priority.php" target="_blank" rel="noopener">bitsum.com</a>)</li>
    <li>Set process priority to High: Dangerous? (<a href="https://superuser.com/questions/476283/set-process-priority-to-high-dangerous" target="_blank" rel="noopener">superuser.com</a>)</li>
    <li>Processes, Threads, and Jobs in the Windows Operating System (<a href="https://www.microsoftpressstore.com/articles/article.aspx?p=2233328&amp;seqNum=7" target="_blank" rel="noopener">microsoftpressstore.com</a>)</li>
    <li>
<p id="firstHeading" class="firstHeading" lang="en">Scheduling (computing) (<a href="https://en.wikipedia.org/wiki/Scheduling_(computing)" target="_blank" rel="noopener">wikipedia.org</a>)</p>
</li>
    <li>Microsoft explains how Windows 10’s Game Mode will work (<a href="https://www.theverge.com/2017/1/25/14390990/microsoft-windows-10-game-mode-explanation" target="_blank" rel="noopener">theverge.com</a>)</li>
</ul>
