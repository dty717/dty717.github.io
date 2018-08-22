---
layout: post
title: Opera Tweak Guide
date: 2018-03-01 05:15
author: nvinside
comments: true
categories: [Opera, Security, Tutorials, Tweak Guide]
---
The following guide provides several tricks ('tweaks') how you easily setup Opera for the maximum security in terms of internal given mechanism which you need to enable or switch to enhance the overall browser security. It's a guidance and not an universal guide because Browsers changing frequently and there might getting or removing several functions, please keep this in mind.

<img class=" size-full wp-image-3134 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/opera51.png" alt="Opera51" width="1375" height="503" />

Based on Opera 51 the guide will show several recommendations from me to lower the attack surface. Let's get started.

<!--more-->

<h2>Enabling the integrated adblocker</h2>

<img class="alignnone size-full wp-image-3135" src="https://chefkochblog.files.wordpress.com/2018/03/opera-adblocker.png" alt="Opera adblocker" width="1582" height="436" />

Ensure you enabled "Block ads and surf the web up to three times faster" among the filter lists which you like to use. The default pre-defined list 'Easylist' and 'NoCoin' are good enough for most users, of course there exist no lists which address really every advertisement but loading more lists might breaking pages or loading the website less fast because the ad-blocker is busy parsing the list when you run out of memory.

<img class="alignnone size-full wp-image-3136" src="https://chefkochblog.files.wordpress.com/2018/03/fe.png" alt="fe" width="1583" height="733" />

Click on 'Manage Exceptions' and ensure you remove all of the pre-given exceptions because you especially want to block ads on Facebook &amp; Co. You don't need to do this step if you never visit such platforms but I suggest you remove it anyway and only add manually the pages which might not loading correctly.

<h2>Download Location</h2>

The download location is an important option because several OS mechanism protecting special dirs, for Windows this is the Documents/Download location, don't set it to Desktop because by default Windows Defender protects (if on latest Windows 10 version 1709) the download dir against Ransomware (Ransomeware protection must be manually be enabled in Windows Defender first!).

<img class=" size-full wp-image-3137 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/opera-download-location.png" alt="Opera Download Location" width="483" height="106" />

To avoid attacks locate the default download dir on a secure place, in case you use a Sandbox or RamDisk use this location. Also ensure that the 'Ask where to save each file before downloading' option is enabled, which will ensure that there no sneaky background downloads.

<h2>Cookie Management</h2>

Cookies are always problematically because they can expose and track you, the strategy here is to only accept cookies from visited pages and then delete them automatically when we close Opera.

<img class=" size-full wp-image-3138 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/opera-cookies.png" alt="Opera Cookies" width="460" height="191" />

Cookies getting automatically deleted after you are finished using the Opera browser. 3rd-party cookies getting blocked by default.

<h2>Enable 'Show advance settings'</h2>

<img class=" size-full wp-image-3139 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/advance-settings.png" alt="Advance settings" width="1582" height="876" />

This option ensures that we see all 'hidden' options, well there not really hidden but Opera things that there not really 'useful' to bother with for the normal user but we want to control every aspect - so let's enable it with a simple click.

<h2>Always show the full URL in the search and address bar</h2>

<img class=" size-full wp-image-3140 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/opera-full-url-search-bar.png" alt="Opera full url search bar" width="784" height="285" />

The full URL showing option ensures that you not get a shorten URL, this can prevent attacks to obfuscate or nest bad links into a short one.

<h2>Flash and JavaScript</h2>

<img class="alignnone size-full wp-image-3141" src="https://chefkochblog.files.wordpress.com/2018/03/ef.png" alt="ef" width="1583" height="571" />

If you not visit a lot of different pages, turn JavaScript off "Do not allow any site to run JavaScript" and work with exclusions, this alone makes a huge difference in security because JavaScript is mostly abused to reveal your identify and more. Only use it if you really need it, most sites need it, but you only need to set your exclusions once so better take the time and do it - it's worth.

<h3>Disable Flash entirely</h3>

Disable Adobe Flash via "Block sites from running Flash" and simply don't use any website with Flash, use alternative pages which don't require Adobe Flash, this is a simple rule.

