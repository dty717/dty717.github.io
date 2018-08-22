---
layout: post
title: NoVirusThanks SysHardener 1.2 Review
date: 2018-03-12 11:24
author: nvinside
comments: true
categories: [hardening, Review, Security, SysHardener, Windows]
---
<a href="http://www.novirusthanks.org/" target="_blank" rel="noopener">NoVirusThanks</a> are the guys behind a lot of 'neat' products like MacAddress Changer, EXE Radar Pro and <a href="http://www.novirusthanks.org/products/" target="_blank" rel="noopener">other products</a>. Now, they released another product called '<a href="http://www.novirusthanks.org/products/syshardener/" target="_blank" rel="noopener">SysHardner</a>' and we're going to see if it's worth our time or not and it it can compete against existent solutions.

<img class=" size-full wp-image-3590 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/syshardnener.png" alt="SysHardnener" width="558" height="684" />

<!--more-->

<h2>Program Overview</h2>

<a href="http://www.novirusthanks.org/products/syshardener/" target="_blank" rel="noopener">SysHardner</a> is a little utility which comes in two version, a portable one and an installer and offers bunch of Windows hardening options - that said the program is a Windows exclusive one and not available for other operating systems. Basically the program is a single executable file and comes with another small file called Settings.ini which stores the default or changed values in it.

[caption id="attachment_3591" align="aligncenter" width="594"]<img class=" size-full wp-image-3591 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/syshardener_size.png" alt="syshardener_size" width="594" height="175" /> Small in download/application size.[/caption]

<h3>Three Status Indicators</h3>

The program has three indicators, these icons showing you which impact the setting might have.

<img class=" size-full wp-image-3592 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/syshardner-status-indicators.png" alt="SysHardner Status Indicators" width="549" height="280" />

<ul>
    <li><span style="color:#ff0000;">Red</span>: Better don't touch the option unless you know what you're doing.</li>
    <li><span style="color:#3366ff;">Info</span>: Click on it which redirects you to their homepage to get additional information.</li>
    <li><span style="color:#ff9900;">Orange</span>: The icons offers additional important information, the option is only recommend in case you really don't need it. This might break things for you depending on your needs.</li>
</ul>

All other options which don't have any indicators are 'good to go' so you can (if you like) turn them off (checked).

<h2>Confusing Buttons</h2>

The Apply Selected and Restore Selected Buttons on the bottom are a bit confusing, they should be renamed to only 'Apply' and 'Restore' together with a third option to create a System Restore Point. The system Restore Point gets created (if you like) once you hit the 'Restore Selected' Button, that's a bit strange because I expect that I get a separated button + a prompt to ensure that I create a backup before I change any value but the logic here is a bit problematic because you don't see a backup option unless you hit that button.

The Help button opens a Textfile which shows a FAQ which explains some basic things, that you can use the program from a command line among other things, this button should also be renamed in my opinion to FAQ because it doesn't explain the program rather than answering questions based on the program possibilities and options.

<h2>Changelog</h2>

[11-Mar-2018] v1.2.0.0

<ul>
<li>Fixed disabling of WinHTTP Web Proxy Auto-Discovery Service</li>
<li>Fixed enabling of PowerShell Constrained Language Mode</li>
<li>Fixed disabling of PowerShell Script Execution</li>
<li>Added button "Windows Features" on "System Tools" tab</li>
<li>Added button "Active Connections" on "System Tools" tab</li>
<li>Added button "Event Viewer" on "System Tools" tab</li>
<li>Added button "DCOMCNFG" on "System Tools" tab</li>
<li>New option "Turn Off HomeGroup Provider Service"</li>
<li>New option "Turn Off Program Compatibility Assistant Service"</li>
<li>New option "Change PowerShell Execution Policy for Current User"</li>
<li>New option "Turn Off DNS Client (Dnscache) Service"</li>
<li>New option "Turn Off Windows Search Service"</li>
<li>New option "Turn Off SMBv1"</li>
<li>New option "Turn Off SMBv2\v3"</li>
<li>New option "Disable SMB on Port 445 (SMBDeviceEnabled)"</li>
<li>New option "Disable NetBIOS over TCP/IP on All Network Interfaces"</li>
<li>New option "Turn Off Sidebar and Desktop Gadgets"</li>
<li>New option "Disable DCOM (OLE)"</li>
<li>New option "Turn Off Server (LanmanServer) Service"</li>
<li>New option "Block Oubound Connections for Eventvwr.exe"</li>
<li>New option "Block Oubound Connections for MMC.exe"</li>
<li>New option "Block Oubound Connections for Wmic.exe"</li>
<li>New option "Disable PowerShell v2.0 Engine"</li>
<li>New option "Block Outbound Connections for Rundll32.exe"</li>
<li>New option "Block Outbound Connections for PresentationHost.exe"</li>
<li>Disabled by default some Windows Firewall options</li>
<li>Added top-menu (File\Help) to the main window</li>
<li>Minor fixes and optimizations</li>
<li>Updated help file</li>
</ul>

<h2>Download</h2>

<b>Installer: </b><a href="http://www.novirusthanks.org/get-file/?post_id=302&amp;file_type=setup" target="_blank" rel="external nofollow noopener">http://www.novirusthanks.org/get-file/?post_id=302&amp;file_type=setup</a> around 5,76 MB

