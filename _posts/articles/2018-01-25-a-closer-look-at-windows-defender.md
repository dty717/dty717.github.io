---
layout: post
title: A closer look at Windows Defender
date: 2018-01-25 19:00
author: nvinside
comments: true
categories: [Review, Windows 10, windows defender]
---
This article will answer the question if Windows Defender is enough as protection and what Microsoft could do to improve the product. As I stated earlier I'm not a big friend of Antivirus products but I do believe in layer-security which means we take a serious look into WD's defending mechanism.

<img class="size-full wp-image-2226 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/windows-defender.png" alt="Windows Defender" width="1282" height="1001" />

<!--more-->

<span style="color:#ff0000;">The article is based on Windows 10 x64 Build 1709, some changes were made on WD in Redstone 4 (RS 4 1803), please keep in mind that I will mention this later as a side note!</span>

<h2>Do you need another product among WD?</h2>

The answer is no, network filtering and signature-based scanning is included into Windows Defender together with EMET integration since <a href="https://support.microsoft.com/en-us/help/2458544/the-enhanced-mitigation-experience-toolkit">EMET is EOL</a> Microsoft decided to migrate the features and implement it directly into WD. Not a bad thing I might add here.

<h2>Current Problems with WD</h2>

<ul>
    <li>High CPU usage during scans or after signature updates (because the engine starts a quick scan)</li>
    <li>High disk I/O while scanning</li>
    <li>Sandbox layer (cf-guard) among other visualizations mechanism might slow down the program/scanning process</li>
    <li>Missing features or options</li>
</ul>

These are the most things people complain about the program itself among the detection ratio seems for most user not a real problem, especially because WD acts here like most scanners, on-demand/access scanning which means it idles until something happened like you get a new file on your HDD/SSD, network scan or schedule scan happened.

<h2>Virus &amp; Threat protection</h2>

<img class="alignnone size-full wp-image-2227" src="https://chefkochblog.files.wordpress.com/2018/01/virus-protection.png" alt="Virus protection" width="1282" height="1001" />

The user interface is designed so that even beginners can understand the options, so don't expect some fancy toggles or design backgrounds with flowers and hello kitty background, less is sometimes more and personally I have no problem with it, however the description could be improved here since the given links (the blue reference links) pointing to an online page, I would expect that there is at least some basic explanation.

<img class="alignnone size-full wp-image-2241" src="https://chefkochblog.files.wordpress.com/2018/01/fs.png" alt="FS" width="1282" height="1001" />

The "Controlled folder" access acts like a ransomware protection shield here because some folders getting restricted.

<img class="alignnone size-full wp-image-2229" src="https://chefkochblog.files.wordpress.com/2018/01/ransomeware.png" alt="ransomeware" width="1282" height="1001" />

After you turned the protection on, these folders getting protected you can, of course, add other folders too.

<img class="alignnone size-full wp-image-2230" src="https://chefkochblog.files.wordpress.com/2018/01/exclusions.png" alt="Exclusions" width="1282" height="1001" />

The exclusions option is useful if you want to exclude specific, files, processes or folders from the on-access scanning engine.

<img class="alignnone size-full wp-image-2231" src="https://chefkochblog.files.wordpress.com/2018/01/untitled1.png" alt="Untitled" width="1282" height="1001" />

<img class="alignnone size-full wp-image-2232" src="https://chefkochblog.files.wordpress.com/2018/01/notification-settings.png" alt="notification settings" width="1282" height="1001" />

Windows Defender and the Windows Firewall are connected since Windows RS 3 (1709) so you can directly setup some notification settings like you want.

<h2>Device performance &amp; health</h2>

Basically this is just a graphical user interface (GUI) for the transition between the event viewer and the notification to Windows Defender, it collects the data and displays it in red or green dots, there are only details given if there is a problem (red dot) and whenever it's green it doesn't display anything.

<img class="alignnone size-full wp-image-2233" src="https://chefkochblog.files.wordpress.com/2018/01/devic-health2.png" alt="Devic Health2" width="1282" height="1001" />

<h2>Firewall &amp; Network Protection</h2>

<img class="alignnone size-full wp-image-2234" src="https://chefkochblog.files.wordpress.com/2018/01/firewall.png" alt="Firewall" width="1282" height="1001" />

Nothing special here too, as mentioned earlier WD and the firewall going hand in hand together, so you have basically some toggles here to play with. The three profiles are still the same since earlier Windows times, Public should be preferred since it gives you the strongest default settings.

<img class="alignnone size-full wp-image-2235" src="https://chefkochblog.files.wordpress.com/2018/01/firewall2.png" alt="Firewall2" width="1282" height="1001" />

