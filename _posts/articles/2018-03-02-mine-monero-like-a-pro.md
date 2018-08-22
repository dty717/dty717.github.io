---
layout: post
title: Mine Monero like a Pro
date: 2018-03-02 00:56
author: nvinside
comments: true
categories: [ccminer, mining, Monero, Tips and Tricks, xmr-stak, xmrig]
---
You can mine <a href="https://getmonero.org/" target="_blank" rel="noopener">Monero</a> (XMR) with your GPU or CPU but the benefit of mining with GPU is limited because<a href="https://en.wikipedia.org/wiki/Monero_(cryptocurrency)" target="_blank" rel="noopener"> CryptoNight is according to Wikipedia</a> "AES-intensive and "memory heavy". Choosing GPU or CPU is depending what hardware you use but in this little tutorial I show you a miner software which is open source and covers both, it has a version for everything. So let's start.

[caption id="attachment_3176" align="aligncenter" width="554"]<img class="  wp-image-3176 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/monero_miner.png" alt="monero_miner" width="554" height="326" /> Even popular pages mining, like TPB. Picture Source: <a href="https://threatpost.com/pirate-bay-spotted-hosting-monero-cryptocurrency-miner/128004/" target="_blank" rel="noopener">threatpost.com</a>[/caption]

<!--more-->

<h2>Choosing a Miner program</h2>

First be careful, there tons of fake programs out there which trying to steal your mining power so the first and most important advise is to use open source programs which getting reviewed, if possible compile it yourself.

We are going to use <a href="https://github.com/xmrig/xmrig" target="_blank" rel="noopener">xmrig</a>, which is available in three versions, one for the CPU one for the GPU (nVidia/AMD). Alternative programs which I can suggest are <a href="https://github.com/fireice-uk/xmr-stak" target="_blank" rel="noopener">xmr-stak</a> or <a href="https://github.com/tpruvot/ccminer" target="_blank" rel="noopener">ccminer</a>.

<h2>Download and extract the files</h2>

Download <a href="https://github.com/xmrig/xmrig/releases" target="_blank" rel="noopener">xmrig</a> and extract the package which contains 3 files onto your desktop or another place.

<img class=" size-full wp-image-3179 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/untitled.png" alt="Untitled" width="578" height="74" />

Before you start the start.cmd we need to configure the address we want to mine from.

<h2>Creating a config file</h2>

You can do this on two ways, manually or with an <a href="https://config.xmrig.com/xmrig" target="_blank" rel="noopener">automatically process/website</a>.

[caption id="attachment_3177" align="alignnone" width="1188"]<img class="alignnone size-full wp-image-3177" src="https://chefkochblog.files.wordpress.com/2018/03/xmrig.png" alt="XMRIG" width="1188" height="511" /> The website is for beginner and easy to understand.[/caption]

All you have to do is give the page your XMR address and choose some basic things like which OS you use and how many processing power you like to spent on mining. The process is easy peasy and done in 2 minutes. After you're done you can save the configuration but you won't find a download button.

[caption id="attachment_3180" align="alignnone" width="1164"]<img class="alignnone size-full wp-image-3180" src="https://chefkochblog.files.wordpress.com/2018/03/fe3.png" alt="fe" width="1164" height="945" /> Email and worker name are optional.[/caption]

Just copy &amp; paste the content you see 'Command line' into the start.cmd. and the config.json goes - no surprise - into the config.json file. That's basically all you have to do, you could (if you want) tweak the parameters in the json file later, everything is documented on GitHub.

<h2>Changing the pool</h2>

You might want to change the pool, personally I use pool.supportxmr.com, so edit the pool line in the start.cmd and config.json file. A list of all pools are available <a href="http://moneropools.com/" target="_blank" rel="noopener">here</a>, please ensure you use the correct port, just replace it and that's it.

<h2>That's it re-check the configuration one last time and then start mining</h2>

<img class=" size-full wp-image-3181 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/untitled1.png" alt="Untitled" width="994" height="697" />

The configuration looks fine, the parameters are mostly self-explaining and you can change it anytime, for each change you need to restart the start.cmd to apply the change.

<h3>Starting the miner</h3>

[caption id="attachment_3182" align="aligncenter" width="979"]<img class=" size-full wp-image-3182 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/grg.png" alt="grg" width="979" height="452" /> The old system can still be useful.[/caption]

Just click on the start.cmd and that's it, ensure you gave the xmrig.exe Internet permission and start mining.

<h2>Final Words</h2>

Mining is very easy, just use open source software setup your configuration and start mining. Ensure you always update the software to get the latest versions because Monero might have changed something which requires and update on the miner or due security/performance reasons.