<h3>Location, Microphone, Midi full Control &amp; Camera</h3>

Same rule from Adobe Flash goes for Location, Camera and the Microphone option, simply work with exclusions and turn it off.

<h2>Turn of Background Sync</h2>

If possible don't use any Sync or background processes to avoid attack scenarios in the first place, only use Sync if you really need it, nothing these days speaks against local copies and backups. As always work with exceptions.

<img class=" size-full wp-image-3142 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/opera-background-sync.png" alt="Opera background Sync" width="506" height="139" />

<h2>Privacy and security</h2>

This is the interesting stuff and some options are by default hidden here and the reason why we enabled the advance options.

<img class="alignnone size-full wp-image-3143" src="https://chefkochblog.files.wordpress.com/2018/03/opera-privacy.png" alt="Opera Privacy" width="686" height="257" />

Turn everything off except the automatically crash submission to help Opera in to identify or fix possible problems. If you don't trust Opera with this, simply don't use their browser in the first place, people often say that this reveals a lot about you and this is not wrong but how else you provide something useful without submitting a crash report? Right you can't, besides it only contains meta-data like which OS you use and this alone doesn't say anything about you.

<h2>VPN &amp; Networking + Turbo</h2>

Opera's Turbo mechanism tries to reduce the overhead and compress the pages, images while their so called VPN is simply a Proxy, instead better use your own VPN provider.

<h2>Autofill and Passwords - Nope!</h2>

<img class=" size-full wp-image-3144 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/fe1.png" alt="fe" width="381" height="226" />

Theoretically nothing speaks against it, but Password Managers like KeePass are more secure since they encrypting their database which in case you computer gets hacked the attacker would need to brute-force your database. Autofill entries in Chrome/Opera and Passwords can be read-out with several tools and that is a no-go, so better use KeePass or another password manager program instead.

<h2>WebRTC</h2>

If you not need WebRTC then turn it off, if you use it ensure you use the "Use default public network interfaces only" option.

<img class=" size-full wp-image-3145 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/webrtc.png" alt="WebRTC" width="365" height="124" />

Change it to "Disable non-proxied UDP" in case you don't want/need WebRTC. it doesn't entirely turn every connection of but it eliminates the leakage problem on insecure connections.

<h2>Handlers</h2>

<img class=" size-full wp-image-3147 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/opera-handlers.png" alt="Opera Handlers" width="481" height="127" />

We don't want that any websites can add or 'Handlers', turn it off by setting the option to "Do not allow any site to handle protocols". The Handlers are used e.g. if you Browser are not aware what to do with a specific format/protocol eg. if there is no support for it or if it requires an external program, this can be a security risk.

<h2>Fine tuning with about:flags and Addons</h2>

