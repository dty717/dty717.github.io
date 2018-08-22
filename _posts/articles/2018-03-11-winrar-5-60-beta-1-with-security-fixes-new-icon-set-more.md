---
layout: post
title: Winrar 5.60 Beta 1 with Security Fix, new Icon Set & More
date: 2018-03-11 09:18
author: nvinside
comments: true
categories: [Software, WinRar]
---
Winrar released it's new Beta version 5.60 today and the changelog is huge, there several important changes - the Icon Set was replaced - new options were added and a possible security risk was closed.

<img class=" size-full wp-image-3465 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/winrar-5-60.png" alt="Winrar 5.60" width="965" height="601" /><!--more-->

<h2>New Icon Set</h2>

The new Icon Set is coming from <a href="http://weirdsgn.com" target="_blank" rel="noopener">Aditya Nugraha Putra</a> (weirdsgn.com), &amp; <a href="http://icondesignlab.com" target="_blank" rel="noopener">IconDesignLab</a> and there looking not bad (imho). Of course this is a matter of taste and Winrar supports themes, so if you not like the new design just <a href="https://rarlab.com/themes/WinRAR_Classic_48x36.theme.rar" target="_blank" rel="noopener">rollback to the old set</a>.

<h2>Security Fix</h2>

There was an fix which tells us 'when processing corrupted rar files' it could lead into a possible security issue, I haven't found the CVE (if existent/reported) so I can't say much what was really affected here. I only can assume Winrar only is here affected not the OS.

<h2>Other Bugfixes and improvements</h2>

The new Beta version also fixes several Windows Explorer related problems which were reported by several people over the Internet. The default volume size is now megabytes (was bytes before) and some dialogues got changes to understand it's purpose better.

Another bigger and useful change is the automatically detection of ANSI, OEM and UTF-8 encodings of ZIP archive comments which is useful in case you open downloaded archives with Winrar which might showed previously the comment wrongly encoded.

<h2>Full Changelog</h2>

<ol>
    <li>We updated WinRAR graphics.</li>
</ol>

We are grateful to http://weirdsgn.com and http://icondesignlab.com
designers participated in this endeavor and proud to announce that
WinRAR uses the new icon set prepared by Aditya Nugraha Putra
from http://weirdsgn.com.

Previous WinRAR icons are available as interface theme here:
https://rarlab.com/themes/WinRAR_Classic_48x36.theme.rar

<ol>
    <li>"Repair" command efficiency is improved for recovery record protected
RAR5 archives. Now it can detect deletions and insertions of unlimited
size also as shuffled data including data taken from several recovery
record protected archives and merged into a single file in arbitrary
order.</li>
    <li>"Turn PC off when done" archiving option is changed to "When done"
drop down list, so you can turn off, hibernate or sleep your PC
after completing archiving.</li>
    <li>Use -ioff or -ioff1 command line switch to turn PC off,
-ioff2 to hibernate and -ioff3 to sleep your PC after completing
an operation.</li>
    <li>If encoding of comment file specified in -z&lt;file&gt; switch is not
defined with -sc switch, RAR attempts to detect UTF-8, UTF-16LE
and UTF-16BE encodings based on the byte order mask and data
validity tests.</li>
    <li>WinRAR attempts to detect ANSI, OEM and UTF-8 encodings of
ZIP archive comments automatically.</li>
    <li>"Internal viewer/Use DOS encoding" option in "Settings/Viewer"
is replaced with "Internal viewer/Autodetect encoding".
If "Autodetect encoding" is enabled, the internal viewer attempts
to detect ANSI (Windows), OEM (DOS), UTF-8 and UTF-16 encodings.</li>
    <li>Normally Windows Explorer context menu contains only extraction
commands if single archive has been right clicked. You can override
this by specifying one or more space separated masks in "Always display
archiving items for" option in Settings/Integration/Context menu items",
so archiving commands are always displayed for these file types
even if file was recognized as archive. If you wish both archiving
and extraction commands present for all archives, place "*" here.</li>
    <li>SFX module "SetupCode" command accepts an optional integer parameter
allowing to control mapping of setup program and SFX own error codes.
It is also accessible as "Exit code adjustment" option
in "Advanced SFX options/Setup" dialog.</li>
    <li>New "Show more information" WinRAR command line -im switch.
It can be used with "t" command to issue a message also in case of
successful archive test result. Without this switch "t" command
completes silently if no errors are found.</li>
</ol>

