---
layout: post
title: Intel is working on another microcode update against Meltdown & Spectre
date: 2018-02-22 08:48
author: nvinside
comments: true
categories: [Intel, Meltdown, Security, Spectre]
---
<a href="https://newsroom.intel.com/news/latest-intel-security-news-updated-firmware-available/" target="_blank" rel="noopener">Intel has announced</a> that it has released production microcode updates to OEM manufacturers for Kaby Lake, Coffee Lake, and Skylake platforms. And they have finally given us a schedule and availability table for the microcode revisions that can be <a href="https://newsroom.intel.com/wp-content/uploads/sites/11/2018/02/microcode-update-guidance.pdf" target="_blank" rel="noopener">found here. </a>This update is already a bit late which means Intel is behind their own schedule but better late than nothing right?

[caption id="attachment_2976" align="alignnone" width="922"]<img class="alignnone size-full wp-image-2976" src="https://chefkochblog.files.wordpress.com/2018/02/b2ap3_large_intel-bug.png" alt="b2ap3_large_intel-bug" width="922" height="417" /> Picture Source: <a href="https://www.cloudlinux.com/images/easyblog_articles/2192/b2ap3_large_intel-bug.png" target="_blank" rel="noopener">Cloudlinux.com</a>[/caption]

<!--more-->

There are some CPU's that seem to be missing from the list, just keep checking your motherboard manufacturers sites for updates, you can find a list <a href="https://www.win-raid.com/t3355f47-Intel-AMD-amp-VIA-CPU-Microcode-Repositories-Discussion.html" target="_blank" rel="noopener">here</a>. Rith now Intel only listed Xeons and Mobile chips for Ivy Bridge and Haswell, which is a little bit disappointing I mean this kind of CPU generation are not really that old that you drop support for some and others getting support - dunno how Intel decides which Generation/CPU gets the update and which don't. The current Microcode Revision Guidance can be found as PDF right <a href="https://newsroom.intel.com/wp-content/uploads/sites/11/2018/02/microcode-update-guidance.pdf" target="_blank" rel="noopener">here</a>.

I made a CVE-2017-5715 (Spectre-v2) table. The OEM's are working on it and you can expect to get other BIOS updates 'soon'.

