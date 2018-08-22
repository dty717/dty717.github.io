---
layout: post
title: How to backup Windows or Office Activation
date: 2018-02-21 18:30
author: nvinside
comments: true
categories: [Microsoft, Microsoft Office, Tutorials, Windows, Windows 10]
---
You need to backup and restore an activation because every time you format and reinstall Windows you need to activate Windows again. My tutorial explains how to backup and restore an activation license of Windows, Office &amp; Server. For activation you look for a valid MAK-Retail key, calling Microsoft or waiting for a KMS server to go online etc. Sometimes when you activate Windows with a previous key then you have a problem with activation and get the error message "This key has a limit of activation or is blocked. But if you want to reinstall Windows or if you switch Office and don't want to lose the activation then you can create a backup of the activation and then reinstall Windows then restore the activation.

<img class=" size-full wp-image-2968 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/hqdefault.jpg" alt="hqdefault" width="480" height="360" />

This activation method backs up and restores the Windows 10, Server 2016 activation as well as Microsoft Office activation.

<!--more-->

<h2>Please keep in mind</h2>

<ul class="bbc">
    <li><span style="color:#ff0000;">Do not ask me here on my Blog or via </span>eMail<span style="color:#ff0000;"> or other platforms for a Key!</span></li>
    <li>Install device driver especially Intel Rapid Storage Technology before you are going to restore the backup because it might changes some parts of the ID (which then triggers the system to re-activate the product)</li>
    <li>Save your activation keys somewhere just in case there are some software may ask you your full license key to enter manually.</li>
    <li>I highly recommend to backup more than one application just in case one fails you have another alternative to succeed to reinstall activation</li>
    <li>Before you reinstall the activation ensure that you disable your Internet connection and also ensure you do it after you restarted the PC, because Microsoft checks the license after each restart.</li>
    <li>Some Antivirus programs might interference into the activation process, turn it off.</li>
    <li>Buy the products if you like it, this is not a warez board.</li>
</ul>

<h2>Important information regarding the activation process</h2>

<ul>
    <li>The activation is tied to your specific hardware and OS edition, so keep that in mind.</li>
    <li>The solution will likely 100% fail if you make changes to hardware and re-install Windows and then trying to restore activation again because MS checks for specific hardware changes each restart.</li>
    <li>It has come to my attention that installing certain hardware drivers will break the activation on Windows 8/8.1- 10 forcing you to reactivate. One way to prevent this from happening would be to make sure everything is installed and up to date before activating and then take the backup. That way when you have reinstalled Windows and the hardware drivers it should work just fine restoring activation later.</li>
    <li>Once we buy the retail version of Windows 8/8.1- 10, backing up the activation would be a more permanent solution given that you don't change the hardware or OS edition along the road which means you have to reactivate and backup again.</li>
</ul>

<h2>MSActBackUp</h2>

This little utility is designed to do one thing, backup and restoring your Activation Status. I made a mirror on my Mega-Drive for the tools mentioned in my guide here, <a href="https://mega.nz/#F!BZtgmC5K!7EzYJWQH4gZJcxhzAy7Gww" target="_blank" rel="noopener">you can download it here</a>. The original developer of this program is a Russian called 'Ratiborus', credits at this point goes to him for his useful program!

<h3><strong>1. </strong>Press the corresponding button, check the keys that identify the programs, and if necessary, specify correct keys. When the button becomes active, saving activation is completed.</h3>

<img class=" aligncenter" src="http://imagizer.imageshack.com/img903/387/ox3G6N.png" alt="ox3G6N.png" />

<strong>Troubleshooting (1) for grey out Save Activation Button</strong>

<div class="ipsSpoiler">
<div class="ipsSpoiler_contents">

Usually the Office 2016 Retail Edition shows 2 different keys on the program saving activation section one of the key name Office 2013 Retail Grace Period key this is unnecessary Office key and need to delete to order to use Save Activation button.
Delete the grace period key:

Open the cmd (with admin rights) - This is for x86:

<code>cscript "C:\Program Files\Microsoft Office\Office16\OSPP.VBS" /unpkey:KEY-VALUE
</code>
Open the cmd (with admin rights) - This is for x64:

