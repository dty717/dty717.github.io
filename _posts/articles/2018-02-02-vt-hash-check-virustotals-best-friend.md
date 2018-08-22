---
layout: post
title: VT Hash Check - VirusTotal's best friend
date: 2018-02-02 14:45
author: nvinside
comments: true
categories: [Software, Software Review, VT Hash Check]
---
Today I write a little review about VT Hash Check which I think can be a useful little utility for Windows users, it's always good to get a second opinion, especially in the www and with more and more upcoming malware these days. I think it can be useful if you often work with unknown files from 'underground' places or simply if you want to check and veryify the file you just downloaded.

[caption id="attachment_2535" align="aligncenter" width="498"]<img class=" size-full wp-image-2535 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/vthashcheck.png" alt="VTHashCheck" width="498" height="557" /> Scan result overview. False Positive in this case.[/caption]

<!--more-->

<h2>About the VT Hash Check</h2>

VT Hash Check is coded by <a href="http://www.boredomsoft.org/vt-hash-check.bs" target="_blank" rel="noopener">Boredom Software</a>, the program is open source and not even 2 MB big which means it doesn't waste much HDD/SSD space and of courdse it doesn't waste background processing power because the program runs only if you really need it - during the scan and to show the options/results. The developer is very communicative and he created an open <a href="https://github.com/charonn0/VT-Hash/issues" target="_blank" rel="noopener">bugtracker</a>, there you can report any wishes and bugs and hetries to fix it as soon as possible.

<h2>Installation and Setup</h2>

The installation is very easy, download the program and install it, done. The only thing you need to insert is your <a href="https://www.virustotal.com/documentation/virustotal-community/#retrieve-api-key" target="_blank" rel="noopener">VirusTotal API key</a>, which you can get for free on VirusTotal, it requires that you register an free account.

&nbsp;

[caption id="attachment_2537" align="aligncenter" width="377"]<img class=" size-full wp-image-2537 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/vthash.png" alt="VTHash" width="377" height="291" /> The program doesn't have a seperate GUI, you work with the right-click to scan unknown files.[/caption]

&nbsp;

You can add your own comments which are published online to the files to help others to identify the program/exe/file.

<img class=" size-full wp-image-2538 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/goodware.png" alt="goodware" width="496" height="555" />

<h2>Command line parameters</h2>

VT Hash Check allows you to work with the command line, which means you can automate the scanning process if you want, the following options are avaible:

<ul>
    <li><strong>--prefs</strong> Opens the settings window instead of checking a file</li>
    <li><strong>--trid</strong> Runs a TrID analysis of the input file(s) instead of a hash check</li>
    <li><strong>--debug</strong> Writes debugging info to the system log. Use a tool like <a title="DbgView from Microsoft" href="https://technet.microsoft.com/en-us/library/bb896647.aspx">DbgView </a>to view the debug messages.</li>
    <li><strong>--insecure</strong> Disables SSL certificate validation without disabling SSL/TLS (not recommended)</li>
    <li><strong>--update</strong> Shows the updater window instead of checking a file</li>
    <li><strong>--about</strong> Shows the about window instead of checking a file</li>
</ul>

<img class=" size-full wp-image-2539 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/vthash_hashfunction.png" alt="VTHash_hashfunction" width="497" height="555" />

The little hash symbol on the right side opens a dialog which starts to calculate the checksums, a right-click on it allows you to copy the hash into your clipboard or to compare the hash against the one which is already stored in your clipboard.

<h2>Program Options</h2>

Clicking on the C:\Program Files (x86)\Boredom Software\VT Hash Check\VTHash.exe brings the options dialog into the front, which allows you to input your VirusTotal API key, configure a proxy connection and more.

<img class=" size-full wp-image-2540 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/options.png" alt="Options" width="366" height="213" />

<img class=" size-full wp-image-2541 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/e.gif" alt="e" width="366" height="213" />

The program is very well documented and you even can setup a custom search parameters to search for the file e.g. on Google or DuckDuckGo.

<h2>Final Words</h2>

The program is a fantastic little program to quickly checking unknwon files and it does exactly what it promises, it's free and it bloody works like I would expect it from such a tool. It doesn't contain any spyware or ads and the best thing it's fast, the scanning process is really really fast even on bigger files like my tested IObit Installer. Please keep in mind that VirusTotal has a file size limit and that the scanning results are depending on how many people submitting samples to the same time.

I totally recommed the program, go check it out and report back how you liked it.