<table class="table highlight">
<thead>
<tr>
<th>OEM</th>
<th>Note</th>
</tr>
</thead>
<tbody>
<tr>
<td><a class="external-link" href="https://us.answers.acer.com/app/answers/detail/a_id/53104" target="_blank" rel="noopener">Acer</a></td>
<td class="td-left">No Update available</td>
</tr>
<tr>
<td><a class="external-link" href="https://support.apple.com/en-us/HT208394" target="_blank" rel="noopener">Apple</a></td>
<td>No Spectre-2 statement</td>
</tr>
<tr>
<td><a class="external-link" href="http://asrock.com/support/index.asp?cat=BIOS" target="_blank" rel="noopener">ASRock</a> (Mainboards)</td>
<td>H110 (Skylake)+</td>
</tr>
<tr>
<td><a class="external-link" href="https://www.asus.com/News/V5urzYAT6myCC1o2" target="_blank" rel="noopener">Asus</a> (Mainboards)</td>
<td>Old microcode for several chipsets</td>
</tr>
<tr>
<td><a class="external-link" href="https://www.asus.com/News/YQ3Cr4OYKdZTwnQK" target="_blank" rel="noopener">Asus</a> (Notebooks, AiOs)</td>
<td>No Update available</td>
</tr>
<tr>
<td><a class="external-link" href="http://www.dell.com/support/article/us/en/19/sln308587/microprocessor-side-channel-vulnerabilities-cve-2017-5715-cve-2017-5753-cve-2017-5754-impact-on-dell-products?lang=de" target="_blank" rel="noopener">Dell</a> (Endanwender)</td>
<td>New microcode for Skylake-Systems</td>
</tr>
<tr>
<td><a class="external-link" href="http://www.dell.com/support/article/us/en/19/sln308588/microprocessor-side-channel-vulnerabilities-cve-2017-5715-cve-2017-5753-cve-2017-5754-impact-on-dell-emc-products-dell-enterprise-servers-storage-and-networking-?lang=de" target="_blank" rel="noopener">Dell</a> (Server)</td>
<td>New microcode for Xeon Phi</td>
</tr>
<tr>
<td><a class="external-link" href="https://forums.evga.com/EVGA-X99-Series-f98.aspx" target="_blank" rel="noopener">EVGA</a> (Mainboards)</td>
<td>No Update available</td>
</tr>
<tr>
<td><a class="external-link" href="https://sp.ts.fujitsu.com/dmsp/Publications/public/Intel-Side-Channel-Analysis-Method-Security-Review-CVE2017-5715-vulnerability-Fujitsu-products.pdf" target="_blank" rel="noopener">Fujitsu</a> (PDF)</td>
<td>No Update available</td>
</tr>
<tr>
<td><a class="external-link" href="https://www.gigabyte.com/MicroSite/481/intel-sa-00088.html" target="_blank" rel="noopener">Gigabyte</a> (Mainboards)</td>
<td>Old microcode for several chipsets</td>
</tr>
<tr>
<td><a class="external-link" href="https://support.hp.com/de-de/document/c05872434" target="_blank" rel="noopener">HP</a></td>
<td>New microcode for Skylake-Systems</td>
</tr>
<tr>
<td><a class="external-link" href="https://www.ibm.com/blogs/psirt/potential-impact-processors-power-family/" target="_blank" rel="noopener">IBM</a></td>
<td>Updates for Power7, -7+, -8 and -9, no other updates planned</td>
</tr>
<tr>
<td><a class="external-link" href="https://www.intel.com/content/www/us/en/support/articles/000026620/mini-pcs.html" target="_blank" rel="noopener">Intel</a> (End-User)</td>
<td>New microcode for Skylake-NUC</td>
</tr>
<tr>
<td><a class="external-link" href="https://www.intel.com/content/www/us/en/support/articles/000026622/server-products.html" target="_blank" rel="noopener">Intel</a> (Server)</td>
<td>No Update available</td>
</tr>
<tr>
<td><a class="external-link" href="https://newsroom.intel.com/wp-content/uploads/sites/11/2018/02/microcode-update-guidance.pdf" target="_blank" rel="noopener">Intel</a> (Board partners)</td>
<td>Microcodes for Skylake, Skylake-SP, Skylake-D, Kaby Lake, Coffee Lake, and several Atom</td>
</tr>
<tr>
<td><a class="external-link" href="https://support.lenovo.com/de/en/solutions/len-18282" target="_blank" rel="noopener">Lenovo</a></td>
<td>New microcode for Skylake-Systeme</td>
</tr>
<tr>
<td><a class="external-link" href="https://community.medion.com/t5/FAQs/FAQs-zu-Meltdown-und-Spectre/ta-p/53381" target="_blank" rel="noopener">Medion</a></td>
<td>No Update available</td>
</tr>
<tr>
<td><a class="external-link" href="https://support.microsoft.com/en-us/help/4073065/surface-guidance-to-protect-against-speculative-execution-side-channel" target="_blank" rel="noopener">Microsoft</a></td>
<td>Updates for Surface ab Pro 3 with older microcode</td>
</tr>
<tr>
<td><a class="external-link" href="http://forum-de.msi.com/index.php/topic,113614.0.html" target="_blank" rel="noopener">MSI</a> (Mainboards)</td>
<td>Old microcode for Z370</td>
</tr>
<tr>
<td><a class="external-link" href="https://www.msi.com/faq/notebook-2963" target="_blank" rel="noopener">MSI</a> (Notebooks)</td>
<td>No Update available</td>
</tr>
<tr>
<td><a href="https://www.computerbase.de/forum/showthread.php?t=1737504&amp;p=20821897#post20821897">MYSN</a></td>
<td>Depending on ODM (Clevo, Quantas, MSI)</td>
</tr>
<tr>
<td><a class="external-link" href="https://www.supermicro.com/support/security_Intel-SA-00088.cfm" target="_blank" rel="noopener">Super Micro</a></td>
<td>No Update available</td>
</tr>
<tr>
<td><a class="external-link" href="https://support.toshiba.com/support/viewContentDetail?contentId=4015952" target="_blank" rel="noopener">Toshiba</a></td>
<td>No Update available</td>
</tr>
<tr>
<td><a title="Zotac Zbox: Fahrplan für BIOS-Updates gegen Spectre im Mini-PC" href="https://www.computerbase.de/2018-01/zotac-zbox-bios-updates-spectre/">Zotac</a> (Zbox)</td>
<td>No Update available</td>
</tr>
</tbody>
</table>

<h4><span style="text-decoration:underline;">Source</span></h4>

<ul>
    <li>https://newsroom.intel.com/wp-content/uploads/sites/11/2018/02/microcode-update-guidance.pdf</li>
</ul>
