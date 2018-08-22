---
layout: post
title: Windows Firewall Control 5.1.0.0 with license reset problems
date: 2018-03-04 20:49
author: nvinside
comments: true
categories: [Binisoft, Software, WFC, Windows Firewall Control]
---
The new Windows Firewall Control (<a href="https://www.binisoft.org/" target="_blank" rel="noopener">WFC</a>) from Binisoft version is out, I often recommend this little GUI for the Windows integrated Firewall because it does a good job and is very easy to understand especially for beginners.

<img class=" size-full wp-image-3247 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/wfc.png" alt="WFC" width="955" height="697" />

<!--more-->

<h2>Latest version 5.1.0.0 resets your activation</h2>

You might see this little error when you try to upgrade your 'old' WFC version with the latest one:

<img class=" size-full wp-image-3249 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/wfc-upgrade.png" alt="WFC upgrade" width="476" height="343" />

<img class=" size-full wp-image-3248 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/cs.png" alt="cs" width="476" height="343" />

After you used these option because you are forced to uninstall the old version (5.0.2.0) you see that the activation status is gone. I'm not sure if that was for purpose (I think so) or a bug but from the changelog of the new version I could't identify why it's necessary to do this.

<h2>Changelog</h2>

The latest changelog can be found <a href="https://www.binisoft.org/changelog.txt" target="_blank" rel="noopener">here</a>, as always.

<blockquote>- New: 'Secure Rules' was rewritten from scratch. When enabled, this feature will
prohibit adding, modifying or removing firewall rules from outside of WFC.
- New: A new feature called 'Secure Profile' was added in the Security tab. When
enabled, importing firewall rules and changing the filtering mode of Windows Firewall
is possible only from WFC.
- New: A dialog is displayed to the user if the uninstall is launched while the
program is locked with a password.
- New: A new global hot key can be defined in Options tab to toggle Secure Rules state.
- Fixed: If the uninstaller is launched multiple times, the dialog is displayed
multiple times instead of focusing the already running instance of it.
- Improved: When choosing a custom notification sound for the notifications, the
dialog will now open by default in 'C:\Windows\Media' folder.
- Improved: Various user interface improvements.
- Updated: The WFC recommended rules contain now some inbound rules required for
accessing the computers from the local network.
- Updated: The URL services from the Tools tab were updated.
- Updated: The user manual was updated with new topics.</blockquote>

After reading it I could't identify why in the bloody world we need to uninstall the old version first but maybe I'm getting old and stupid.

<h2>DNS and temporarily (%TMP%) issue</h2>

The greatest weakness of WFC is whenever you disable Windows own DNS mechanism or event logging the GUI stops working because the service is depending on those two things which means external DNS software might not get filtered properly after you disabled Windows own DNS mechanism, this is still unsolved and the developer answered me already that there is no way to fix this.

Another issue is whenever a new file spawns in a temporarily dir (Temp dir) and request Internet access you have to manually re-approach this. This can be a bit annoying because the same executable extract something into the dir, you get the notification and then you have to do this maybe each restart again and again.

Both of these things are weaknesses of WFC and there both not fixable within the program. This prevents power users from using the software and they often switching to Windows 10 Firewall Control  from Sphinx or Comodo Firewall instead because there not depending on the Windows own services - however for most of all users this doesn't matter much because they not using alternative DNS software or there simply deal with the pop-ups.

<h2>Secure Rules</h2>

The biggest change in the new version is that we got a new Option under 'Security'.

<img class=" size-full wp-image-3250 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/wfc-secure-rules.png" alt="WFC Secure Rules" width="526" height="488" />

I think everyone can read what it does, in a nutshell it prevents external programs or Windows itself from changing the rules so that only WFC can change something. It's analogue  to the 'Secure Profile' option.

<h2>Final Words</h2>

The new version seems to have an activation problem, of course it's not a big deal to re-activate WFC and it only takes 10 seconds but I ask myself why it was necessary or if it's a bug or on purpose to force people to re-activate WFC - I can't answer this question because I haven't the source code because there is none.

The developer is often active in his official support thread on <a href="https://www.wilderssecurity.com/threads/windows-firewall-control-wfc-by-binisoft-org.347370/" target="_blank" rel="noopener">wilders security forums</a> and a mail is already out to get an explanation, hopefully I get an answer. Besides this little thing the GUI gets better and better with each update, it adds several useful functions which are unique compared to other Firewalls.

<p style="text-align:center;">WFC is one of the software which gets my recommendation since years.</p>
