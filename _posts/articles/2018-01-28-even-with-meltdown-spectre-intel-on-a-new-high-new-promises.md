---
layout: post
title: Even with Meltdown & Spectre - Intel on a new high + new promises
date: 2018-01-28 02:37
author: nvinside
comments: true
categories: [Intel, Meltdown, Spectre]
---
I can't believe it, even with the Meltdown and Spectre leaks intel is on a new selling record. The stock exploded right after the Intel announcement that there will be a Meltdown &amp; Spectre secure CPU release this year - which btw isn't enabled by default. <a href="http://www.businessinsider.de/intel-says-new-spectre-and-meltdown-proof-chips-coming-this-year-2018-1?r=US&amp;IR=T" rel="noopener">According to CEO Brian Krzanich Intel is getting this year new CPUs with an integrated protection</a>.

[caption id="attachment_2309" align="aligncenter" width="630"]<img class="size-full wp-image-2309 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/article-630x354-617adf41.jpg" alt="article-630x354.617adf41" width="630" height="354" /> Picture: Intel CEO[/caption]

<!--more-->

<h2>The numbers</h2>

<table class="center news w80" style="height:251px;" width="684">
<thead>
<tr>
<th class="center" width="16%"></th>
<th class="center" style="text-align:center;" width="16%">Q4/2016</th>
<th class="center" style="text-align:center;" width="16%">Q1/2017</th>
<th class="center" style="text-align:center;" width="16%">Q2/2017</th>
<th class="center" style="text-align:center;" width="16%">Q3/2017</th>
<th class="center" style="text-align:center;" width="16%">Q4/2017</th>
</tr>
</thead>
<tbody>
<tr>
<td class="left">Turnover</td>
<td class="center" style="text-align:center;">16374 Mio. $</td>
<td class="center" style="text-align:center;">14796 Mio. $</td>
<td class="center" style="text-align:center;">14763 Mio. $</td>
<td class="center" style="text-align:center;">16149 Mio. $</td>
<td class="center" style="text-align:center;">17053 Mio. $</td>
</tr>
<tr class="cell2">
<td class="left">Profit</td>
<td class="center" style="text-align:center;">3562 Mio. $</td>
<td class="center" style="text-align:center;">2964 Mio. $</td>
<td class="center" style="text-align:center;">2808 Mio. $</td>
<td class="center" style="text-align:center;">4516 Mio. $</td>
<td class="center" style="text-align:center;">-687 Mio. $</td>
</tr>
<tr>
<td class="left">Operating profit</td>
<td class="center" style="text-align:center;">4526 Mio. $</td>
<td class="center" style="text-align:center;">3599 Mio. $</td>
<td class="center" style="text-align:center;">3824 Mio. $</td>
<td class="center" style="text-align:center;">5115 Mio. $</td>
<td class="center" style="text-align:center;">5395 Mio. $</td>
</tr>
</tbody>
</table>

Operative profit with 5,395 Mrd. Dollar -&gt; +5.5% compared to Q3 and +19,2% compared to last years profit.

I made a spreadsheet which shows the history since 2006 for Intel, AMD, and Nvidia which can be found <a href="https://docs.google.com/spreadsheets/d/15n4PxUbNEHe6g514TV8iAgEVAUAUnpPsGc4JvMC9DEY/edit?usp=sharing" rel="noopener">here</a>.

<h2>The promise</h2>

"<strong>Our </strong>near-term<strong> focus is on delivering </strong>high-quality<strong> mitigations to protect our </strong>customer's<strong> infrastructure from these exploits. We're working to incorporate silicon-based changed to future products that will directly address the Spectre and Meltdown threats in hardware. And those products will begin appearing later this year.</strong>" - Brian Krzanich, CEO, Intel

I guess Intel is talking here about the in Q2 2018 launching Cascade Lake CPU. Well, launching the new CPU without such a fix could be fatal for Intel, so I expect nothing less.

<h2>Current code according to Tovalds with lot of 'problems'</h2>

According to <a href="https://en.wikipedia.org/wiki/Linus_Torvalds" rel="noopener">Torvalds</a>, the current implementation and patches from Intel are 'garbage' because Intel integrates useless code with the fact that it patches Spectre Variant 2 but it is not enabled by default. Only the operating system can decide to activate it or not.

<h2>Intel's new power - Server</h2>

Intel makes the most money with their servers 14% more operative profit just because of the new Data Center Group.

[gallery ids="2310,2311,2312,2313" type="slideshow"]

<span style="text-decoration:underline;"><strong>Source</strong></span>

<ul>
    <li>Intel Reports Fourth-Quarter 2017 Financial Results (<a href="https://www.intc.com/investor-relations/investor-education-and-news/investor-news/press-release-details/2018/Intel-Reports-Fourth-Quarter-2017-Financial-Results/default.aspx" rel="noopener">intc.com</a>)</li>
    <li>Re: [RFC 09/10] x86/enter: Create macros to restrict/unrestrict Indirect Branch Speculation (<a href="http://lkml.iu.edu/hypermail/linux/kernel/1801.2/04628.html" rel="noopener">lkml.iu.edu</a>)</li>
    <li>Facts About the New Security Research Findings and Intel® Products (<a href="https://www.intel.com/content/www/us/en/architecture-and-technology/facts-about-side-channel-analysis-and-intel-products.html" rel="noopener">intel.com</a>)</li>
</ul>