<strong>Portable: </strong><a href="http://www.novirusthanks.org/get-file/?post_id=302&amp;file_type=portable" target="_blank" rel="external nofollow noopener">http://www.novirusthanks.org/get-file/?post_id=302&amp;file_type=portable</a> around 5,53 MB

The files are Virus free and every detection is a <a href="https://en.wikipedia.org/wiki/False_positives_and_false_negatives" target="_blank" rel="noopener">false positive</a>.

<h2>Quick Help</h2>

I copy &amp; paste the Quick Help. which might answers already several questions before you download the program.

<blockquote>NoVirusThanks SysHardener

--- Quick Help ---

Q - Can I apply selected tweaks via command-line?

A - Yes, the program will load selected tweaks from Settings.ini, then with /applyselected it applies selected tweaks, and with /restoreselected it restores selected tweaks to their original (factory-settings) values.

The main program window will not be displayed, once done the program will self-terminate. If you include also /reboot parameter then once done the program will reboot the PC, example:

SysHardener.exe /applyselected /reboot

SysHardener.exe /restoreselected /reboot

If you include also /createrestorepoint then it will create a restore point prior applying tweaks.

Q - Do I have to apply selected tweaks in each PC user?

A - Yes, you should apply the selected tweaks in each PC user.

Q - What is the "Restore Selected" button?

A - The button "Restore Selected" restores the default (factory-settings) values for the selected tweaks.

Q - What do you mean by "default values"?

A - The default values (aka factory-settings) originally set by the Windows OS or by the third-party apps (i.e Adobe Reader, Foxit Reader, etc).

Q - If I check "Turn On User Account Control (UAC)" and then I click "Restore Selected", will UAC be disabled?

A - No, it will be enabled anyway because by default User Access Control (UAC) is enabled in Windows OS.

Q - When I click on "Restore Selected", how is restored "Change Behavior of UAC Prompt for Administrators\Users"?

A - They are restored to their original (factory-settings) values:

ConsentPromptBehaviorAdmin = 5 - Prompt for Credentials for non-Windows Binaries (Default)
ConsentPromptBehaviorUser = 3 - Prompt for Credentials (Default)

Q - If I check "Turn Off SMBv1" and then I click "Restore Selected", will SMBv1 be enabled?

A - No, it will be disabled anyway because by default SMBv1 is disabled in Windows 10 FCU.

Microsoft recommends to disable it for security reasons, read more here:

https://blogs.technet.microsoft.com/filecab/2016/09/16/stop-using-smb1/

Q - I applied selected tweaks, then I installed Office. Should I re-apply the tweaks?

A - Yes, if you install Office, Adobe Reader, Foxit Reader, etc after you have applied the tweaks, you need to re-apply them.

Q - Should I re-apply selected tweaks after Microsoft Windows OS has upgraded to a new major version?

A - Yes, you may need to re-apply the tweaks.

Q - Should I reboot the PC after settings have been applied?

A - Yes, you should always reboot the PC after you have clicked the "Apply Selected" or "Restore Selected" button.</blockquote>

<h2>System Tools</h2>

<img class=" size-full wp-image-3593 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/syshardener-v1-2-system-tools.png" alt="SysHardener v1.2 System Tools" width="558" height="684" />

This tab simply provides shortcuts to several Windows integrated functions like MSConfig, Event Viewer and more. These are only shortcuts and there might come in handy if you don't know the Run/CMD commands to open them.

<h2>Vulnerable Software Tweaks - no detection?!</h2>

This category in the program doesn't detect your installed applications so it's only a pre-made list to apply some tweaks you might never need. This is a big negative point in my opinion because Adobe Reader, Microsoft Office or Foxit Reader are not pre-installed and I see no argument to change some settings here if I not use it. A simply registry check to determinate if it's installed or not would be good enough here, but this seems missing.

<h2>Working with SysHardener</h2>

The idea of this utility is not new, there several other programs already on GitHub &amp; Co. which more or less all doing the same. Sadly none of them, also not SysHardener providing a complete list of all hardening tweaks. This would basically require you to check all Group Policy Settings and integrate the security and important one into a program, seems every developer is too lazy to do this. So my recommendation here is to work directly with Group Policy Editor instead because it offers 'more' however such tools are not bad if you quickly want to tweak some things to improve the overall OS security but because of the fact that there far away from been complete they're not getting my full recommendation.

Basically you select or unselect the things you like to turn on of off. A checked entry means it's off. After you made all changes you hit the Apply button ... I mean the 'Apply Selected' button. Reverting the settings sets everything to the Windows default settings.

Once you did all your changes and hit the Apply Button you will be asked if you like to create a system restore point or not, after this it takes some time until all changes are made and you get a last popup with a question if you like to restart your PC or not.

That's it, now you changed several security related things which is easy peasy done in several minutes and it works from Windows 7 up to Windows 10 without a problem.

<h2>Final Words</h2>

SysHardener is a program which I can't fully recommend and it needs some additional work to become a utility which earns my full respect because other tools might already offering more or the same functions here. If I install or download a program I expect a benefit and the program can't offer this because you can work with the Group Policy Editor, sure it's a bit more comfortable to work with a GUI which displays the 'most important' hardening things but once you get used to Group Policy Editor you quickly find the same settings, or you (like I did) write a script which change or integrate those tweaks into your Windows. The benefit with a script is that everyone can look into it and if it's well done it provides the same usability.

NoVirusThanks however, did a good job overall spoken, because they introduced another useful utility for beginners which quickly want to change several things - Advance users might better working with scripts / gpedit.msc &amp; co.
