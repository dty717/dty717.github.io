---
layout: post
title: Howto extract Intel Chipset drivers
date: 2018-02-08 20:32
author: nvinside
comments: true
categories: [Intel, tutorial, Tutorials]
---
So, my friends, we are here because we want to know how we can easily extract the Intel chipset drivers. Why is that useful? In case you only want to install the .inf file or in case you want to extract the latest driver to integrate it into your NTLite creates Windows ISO.

&nbsp;

[caption id="attachment_2759" align="aligncenter" width="506"]<img class=" size-full wp-image-2759 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/we.png" alt="we" width="506" height="400" /> Typically Chipset Driver Setup, waste "a lot" space and is normally not needed.[/caption]

&nbsp;

<h2><!--more--> Preparation</h2>

<ol>
    <li>Find the latest <a href="https://downloadcenter.intel.com/product/1145/Intel-Chipset-Software-Installation-Utility" target="_blank" rel="noopener">Intel Chipset driver</a></li>
    <li>Open (if packaged) the archive and extract the setup.exe to e.g. your Desktop</li>
    <li>We are extracting our Setup</li>
    <li>That's it!</li>
</ol>

<img class=" size-full wp-image-2755 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/1.png" alt="1" width="878" height="501" />

After we extracted our Setup to the Desktop we are going to create a desktop shortcut.

<img class="alignnone size-full wp-image-2756" src="https://chefkochblog.files.wordpress.com/2018/02/2.png" alt="2" width="678" height="184" />

&nbsp;

Now the last step is that we give the Setup a file destination were everything should be extracted. In our test case, we extracting everything to <code>C:\CKBlog\</code>.

<img class=" size-full wp-image-2757 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/fref.png" alt="fref" width="396" height="548" />

That's it, double-click on the shortcut. You see after the extraction was complete the following dialogue.

<img class="aligncenter size-full wp-image-2750" src="https://chefkochblog.files.wordpress.com/2018/02/untitled7.png" alt="Untitled.png" width="506" height="400" />
Our files are now extracted, we have a folder with sub-folders and each of them including the drivers.

<img class="alignnone size-full wp-image-2751" src="https://chefkochblog.files.wordpress.com/2018/02/ffw.png" alt="ffw.png" width="1255" height="829" />

<h2>Alternative Methods</h2>

<ol>
    <li>7-Zip can extract the Setup directly</li>
    <li>Start the Setup like you would install the driver, then open a command prompt %TMP% and there you find the extracted files, you then can copy it to another place and abort the installation process.</li>
</ol>

<h2>Final Words</h2>

The given method to extract the Chipset driver is very easy to understand and it only takes 2 minutes to complete the entire process. The benefit of manually installing drivers with the 'inf method' is obvious, less HDD space is wasted and you run into fewer malware problems because you only install the driver directly which means less attack surface.
