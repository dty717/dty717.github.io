---
layout: post
title: Disable Windows 10 "Suggested Apps”
date: 2018-02-02 17:29
author: nvinside
comments: true
categories: [Suggested Apps, Windows 10]
---
If you not need any apps like Candy Crush then you might want some easily solutions how to remove such apps, well since Windows 1507 Microsoft allows you to uninstall all apps with several easy clicks and I'll show you some easy methods.

<img class="alignnone size-full wp-image-2545" src="https://chefkochblog.files.wordpress.com/2018/02/nocandy.png" alt="NoCandy" width="650" height="285" />

<!--more-->

<h2>Turn off the "Occasionally show suggestions in Start'</h2>

Windows 10 has a toggle for this, go to Settings &gt; Personalization &gt; Start. Disable the “Occasionally show suggestions in Start” option here.

<img class="alignnone size-full wp-image-2546" src="https://chefkochblog.files.wordpress.com/2018/02/start-menu-suggestions.png" alt="Start Menu Suggestions" width="650" height="366" />

<h2>Uninstall the Apps</h2>

This step is optional because once you disabled the mentioned option these apps are hidden, but that's maybe not enough for you, you also want to get rid of it - that's not a problem, just right-click on the apps and then click 'Uninstall'.

<img class="alignnone size-full wp-image-2547" src="https://chefkochblog.files.wordpress.com/2018/02/uninstall-apps.png" alt="Uninstall apps" width="650" height="364" />

It's also possible to do this via CCleaner or Windows integrated 'Programs and Features' Option. Please keep in mind that removing the apps after you disabled them has no benefit, you not even win some HDD/SSD space because you only remove the links to the applications, if you want to fully get rid of them you need to work with PowerShell commands, but there is except the space argumentation nothing you win. It's a myth that the apps connecting to MS in the background after they're disabled.

<h2>Disable Microsoft's Consumer Experience</h2>

This step is for Enterprise, Education or LTSB/LTSC versions only, you can turn the Consumer Experience program of via gpedit.msc. Start a command prompt and type in 'gpedit.msc' and navigate to the following tree:

<img class="alignnone size-full wp-image-2548" src="https://chefkochblog.files.wordpress.com/2018/02/microsoft-consumer-exoerience.png" alt="Microsoft's Consumer Experience" width="650" height="355" />

The option to do so is located under Computer Configuration &gt; Administrative Templates &gt; Windows Components &gt; Cloud Content. Enable the “Turn off Microsoft consumer experiences” policy here. You’ll have to sign out and sign back in after making this change.

This will prevent that new apps getting downloaded and installed.

<h2>Conclusion</h2>

It would be nice if Microsoft offered more control over whether these apps are automatically installed on your PCs, but they probably won’t. The good news is that they can be removed and won’t come back for your user account on a particular computer. I understand that there are apps, but personally I don't like and want them, a simple function as said would help but seems MS is too ignorant to see what people really want.

Maybe it just takes more time and more pressure from the community until this gets changed, who knows?

Let me know if you like or use Apps, maybe there is is something I overlooked.
