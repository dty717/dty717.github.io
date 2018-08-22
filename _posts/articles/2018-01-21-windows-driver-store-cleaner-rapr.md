---
layout: post
title: Windows Driver Store Cleaner - RAPR
date: 2018-01-21 20:52
author: nvinside
comments: true
categories: [driver cleaner, RAPR, Software, Windows]
---
Windows sometimes can be a <em>dickhead</em>, that's for sure, driver cleaning is a lot of better than in Windows 7 because we got DISM and other useful things to fix such stuff however, it can be useful to clean the driver store and <a href="https://github.com/lostindark/DriverStoreExplorer" target="_blank" rel="noopener">RAPR</a> is a little open source program which detect old driver and you get the option to remove them with it.

[caption id="attachment_2085" align="aligncenter" width="991"]<img class=" size-full wp-image-2085 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/rapr.png" alt="RAPR" width="991" height="654" /> RAPR lists all installed driver and their corresponding .inf file which makes it easier to identify which inf file is linked to which driver[/caption]

<!--more-->

<h2><span class="col-11 text-gray-dark mr-2">RAPR</span></h2>

The program is <a href="https://github.com/lostindark/DriverStoreExplorer" target="_blank" rel="noopener">available on GitHub</a>, so the source code is there and the program doesn't include any magic or voodoo it basically uses the Windows own command line mechanism to remove old oem.inf files, this can be done usually via DISM, manually in a command prompt or via scripts - that said RAPR is nothing but a small GUI for this to make your life easier.

As you can see on the screenshot, the program is easy to use, you can manually uninstall the driver you not want e.g. the old Intel Mei driver or just press the "Select Old Drivers" button and the program chooses it automatically for you please be aware of this time that some driver manufacturer working with strange driver dates, means old is not always old, Intel sometimes shows on e.g. their Beta drivers a date from 1975 and Windows things a newer driver is available, that is due Windows update because beta drivers having a lower priority and the 'real' date gets instead used to avoid possible WUS conflicts. I usually check the driver versions number itself instead of watching the driver date because I often mess with beta drivers, if you only use WHQL final drivers you not need to care since their drivers having usually a chronological driver date order.

<h4>In case a driver is not removable</h4>

The 'force Deletion' button is designed in case the driver is currently in usage, this overrides the -inusage flag and Windows can remove the driver - this should be used very carefully because if Windows has no additional driver in it's store you might get a BSOD but in the normal situation Windows has 'legacy' drivers (the integrated ones) as fallback present.

<h4>All features</h4>

The program overall has the following abilities:

<ul>
    <li>Enumerate / List all the packages staged in the current driver store.</li>
    <li>Export the  driver list as .CSV file.</li>
    <li>Add a driver package to the driver store (called staging)</li>
    <li>Install &amp; Add a driver package to the store.</li>
    <li>Delete a package from the store. Force deletion supported.</li>
    <li>Deletion of multiple driver packages (batch mode)</li>
    <li>Full fledged GUI Supports grouping / sorting on any column.</li>
    <li>Supports re-arranging of / Selecting specific columns.</li>
</ul>

<h2>Conclusion</h2>

The program is really useful especially these days when you need to mess around with drivers to stay secure or if you want the best performance, it makes sense to check the driver storage from time to time to ensure that Windows really uses the latest installed driver and not a old (possible) vulnerable one.

The program can also solve several driver related files, e.g. when Windows constantly want to use another driver and you couldn't find it in the software list because there was no entry for it anymore e.g. Realtek sound drivers.