Here comes the geek stuff but I make it brief, open the about:flags (opera://flags/) page by typing it into the address bar which shows a lot of additional options. Since Opera is a tweaked Chromium engine based Browser, it works exactly the same like with Chrome, change a value and restart you Browser afterwards to activate the change but not all changes requiring a restart so set every flag you want and do only once restart to avoid wasting time.

[caption id="attachment_3148" align="alignnone" width="1582"]<img class="alignnone size-full wp-image-3148" src="https://chefkochblog.files.wordpress.com/2018/03/operaflags.png" alt="OperaFlags" width="1582" height="876" /> Tons of options but I will only show the important ones.[/caption]

I will list only the interesting ones, all others are same like the not mentioned Opera options optional and more a matter of taste, we are keeping out focus on the security aspect.

<h3>Changed entries</h3>

To simplify the process I only mention the links so you can click on them and Opera loads it automatically for you:

<ul>
    <li><a href="//flags/#backup-preference-files">chrome://flags/#backup-preference-files</a> - Enabled, to ensure you get a local copy, by default the configuration is located under %APPDATA%\Opera Software\Opera Stable\Preferences</li>
    <li><a href="//flags/#flash-detection-through-navigator-plugins">chrome://flags/#flash-detection-through-navigator-plugins</a> - We don't use Flash but we want to ensure that we get a better abusing detection</li>
    <li><a href="//flags/#adblocker-advanced-selectors" target="_blank" rel="noopener">chrome://flags/#adblocker-advanced-selectors</a> - Enabled, we use the integrated ad-blocker, so we want to see more filters and options to improve the blocking</li>
    <li><a href="//flags/#adblocker-split-rules">chrome://flags/#adblocker-split-rules</a> - Enabled, we want to see what's going on so let's split the ad-blocking rules</li>
    <li><a href="//flags/#adblocker-selective-mode" target="_blank" rel="noopener">chrome://flags/#adblocker-selective-mode</a> - Disabled, normally not need to change it but we want to ensure that the adblocker is enabled (useful in case you want to create a preference file yourself and need the flags)</li>
    <li><a href="//flags/#addons-detailed-errors">chrome://flags/#addons-detailed-errors</a> - Enabled, yep we want all the details we can get</li>
    <li><a href="//flags/#enable-quic">chrome://flags/#enable-quic</a> - Enabled, Googles new protocol used on e.g. YouTube to load the page faster, we want that</li>
    <li><a href="//flags/#extended-feature-stats">chrome://flags/#extended-feature-stats</a> - Disabled, this is the telemetry option which collects more meta-data in case Opera crashes, it's not needed</li>
    <li><a href="//flags/#save-as-pdf">chrome://flags/#save-as-pdf</a> - Enabled, use SumatraPDF or other offline programs instead to read the PDFs.</li>
    <li><a href="//flags/#prompt-on-risky-download">chrome://flags/#prompt-on-risky-download</a> - Enabled, sometimes annoying but better one dialogue more than taking unnecessary risks</li>
    <li><a href="//flags/#reborn-communicator-show-permissions">chrome://flags/#reborn-communicator-show-permissions</a> - Enabled, this is a very useful function to work with site permissions</li>
    <li><a href="//flags/#show-midi-permission-badge">chrome://flags/#show-midi-permission-badge</a> - Enabled, we work with exceptions but in case you really have one page with midi permission, ensure you see a badge indicator</li>
    <li><a href="//flags/#warn-for-unknown-root">chrome://flags/#warn-for-unknown-root</a> - Enabled, this also can be annoying but we want all details about possible broken or invalid certificates to prevent certificate frauds</li>
    <li> <a href="//flags/#vkontakte-messenger">chrome://flags/#vkontakte-messenger</a> - (<em>Optional</em>) Disabled in case you don't need/use VK to prevent some connections/pings to their services, cause VK collects a lot 'statistics'</li>
    <li><a href="//flags/#personal-news-notifications">chrome://flags/#personal-news-notifications</a> - (<em>Optional</em>) Disabled, If you don't use any RSS-Feed feature turn it off to prevent pings/connections, just in case</li>
    <li><a href="//flags/#enable-webrtc-srtp-aes-gcm">chrome://flags/#enable-webrtc-srtp-aes-gcm</a>- (<em>Optional</em>) Enabled if you use WebRTC</li>
    <li><a href="//flags/#enable-webrtc-srtp-encrypted-headers">chrome://flags/#enable-webrtc-srtp-encrypted-headers</a> - Enable, no matter if you use WebRTC or not, the header reveals already a lot so we want to ensure it's secured</li>
    <li><a href="//flags/#WebRtcUseEchoCanceller3">chrome://flags/#WebRtcUseEchoCanceller3</a> - Enabled, even if it's an experimental option because it's useful and lower attack surface</li>
    <li><a href="//flags/#enable-history-entry-requires-user-gesture">chrome://flags/#enable-history-entry-requires-user-gesture</a> - Enabled, this prevents that a website or app/addon possible adds a entry without your knowledge</li>
    <li><a href="//flags/#disable-hyperlink-auditing">chrome://flags/#disable-hyperlink-auditing</a> - Disable, we don't need it or want to provide more meta-data than needed</li>
    <li><a href="//flags/#enable-service-worker-script-streaming">chrome://flags/#enable-service-worker-script-streaming</a> - Disabled, to avoid service worker which are eg used for browser hijack crypto-mining</li>
    <li><a href="//flags/#reduced-referrer-granularity">chrome://flags/#reduced-referrer-granularity</a> - Enabled, use this if it works for you, some pages have a problem with it eg several banking pages</li>
    <li><a href="//flags/#mark-non-secure-as">chrome://flags/#mark-non-secure-as</a> - 'Always mark HTTP as actively dangerous' the indicator is useful</li>
    <li><a href="//flags/#enable-http-form-warning">chrome://flags/#enable-http-form-warning</a> - Enabled, we want warning if something is possible dangerous/insecure always</li>
    <li><a href="//flags/#enable-site-per-process">chrome://flags/#enable-site-per-process</a> - Enabled, this is really a powerful option and helps against several attack scenarios</li>
    <li><a href="//flags/#enable-top-document-isolation">chrome://flags/#enable-top-document-isolation</a> - (Optional) Enabled, some pages have issue with it but it's same like site isolation a really powerful option</li>
    <li><a href="//flags/#enable-gamepad-extensions">chrome://flags/#enable-gamepad-extensions</a> - (Optional) Disabled, if you never use it turn it off to avoid several fingerprinting methods from working (but it's not really needed because this alone will not expose you)</li>
    <li><a href="//flags/#enable-appcontainer">chrome://flags/#enable-appcontainer</a> - Enabled, same like Site Isolation, really powerful and a must</li>
    <li><a href="//flags/#enable-brotli">chrome://flags/#enable-brotli</a> - Enabled, a new protocol/compression algorithm to load pages faster (if they supporting it) and so reduce some bandwidth</li>
    <li><a href="//flags/#user-activation-v2">chrome://flags/#user-activation-v2</a> - Enabled, user gestures aka manually controlling content is most effective to avoid that a page automatically eg plays sound or a video without permission</li>
    <li><a href="//flags/#tabs-in-cbd">chrome://flags/#tabs-in-cbd</a> - Enabled, enable the tab to clear Browser data (advance tab)</li>
    <li><a href="//flags/#new-audio-rendering-mixing-strategy">chrome://flags/#new-audio-rendering-mixing-strategy</a> - Enabled, mixed rendering strategy can theoretically improve loading speed</li>
    <li><a href="//flags/#enable-feature-policy">chrome://flags/#enable-feature-policy</a> - (Optional) Enabled, might break some pages</li>
    <li><a href="//flags/#enable-generic-sensor">chrome://flags/#enable-generic-sensor</a> - Disabled, only disable it on Smartphones because Android/iOS itself can already detect it</li>
    <li><a href="//flags/#enable-mojo-loading">chrome://flags/#enable-mojo-loading</a> - Enabled, mojo is a new API to improve the loading sequence</li>
    <li><a href="//flags/#autoplay-policy">chrome://flags/#autoplay-policy </a>- Set it to 'User gesture is required for cross-originiframes' in order to preventing HTML5 auto video playing</li>
    <li><a href="//flags/#sound-content-setting">chrome://flags/#sound-content-setting</a> - Enabled, control the sound muting option with this option to comply the functionality with an context menu entry</li>
    <li><a href="//flags/#enable-parallel-downloading">chrome://flags/#enable-parallel-downloading</a> - (Optional) Enabled, not security related but it helps to improve the download speed</li>
    <li><a href="//flags/#clipboard-content-setting">chrome://flags/#clipboard-content-setting</a> - Enabled, take permission control over the clipboard API to prevent bad guys to read-out your clipboard content</li>
</ul>

The missing gap is covered by Add-ons which getting an separated article because it would be too much right now to explain them over here.

<h2>Final Words</h2>

Opera can be tweaked same way like Chrome and it's worth to do this because it can lower the attack surface in several scenarios, the site isolation function for example is really powerful and it's beyond me why it isn't enabled by default already.

The guidance is a current view of given options and should not be seen as 'ultimative privacy guide' to harden Opera, harden something means you constantly check the product for weaknesses and try to fix them within the source code and not with 'optional' implemented options - such options are there because some users might have or not have problems and several things are optional because of that, always test things yourself and not blindly trust any page, ask questions and reveal the truth to understand how things are really working to build strategies to be more secure than he mass. Stay informed and monitor several sources to know what to do when the next leak comes - and for sure there will be the next bang, no matter which Browser you use, at the end all you can do is to keep yourself updated with information and the latest software.
