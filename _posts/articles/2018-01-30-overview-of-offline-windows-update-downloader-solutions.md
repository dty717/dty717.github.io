---
layout: post
title: Overview of Offline Windows Update Downloader solutions
date: 2018-01-30 11:50
author: nvinside
comments: true
categories: [Tips and Tricks, Windows Update Downloader]
---
Maybe you want to integrate Windows updates directly into the ISO or maybe you just want to avoid internet connections after you freshly installed your Windows OS, in this case, it would be useful that you download the KBs (Updates) manually before you start to install Windows OS, so here we go - the following article lists all solutions which are available to solve such problems.

<img class="size-full wp-image-2403 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/wsus.png" alt="WSUS" width="607" height="488" />

<!--more-->

<h2>The possibilities</h2>

<ul>
    <li><a href="http://www.majorgeeks.com/files/details/windows_hotfix_downloader.html">WHDownloader</a> - This little portable utility comes from alphawaves known from the MDL board and other places, it's not anymore under active development but it still does it's job! Windows Hotfix Downloader lets you select and download the General Updates, Hotfixes, Security Updates, Additional Updates and Extra Updates for your operating system.</li>
    <li><a href="http://download.wsusoffline.net/">WSUS Offline Update</a> - One of the well-known ones, same likeWHDownloader it also can download Microsoft Office related updates.</li>
    <li><em>Manually</em> - It's still possible to search via the Windows own update catalogue but's in my opinion especially for beginners, not an option because it's confusing, the search might not list all results or hides some updates because it detects your current Browser/OS and lists them according to this. There are better platforms like <a href="http://thehotfixshare.net/board/index.php?act=home">thehotfixshare.net</a>.</li>
    <li>Update packages, like <a href="http://winfuture.de/UpdatePack">TheWinfuture Update Package</a>, these packages are a set of the latest updates bundled into one installer. It should be mentioned that you should always verify such packages because there are lots of fake packages out there, I'm not really a fun of pre-bundled packages like this but it's up to you.</li>
    <li><a href="http://www.majorgeeks.com/files/details/windows_update_minitool.html">Windows UpdaterMiniTool</a> - Not really a downloader on its own, because it's just a graphical user interface for the own Windows integrated fugly solution. It has a nice and clean interface but also offers at the same time several functions which the original Windows Updater hides, it can configure the update mechanism, copy the KB link or direct download link to the update and allows to work with an update catalogue. I used this for years without any troubles, I liked the function it offered and it's very small in file size. Just extract it and then run it - easy peasy!</li>
    <li><a href="http://www.majorgeeks.com/mg/sortname/windows_update.html">There a bunch of more utilities out there</a>, but there often very fast abandoned, outdated and doesn't really deserve a mention because there only copies of the famous mentioned programs.</li>
</ul>

<h2>What's the best?</h2>

Nothing because it all does the same, there all downloading the updates and at the end, it's up to you what you prefer WSUS is a solid solution which is still under active development. But there is also nothing wrong with downloading the updates manually each month and then place it on another HDD/SSD and collect your own little repository, at the end you won't save any bandwidth because you need to download the update anyway, if in a pre-bundled package, manually or via a program. The point is that's up to your own needs, my strategy is that I don't have one, I download them via Windows update directly, I tried all of this solution but at the end, it's up to you and your needs.

But there is a general suggestion - In the case you integrate your updates directly into an image, go with WSUS since it offers you an option which can directly do this, you also can work with a command line which allows you to slipstream the ISO easier.

In case you like to work with the original Windows update mechanism, give the Windows UpdaterMiniTool a try you will not regret it.
