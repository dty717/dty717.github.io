---
layout: post
title: Launch specific settings directly in Windows 10
date: 2018-03-10 12:46
author: nvinside
comments: true
categories: [ms-settings, Tips and Tricks, URI, Windows 10]
---
Microsoft will kill the classic control panel over the time, so it gets fully replaced with the UWP Settings app and you might quickly want to search for a specific settings similar like the God Mode (just for the UWP apps),

[caption id="attachment_3445" align="aligncenter" width="648"]<img class="alignnone size-full wp-image-3445" src="https://chefkochblog.files.wordpress.com/2018/03/find_settings_3.jpg" alt="find_settings_3" width="648" height="420" /> You can use the integrated search but some people might disabled the index or integrated Search Function, then the URI come in handy.[/caption]

<!--more-->

<h2>All URI's</h2>

The quick settings commands are known as URI (Uniform Resource Identifier) which are actually unique addresses to identify specific pages in the Settings application. The benefit of knowing the URI's is that you can quickly find the settings you're looking for without using the search and you can create a shortcut.

The following URI's can be launched from command prompt, 'This PC' address bar, the classical RUN dialogue or Cortana.

<table border="1" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<p align="center"><span style="text-decoration:underline;"><strong>Settings Page
</strong></span></p>
</td>
<td>
<p align="center"><span style="text-decoration:underline;"><strong>Command</strong></span></p>
</td>
</tr>
<tr>
<td>Settings Description</td>
<td><em>ms-settings:</em> &lt;command&gt;</td>
</tr>
<tr>
<td style="text-align:center;"><strong>System related settings</strong></td>
</tr>
<tr>
<td>Display</td>
<td>ms-settings:display</td>
</tr>
<tr>
<td>Display -&gt; Night light settings</td>
<td>ms-settings:nightlight</td>
</tr>
<tr>
<td>Notifications &amp; actions</td>
<td>ms-settings:notifications</td>
</tr>
<tr>
<td>Power &amp; sleep</td>
<td>ms-settings:powersleep</td>
</tr>
<tr>
<td>Battery</td>
<td>ms-settings:batterysaver</td>
</tr>
<tr>
<td>
<div>Battery -&gt; Battery usage by app</div></td>
<td>ms-settings:batterysaver-usagedetails</td>
</tr>
<tr>
<td>
<div>Battery -&gt; Battery saver settings</div></td>
<td>ms-settings:batterysaver-settings</td>
</tr>
<tr>
<td>Storage</td>
<td>ms-settings:storagesense</td>
</tr>
<tr>
<td>Storage -&gt; Change where new content is saved</td>
<td>ms-settings:savelocations</td>
</tr>
<tr>
<td>Storage -&gt; Change how we free up space</td>
<td>ms-settings:storagepolicies</td>
</tr>
<tr>
<td>Tablet mode</td>
<td>ms-settings:tabletmode</td>
</tr>
<tr>
<td>Multitasking</td>
<td>ms-settings:multitasking</td>
</tr>
<tr>
<td>Projecting to this PC</td>
<td>ms-settings:project</td>
</tr>
<tr>
<td>Shared experiences</td>
<td>ms-settings:crossdevice</td>
</tr>
<tr>
<td>Remote Desktop</td>
<td>ms-settings:remotedesktop</td>
</tr>
<tr>
<td>About</td>
<td>ms-settings:about</td>
</tr>
<tr>
<td style="text-align:center;"><strong>Device related settings</strong></td>
</tr>
<tr>
<td>Bluetooth &amp; other devices</td>
<td>ms-settings:bluetooth</td>
</tr>
<tr>
<td>Printers &amp; scanners</td>
<td>ms-settings:printers</td>
</tr>
<tr>
<td>Mouse</td>
<td>ms-settings:mousetouchpad</td>
</tr>
<tr>
<td>Touchpad</td>
<td>ms-settings:devices-touchpad</td>
</tr>
<tr>
<td>Typing</td>
<td>ms-settings:typing</td>
</tr>
<tr>
<td>Pen &amp; Windows Ink</td>
<td>ms-settings:pen</td>
</tr>
<tr>
<td>AutoPlay</td>
<td>ms-settings:autoplay</td>
</tr>
<tr>
<td>USB</td>
<td>ms-settings:usb</td>
</tr>
<tr>
<td style="text-align:center;"><strong>Phone related settings</strong></td>
</tr>
<tr>
<td>Phone</td>
<td>ms-settings:mobile-devices</td>
</tr>
<tr>
<td style="text-align:center;"><strong>Network &amp; Internet Settings</strong></td>
<td></td>
</tr>
<tr>
<td>Status</td>
<td>ms-settings:network-status</td>
</tr>
<tr>
<td>Cellular &amp; SIM</td>
<td>ms-settings:network-cellular</td>
</tr>
<tr>
<td>Wi-Fi</td>
<td>ms-settings:network-wifi</td>
</tr>
<tr>
<td>
<div>Wi-Fi -&gt; Manage known networks</div></td>
<td>ms-settings:network-wifisettings</td>
</tr>
<tr>
<td>Wi-Fi calling</td>
<td>ms-settings:network-wificalling</td>
</tr>
<tr>
<td>Ethernet</td>
<td>ms-settings:network-ethernet</td>
</tr>
<tr>
<td>Dial-up</td>
<td>ms-settings:network-dialup</td>
</tr>
<tr>
<td>VPN</td>
<td>ms-settings:network-vpn</td>
</tr>
<tr>
<td>Airplane mode</td>
<td>ms-settings:network-airplanemode</td>
</tr>
<tr>
<td>Mobile hotspot</td>
<td>ms-settings:network-mobilehotspot</td>
</tr>
<tr>
<td>Data usage</td>
<td>ms-settings:datausage</td>
</tr>
<tr>
<td>Proxy</td>
<td>ms-settings:network-proxy</td>
</tr>
<tr>
<td style="text-align:center;"><strong>Personalization</strong></td>
<td></td>
</tr>
<tr>
<td>Background</td>
<td>ms-settings:personalization-background</td>
</tr>
<tr>
<td>Colors</td>
<td>ms-settings:colors</td>
</tr>
<tr>
<td>Lock screen</td>
<td>ms-settings:lockscreen</td>
</tr>
<tr>
<td>Themes</td>
<td>ms-settings:themes</td>
</tr>
<tr>
<td>Start</td>
<td>ms-settings:personalization-start</td>
</tr>
<tr>
<td>Taskbar</td>
<td>ms-settings:taskbar</td>
</tr>
<tr>
<td style="text-align:center;"><strong>Apps</strong></td>
</tr>
<tr>
<td>Apps &amp; features</td>
<td>ms-settings:appsfeatures</td>
</tr>
<tr>
<td>
<div>Apps &amp; features -&gt; Manage optional features</div></td>
<td>ms-settings:optionalfeatures</td>
</tr>
<tr>
<td>Default apps</td>
<td>ms-settings:defaultapps</td>
</tr>
<tr>
<td>Offline maps</td>
<td>ms-settings:maps</td>
</tr>
<tr>
<td>Apps for websites</td>
<td>ms-settings:appsforwebsites</td>
</tr>
<tr>
<td>Video playback</td>
<td>ms-settings:videoplayback</td>
</tr>
<tr>
<td style="text-align:center;"><strong>Accounts</strong></td>
</tr>
<tr>
<td>Your info</td>
<td>ms-settings:yourinfo</td>
</tr>
<tr>
<td>Email &amp; app accounts</td>
<td>ms-settings:emailandaccounts</td>
</tr>
<tr>
<td>Sign-in options</td>
<td>ms-settings:signinoptions</td>
</tr>
<tr>
<td>Access work or school</td>
<td>ms-settings:workplace</td>
</tr>
<tr>
<td>Family &amp; other people</td>
<td>ms-settings:otherusers</td>
</tr>
<tr>
<td>Sync your settings</td>
<td>ms-settings:sync</td>
</tr>
<tr>
<td style="text-align:center;"><strong>Time &amp; Language</strong></td>
</tr>
<tr>
<td>Date &amp; time</td>
<td>ms-settings:dateandtime</td>
</tr>
<tr>
<td>Region &amp; language</td>
<td>ms-settings:regionlanguage</td>
</tr>
<tr>
<td>Speech</td>
<td>ms-settings:speech</td>
</tr>
<tr>
<td style="text-align:center;"><strong>Gaming</strong></td>
</tr>
<tr>
<td>Game bar</td>
<td>ms-settings:gaming-gamebar</td>
</tr>
<tr>
<td>Game DVR</td>
<td>ms-settings:gaming-gamedvr</td>
</tr>
<tr>
<td>Broadcasting</td>
<td>ms-settings:gaming-broadcasting</td>
</tr>
<tr>
<td>Game Mode</td>
<td>ms-settings:gaming-gamemode</td>
</tr>
<tr>
<td>TruePlay</td>
<td>ms-settings:gaming-trueplay</td>
</tr>
<tr>
<td>Xbox Networking</td>
<td>ms-settings:gaming-xboxnetworking</td>
</tr>
<tr>
<td style="text-align:center;"><strong>Ease of Access</strong></td>
</tr>
<tr>
<td>Narrator</td>
<td>ms-settings:easeofaccess-narrator</td>
</tr>
<tr>
<td>Magnifier</td>
<td>ms-settings:easeofaccess-magnifier</td>
</tr>
<tr>
<td>High contrast</td>
<td>ms-settings:easeofaccess-highcontrast</td>
</tr>
<tr>
<td>Closed captions</td>
<td>ms-settings:easeofaccess-closedcaptioning</td>
</tr>
<tr>
<td>Keyboard</td>
<td>ms-settings:easeofaccess-keyboard</td>
</tr>
<tr>
<td>Mouse</td>
<td>ms-settings:easeofaccess-mouse</td>
</tr>
<tr>
<td>Other options</td>
<td>ms-settings:easeofaccess-otheroptions</td>
</tr>
<tr>
<td style="text-align:center;"><strong>Privacy related settings</strong></td>
<td></td>
</tr>
<tr>
<td>General</td>
<td>ms-settings:privacy-general</td>
</tr>
<tr>
<td>Location</td>
<td>ms-settings:privacy-location</td>
</tr>
<tr>
<td>Camera</td>
<td>ms-settings:privacy-webcam</td>
</tr>
<tr>
<td>Microphone</td>
<td>ms-settings:privacy-microphone</td>
</tr>
<tr>
<td>Notifications</td>
<td>ms-settings:privacy-notifications</td>
</tr>
<tr>
<td>Speech, inking, &amp; typing</td>
<td>ms-settings:privacy-speechtyping</td>
</tr>
<tr>
<td>Account info</td>
<td>ms-settings:privacy-accountinfo</td>
</tr>
<tr>
<td>Contacts</td>
<td>ms-settings:privacy-contacts</td>
</tr>
<tr>
<td>Calendar</td>
<td>ms-settings:privacy-calendar</td>
</tr>
<tr>
<td>Call history</td>
<td>ms-settings:privacy-callhistory</td>
</tr>
<tr>
<td>Email</td>
<td>ms-settings:privacy-email</td>
</tr>
<tr>
<td>Tasks</td>
<td>ms-settings:privacy-tasks</td>
</tr>
<tr>
<td>Messaging</td>
<td>ms-settings:privacy-messaging</td>
</tr>
<tr>
<td>Radios</td>
<td>ms-settings:privacy-radios</td>
</tr>
<tr>
<td>Other devices</td>
<td>ms-settings:privacy-customdevices</td>
</tr>
<tr>
<td>Feedback &amp; diagnostics</td>
<td>ms-settings:privacy-feedback</td>
</tr>
<tr>
<td>Background apps</td>
<td>ms-settings:privacy-backgroundapps</td>
</tr>
<tr>
<td>App diagnostics</td>
<td>ms-settings:privacy-appdiagnostics</td>
</tr>
<tr>
<td>Automatic file downloads</td>
<td>ms-settings:privacy-automaticfiledownloads</td>
</tr>
<tr>
<td style="text-align:center;"><strong>Update &amp; Security related settings</strong></td>
<td></td>
</tr>
<tr>
<td>Windows Update</td>
<td>ms-settings:windowsupdate</td>
</tr>
<tr>
<td>
<div>Windows Update -&gt; Check for updates</div></td>
<td>ms-settings:windowsupdate-action</td>
</tr>
<tr>
<td>
<div>Windows Update -&gt; Update history</div></td>
<td>ms-settings:windowsupdate-history</td>
</tr>
<tr>
<td>
<div>Windows Update -&gt; Restart options</div></td>
<td>ms-settings:windowsupdate-restartoptions</td>
</tr>
<tr>
<td>
<div>Windows Update -&gt; Advanced options</div></td>
<td>ms-settings:windowsupdate-options</td>
</tr>
<tr>
<td>Windows Defender</td>
<td>ms-settings:windowsdefender</td>
</tr>
<tr>
<td>Backup</td>
<td>ms-settings:backup</td>
</tr>
<tr>
<td>Troubleshoot</td>
<td>ms-settings:troubleshoot</td>
</tr>
<tr>
<td>Recovery</td>
<td>ms-settings:recovery</td>
</tr>
<tr>
<td>Activation</td>
<td>ms-settings:activation</td>
</tr>
<tr>
<td>Find My Device</td>
<td>ms-settings:findmydevice</td>
</tr>
<tr>
<td>For developers</td>
<td>ms-settings:developers</td>
</tr>
<tr>
<td>Windows Insider Program</td>
<td>ms-settings:windowsinsider</td>
</tr>
<tr>
<td style="text-align:center;"><strong>Mixed reality related settings</strong></td>
<td></td>
</tr>
<tr>
<td>Audio and speech</td>
<td>ms-settings:holographic-audio</td>
</tr>
<tr>
<td style="text-align:center;"><strong>Search​ related settings</strong></td>
<td></td>
</tr>
<tr>
<td>Talk to Cortana</td>
<td>ms-settings:cortana</td>
</tr>
<tr>
<td>Permissions &amp; History</td>
<td>ms-settings:cortana-permissions</td>
</tr>
<tr>
<td>Notifications</td>
<td>ms-settings:cortana-notifications</td>
</tr>
<tr>
<td>More details</td>
<td>ms-settings:cortana-moredetails</td>
</tr>
</tbody>
</table>

<p style="text-align:center;">I try to keep this list up to date with the latest major Windows releases.</p>

<h2>Final Words</h2>

URI's are underestimated there pretty easy to use, you can create simple shortcuts to the settings you often use and you not need to waste important time to find something with the Settings integrated search function.