This switch is applicable only to WinRAR.exe and ignored by console
RAR.exe.

<ol>
    <li>If a wrong password is entered when unpacking an encrypted file
in ZIP archive, WinRAR proposes to enter a valid password
for same file again instead of aborting extraction.</li>
    <li>If a wrong password is entered when opening or unpacking RAR archive
with encrypted file names, WinRAR proposes to enter a valid password
again instead of aborting the operation. Previous versions already
did so for RAR archives with encrypted file data, but aborted
for archives with file name encryption.</li>
    <li>WinRAR recognizes GZIP files with arbitrary data preceding
an actual GZIP archive, such as .scexe firmware files.</li>
    <li>@filelist parameter can be specified in "Files to add" field of
archiving dialog. In this case WinRAR will attempt the list of archiving
files from 'filelist' file, which should be the plain text, one file
name per line.Info dialog:</li>
</ol>

a) compression ratio graph is updated;

b) "Names and data" is displayed in "Encryption" field for
archives with encrypted file names.

<ol>
    <li>Full archive name is displayed if mouse pointer is placed over
an archive name in the operation progress window. It can be useful
if archive name is lengthy and does not fit to available window space.</li>
    <li>If -ts1 switch is used with -u or -f, file time comparison is performed
with 1 second precision. Previosuly in such case we could wrongly treat
an adding file as newer than archived just because we compared the high
precision adding file time against the low precision archived file time.</li>
    <li>"Update" and "Fresh" commands ('u' and 'f' in the command line mode)
quit immediately if no files are to be updated. Previously they created
a temporary archive before quitting when updating archives with recovery
record or quick open information.</li>
    <li>Prompt is issued after creating 500 volumes from WinRAR GUI shell,
so user can continue or quit further archiving. It is done to prevent
creating many thousands of volumes in case of wrongly entered
volume size.</li>
    <li>WinRAR uses megabytes instead of bytes as default units for volume size
field in the archiving dialog.</li>
    <li>"Repair" command issues "Recovery record is corrupt" message
after repairing RAR5 archive containing a broken recovery record.
Previously such message was issued only by "Test" command
and "Repair" handled most of recovery record damages silently.Bugs fixed:</li>
</ol>

a) fixed potential security issues when processing corrupt
RAR archives;

b) non-English characters in TAR files with PAX extended headers
were not displayed correctly;

c) "rar x arcname.rar .." command unpacked files to current folder
instead of its parent;

d) pasting files from Windows Explorer to archive opened in WinRAR
blocked further copy and paste operations in Explorer until
archiving was finished;

e) SFX module issued "The specified password is incorrect" message
infinitely not prompting for correct password once a wrong password
was entered;

f) folders time was always set when extracting ZIP archives even if
"File time" options in the extraction dialog were turned off;

g) if "Delete mode: Always" was selected when extracting
and user pressed "Cancel" in the file overwrite or password prompt,
an archive could be deleted even after cancelling extraction
for .zip and .7z formats.

<h2>Download</h2>

32-Bit: <a href="https://www.rarlab.com/rar/wrar56b1.exe" target="_blank" rel="external nofollow noopener">https://www.rarlab.com/rar/wrar56b1.exe</a> around 2,8 MB

64-Bit: <a href="https://www.rarlab.com/rar/winrar-x64-56b1.exe" target="_blank" rel="external nofollow noopener">https://www.rarlab.com/rar/winrar-x64-56b1.exe</a> around 3,0 MB

<h2>Alternatives</h2>

A freeware alternative to Winrar is <a href="https://www.7-zip.org" target="_blank" rel="noopener">7-Zip</a> which also recently got an <a href="https://www.7-zip.org/history.txt" target="_blank" rel="noopener">update to version 18.03</a>.

<h2>Final Words</h2>

The new Beta version looks promising, as always I can recommend to use the beta product already since Winrar checks the products several weeks before there rolling it out and if there some fixes which are been reported there immediately rolling a bugfix version out, of course it's up to you if you wait for the final version or not.

Winrar is still my favorite program on Windows, the license is really cheap and you got a lifetime license which is a fair deal here. I often tried to switch to 7-Zip but it can't compete against Winrar due missing functions and the overall development process seems faster with Winrar which I liked to support. The new icon sets looking fresh and shiny - which gives the program a modern friendly look.
