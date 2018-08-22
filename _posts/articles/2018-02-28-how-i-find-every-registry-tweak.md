---
layout: post
title: How I find every Registry Tweak
date: 2018-02-28 17:12
author: nvinside
comments: true
categories: [NirSoft, Registry Tweak, RegistryChangesView, RegScanner, tutorial, Tutorials]
---
People often asking me how <a href="https://github.com/dty717/regtweaks" target="_blank" rel="noopener">I find Registry 'tweaks'</a> and there is absolutely no voodoo behind there basically two programs I use, this is <a href="http://www.nirsoft.net/utils/regscanner.html" target="_blank" rel="noopener">RegScanner</a> and <a href="https://www.nirsoft.net/utils/registry_changes_view.html" target="_blank" rel="noopener">RegistryChangesView</a> both portable programs are from <a href="http://www.nirsoft.net/windows_registry_tools.html" target="_blank" rel="noopener">NirSoft</a>. All of his programs are free and ads-free, he is well known for tons of awesome tools and it's worth to check his page and programs out, maybe even donate something to him because it takes really a long time to code so many programs.

<img class=" size-full wp-image-3100 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/registrychangesview.png" alt="RegistryCHangesView" width="1309" height="631" />

<!--more-->

The program comes in a very basic view, the developer basically uses one GUI for all of his programs, I'm not saying this is a bad thing, personally I like it minimalistic because it does what it promises and that's why we are here for.

<h2>Creating a Snapshot</h2>

In order to use this program you need to create two snapshots, the first is for your current status which means that it creates an output file which lists all the current Registry related entries and the second snapshot is to find your changed registry entries or in other words to find the registry tweaks you're looking for.

[caption id="attachment_3101" align="aligncenter" width="627"]<img class=" size-full wp-image-3101 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/first-snapshot.png" alt="First Snapshot" width="627" height="608" /> The first time you open RegistryChangesView you see this dialogue, create a first Snapshot and save it to a folder or on your Desktop.[/caption]

After you did this you need to create the second snapshot but first ensure you made the change you like to capture in our example I like to find a gpedit.msc change.

&nbsp;

[caption id="attachment_3103" align="aligncenter" width="686"]<img class=" size-full wp-image-3103 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/gpedit-msc1.png" alt="gpedit.msc" width="686" height="636" /> This is what we want to get, the values and paths for 'Enable disk quotas'. But the same principle works for all programs which writing into the Registry.[/caption]

&nbsp;

We like to get the registry value for this test case so now we enable this option "Disk quotas" and then we going to do our second snapshot.

<img class=" size-full wp-image-3104 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/second-snapshot.png" alt="Second snapshot" width="627" height="608" />

The important thing here is that you check the 'Direction' part, the default option which you can see on the screenshot is okay, you want to compare the first snapshot against the one which including our changes we made.

<img class=" size-full wp-image-3105 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/dw.png" alt="dw" width="1425" height="779" />

After we compared our snapshots we are done, don't be confused that there a lot of other entries because Windows is changing something in the background all the time eg. for the task scheduler or you have applications running in the background. Use the integrated search, you could in our case search for 'quota' which directly points us to our 'registry tweak'. Or check the timestamp which also is a good indicator to filter the output.

The rest is pure handwork, you get the Value, the Path among other information which you can use to create your own Registry Tweak, or if you're lazy like me, right click on the entry within RegistryChangesView and click 'Open in RegEdit', export the value and you have you changed registry entry. That's it, easy, isn't it?!

<h3>Video demonstration</h3>

https://youtu.be/vH55HI6j7o8

<span style="text-decoration:underline;">Please keep in mind that this example method works for every program but sometimes you can't view or change registry entries, this is only in case it's directly integrated into the Windows Kernel which doesn't can't be controlled by Windows own Registry in this case you can't do anything about it because the Windows Kernel has a higher priority. It also won't display any Registry changes if the program you like to monitor doesn't write into it for example while it stores it into an separate file or writes it directly into the memory.</span>

<h2>Final Words</h2>

Hunting for Registry 'Tweaks' can be fun and it's really easy with NirSoft's little programs, this guy deserves some credits - for sure! You also learn a lot about the Windows OS if you play with the Registry and you get a better overview what Windows is really doing in the background.
