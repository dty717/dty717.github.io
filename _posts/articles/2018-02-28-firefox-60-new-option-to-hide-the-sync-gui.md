---
layout: post
title: Firefox 60 new option to hide the Sync GUI
date: 2018-02-28 17:40
author: nvinside
comments: true
categories: [Browser, Firefox, Firefox 60]
---
Again wrong news spread on the internet that Firefox 60 can 'Disable Firefox sync integration' this time I won't mention the pages because it's not worth. The new integrated about:config option does not disable sync integration, this is simply wrong. Sync by default is anyway disabled and optional - what it does it that it removes the GUI or better said the visible indicator which makes sense because why should it display something which you might never use?!

<img class="alignnone size-full wp-image-3108" src="https://chefkochblog.files.wordpress.com/2018/02/maxresdefault4.jpg" alt="Firefox 60 nightly" width="1280" height="720" />

<!--more-->

<h2>What it really does</h2>

The integration of Sync is still there but loading about:config?filter=identity.fxaccounts.enabled and changing the value to false disables the visible indicator within the Options Menu and on the very right side on the top of Firefox. This is however only a gimmick change and not really useful especially if you really use Firefox Sync, it's moreover designed in case you never use Firefox sync function.

[caption id="attachment_3109" align="alignnone" width="799"]<img class="alignnone size-full wp-image-3109" src="https://chefkochblog.files.wordpress.com/2018/02/firefox-disable-sync-identity-fxaccounts-enabled.png" alt="firefox-disable-sync-identity.fxaccounts.enabled" width="799" height="233" /> Once you have made the about:config change Firefox Sync is no longer visible in the browser UI and in the options and sync functionality is 'hidden' as long you do not switch it back to true.[/caption]

<h2>Hiding options is a bad idea</h2>

Why is this option a bad idea? Because you can be compromised, imagine that an attacker would setup a faked sync account and removes the Sync GUI, what then? Of course, it's a theoretical scenario right now but it is possible. The normal user will never check if there is network background traffic caused by Firefox Sync mechanism because this requires time, another program and he must be aware that there might be something going on or simply have a huge interest in security to figure this out.

Besides, the entire about:config tweaks are designed to unhide something to improve somewhat the security aspect because there no integrated toggles have given via the GUI, so why want someone really do this? It's not really annoying.

<h2>Final Words</h2>

Again a wrong spread word from several bigger pages that Sync is disabled, this is definitely not true, just the options are hidden, you still could bypass this if you setup Firefox Sync directly manually via about:config or with your user.js file. It just hides the Sync Options in the GUI and that's it.

Does this deserves a mention? No, because it's pointless and gimmick, even if you never use Sync I don't see how this can bother you, Chrome's fugly Login button is a lot of more annoying than this, Mozilla must run out of ideas if they waste their time with this and it yet again only shows that they waste their develop power for the wrong ideas.