<h2>App &amp; Browser Control</h2>

These settings proving a toggle to take control over Windows SmartScreen, system-wide and Browser wide.

[caption id="attachment_2236" align="alignnone" width="1282"]<img class="alignnone size-full wp-image-2236" src="https://chefkochblog.files.wordpress.com/2018/01/app-control.png" alt="app control" width="1282" height="1001" /> Settings are grayed out for me because I control those toggles via gpedit.msc. The default policy is "Warn" (on).[/caption]

<img class="alignnone size-full wp-image-2237" src="https://chefkochblog.files.wordpress.com/2018/01/emet.png" alt="EMET" width="1282" height="1001" />

The Exploit protection is the most interesting function in WD, it's the EMET migration and allows you to protect your application system-wide or per-application. I see this option as very important and it offers the layered security I mentioned at the beginning of my article.

[caption id="attachment_2238" align="alignnone" width="1282"]<img class="alignnone size-full wp-image-2238" src="https://chefkochblog.files.wordpress.com/2018/01/system.png" alt="system" width="1282" height="1001" /> The defaults aren't the strongest settings but if you turn everything on some applications might crash.[/caption]

<img class="alignnone size-full wp-image-2239" src="https://chefkochblog.files.wordpress.com/2018/01/koprf.png" alt="koprf" width="1282" height="1001" />

The default lists protects Microsoft related internals like the script engine, internet explorer &amp; co. You could add here your own applications or Browser if you want but from my experience, it's not needed because every modern Browser already has such mechanism integrated however it can cause an issue to add them if they not properly coded to support e.g. cf-guard &amp; co. You need to test if your application crashes or not, other programs like Anti-Exploit &amp; Co. using the same technique which means you don't need them because WD does exactly the same here.

<h2>Family Options</h2>

<img class="alignnone size-full wp-image-2240" src="https://chefkochblog.files.wordpress.com/2018/01/family-options.png" alt="family options" width="1282" height="1001" />

Nothing to control here, the links pointing to a Microsoft page and there you can configure and add devices which you want to track, these works over Microsoft server and it allows you to see what pages you kids watched among the other shown protection mechanism, in my opinion, this is total bullshit but I don't have kids so what do I know right?! It's not that kids can bypass this anyway or are smarter than their parents when it comes to tech, but okay.

<h2>Performance</h2>

<img class="alignnone size-full wp-image-2242" src="https://chefkochblog.files.wordpress.com/2018/01/wdresource.png" alt="WDresource" width="1401" height="796" />

As you can see the engine doesn't need much system resources, even if everything is turned on, the GDI handles are almost perfect only the memory consumption is something which could be improved here, but 131 MB is still not bad compared to other solutions I saw in my test years.

<img class="alignnone size-full wp-image-2243" src="https://chefkochblog.files.wordpress.com/2018/01/scaning.png" alt="scaning.png" width="1401" height="796" />

Scanning single files is also not a problem, the engine calls "SecHealthUI" and "SmartScreen" to inspect the object, NirSvr is the network scanner only requires some resources once the file is unknown and submitted to the cloud.

Th engine does a good but not a perfect job, the older problems with I/O performance is something which is depending on several factors like if there is a signature update during the scan process or how many files are really scanned and submitted to the cloud. SmartScreen by default doesn't use many resources here and you can opt-out and opt-in back at any time, people constantly say that this act like a keylogger (nonsense) because it submits stuff into the cloud, I can't confirm this, the updates which are called from svchost.exe to update certificates among the unknown samples are really light way and I doubt that this submits something important because if you capture the traffic you see not even 100 KB per each 12 hours.

<h4>Performance is better in RS 4</h4>

Microsoft improved the engine in RS 4 and fixed several known issues which are directly related to the scanning performance, this is something which is really great. In my test I could reveal that if you're on an older processor/Bios which has no or a disabled visualization technology it had a direct impact on the overalls performance, this is however only if you enabled the new "<a href="https://docs.microsoft.com/en-us/windows/threat-protection/windows-defender-application-guard/wd-app-guard-overview">Windows Defender Application Guard</a>" technology, which is grayed out if your CPU/BIOS disabled the VT technology, that for a reason, it requires Hyper-V and costs more resources. However, it also adds another layer of defense to isolate each process against exploits.

[caption id="attachment_2244" align="aligncenter" width="555"]<img class="size-full wp-image-2244 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/vis.png" alt="Vis" width="555" height="492" /> New in 1709, the optional opt-in function which requires Hyper-V to isolate IE, Edge and your other apps against known exploitation techniques.[/caption]

