---
layout: post
title: Android P blocks background Camera and Microphone access
date: 2018-02-21 14:00
author: nvinside
comments: true
categories: [Android, Android P, Android security, Applications, Security]
---
Googles tries to improve the security and data privacy in the upcoming Android P release, right now after the app gets the permissions to use the microphone or camera the app theoretically can 'spy' on you secretly in the background, this will be changed.

<img class="alignnone size-full wp-image-2973" src="https://chefkochblog.files.wordpress.com/2018/02/android-p.jpg" alt="android-p" width="868" height="456" />

<!--more-->

<h2>The problem - visible and background activities</h2>

Background activities are right now not restricted and <a href="https://www.xda-developers.com/android-apps-tracking-mic-always-listening/" target="_blank" rel="noopener">according to an analysis</a>, this is often abused. In other words, apps can secretly spy in the background even after there closed because their background activity is maybe still active.

<h2>A ''Null' as Sound</h2>

The latest commits in the Android development tree shows that the audio after the App goes into an idle state gets only a 'Null' as signal sound back, which prevents from abusing the signals from capturing other sounds, even if the app manage it somehow to escape from the restriction.

<h3>Snowden App useless</h3>

I was not really a fan of Snowden's app and this is then useless with Android P because the background activity gets restricted, I reported about his app and it really got a negative review because this app literally spys on everything - Spying against spying - this is, in my opinion, the wrong answer! Thankfully Android P addresses this issue now finally.

Android P is not officially confirmed yet but the working on it has already began and I'm really looking forward to see more options and possibilities especially such background restrictions, because this means people finally stop to use useless apps like AV programs which also not doing more than spying on your activities to monitor what's going on, this however only results in faster battery drain and the benefit is questionable, especially if you anyway not use many apps or install something from untrusted sources.

<h2>Final Words</h2>

I like to see more, as already mentioned, privacy-related topics should be taken always serious and I hope Android P brings us some improvements which to the same time allows us to get rid of pseudo-security apps like Snowden's App or Antivirus programs. Less is sometimes more so in this case, sadly the bad guys might already reading it and they're already trying to find new ways to bypass it however, this is a cat and mouse game and it seems only the fastest one can 'win' this by releasing more frequently OS changes which everyone can benefit from.
