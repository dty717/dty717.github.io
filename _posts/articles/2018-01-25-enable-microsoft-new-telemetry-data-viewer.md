---
layout: post
title: Enable Microsoft new Telemetry Data Viewer
date: 2018-01-25 02:25
author: nvinside
comments: true
categories: [Telemetry, Windows 10]
---
Windows 17083 or higher (the upcoming RS 4 release [to be released in 7/8 weeks from now]) will get a new Diagnostic Data Viewer app which let's you view the diagnostic data the OS collects. Microsoft uses Windows <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener">diagnostic data</a> to focus our decisions and efforts to provide you with the most robust and valuable platform possible. By participating in MS diagnostic data programs, you have a voice in the operating system’s development, improving the overall product experience and quality through your insights.

<img class="alignnone size-full wp-image-2211" src="https://chefkochblog.files.wordpress.com/2018/01/diagnostic-data-viewer.png" alt="diagnostic-data-viewer" width="1024" height="669" />

The new option gives you an overview which data are been collected exactly, right now it's a bit cryptic but that might get changed.

<!--more-->

<h2>The new Options explained</h2>

<hr />

<b>Search your diagnostic events:</b> The search box at the top of the screen lets you search all of the diagnostic event data. The returned search results include any diagnostic event that contains the matching text. Selecting an event opens the detailed event view, with the matching text highlighted.

<img class="alignnone size-full wp-image-2212" src="https://chefkochblog.files.wordpress.com/2018/01/search_filter_your_diagnostic_event_categories.jpg" alt="Search_Filter_your_diagnostic_event_categories" width="750" height="474" />

<b>Filter your diagnostic event categories:</b> The app’s Menu button opens the detailed menu. Filtering options appear when you click on the menu icon. You’ll find a list of diagnostic event categories, which define how the events are used by Microsoft. Selecting a category lets you filter between the diagnostic events. More details about these categories can be found <a href="https://docs.microsoft.com/en-us/windows/configuration/windows-diagnostic-data-1703" target="_blank" rel="nofollow noopener"><b>here</b></a>.

<img class="alignnone size-full wp-image-2213" src="https://chefkochblog.files.wordpress.com/2018/01/provide_diagnostic_event_feedback.jpg" alt="Provide_diagnostic_event_feedback" width="750" height="516" />

<b>Provide diagnostic event feedback:</b> The Feedback icon opens the Feedback Hub app, letting you provide feedback about the Diagnostic Data Viewer and the diagnostic events.

<img class="alignnone size-full wp-image-2133" src="https://chefkochblog.files.wordpress.com/2018/01/new-telemetry-tools-build-17074.jpg" alt="new-telemetry-tools-build-17074" width="1601" height="1555" />

<strong>Delete diagnostic data</strong>: It will also be possible to delete the diagnostic data manually.

<h2>Enabling the Diagnostic Data Viewer in Windows 10 Build 1803</h2>

<code>Windows Registry Editor Version 5.00</code>

<code>;0 = Disable (off)
;1 = Enable (on)</code>
<code>[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Diagnostics\DiagTrack\EventTranscriptKey]
"EnableEventTranscript"=dword:00000001</code>

Enabling the feature require up to 1 Gigabyte of your storage space.

<h2>What does Microsoft Report includes?</h2>

<ul>
    <li>Software inventory information such as installed applications.</li>
    <li>Basic data such as the version of the operating system, a Device ID or the diagnostic level.</li>
    <li>Performance data such as the device's health, reliability data or file queries.</li>
    <li>Device properties and capabilities such as OS name, version, build, and locale</li>
    <li>Browsing data, e.g. sites visited in Microsoft Edge. If you not use Edge or turned it of it never gets collected.</li>
    <li>System Errors</li>
    <li>Xbox UserID</li>
    <li>Device class - Desktop, Server or Mobile</li>
    <li>Diagnostic level -- Basic or Full, Sample level -- for sampled data, what sample level is this device opted into</li>
    <li>HTTP header information, including the IP address. This IP address is the source address that’s provided by the network packet header and received by the diagnostics ingestion service.</li>
    <li class="x-hidden-focus">Various IDs that are used to correlate and sequence related events together.</li>
    <li>OEM details --manufacturer, model, and serial number</li>
    <li>Firmware/BIOS -- type, manufacturer, model, and version</li>
    <li>Other things which are in detail explained over <a href="https://docs.microsoft.com/en-us/windows/configuration/windows-diagnostic-data-1703" target="_blank" rel="noopener">here</a>, please keep in mind that these collection is depending on which Version you use, which functions you use and what settings you use (e.g. gpedit.msc toggles).</li>
