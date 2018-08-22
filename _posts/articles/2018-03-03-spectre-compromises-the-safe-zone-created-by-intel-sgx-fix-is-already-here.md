---
layout: post
title: Spectre compromises the safe zone created by Intel SGX - Fix is already here
date: 2018-03-03 22:48
author: nvinside
comments: true
categories: [Intel, Intel SGX, Security, Software Guard Extensions, Spectre]
---
All newer Intel microprocessors are provided with <a href="https://software.intel.com/en-us/sgx" target="_blank" rel="external nofollow noopener">Software Guard Extensions (SGX)</a> which allow software programs to run in their own little safe corner of the processor. These safe areas are created on demand and have their own memory, isolated from other system software like hypervisors and the operating system itself.

[caption id="attachment_3201" align="aligncenter" width="700"]<img class=" size-full wp-image-3201 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/intel-software-guard-extensions-tutorial-intel-sgx-foundation-fig01.png" alt="intel-software-guard-extensions-tutorial-intel-sgx-foundation-fig01" width="700" height="312" /> Overview how Intel's SGX protects you. Picture Source: Intel[/caption]

<!--more-->

Ohio State University researchers have uncovered a new variant of the Spectre vulnerability and <a href="https://arxiv.org/pdf/1802.09085.pdf" target="_blank" rel="external nofollow noopener">documented it in a recently released paper</a>. The new menace is dubbed <a href="https://github.com/OSUSecLab/SgxPectre" target="_blank" rel="noopener">SgxPectre</a>. It allows the safe areas created by SGX to be cracked open like old nuts. The University research shows that Intel SGX is not all it's cracked up to be and is vulnerable to attack.

[caption id="attachment_3202" align="aligncenter" width="504"]<img class=" size-full wp-image-3202 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/intel-sxg.png" alt="Intel SXG" width="504" height="970" /> How SGX works. Picture Source: Intel[/caption]

<h2>Intel Software Guard Extensions Platform Software Version 1.9.105.42329</h2>

A patched version which addresses the weakness is already available. You can download it over the official Intel page or via mirror from our friends <a href="http://station-drivers.com/index.php?option=com_remository&amp;Itemid=352&amp;func=fileinfo&amp;id=3341&amp;lang=fr" target="_blank" rel="noopener">station-drivers</a>. Please ensure you update to the latest version as soon as possible, there is right now no proof-of-concept (PoC) in the wild which really compromises all aspects of Intel's SXG but you can bet on it that the bad guys picking it up or already started working on it.

<h2>Final Words</h2>

Another huge hole and another software update is required to fix this, some people might see this as something annoying - I don't - because that's the daily business now which we have to care more about. Security is nothing you get from installing the right application it's something which you need to work on it constantly with updating your products, keep track of changes and and and.

The question who is responsible in case there is a security breach or if the compromised system used an older vulnerable attack isn't answered yet and we need mechanism to ensure to get really the latest software always via the OS, Linux has some 'Store' application which automatically updates your software - Windows has it's own Store which waste it's potential with useless apps instead of given the OS a chance to get signed applications directly like the Linux way from there. This is beyond me and at the end the user might run into a malware problem because he downloads fake updates from unknown sources. All of this isn't answered and the SGX protection can't cover this, we try to build strategies around the apps to make it more secure but the mechanism which really infect you are known for years and there is no solution.
