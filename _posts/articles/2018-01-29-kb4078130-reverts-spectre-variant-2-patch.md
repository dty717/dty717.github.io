---
layout: post
title: KB4078130 reverts Spectre Variant 2 Patch
date: 2018-01-29 10:54
author: nvinside
comments: true
categories: [KB4078130, Spectre, Windows 10]
---
Meltdown and Spectre patches will be handled in the future by the OS (not the CPU) as I reported earlier last week already but Microsoft now released another patch which solves boot issue - <a href="https://www.catalog.update.microsoft.com/Search.aspx?q=KB4078130">KB4078130</a> (24 Kilobytes "huge" update) got released two days ago - disables the mitigation against Spectre, Variant 2 on all supported versions of the company's Windows operating system when installed.

<img class=" size-full wp-image-2353 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/logo_spectre_int-svg.png" alt="Logo_spectre_int.svg" width="286" height="100" />

<!--more-->

<strong>Spectre Variant 2</strong>

<blockquote>;Enabling Sectre Variant 2

reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management" /v FeatureSettingsOverride /t REG_DWORD /d 0 /f

reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management" /v FeatureSettingsOverrideMask /t REG_DWORD /d 1 /f

<hr />

Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management]
"FeatureSettingsOverride"=dword:00000000
"FeatureSettingsOverrideMask"=dword:00000001</blockquote>

<blockquote>;Disabling Secptre Variant 2

reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management" /v FeatureSettingsOverride /t REG_DWORD /d 1 /f

reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management" /v FeatureSettingsOverrideMask /t REG_DWORD /d 1 /f

<hr />

Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management]
"FeatureSettingsOverride"=dword:00000001
"FeatureSettingsOverrideMask"=dword:00000001</blockquote>

<h3> Without patched BIOS Update installed</h3>

<blockquote>;Enabling Secptre Variant 2 without patched BIOS update (Microcode)

reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management" /v FeatureSettingsOverride /t REG_DWORD /d 0 /f

reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management" /v FeatureSettingsOverrideMask /t REG_DWORD /d 3 /f

<hr />

Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management]
"FeatureSettingsOverride"=dword:00000000
"FeatureSettingsOverrideMask"=dword:00000003</blockquote>

<h3>Disabling variant 2 without patched BIOS (Microupdate)</h3>

<blockquote>;Disabling Sprectre variant 2 (same as <strong>KB4078130 </strong>does)

reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management" /v FeatureSettingsOverride /t REG_DWORD /d 3 /f

reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management" /v FeatureSettingsOverrideMask /t REG_DWORD /d 3 /f

<hr />

Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management]
"FeatureSettingsOverride"=dword:00000003
"FeatureSettingsOverrideMask"=dword:00000003</blockquote>

[caption id="attachment_2354" align="alignnone" width="1427"]<img class="alignnone size-full wp-image-2354" src="https://chefkochblog.files.wordpress.com/2018/01/untitled2.png" alt="Untitled" width="1427" height="741" /> Enabling the Spectre Variant 2[/caption]

<h2>All patches still half-working solutions</h2>

One thing must be clear, all of the current patches and so called solutions are half-cooked done and I assume it takes several months to get a real solution which doesn't come with negative side-effects like performance or boot issue.

<h2>Final words</h2>

Just wait for real BIOS updates and don't try to patch it manually, it's not worth because it might get changed anyway by the OEM's to address the current issue it's not that this is already widely abused in the real world.

HP, Dell and MSI starting another BIOS update wave 9. Feb. 2018.

<h4>Source</h4>

<ul>
    <li>
<p class="c-heading-3 article-heading ng-binding ng-scope">Update to Disable Mitigation against Spectre, Variant 2 (<a href="https://support.microsoft.com/en-us/help/4078130/update-to-disable-mitigation-against-spectre-variant-2" target="_blank" rel="noopener">support.microsoft.com</a>)</p>
</li>
    <li><a href="http://download.windowsupdate.com/c/msdownload/update/software/crup/2018/01/kb4078130_b86f0bf2dc0866a0e117ed2d4a5302fab0493a7b.exe" target="_blank" rel="noopener">KB4078130.exe</a> download for Win 7 - 10 (microsoft.com)</li>
    <li>InSpectre v6 (<a href="https://www.grc.com/inspectre.htm" target="_blank" rel="noopener">grc.com</a>)</li>
    <li>Microsoft Disables Spectre Mitigations Due to Instability (<a href="http://www.securityweek.com/microsoft-disables-spectre-mitigations-due-instability" target="_blank" rel="noopener">securityweek.com</a>)</li>
</ul>