<code>cscript "C:\Program Files (x86)\Microsoft Office\Office16\OSPP.VBS" /unpkey:KEY-VALUE</code>
<em>*KEY-VALUE = Last five digit of Office Product Key!</em>

</div>
</div>

<h3><strong>Troubleshooting (2) for grey out Save Activation Button  which means none of the Activation Product Key Appears</strong></h3>

<div class="ipsSpoiler">
<div class="ipsSpoiler_contents">

Before You using MSActBackUp, ensure that all antivirus programs are completely switched off! This can already solve all the problems.

</div>
</div>

<strong>2.</strong> During Backup Program usually, find full Retail keys but for any MAK Key you need to enter them manually in the box to complete

<img class=" aligncenter" src="http://imagizer.imageshack.com/img910/3149/rXGhAD.png" alt="rXGhAD.png" />
Done! Save the activation backup files in other partition, usb flash disk etc..

<hr />

<h2><strong>Restore the Activation</strong></h2>

<strong>1</strong>. Disable your Internet Connection temporarily! This step is very important.
<strong>2.</strong> Check the box to "<strong>Restore WPA</strong>" and click the button "<strong>Restore Activation</strong>".

[caption id="" align="aligncenter" width="400"]<img class=" aligncenter" src="http://imagizer.imageshack.com/img633/2504/D8DxUY.png" alt="D8DxUY.png" width="400" height="210" /> Usually, if you activate with an Online key or Restore fails to check the box "<strong>Restore SoftwareProtectionPlatform</strong>" and try again.[/caption]

