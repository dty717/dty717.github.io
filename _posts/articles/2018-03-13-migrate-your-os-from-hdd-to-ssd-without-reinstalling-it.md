---
layout: post
title: Migrate your OS from HDD to SSD without reinstalling it
date: 2018-03-13 02:30
author: nvinside
comments: true
categories: [Clone Drive, Migrate OS, MiniTool Partition Wizard, Tutorials]
---
You might still use an old HDD and recently purchased a new and faster SSD - so you can reinstall your entire OS on the new drive or you can read this guide and migrate your OS without the need to reinstall anything. I'll explain in some easy step how you switch your Operating System to another drive with the MiniTool Partition Wizard tool.

<img class="  wp-image-3621 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/maxresdefault1.jpg" alt="maxresdefault" width="571" height="365" />

<!--more-->

<h2>Hard Drive Cloning</h2>

Professionals usually doing it with expensive hardware but what the software solution MiniTool Partition Wizard offers is easy and it doesn't cost anything. The benefit of cloning your drive or migrating it to another drive is that you won't lose time to reinstall the OS or your applications, not to mentioned the time you need to re-configure everything how you like.

<a href="https://www.partitionwizard.com/free-partition-manager.html" target="_blank" rel="noopener">MiniTool partition Wizard</a> is available in a Free version and a Pro version which offers additional program features. A comparison can be found <a href="https://www.partitionwizard.com/comparison/free-partition-manager.html" target="_blank" rel="noopener">here</a>, keep this in mind because not every partitions tables are supported in the free version, so check if your OS is GPT/MBR before you start.

<h2>Clone your drive</h2>

The following method does work for every drive and OS. There also similar other programs available for Linux and Mac but MiniTool Partition Wizard is the most used one the guide works on the Free version same like on the Pro version, the only difference is that the Pro version has some partition restrictions here.

In this Guide we are going to migrate Windows 10 to another drive but it works exactly the same for Windows 7, Windows 8/8.1 so the steps aren't different.

<img class=" size-full wp-image-3622 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/migrate-os-to-ssd-hd-1.jpg" alt="migrate-os-to-ssd-hd-1" width="800" height="611" />

[caption id="attachment_3623" align="aligncenter" width="800"]<img class=" size-full wp-image-3623 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/migrate-os-to-ssd-hd-2.jpg" alt="migrate-os-to-ssd-hd-2" width="800" height="605" /> The first option is what we're trying to archive - migrating our OS to another drive.[/caption]

[caption id="attachment_3628" align="alignnone" width="800"]<img class="alignnone size-full wp-image-3628" src="https://chefkochblog.files.wordpress.com/2018/03/migrate-os-to-ssd-hd-3.jpg" alt="migrate-os-to-ssd-hd-3" width="800" height="605" /> Select which drive/partition to clone.[/caption]

[caption id="attachment_3625" align="aligncenter" width="800"]<img class=" size-full wp-image-3625 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/migrate-os-to-ssd-hd-4.jpg" alt="migrate-os-to-ssd-hd-4" width="800" height="592" /> Follow the steps given by the wizard, it's easy understandable.[/caption]

[caption id="attachment_3626" align="aligncenter" width="800"]<img class=" size-full wp-image-3626 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/migrate-os-to-ssd-hd-5.jpg" alt="migrate-os-to-ssd-hd-5" width="800" height="605" /> That's it, after the process is finished you're done.[/caption]

<h2>Migrate Windows - Only the OS partition</h2>

This step is very similar to the first one but it's only in case you like to clone the partition (and no other than that) which includes Windows - all other partitions on that drive are been ignored, please keep this in mind.

[caption id="" align="aligncenter" width="600"]<img class=" aligncenter" src="https://www.partitionwizard.com/images/help/migrate-os-to-ssd-hd-10.jpg" alt="transfer Windows only to hdd ssd select copy options" width="600" height="472" /> Choose the <strong>second option</strong> here, that's the difference from the first method shown above.[/caption]

<img class=" aligncenter" src="https://www.partitionwizard.com/images/help/migrate-os-to-ssd-hd-8.jpg" alt="transfer Windows only to hdd ssd select copy options" width="600" height="454" />
<img class=" aligncenter" src="https://www.partitionwizard.com/images/help/migrate-os-to-ssd-hd-7.jpg" alt="transfer windows to hdd ssd only select target disk" width="600" height="445" />

[caption id="" align="aligncenter" width="600"]<img class=" aligncenter" src="https://www.partitionwizard.com/images/help/migrate-os-to-ssd-hd-5.jpg" alt="boot from target disk note" width="600" height="454" /> The entire process might take a while. Don't worry good things take it's time.[/caption]

[caption id="" align="aligncenter" width="600"]<img class=" aligncenter" src="https://www.partitionwizard.com/images/help/migrate-os-to-ssd-hd-9.jpg" alt="transfer windows to hdd ssd only apply changes" width="600" height="454" /> Done, now you're migrated your OS to another drive.[/caption]

<h2>The full process in Action</h2>

YouTuber 116falconer did a full tutorial how you clone your drive and shows every step.

https://youtu.be/cma_h3EVS04

<h2><span style="text-decoration:underline;color:#ff0000;">Troubleshooting</span></h2>

<h2>Your OS might not boot after you did this.</h2>

Ensure you booted your original drive and start the MiniTool again and within the tool click on 'rebuild MBR' which fixes the MBR related issue which prevents your drive from booting because MiniTool wasn't able to copy the new reserved partition which is maybe needed to fix additional problems or to boot the OS in case Windows wants to check something.

<h2>Does it work with GPT?</h2>

Yes, the program also works with GPT. partition in this case you might need to search for the option called "Use GUID Partition Table for the target disk".

<h2>What about the 1 MB partition - keep it or not?!</h2>

Keep it and ensure you you checked it during the migration process, there is no benefit in removing it but it might have several consequences removing it, like performance problems or you might be unable to use the drive at all.

<h2>Closing Words</h2>

Cloning or migrating your Operating System is easy and you only need to use the correct program to make it even more easier for you. MiniTool Partition Wizard Tool Free offers everything you need, there is even a portable version of the program available, called <a href="https://www.partitionwizard.com/partitionmagic/portable-partition-magic.html" target="_blank" rel="noopener">MiniTool Portable Partition Manager</a> so you don't even need to install anything here and can straight do this from an USB drive if you like.

I hope this little guide was helpful for you and if there additional questions, just let me know and I might add the answer into the troubleshooting section so that everyone can benefit from it.

Happy migrating! <img class="alignnone size-full wp-image-3501" src="https://chefkochblog.files.wordpress.com/2018/03/icon_smile.gif" alt="icon_smile" width="40" height="27" />

 
