---
layout: post
title: Android P gets stricter call blocking
date: 2018-03-03 22:05
author: nvinside
comments: true
categories: [Android, Android P, Call Blocking]
---
XDA-Developers reporting that Android P might get a new feature to the stock dialer app  commits showing a part of a new set of a new patch-set that were added to AOSP from a Sony Engineer. This little new feature would allow you to block all incoming calls from any number that isn't in your list of contacts. Text strings found in the commits suggest there will be option to block numbers based on the following criteria.

<img class=" size-full wp-image-3194 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/block-call.jpg" alt="Block-call" width="256" height="256" />

<!--more-->

<h2>Feature overview</h2>

The following features/abilities are possible with the new commit in Android P.

<ul>
    <li>Phone number not in contacts list</li>
    <li>Phone number not disclosed by the caller (Private number)</li>
    <li>Phone number is from a pay phone</li>
    <li>Phone number does not have any caller ID information</li>
    <li>Emergency Calls disable this feature</li>
    <li>Associated with a pay phone</li>
</ul>

[gallery ids="3195,3196" type="rectangular"]

<h2><img class=" size-full wp-image-3197 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/android-p-call-blocking-notification-1024x437.png" alt="Android-P-Call-Blocking-Notification-1024x437" width="1024" height="437" /></h2>

<h2><img class=" size-full wp-image-3198 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/03/android-p-call-blocking-carrier-configuration-1024x463.png" alt="Android-P-Call-Blocking-Carrier-Configuration-1024x463" width="1024" height="463" /></h2>

XDA also points out that it appears carriers could disable this new call-blocking feature. They may do this to sell you their add-on monthly services instead.

<h3>Please keep in mind</h3>

These commits aren't merged with AOSP yet, though a software engineer at Google <a class="external" href="https://android-review.googlesource.com/c/platform/packages/services/Telecomm/+/587193#message-cc5fd07e72df7cc0c61ce396de8bfc4fd0e943b3" target="_blank" rel="nofollow noopener">commented</a>: "<em>I'm very much in favor of this change as a whole; its a nice improvement to call blocking, especially being able to block unknown numbers.</em>" While this doesn't address the maddening rise in <a class="external" href="https://www.fcc.gov/consumers/guides/spoofing-and-caller-id" target="_blank" rel="nofollow noopener">spoofing</a>, this preemptive call blocking would be a welcome feature in Android P for most users.

<h2>Final Words</h2>

There’s no guarantee that Google will add this into Android P, but it is a possibility. The proposed call blocking features for Android P are truly wonderful value additions the step is a <em>really huge one</em>. Te problem with external applications are trust, they might steal your call history among other information, using too many resources or drain your battery because they (same like the dialer) need to run all the time in the background.

Personally I would liked to see some additional features which ATM, are offered solely by top-of-the-line call blockers:

<ul>
    <li>Ability to block a set of numbers, by Groups</li>
    <li>Ability to block on the basis of wildcards</li>
    <li>Ability to schedule blocking on multiple timelines</li>
    <li>Ability to maintain global exception lists — whitelist as well as blacklist</li>
    <li>Ability to use differential blocking such as (ignore,) (reject,) (kill,) (answer + hang-up,) (answer + wait + hang-up,) (answer + hold,) (offline)</li>
    <li>Ability to override global exception lists</li>
    <li>Ability to notify selective events</li>
    <li>Ability to log selective events</li>
    <li>Ability to block messages without hijacking the messaging association</li>
    <li>Ability to block messages based on content</li>
    <li>Ability to auto-reply via different custom text messages, upon blocking selective numbers</li>
</ul>

Some exquisite features on my personal wishlist:

<ul>
    <li>Call blocking with inbuilt voicemail (like the one on the Symbian platform)</li>
    <li>Call blocking supporting VoIP</li>
    <li>Call blocking supporting VoLTE</li>
    <li>Call blocking supporting EM</li>
</ul>

Inclusion of the additional features described above would've made it a quantum leap but the new change which Android P gets is also not bad, I mean every little step forward helps.

<h3><span style="text-decoration:underline;">Source</span></h3>

<ul>
    <li>
<p class="entry_title entry-title">Android P May Support Blocking Calls From Unknown, Private, and Pay Phone Numbers (<a href="https://www.xda-developers.com/android-p-blocking-calls-unknown-private-pay-phone-numbers/" target="_blank" rel="noopener">xda-developers.com</a>)</p>
</li>
    <li>Android P may introduce stricter call blocking (<a href="https://www.gsmarena.com/android_p_may_introduce_stricter_call_blocking-news-29940.php" target="_blank" rel="noopener">gsmarena.com</a>)</li>
</ul>

&nbsp;

&nbsp;
