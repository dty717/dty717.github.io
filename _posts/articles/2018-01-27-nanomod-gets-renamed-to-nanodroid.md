---
layout: post
title: NanoMod gets renamed to NanoDroid
date: 2018-01-27 00:00
author: nvinside
comments: true
categories: [Android, Gapps, Google, NanoDroid]
---
Your are maybe a tinfoil hat like me or you simply want as less as possible connections to Google and Co. so that's why you're here, <a href="https://forum.xda-developers.com/apps/magisk/module-nanomod-5-0-20170405-microg-t3584928" target="_blank" rel="noopener">NanoDroid</a> is an alternative to OpenGapps and an opt-ou of Google apps. A full documentation with every details can be found on the <a href="https://gitlab.com/Nanolx/NanoDroid/blob/master/README.md" target="_blank" rel="noopener">official Gitlab repository</a>.

<img class="alignnone size-full wp-image-2299" src="https://chefkochblog.files.wordpress.com/2018/01/nanodroid.png" alt="NanoDroid" width="1899" height="905" />

<!--more-->

<h2>A life without Google, it is possible!</h2>

A life without Google on Android - you gotta be shitting me! Nope, I'm damn serious, it is possible. NanoMod provides similar like OpenGapps a flashable package but the difference is that it doesn't include any properitary apps like Google Play Store or Google Play Services. Instead it uses F-Droid and microG which provides some kind of an alternative to Google Push Messeges.

<h4>But what if I want to use Google Play Store instead of F-Droid?</h4>

Don't worry you can use the optional SetupWizard, which can configure right under TWRP the apps you want to use, e.g. you can choose if you prefer Google Play Store or F-Droid/Yalp Store and then it places a configuration file on your sdcard which will be read once you flash the package and installs the apps according to your decision, the best thing is that this configuration file can survive a ROM update, so you only have to to the entire procedure once and then you need to flash only the NanoDroid package.

<h2>Which Android Versions are supported?</h2>

NanoDroid works with Android 4.4  alias KitKat up to the latest Android Oreo release. The package is exactly the same, it will detect automatically on which Android you are, easy peasy!

<h2>Why was the Project renamed?</h2>

The german developer of this package explained <a href="https://forum.xda-developers.com/showpost.php?p=75260294&amp;postcount=2269" target="_blank" rel="noopener">here</a> that he wasn't happy with the name, because it was poorly choosen.

<h2>MicroG</h2>

MicroG is the upper layer to provide e.g. an alternative to Googles push (GCM) but it lacks of several function and will never be compete against the big ones but because of this fact it has aneat benefit, advertsiments API aren't integrated which means it can't deliver ads. So you might only see integrated ads and none which are deliovered over the network.