<strong>3. </strong>Select the right folder [Just under the Operation System something like: === <strong>22.02.2015=18.38.27===</strong> as you see the screenshot below with the saved activation information.

[caption id="" align="aligncenter" width="400"]<img class=" aligncenter" src="http://imagizer.imageshack.com/img908/303/61SM7X.png" alt="61SM7X.png" width="400" height="231" /> You may need to re-try few times if first restore attempt has not successful[/caption]

<strong>4. </strong>After program execution, the system will<strong> go to restart</strong>, you must wait for the reboot. After the reboot, the program will continue recovery.

<img class=" aligncenter" src="http://imagizer.imageshack.com/img903/4963/S8zZ6g.png" alt="S8zZ6g.png" />

<strong>Latest Testimonial: </strong>Tested on Virtual Machine Windows 10 Pro Retail x64 &amp; Office 2013 Pro Plus both activated with MAK Keys By Phone successfully reinstall. Applied for Clean Installation &amp; Upgrade.

<div class="ipsSpoiler_contents">

<img class=" aligncenter" src="http://imagizer.imageshack.com/img633/451/UJ4RJH.png" alt="UJ4RJH.png" />
<h2>Microsoft Office OPA-Backup Steps</h2>
</div>

<div class="ipsSpoiler">
<div class="ipsSpoiler_contents">
<ul>
    <li>You must have acquired Microsoft Office lawfully.</li>
    <li>Microsoft Office has to be activated.</li>
    <li>You must fulfill Microsoft's software license agreement.</li>
    <li>OPA-Backup does not violate Microsoft's Office suite copyright!</li>
</ul>
</div>
</div>

<h3><strong>Saving the Activation</strong></h3>

<strong>1. </strong>Run OPA-Backup as administrator select your Windows &amp; office Edition &gt;&gt; Choose an Option [Make Backup] &gt;&gt;&gt; Next

<img class=" aligncenter" src="http://imagizer.imageshack.com/img903/736/arvFYO.png" alt="arvFYO.png" />

<img class=" aligncenter" src="http://imagizer.imageshack.com/img908/250/7TPHZX.png" alt="7TPHZX.png" />

<strong>2. </strong>Choose a path [Where you want to save your backup files] &gt;&gt; Next

<img class=" aligncenter" src="http://imagizer.imageshack.com/img633/4513/em8Er9.png" alt="em8Er9.png" />

[caption id="" align="aligncenter" width="400"]<img class=" aligncenter" src="http://imagizer.imageshack.com/img903/5139/ERBTGn.png" alt="ERBTGn.png" width="400" height="227" /> Done![/caption]

<strong>Restore Activation</strong>

<strong>1</strong>. Disable your Internet Connection!
<strong>2. </strong>Run OPA-Backup as administrator select your Windows &amp; office Edition &gt;&gt; Choose an Option [Restore a Backup] &gt;&gt;&gt; Next

<img class=" aligncenter" src="http://imagizer.imageshack.com/img633/2636/Pc0bLJ.png" alt="Pc0bLJ.png" />

<strong>3.</strong> Choose a path [Where you have saved your backup files] &gt;&gt; Next

<strong>4. </strong>Click and highlight save file [06 August 2015 17:04:06] &gt;&gt; Click Next

<img class=" aligncenter" src="http://imagizer.imageshack.com/img908/9738/3SIrjS.png" alt="3SIrjS.png" />

<strong>5. </strong>Restart Your Computer Now.

[caption id="" align="aligncenter" width="400"]<img class=" aligncenter" src="http://imagizer.imageshack.com/img908/9940/aAaCfd.png" alt="aAaCfd.png" width="400" height="230" /> Done. Tested on Virtual Machine Windows 10 Pro Retail x64 &amp; Office 2013 Pro Plus both activated with MAK Keys By Phone successfully reinstall. Applied for Clean Installation &amp; Upgrade.[/caption]

<div class="ipsSpoiler_contents">
<h2>Proof</h2>
<img class=" aligncenter" src="http://imagizer.imageshack.com/img910/1636/gYyUqR.png" alt="gYyUqR.png" />

<img class=" aligncenter" src="http://imagizer.imageshack.com/img633/8062/Dign1q.png" alt="Dign1q.png" />

<hr />

<h2><strong>Manual Backup/Restore Activation</strong></h2>
<strong>Backup the Activation</strong>
<strong>1.</strong> Enable Show hidden files, folders and drivers to order to see and save all activation backup files
<pre class="ipsCode prettyprint lang-auto linenums:0 prettyprinted"><span class="typ">Control</span> <span class="typ">Panel</span><span class="pln">\Appearance </span><span class="kwd">and</span> <span class="typ">Personalization</span></pre>
Then Checked Show hidden files, folders and drivers

<strong>2. </strong>Go to this location below and save entire spp folder in somewhere safe in your other hard drive, partition or usb stick DVD etc....
<pre class="ipsCode prettyprint lang-auto linenums:0 prettyprinted"><span class="pln">C</span><span class="pun">:</span><span class="pln">\Windows\System32\spp</span></pre>
-----------------------------------------------------------------------------------------------------------

<strong>Restore the Activation</strong>
<strong>1. </strong>Reboot Windows in Safe mode and easiest way is by using <strong>msconfig </strong>via Run.

<img class=" aligncenter" src="http://imagizer.imageshack.com/img910/4153/XzXjRI.png" alt="XzXjRI.png" />

<strong>2. </strong>Choose the Boot tab and then <strong>Safe boot-Minimal</strong>, apply and restart when prompted reboot

<img class=" aligncenter" src="http://imagizer.imageshack.com/img905/6127/FQa7EV.png" alt="FQa7EV.png" />

<strong>3. </strong>Click Restart, the PCthe reboots into the Safe-mode

<img class=" aligncenter" src="http://imagizer.imageshack.com/img903/3637/9Y6TaG.png" alt="9Y6TaG.png" />

<strong>4.</strong> T<strong>ake Ownership </strong>(registry tweak can be found in my Mega-Folder) entire <strong>ssp folder</strong> -- You can also do it manually but it is easier download and install simple register file below.

Go to the Location <strong>C:\Windows\System32\spp</strong> --- right click entire folder --&gt; Click to <strong>Take ownership.</strong>

<img class=" aligncenter" src="http://imagizer.imageshack.com/img910/3474/aqB1hI.png" alt="aqB1hI.png" />

<strong>5. </strong>After having Take Ownership you can now easily copy-paste &amp; <strong>replace original ssp folder with your backup ssp folder</strong>.

<strong>6. </strong>Go to Run and use msconfig and choose Normal boot under General tab this time, apply and click restart when prompted!
<strong>7. </strong>When restarted your Windows &amp; Office will be activated.

<b>That's it!</b>

</div>