<h2>What will Redstone 4 improve and what should Microsoft change for upcoming versions?</h2>

<ol>
    <li>High CPU &amp; I/O disk issue is fixed in 1803 (Redstone 4 and current insider builds)</li>
    <li>Scanning performance is improved but still, behind other solutions, this needs to be fixed in RS 5.</li>
    <li>There is no import settings for the EMET protection mechanism you can export the settings but you need to manually mess with the settings if you want to import something, this is really a no-go in my eyes and this also must be fixed in RS 5.</li>
    <li>The description of each toggle should be improved, I mean I get all of the options and I understand them but not everyone has the same background, so instead of linking everything to online articles, give them at least 3 or 4 points what it really does.</li>
    <li>SmartScreen is a useful function but it needs to be improved, there is a lot false positive but nothing is perfect, right?</li>
    <li>After each signature update, WD starts a scheduled scan - really? - This is now years old, just download the signatures and stay in idle, can't believe that is also not fixed in RS 4! Drama! Remember that higher CPU/DISK activity means more battery drain! Laptop / Tablet users I look in your direction.</li>
    <li>The sandbox layer is not perfect the program is isolated but the under a layer of Windows Defender is weak, I will write about this in another article.</li>
    <li>The engine should get an option in the exclusion tab/page to work with files based on their size or signature, means you could set a size limit and once that is reached the engine should automatically skip this file. The same goes to digital signed files, an option would help to avoid scanning of such files, both options would help to improve the scan time dramatically and WD wouldn't start permanently because it scans every 1 MB files you sync via your cloud provider.</li>
    <li>A page restriction section/tab is missing, it would be useful to block specific pages, IP's or domains with regular expressions, similar to modern adblockers, but I doubt that will ever happen.</li>
    <li>A gamer/fullscreen mode would make sense so that you don't get scans or notification whenever a fullscreen application is running.</li>
</ol>

[caption id="attachment_2249" align="aligncenter" width="1369"]<img class="size-full wp-image-2249 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/windows-10-1803-einstellungen-windows-sicherheit.jpg" alt="windows-10-1803-einstellungen-windows-sicherheit" width="1369" height="869" /> New options are coming, Account protection, Device security &amp; Device integrity are new, the WD Icon on the Settings UWP App Menu is right now missing[/caption]

<h2>Is WD enough - final conclusion</h2>

Some options are good especially the EMET option and provide a good layer of protection, this is basically enough to harden your daily application. The rest is a matter of taste, you might want SmartScreen or not, everything can be configured and I found really less which makes me think to disable WD.

<h4>The real Reason why Kaspersky &amp; Co. are angry about Windows 10</h4>

Kaspersky is of course only one example, I see this product as well-known, popular and one of the pioneers when it comes to Antivirus solutions, so I pick this specific one but it represents all other AV products too - They say Windows makes it harder for developer to keep up with the changes and at this point I agree but is that the real reason why they're mad at Microsoft? The truth is that Microsoft can survive without WD while Kaspersky and Co need malware to survive, no malware no product needed right?! Windows Defender got better and better with each major Windows version and Kaspersky &amp; Co. simply not want that it gets better because why should you use another company when the integrated solutions are as good as theirs? Ask yourself why you need to trust unknown strangers when you already trusted Microsoft by using Windows? If you distrust Microsoft why you use their product and try to fix their 'mess' with others which are not better in any way? Just think about it. They sell products MS solution is free, now people say you pay with your privacy but is that true - After I configured WD it not made any connection to MS, so at this point the better advise is to inform others about the given possibilities instead of trusting random Russians and their own cloud which basically also collects the same amount of data.

<h2>What do you suggest?</h2>

As always nothing I only show possibilities and want to open your mind to re-think about certain things but I do say WD is not a bad product for beginners. Advanced users might going the nerd way working with AppLocker, GPO, secpol &amp; co. but at some point, you have to think about the normal user and they might want/can spend that much time to mess with all the other options. I think when Microsoft would finally fix the known problems WD is a real alternative and I would see no argument to not use it if you want a basic on-access solution. It's again only a matter of trust, you can choose Microsoft or other Provider but nothing changes on this, you never know and you simply must trust their words once you decided that you use their products and services, nothing is perfect and it matter how fast these providers fixing the known problems and Microsoft is a little bit too slow here but it's not impossible to fix this, I think Microsoft changed already a lot with each new release and many changes make sense while others are pure gimmick.

Go ahead check it out report back if you're satisfied and tell me what are your wishes.