</ul>

The data are presented in JSON format, which is right now in an unformatted document available which might changes over the time to a more readable format (who knows?).

<h2>App only optional via download</h2>

It should be noted that Microsoft not integrate the app by default into the final Products, there are no plans to make the integration a default, you can download the app via Store and enable its function manually, Insider tester get the app automatically but "final" need to manually install the app.

<h2>Final words</h2>

If Microsoft wants trust and confidence restored, they should allow opting-out completely in my opinion so that no one can make a complaint anymore, not the users or organizations like EFF.

Or if Microsoft not wants it, the data should be readable for everyone and not in a cryptic format which only a handful people are able to understand. The documentation needs to be changed <a href="https://account.microsoft.com/privacy/" target="_blank" rel="noopener">account.microsoft.com/privacy/</a> to cover the new changes and options.

I think there is still some work to do but I like that Microsoft going a step forward into the right direction.

<span style="text-decoration:underline;"><strong>Source</strong></span>

<ul>
    <li>
<p class="post-title x-hidden-focus">Microsoft introduces new privacy tools ahead of Data Privacy Day (<a href="https://blogs.windows.com/windowsexperience/2018/01/24/microsoft-introduces-new-privacy-tools-ahead-of-data-privacy-day/#Ox14tfKE2pgu6BvQ.97" target="_blank" rel="noopener">blogs.windows.com</a>)</p>
</li>
    <li>Microsoft Privacy Statement (<a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener">privacy.microsoft.com</a>)</li>
    <li>
<p class="post-title">Windows 10 privacy journey continues: more transparency and controls for you (<a href="https://blogs.windows.com/windowsexperience/2017/04/05/windows-10-privacy-journey-continues-more-transparency-and-controls-for-you/#xoczYDMPIxzxl4QG.97https://account.microsoft.com/account/privacy?refd=privacy.microsoft.com&amp;destrt=privacy-dashboard" target="_blank" rel="noopener">blogs.windows.com</a>)</p>
</li>
    <li><a href="https://account.microsoft.com/account/privacy?refd=privacy.microsoft.com&amp;destrt=privacy-dashboard" target="_blank" rel="noopener">Microsoft Privacy Dashboard</a> (similar like Googles dashboard)</li>
    <li>Preparing for a new era in privacy regulation (<a href="https://www.microsoft.com/en-us/TrustCenter/Privacy/gdpr/default.aspx" target="_blank" rel="noopener">microsoft.com</a>)</li>
    <li>
<p id="windows-10-version-1709-basic-level-windows-diagnostic-events-and-fields">Windows 10, version 1709 basic level Windows diagnostic events and fields (<a href="https://docs.microsoft.com/en-us/windows/configuration/basic-level-windows-diagnostic-events-and-fields" target="_blank" rel="noopener">docs.microsoft.com</a>)</p>
</li>
    <li>
<p id="windows-10-diagnostic-data-for-the-full-telemetry-level">Windows 10 diagnostic data for the Full telemetry level (<a href="https://docs.microsoft.com/en-us/windows/configuration/windows-diagnostic-data-1703" target="_blank" rel="noopener">docs.microsoft.com</a>)</p>
</li>
    <li>Announcing Windows 10 Insider Preview Build 17083 for PC (<a href="https://blogs.windows.com/windowsexperience/2018/01/24/announcing-windows-10-insider-preview-build-17083-for-pc/#p8pilHvlptmbt9yV.97" target="_blank" rel="noopener">blogs.windows.com</a>)</li>
</ul>
